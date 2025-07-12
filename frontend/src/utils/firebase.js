
// src/utils/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyAnyoJkN46aa9NTSirzwPbeAaD3wpEogm0",
  authDomain: "dooper-india.firebaseapp.com",
  projectId: "dooper-india",
  storageBucket: "dooper-india.firebasestorage.app",
  messagingSenderId: "1098133483384",
  appId: "1:1098133483384:web:47979686dc86a07458a28d",
  measurementId: "G-WEGS9VTM35"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize App Check with reCAPTCHA Enterprise
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LdR0HorAAAAAJwUoJjTng-nGA4MkjgrDuCkocui'),
  isTokenAutoRefreshEnabled: true
});

// Get auth instance
const auth = getAuth(app);

// Create reCAPTCHA verifier for phone auth
const createRecaptchaVerifier = (containerId) => {
  return new RecaptchaVerifier(auth, containerId, {
    size: 'invisible',
    callback: () => {
      console.log('reCAPTCHA solved');
    },
    'expired-callback': () => {
      console.log('reCAPTCHA expired');
    }
  });
};

// Export
export { auth, signInWithPhoneNumber, createRecaptchaVerifier };
