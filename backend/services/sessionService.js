import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import createUserModel from '../models/User.js';
import createUser1Model from '../models/User1.js';
import createSessionModel from '../models/Session.js';
import { normalizeMobileNumber } from '../utils/helpers.js';

class SessionService {
  constructor(conn) {
    this.User = createUserModel(conn);
    this.User1 = createUser1Model(conn);
    this.Session = createSessionModel(conn);
  }

  // Generate a secure session token
  generateSessionToken() {
    return crypto.randomBytes(32).toString('hex');
  }

  // Create a new session for a user
  async createSession(userId, mobile, signupStep = 0, signupCompleted = false) {
    try {
      const token = this.generateSessionToken();
      const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days

      const session = new this.Session({
        userId,
        mobile: normalizeMobileNumber(mobile),
        token,
        signupStep,
        signupCompleted,
        expiresAt
      });

      await session.save();
      return session;
    } catch (error) {
      console.error('Error creating session:', error);
      throw error;
    }
  }

  // Validate session token
  async validateSession(token) {
    try {
      const session = await this.Session.findOne({ 
        token, 
        isActive: true,
        expiresAt: { $gt: new Date() }
      });

      if (!session) {
        return null;
      }

      // Update last activity
      session.lastActivity = new Date();
      await session.save();

      return session;
    } catch (error) {
      console.error('Error validating session:', error);
      return null;
    }
  }

  // Get user signup progress
  async getUserSignupProgress(mobile) {
    try {
      const normalizedMobile = normalizeMobileNumber(mobile);
      
      // Check User1 model for signup progress
      const user1 = await this.User1.findOne({ mobile: normalizedMobile });
      
      if (user1) {
        return {
          signupStep: user1.signupStep || 0,
          signupCompleted: user1.signupCompleted || false,
          hasUser1: true
        };
      }

      // Check if user exists in User model but no User1 record
      // For login users (not signup users), they should be considered as completed
      const user = await this.User.findOne({ mobile: normalizedMobile });
      if (user) {
        return {
          signupStep: 3, // Mark as completed step
          signupCompleted: true, // Consider login users as completed
          hasUser1: false,
          isLoginUser: true // Flag to indicate this is a login user
        };
      }

      return null;
    } catch (error) {
      console.error('Error getting user signup progress:', error);
      return null;
    }
  }

  // Update session signup progress
  async updateSessionSignupProgress(token, signupStep, signupCompleted = false) {
    try {
      const session = await this.Session.findOne({ token, isActive: true });
      if (session) {
        session.signupStep = signupStep;
        session.signupCompleted = signupCompleted;
        session.lastActivity = new Date();
        await session.save();
      }
      return session;
    } catch (error) {
      console.error('Error updating session signup progress:', error);
      throw error;
    }
  }

  // Invalidate session (logout)
  async invalidateSession(token) {
    try {
      const session = await this.Session.findOne({ token });
      if (session) {
        session.isActive = false;
        await session.save();
      }
      return true;
    } catch (error) {
      console.error('Error invalidating session:', error);
      return false;
    }
  }

  // Get active session by mobile number
  async getActiveSessionByMobile(mobile) {
    try {
      const normalizedMobile = normalizeMobileNumber(mobile);
      return await this.Session.findOne({
        mobile: normalizedMobile,
        isActive: true,
        expiresAt: { $gt: new Date() }
      });
    } catch (error) {
      console.error('Error getting active session by mobile:', error);
      return null;
    }
  }

  // Clean up expired sessions
  async cleanupExpiredSessions() {
    try {
      const result = await this.Session.updateMany(
        { expiresAt: { $lt: new Date() } },
        { isActive: false }
      );
      return result;
    } catch (error) {
      console.error('Error cleaning up expired sessions:', error);
      return null;
    }
  }
}

export default SessionService; 