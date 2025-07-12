import { auth, signInWithPhoneNumber, createRecaptchaVerifier } from '../utils/firebase.js';

class FirebaseOtpService {
  constructor() {
    this.confirmationResult = null;
    this.recaptchaVerifier = null;
  }

  // Initialize reCAPTCHA verifier
  initializeRecaptcha(containerId) {
    try {
      this.recaptchaVerifier = createRecaptchaVerifier(containerId);
      return this.recaptchaVerifier;
    } catch (error) {
      console.error('Error initializing reCAPTCHA:', error);
      throw error;
    }
  }

  // Send OTP to phone number
  async sendOtp(phoneNumber, containerId = 'recaptcha-container') {
    try {
      // Initialize reCAPTCHA if not already done
      if (!this.recaptchaVerifier) {
        this.initializeRecaptcha(containerId);
      }

      // Render reCAPTCHA
      await this.recaptchaVerifier.render();

      // Send OTP using Firebase Phone Auth
      this.confirmationResult = await signInWithPhoneNumber(
        auth, 
        phoneNumber, 
        this.recaptchaVerifier
      );

      console.log('OTP sent successfully to:', phoneNumber);
      return {
        success: true,
        message: 'OTP sent successfully',
        phoneNumber,
        confirmationResult: this.confirmationResult
      };

    } catch (error) {
      console.error('Error sending OTP:', error);
      
      // Handle specific Firebase errors
      let errorMessage = 'Failed to send OTP';
      
      switch (error.code) {
        case 'auth/invalid-phone-number':
          errorMessage = 'Invalid phone number format';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many requests. Please try again later';
          break;
        case 'auth/quota-exceeded':
          errorMessage = 'SMS quota exceeded. Please try again later';
          break;
        case 'auth/captcha-check-failed':
          errorMessage = 'reCAPTCHA verification failed. Please try again';
          break;
        default:
          errorMessage = error.message || 'Failed to send OTP';
      }

      return {
        success: false,
        message: errorMessage,
        error: error.code
      };
    }
  }

  // Verify OTP
  async verifyOtp(otp) {
    try {
      if (!this.confirmationResult) {
        throw new Error('No OTP confirmation result found. Please send OTP first.');
      }

      // Confirm the OTP
      const result = await this.confirmationResult.confirm(otp);
      
      if (result.user) {
        console.log('OTP verified successfully');
        return {
          success: true,
          message: 'OTP verified successfully',
          user: result.user
        };
      } else {
        throw new Error('OTP verification failed');
      }

    } catch (error) {
      console.error('Error verifying OTP:', error);
      
      let errorMessage = 'Failed to verify OTP';
      
      switch (error.code) {
        case 'auth/invalid-verification-code':
          errorMessage = 'Invalid OTP code';
          break;
        case 'auth/code-expired':
          errorMessage = 'OTP code has expired. Please request a new one';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many attempts. Please try again later';
          break;
        default:
          errorMessage = error.message || 'Failed to verify OTP';
      }

      return {
        success: false,
        message: errorMessage,
        error: error.code
      };
    }
  }

  // Resend OTP
  async resendOtp(phoneNumber, containerId = 'recaptcha-container') {
    try {
      // Clear previous confirmation result
      this.confirmationResult = null;
      
      // Send new OTP
      return await this.sendOtp(phoneNumber, containerId);
      
    } catch (error) {
      console.error('Error resending OTP:', error);
      return {
        success: false,
        message: 'Failed to resend OTP',
        error: error.message
      };
    }
  }

  // Clear reCAPTCHA
  clearRecaptcha() {
    try {
      if (this.recaptchaVerifier) {
        this.recaptchaVerifier.clear();
        this.recaptchaVerifier = null;
      }
      this.confirmationResult = null;
    } catch (error) {
      console.error('Error clearing reCAPTCHA:', error);
    }
  }

  // Get current user
  getCurrentUser() {
    return auth.currentUser;
  }

  // Sign out
  async signOut() {
    try {
      await auth.signOut();
      this.clearRecaptcha();
      return {
        success: true,
        message: 'Signed out successfully'
      };
    } catch (error) {
      console.error('Error signing out:', error);
      return {
        success: false,
        message: 'Failed to sign out',
        error: error.message
      };
    }
  }

  // Listen to auth state changes
  onAuthStateChanged(callback) {
    return auth.onAuthStateChanged(callback);
  }
}

// Create and export a singleton instance
const firebaseOtpService = new FirebaseOtpService();
export default firebaseOtpService; 