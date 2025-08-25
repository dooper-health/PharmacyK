import express from 'express';
import SessionService from '../services/sessionService.js';
import { sessionAuth, optionalSessionAuth } from '../middlewares/sessionMiddleware.js';
import { normalizeMobileNumber } from '../utils/helpers.js';

const router = express.Router();

// Create session after OTP verification
router.post('/create', async (req, res) => {
  try {
    const { mobile, userId } = req.body;
    
    if (!mobile || !userId) {
      return res.status(400).json({ message: 'Mobile number and user ID are required' });
    }

    const sessionService = new SessionService(req.conn1);
    
    // Check if user already has an active session
    const existingSession = await sessionService.getActiveSessionByMobile(mobile);
    if (existingSession) {
      // Return existing session
      return res.status(200).json({
        message: 'Session already exists',
        sessionToken: existingSession.token,
        signupStep: existingSession.signupStep,
        signupCompleted: existingSession.signupCompleted
      });
    }

    // Get user signup progress
    const progress = await sessionService.getUserSignupProgress(mobile);
    
    // Create new session
    const session = await sessionService.createSession(
      userId,
      mobile,
      progress?.signupStep || 0,
      progress?.signupCompleted || false
    );

    res.status(201).json({
      message: 'Session created successfully',
      sessionToken: session.token,
      signupStep: session.signupStep,
      signupCompleted: session.signupCompleted
    });
  } catch (error) {
    console.error('Error creating session:', error);
    res.status(500).json({ message: 'Error creating session', error: error.message });
  }
});

// Validate session and get user info
router.get('/validate', sessionAuth, async (req, res) => {
  try {
    const sessionService = new SessionService(req.conn1);
    const progress = await sessionService.getUserSignupProgress(req.mobile);
    
    res.status(200).json({
      message: 'Session is valid',
      mobile: req.mobile,
      signupStep: req.signupStep,
      signupCompleted: req.signupCompleted,
      signupProgress: progress
    });
  } catch (error) {
    console.error('Error validating session:', error);
    res.status(500).json({ message: 'Error validating session', error: error.message });
  }
});

// Get signup progress for a mobile number
router.post('/signup-progress', async (req, res) => {
  try {
    const { mobile } = req.body;
    
    if (!mobile) {
      return res.status(400).json({ message: 'Mobile number is required' });
    }

    const sessionService = new SessionService(req.conn1);
    const progress = await sessionService.getUserSignupProgress(mobile);
    
    if (!progress) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'Signup progress retrieved',
      signupProgress: progress
    });
  } catch (error) {
    console.error('Error getting signup progress:', error);
    res.status(500).json({ message: 'Error getting signup progress', error: error.message });
  }
  
});

// Update session signup progress
router.put('/update-progress', sessionAuth, async (req, res) => {
  try {
    const { signupStep, signupCompleted } = req.body;
    
    if (signupStep === undefined) {
      return res.status(400).json({ message: 'Signup step is required' });
    }

    const sessionService = new SessionService(req.conn1);
    const session = await sessionService.updateSessionSignupProgress(
      req.session.token,
      signupStep,
      signupCompleted || false
    );

    res.status(200).json({
      message: 'Session progress updated',
      signupStep: session.signupStep,
      signupCompleted: session.signupCompleted
    });
  } catch (error) {
    console.error('Error updating session progress:', error);
    res.status(500).json({ message: 'Error updating session progress', error: error.message });
  }
});

// Logout - invalidate session
router.post('/logout', sessionAuth, async (req, res) => {
  try {
    const sessionService = new SessionService(req.conn1);
    await sessionService.invalidateSession(req.session.token);

    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Error logging out:', error);
    res.status(500).json({ message: 'Error logging out', error: error.message });
  }
});

// Check if user has active session (for redirect logic)
router.post('/check-active-session', async (req, res) => {
  try {
    const { mobile } = req.body;
    
    if (!mobile) {
      return res.status(400).json({ message: 'Mobile number is required' });
    }

    const sessionService = new SessionService(req.conn1);
    const session = await sessionService.getActiveSessionByMobile(mobile);
    
    if (session) {
      const progress = await sessionService.getUserSignupProgress(mobile);
      
      res.status(200).json({
        hasActiveSession: true,
        sessionToken: session.token,
        signupStep: session.signupStep,
        signupCompleted: session.signupCompleted,
        signupProgress: progress
      });
    } else {
      res.status(200).json({
        hasActiveSession: false
      });
    }
  } catch (error) {
    console.error('Error checking active session:', error);
    res.status(500).json({ message: 'Error checking active session', error: error.message });
  }
});

export default router; 