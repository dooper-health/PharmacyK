# Firebase OTP System with reCAPTCHA Enterprise Setup Guide

This guide will help you set up a complete Firebase OTP system with reCAPTCHA Enterprise for your pharmacy application.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Firebase Project Setup](#firebase-project-setup)
3. [reCAPTCHA Enterprise Setup](#recaptcha-enterprise-setup)
4. [Backend Configuration](#backend-configuration)
5. [Frontend Configuration](#frontend-configuration)
6. [Environment Variables](#environment-variables)
7. [Usage Examples](#usage-examples)
8. [Testing](#testing)
9. [Troubleshooting](#troubleshooting)

## Prerequisites

- Node.js (v16 or higher)
- Firebase project
- Google Cloud project with billing enabled
- reCAPTCHA Enterprise API enabled

## Firebase Project Setup

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: `dooper-india`
4. Enable Google Analytics (optional)
5. Click "Create project"

### 2. Enable Authentication
1. In Firebase Console, go to "Authentication"
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Phone" provider
5. Add test phone numbers if needed

### 3. Get Firebase Config
1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Add app" → Web app
4. Register app and copy the config

### 4. Create Service Account
1. Go to Project Settings → Service accounts
2. Click "Generate new private key"
3. Download the JSON file
4. Keep this file secure - it contains sensitive credentials

## reCAPTCHA Enterprise Setup

### 1. Enable reCAPTCHA Enterprise API
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your Firebase project
3. Go to "APIs & Services" → "Library"
4. Search for "reCAPTCHA Enterprise API"
5. Click "Enable"

### 2. Create reCAPTCHA Site Key
1. Go to [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "+" to create a new site
3. Choose "reCAPTCHA v3"
4. Add your domain(s)
5. Copy the Site Key and Secret Key

### 3. Configure reCAPTCHA Enterprise
1. In Google Cloud Console, go to "Security" → "reCAPTCHA Enterprise"
2. Create a new key
3. Configure the key for your domain
4. Note the API key

## Backend Configuration

### 1. Install Dependencies
```bash
cd backend
npm install firebase-admin cookie-parser
```

### 2. Environment Variables
Create a `.env` file in the backend directory:

```env
# Firebase Configuration
FIREBASE_PROJECT_ID=dooper-india
FIREBASE_PRIVATE_KEY_ID=your_private_key_id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@dooper-india.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=your_client_id
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
FIREBASE_CLIENT_X509_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xxxxx%40dooper-india.iam.gserviceaccount.com

# reCAPTCHA Configuration
RECAPTCHA_SITE_KEY=6LdR0HorAAAAAJwUoJjTng-nGA4MkjgrDuCkocui
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
RECAPTCHA_ENTERPRISE_PROJECT_ID=your_recaptcha_enterprise_project_id
RECAPTCHA_ENTERPRISE_API_KEY=your_recaptcha_enterprise_api_key

# Phone Auth Configuration
DEFAULT_COUNTRY=IN
DEFAULT_NATIONAL_NUMBER=+91
TEST_PHONE_NUMBERS=+1234567890,+0987654321

# Environment
NODE_ENV=development
```

### 3. Update Firebase Service
The Firebase service is already configured in `backend/services/firebaseOtpService.js`.

### 4. Routes Configuration
Routes are already set up in `backend/routes/firebaseOtpRoutes.js` and integrated into `app.js`.

## Frontend Configuration

### 1. Install Dependencies
```bash
cd frontend
npm install firebase react-google-recaptcha
```

### 2. Firebase Configuration
Update `frontend/src/utils/firebase.js` with your Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "dooper-india.firebaseapp.com",
  projectId: "dooper-india",
  storageBucket: "dooper-india.firebasestorage.app",
  messagingSenderId: "1098133483384",
  appId: "1:1098133483384:web:47979686dc86a07458a28d",
  measurementId: "G-WEGS9VTM35"
};
```

### 3. reCAPTCHA Configuration
Update the reCAPTCHA site key in `frontend/src/utils/firebase.js`:

```javascript
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('your_recaptcha_site_key'),
  isTokenAutoRefreshEnabled: true
});
```

## Usage Examples

### 1. Basic OTP Component Usage
```jsx
import EnhancedFirebaseOtpCard from './components/EnhancedFirebaseOtpCard';

function App() {
  return (
    <EnhancedFirebaseOtpCard
      bookingId="booking123"
      phoneNumber="+919876543210"
      serviceType="medicine"
      onSuccess={(user) => console.log('OTP verified:', user)}
      onError={(error) => console.error('OTP error:', error)}
    />
  );
}
```

### 2. API Endpoints

#### Initialize OTP Verification
```javascript
POST /api/firebase-otp/initiate
{
  "bookingId": "booking123",
  "phoneNumber": "+919876543210"
}
```

#### Verify OTP
```javascript
POST /api/firebase-otp/verify
{
  "bookingId": "booking123",
  "idToken": "firebase_id_token"
}
```

#### Get Verification Status
```javascript
GET /api/firebase-otp/status/booking123
```

#### Complete Service
```javascript
POST /api/firebase-otp/complete/booking123
```

### 3. Backend Integration
```javascript
import { verifySession } from '../controllers/firebaseOtpController.js';

// Protected route example
app.get('/api/protected-route', verifySession, (req, res) => {
  // req.user contains the verified Firebase user
  res.json({ user: req.user });
});
```

## Testing

### 1. Test Phone Numbers
Add test phone numbers in Firebase Console:
1. Go to Authentication → Sign-in method → Phone
2. Add test phone numbers
3. Use these numbers for testing OTP functionality

### 2. Test reCAPTCHA
1. Use test keys for development
2. Verify reCAPTCHA is working in browser console
3. Check for any console errors

### 3. API Testing
Use tools like Postman or curl to test the API endpoints:

```bash
# Test OTP initiation
curl -X POST http://localhost:5000/api/firebase-otp/initiate \
  -H "Content-Type: application/json" \
  -d '{"bookingId":"test123","phoneNumber":"+919876543210"}'
```

## Troubleshooting

### Common Issues

#### 1. Firebase Admin SDK Initialization Error
**Error**: `Firebase service account configuration is incomplete`
**Solution**: Check all environment variables are set correctly

#### 2. reCAPTCHA Not Loading
**Error**: `Failed to initialize reCAPTCHA`
**Solution**: 
- Verify site key is correct
- Check domain is added to reCAPTCHA settings
- Ensure reCAPTCHA Enterprise API is enabled

#### 3. Phone Number Format Error
**Error**: `Invalid phone number format`
**Solution**: Ensure phone numbers include country code (e.g., +91 for India)

#### 4. OTP Verification Failed
**Error**: `Invalid or expired token`
**Solution**:
- Check if OTP was sent successfully
- Verify phone number matches
- Ensure Firebase project is configured correctly

### Debug Mode
Enable debug logging by setting:
```env
DEBUG=true
```

### Security Best Practices

1. **Never commit service account keys** to version control
2. **Use environment variables** for all sensitive data
3. **Enable Firebase App Check** in production
4. **Set up proper CORS** configuration
5. **Use HTTPS** in production
6. **Implement rate limiting** for OTP requests
7. **Monitor Firebase usage** and costs

### Production Checklist

- [ ] Firebase project configured
- [ ] reCAPTCHA Enterprise enabled
- [ ] Service account key secured
- [ ] Environment variables set
- [ ] HTTPS enabled
- [ ] CORS configured
- [ ] Rate limiting implemented
- [ ] Error handling tested
- [ ] Monitoring set up

## Support

For issues related to:
- **Firebase**: Check [Firebase Documentation](https://firebase.google.com/docs)
- **reCAPTCHA**: Check [reCAPTCHA Documentation](https://developers.google.com/recaptcha)
- **This Implementation**: Check the code comments and error messages

## License

This implementation is part of the Dooper pharmacy application. 