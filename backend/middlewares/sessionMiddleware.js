import SessionService from '../services/sessionService.js';

// Session middleware to validate user sessions
export const sessionAuth = async (req, res, next) => {
  try {
    const sessionToken = req.headers['x-session-token'] || req.cookies?.sessionToken;
    
    if (!sessionToken) {
      return res.status(401).json({ 
        message: 'No session token provided',
        requiresAuth: true 
      });
    }

    const sessionService = new SessionService(req.conn1);
    const session = await sessionService.validateSession(sessionToken);
    
    if (!session) {
      return res.status(401).json({ 
        message: 'Invalid or expired session',
        requiresAuth: true 
      });
    }

    // Attach session and user info to request
    req.session = session;
    req.userId = session.userId;
    req.mobile = session.mobile;
    req.signupStep = session.signupStep;
    req.signupCompleted = session.signupCompleted;
    
    next();
  } catch (error) {
    console.error('Session middleware error:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      requiresAuth: true 
    });
  }
};

// Optional session middleware - doesn't fail if no session
export const optionalSessionAuth = async (req, res, next) => {
  try {
    const sessionToken = req.headers['x-session-token'] || req.cookies?.sessionToken;
    
    if (sessionToken) {
      const sessionService = new SessionService(req.conn1);
      const session = await sessionService.validateSession(sessionToken);
      
      if (session) {
        req.session = session;
        req.userId = session.userId;
        req.mobile = session.mobile;
        req.signupStep = session.signupStep;
        req.signupCompleted = session.signupCompleted;
      }
    }
    
    next();
  } catch (error) {
    console.error('Optional session middleware error:', error);
    next();
  }
};

// Check signup progress middleware
export const checkSignupProgress = async (req, res, next) => {
  try {
    const { mobile } = req.body;
    
    if (!mobile) {
      return res.status(400).json({ message: 'Mobile number is required' });
    }

    const sessionService = new SessionService(req.conn1);
    const progress = await sessionService.getUserSignupProgress(mobile);
    
    if (progress) {
      req.signupProgress = progress;
    }
    
    next();
  } catch (error) {
    console.error('Check signup progress middleware error:', error);
    next();
  }
}; 