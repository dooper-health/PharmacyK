// import { initializeApp } from "firebase/app";
// import { getAuth  } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDS2N6cma7iDmbOMT9aNxWNllczS43Kwb0",
//   authDomain: "login-auth-20380.firebaseapp.com",
//   projectId: "login-auth-20380",
//   storageBucket: "login-auth-20380.appspot.com",
//   messagingSenderId: "832583747735",
//   appId: "1:832583747735:web:4595f734d78950ba7001d2",
//   measurementId: "G-JMHT606HHG"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export default app;



import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDS2N6cma7iDmbOMT9aNxWNllczS43Kwb0",
  authDomain: "login-auth-20380.firebaseapp.com",
  projectId: "login-auth-20380",
  storageBucket: "login-auth-20380.appspot.com",
  messagingSenderId: "832583747735",
  appId: "1:832583747735:web:4595f734d78950ba7001d2",
  measurementId: "G-JMHT606HHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;





