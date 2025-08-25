
// import { useEffect, useState, useRef } from "react";
// import { Authenticate, initOTPless, verifyOTP } from "../utils/initOtpless";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; 
// import SecondaryButton from "../temp/SecondaryButton";
// import { useAvailabilityContext } from "../AvailabilityContext"; 

// function LoginForm() {
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [activeSection, setActiveSection] = useState("PHONE");
//   const navigate = useNavigate();
//   const hasNavigated = useRef(false); 
//   const { setMobileNumber: setGlobalMobileNumber } = useAvailabilityContext(); 

//   useEffect(() => {
//     initOTPless(handleUserData);
//   }, []);

//   const handleUserData = async (otplessUser) => {
//     if (hasNavigated.current) return; 

//     const identityValue =
//       otplessUser?.identities?.[0]?.identityValue || "No Identity Found";

//     setGlobalMobileNumber(identityValue); 

//     try {
//       const response = await axios.post("/api/auth/login/checkuserexistance2", {
//         phoneNumber: identityValue,
//       });

//       if (response.data.message === "Login successful") {
//         hasNavigated.current = true; 
//         navigate("/success-login"); 
//       } else {
//         navigate("/signup"); 
//       }
//     } catch (error) {
//       console.error("Error checking user existence:", error);
//       alert("User does not exist please signup.");
//      }

//     localStorage.setItem("otplessUser", JSON.stringify(otplessUser)); 
//   };

//   const switchActiveSection = (e) => {
//     setActiveSection(e.target.value);
//     setPhone("");
//     setEmail("");
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg max-w-md mx-auto">
//       <div className="text-center mb-8">
//         <div className="font-Montserrat text-2xl font-bold leading-10 text-[#1A1C1F]">
//           Welcome Back
//         </div>
//         <div className="text-[#1A1C1F] font-medium text-[14px] mt-1 sm:text-[14px]">
//           Welcome back to{" "}
//           <span className="text-[#E40443] font-semibold">DOOPER</span>, please
//           log in to continue
//         </div>
//       </div>

//       <div className="flex flex-col items-center justify-center w-full space-y-4">
//         <div>
//           <input
//             type="radio"
//             id="mobile"
//             name="section"
//             value="PHONE"
//             checked={activeSection === "PHONE"}
//             onChange={switchActiveSection}
//           />
//           <label htmlFor="mobile" className="ml-2">Mobile</label>
//         </div>

//         {activeSection === "PHONE" && (
//           <div id="mobile-section">
//             <input
//               className="w-full px-4 py-2 border border-gray-300 rounded"
//               id="mobile-input"
//               placeholder="Enter mobile number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             <button
//               onClick={() => {
//                 Authenticate({ channel: "PHONE", phone })
//                   .then((res) => {
//                     if (res.success) {
//                       document.getElementById("mobile-input").disabled = true;
//                     }
//                   })
//                   .catch((error) => {
//                     console.error("Authentication error:", error);
//                   });
//               }}
//               className="w-full py-2 bg-red-600 text-white rounded mt-2"
//             >
//               Proceed
//             </button>
//           </div>
//         )}

//         <div id="otp-section">
//           <input
//             className="w-full px-4 py-2 border border-gray-300 rounded"
//             id="otp-input"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             minLength={6}
//             maxLength={6}
//           />
//           <button
//             onClick={() => {
//               verifyOTP({ channel: activeSection, otp, phone, email })
//                 .then((res) => {
//                   if (res.success) {
//                     document.getElementById("otp-input").disabled = true;
//                     setOtp("Verified");
//                   }
//                 })
//                 .catch((error) => {
//                   console.error("OTP verification error:", error);
//                 });
//             }}
//             className="w-full py-2 bg-red-600 text-white rounded mt-2"
//           >
//             Verify OTP
//           </button>
//         </div>

//         <button
//           onClick={() =>
//             Authenticate({ channel: "OAUTH", channelType: "WHATSAPP" })
//           }
//           // className="w-full py-2 bg-green-600 text-white rounded mt-2"
//         >
//           Authenticate with WhatsApp
//         </button>

//         <div className="flex items-center justify-between mt-4">
//           <hr className="flex-1 bg-[#B8BFC7] h-[1px]" />
//           <span className="text-[#B8BFC7] text-xs">Don't have an account?</span>
//           <hr className="flex-1 bg-[#B8BFC7] h-[1px]" />
//         </div>

//         <SecondaryButton title="Signup" action={() => navigate("/signup")} />

//         <div className="text-center mt-4 text-[#5B6572] text-sm font-normal">
//           Don't have an account? Sign up to access your personalized dashboard
//           and experience our services
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useAuth } from "../context/AuthContext.jsx";
import { useSession } from "../context/SessionContext.jsx";
import SecondaryButton from "../temp/SecondaryButton";

function LoginForm() {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [flag, setFlag] = useState(false);
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { sendOTP, verifyOTP } = useAuth();
  const { checkActiveSession, createSession, getSignupProgress, getRedirectPath } = useSession();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!number) {
      setError("Please enter a valid phone number!");
      setIsLoading(false);
      return;
    }

    try {
      const formattedNumber = number.startsWith("+") ? number : `+${number}`;
      const response = await sendOTP(formattedNumber, "recaptcha-container-login");
      setResult(response);
      setFlag(true);
    } catch (err) {
      console.error("OTP send error:", err);
      setError(err.message || "Failed to send OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!otp) {
      setError("Please enter the OTP");
      setIsLoading(false);
      return;
    }

    try {
      const verificationResult = await verifyOTP(result, otp);
      let phoneNumber;
      if (verificationResult?.user?.phoneNumber) {
        phoneNumber = verificationResult.user.phoneNumber;
      } else {
        phoneNumber = number.startsWith("+") ? number : `+${number}`;
      }

      // Check if user has active session
      const activeSession = await checkActiveSession(phoneNumber);
      if (activeSession) {
        // User has active session, redirect to appropriate page
        const redirectPath = getRedirectPath();
        navigate(redirectPath);
        return;
      }

      // check user existence
      const res = await axios.post("/api/auth/login/checkuserexistance2", {
        phoneNumber,
      });

      if (res.data.message === "Login successful") {
        // Create session for existing user
        if (res.data.user) {
          await createSession(phoneNumber, res.data.user._id);
        }
        
        // Check signup progress and redirect accordingly
        const progress = await getSignupProgress(phoneNumber);
        if (progress && progress.signupCompleted) {
          // User has completed signup, go directly to dashboard
          navigate("/dashboarddark");
        } else if (progress && progress.signupStep > 0) {
          // User has incomplete signup, redirect to appropriate step
          const redirectPath = getRedirectPath();
          navigate(redirectPath);
        } else {
          // New user or user without signup progress, go to success page
          // But first ensure they have a session
          if (res.data.user) {
            await createSession(phoneNumber, res.data.user._id);
          }
          navigate("/success-login", { state: { mobileNumber: phoneNumber } });
        }
      } else {
        navigate("/signup");
      }
    } catch (err) {
      console.error("OTP verify error:", err);
      setError(err.message || "Invalid OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="font-Montserrat text-2xl font-bold leading-10 text-[#1A1C1F]">
          Welcome Back
        </div>
        <div className="text-[#1A1C1F] font-medium text-[14px] mt-1">
          Welcome back to <span className="text-[#E40443] font-semibold">DOOPER</span>, please log in to continue
        </div>
      </div>

      {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}

      {!flag ? (
        <form onSubmit={getOtp}>
          <label htmlFor="mobileNumber" className="text-[#8D98A4] text-sm font-normal">Phone Number</label>
          <PhoneInput
            defaultCountry="IN"
            value={number}
            onChange={setNumber}
            placeholder="Enter Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
          />
          <div id="recaptcha-container-login" className="mt-2" />

          <button
            type="submit"
            className="w-full py-2 bg-red-600 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send OTP"}
          </button>

          <button
            type="button"
            onClick={() => Authenticate({ channel: "OAUTH", channelType: "WHATSAPP" })}
            className="w-full py-2 bg-green-600 text-white rounded mt-2"
          >
            Login with WhatsApp
          </button>

          <div className="flex items-center justify-between mt-4">
            <hr className="flex-1 bg-[#B8BFC7] h-[1px]" />
            <span className="text-[#B8BFC7] text-xs">Don't have an account?</span>
            <hr className="flex-1 bg-[#B8BFC7] h-[1px]" />
          </div>

          <SecondaryButton title="Signup" action={() => navigate("/signup")} />
        </form>
      ) : (
        <form onSubmit={verifyOtp}>
          <label htmlFor="otp" className="text-[#8D98A4] text-sm font-normal">Enter OTP</label>
          <input
            type="text"
            id="otp"
            placeholder="Enter 6-digit OTP"
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded mb-4 mt-1"
            maxLength={6}
          />

          <button
            type="submit"
            className="w-full py-2 bg-red-600 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "Verify OTP"}
          </button>

          <button
            type="button"
            onClick={() => setFlag(false)}
            className="w-full py-2 bg-gray-500 text-white rounded mt-2"
          >
            Back to Phone Number
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
