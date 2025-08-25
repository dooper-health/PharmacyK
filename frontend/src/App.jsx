import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import { AvailabilityProvider, useAvailabilityContext } from './AvailabilityContext';
import { SessionProvider } from './context/SessionContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

import Login from "./pages/Login";
import SignupStep1 from './components/SignupStep1';
import Verify from "./temp/Verify";
import ApiTest from './components/ApiTest';
import SessionTest from './components/SessionTest';
import Successful from "./temp/Successful";
import Successignup from "./temp/SuccessfulSignup";
import ProfileUnderReview from "./temp/ProfileUnderReview";
import LoginForm from "./temp/LoginForm";
import LoginVerify from './temp/LoginVerify';
import Kstep1 from './components/Kstep1';
import Kstep2 from './components/Kstep2';
import Kstep3 from './components/Kstep3';
// import Dashboard from "./components/Dashboard";
import DashboardDark from "./components/DashboardDark";


import BookingCard from "./components/Booking";
import BookingCard2 from './components/Booking2.jsx';

import Incoming from "./components/Incoming.jsx";
import Pending from "./components/Pending.jsx";
import Completed from "./components/Completed.jsx";
import Cancelled from "./components/Cancelled.jsx";

import StartService from "./components/StartService";
import StartService2 from "./components/StartService2";
import Serviceverify from "./components/Serviceverify";
import SuccessCard from "./components/SuccessCard";
import SuccessCard2 from './components/SuccessCard2';
import SuccessCard3 from './components/SuccessCard3';
import SuccessFullpage from "./components/SuccessFullpage";
import SampleCollected from "./components/SampleCollected";
import EndService from "./components/EndService";
import AddReportCard from "./components/AddReportCard";
import AddReportCard2 from "./components/AddReportCard2";
import Downloadreport from "./components/Downlaodreport";
import MyProfile from "./components/MyProfile";
import Notifications from "./components/Notifications";
import EditProfile from "./components/EditProfile";
import Association from "./components/Association";
import Documents from "./components/Documents";
import Bankinfo from "./components/Bankinfo";
import ViewProfile from "./components/ViewProfile";
import Earning from "./components/Earning";
import Transaction from "./components/Transaction";
import Transactioncomplete from "./components/Transactioncomplete";
import Withdrawalcard from "./components/Withdrawalcard";
import Sidebarmobile from "./components/Sidebarmobile.jsx";
import SuccessCard4 from "./components/SuccessCard4.jsx";
import SuccessCard42 from "./components/SuccessCard42.jsx";
import SuccessCardotpstartservice from "./components/SuccessCardotpstartservice.jsx";
import LoginWithOtp from './components/LoginWithOtp';
// import { UserAuthContextProvider } from "./temp/LoginForm.jsx";
// import { UserAuthContextProvider2 } from "./components/SignupStep1.jsx";
// const earntotalmedicine = "api/earningmedicine/total";
// const earnavailablemedicine = "api/earningmedicine/available";
// const earnhistorymedicine = "api/earningmedicine/history";
// const earnwithdrawmedicine = "api/withdrawmedicine/update-status";
// const earntotalvaccine = "api/earningvaccine/total";
// const earnavailablevaccine = "api/earningvaccine/available";
// const earnhistoryvaccine = "api/earningvaccine/history";
// const earnwithdrawvaccine = "api/withdrawvaccine/update-status";

const earnapiEndpointsmedicine = {
  earntotal: "api/earningmedicine/total",
  earnavailable: "api/earningmedicine/available",
  earnhistory: "api/earningmedicine/history",
  earnwithdraw: "api/withdrawmedicine/update-status",
};

const earnapiEndpointsvaccine = {
earntotal: "api/earningvaccine/total",
earnavailable: "api/earningvaccine/available",
earnhistory: "api/earningvaccine/history",
earnwithdraw: "api/withdrawvaccine/update-status"
};

const earnnavigatemedicine = {
  withdrawbutton: "/transactionmedicine",
  historybutton: "/earningmedicine",
}
const earnnavigatevaccine = {
  withdrawbutton: "/transactionvaccine",
  historybutton: "/earningvaccine",
}
const withcardnavigatemedicine = {
  done: "/earningmedicine",
  withdraw: "/withcardmedicine",
}
const withcardnavigatevaccine = {
  done: "/earningvaccine",
  withdraw: "/withcardvaccine",
}

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      children: [
        { path: "/", element:(
           <LoginForm />)
           },
        { path: "signup", element: <SignupStep1 /> },
        { path: "verify", element: <Verify /> },
        { path: "success-login", element: <Successful /> },
        { path: "verify-signup", element: <Verify isSignupVerify={true} /> },
        { path: "success-signup", element: <Successignup /> },
        { path: "profileunderreview", element: <ProfileUnderReview /> },
        { path: "login", element: <LoginForm /> },
        { path: "loginverify", element: <LoginVerify /> },
        { path: "Kstep1", element: <Kstep1 /> },
        { path: "Kstep2", element: <Kstep2 /> },
        { path: "Kstep3", element: <Kstep3 /> },
        { path: "api-test", element: <ApiTest /> },
        { path: "session-test", element: <SessionTest /> },
      ],
    },
    {
      path: "/incoming",
      element: (
        <ProtectedRoute>
          <Incoming />
         </ProtectedRoute>
      ),
    },
    {
      path: "/pending",
      element: (
        <ProtectedRoute>
          <Pending />
        </ProtectedRoute>
      ),
    },
    {
      path: "/completed",
      element: (
        <ProtectedRoute>
          <Completed />
        </ProtectedRoute>
      ),
    },
    {
      path: "/cancelled",
      element: (
        <ProtectedRoute>
          <Cancelled />
        </ProtectedRoute>
      ),
    },
    {
      path: "/dashboarddark",
      element: (
        <ProtectedRoute>
          <DashboardDark />
        </ProtectedRoute>
      ),
    },
    {
      path: "/dashboardbooking",
      element: (
        <ProtectedRoute>
          <BookingCard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/dashboardbooking2",
      element: (
        <ProtectedRoute>
          <BookingCard2 />
        </ProtectedRoute>
      ),
    },

    // {
    //   path: "/incoming",
    //   element: (
    //     <ProtectedRoute>
    //       <Incoming />
    //     </ProtectedRoute>
    //   ),
    // },
    
    {
      path: "/startservicing/:bookingId",
      element: (
        <ProtectedRoute>
          <StartService />
        </ProtectedRoute>
      ),
    },
    {
      path: "/startservicing2/:bookingId",
      element: (
        <ProtectedRoute>
          <StartService2 />
        </ProtectedRoute>
      ),
    },
    {
      path: "/serviceverify/:bookingId",
      element: (
        <ProtectedRoute>
          <Serviceverify />
        </ProtectedRoute>
      ),
    },
    {
      path: "/successcard",
      element: (
        <ProtectedRoute>
          <SuccessCard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/SuccessCard2",
      element: (
        <ProtectedRoute>
          <SuccessCard2 />
        </ProtectedRoute>
      ),
    },
    {
      path: "/SuccessCard3",
      element: (
        <ProtectedRoute>
          <SuccessCard3 />
        </ProtectedRoute>
      ),
    },
    {
      path: "/SuccessCard4/:bookingId",
      element: (
        <ProtectedRoute>
          <SuccessCard4 />
        </ProtectedRoute>
      ),
    }, 
    {
      path: "/SuccessCard42/:bookingId",
      element: (
        <ProtectedRoute>
          <SuccessCard42 />
        </ProtectedRoute>
      ),
    },
    {
      path: "/successcardotp/:bookingId",
      element: (
        <ProtectedRoute>
          <SuccessCardotpstartservice />
        </ProtectedRoute>
      ),
    },
    {
      path: "/successfullpage",
      element: (
        <ProtectedRoute>
          <SuccessFullpage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/samplecollected/:bookingId",
      element: (
        <ProtectedRoute>
          <SampleCollected />
        </ProtectedRoute>
      ),
    },
    {
      path: "/endservice/:bookingId",
      element: (
        <ProtectedRoute>
          <EndService />
        </ProtectedRoute>
      ),
    },
    {
      path: "/addreportcard/:bookingId",
      element: (
        <ProtectedRoute>
          <AddReportCard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/addreportcard2/:bookingId",
      element: (
        <ProtectedRoute>
          <AddReportCard2 />
        </ProtectedRoute>
      ),
    },
    {
      path: "/downloadreport/:bookingId",
      element: (
        <ProtectedRoute>
          <Downloadreport />
        </ProtectedRoute>
      ),
    },
    {
      path: "/myprofile",
      element: (
        <ProtectedRoute>
          <MyProfile />
        </ProtectedRoute>
      ),
    },
    {
      path: "/notifications",
      element: (
        <ProtectedRoute>
          <Notifications />
        </ProtectedRoute>
      ),
    },
    {
      path: "/editprofile",
      element: (
        <ProtectedRoute>
          <EditProfile />
        </ProtectedRoute>
      ),
    },
    {
      path: "/association",
      element: (
        <ProtectedRoute>
          <Association />
        </ProtectedRoute>
      ),
    },
    {
      path: "/document",
      element: (
        <ProtectedRoute>
          <Documents />
        </ProtectedRoute>
      ),
    },
    {
      path: "/bankinfo",
      element: (
        <ProtectedRoute>
          <Bankinfo />
        </ProtectedRoute>
      ),
    },
    {
      path: "/viewprofile",
      element: (
        <ProtectedRoute>
          <ViewProfile />
        </ProtectedRoute>
      ),
    },
    {
      path: "/earningmedicine",
      element: (
        <ProtectedRoute>
          <Earning  earnapi={earnapiEndpointsmedicine} earnnavigate = {earnnavigatemedicine}/>
        </ProtectedRoute>
      ),
    },
    {
      path: "/earningvaccine",
      element: (
        <ProtectedRoute>
          <Earning  earnapi={earnapiEndpointsvaccine} earnnavigate = {earnnavigatevaccine}/>
        </ProtectedRoute>
      ),
    },
    {
      path: "/transactionmedicine",
      element: (
        <ProtectedRoute>
          <Transaction earnapi={earnapiEndpointsmedicine} withcardnavigate={withcardnavigatemedicine}/>
        </ProtectedRoute>
      ),
    },
    {
      path: "/transactionvaccine",
      element: (
        <ProtectedRoute>
          <Transaction earnapi={earnapiEndpointsvaccine} withcardnavigate={withcardnavigatevaccine} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/transactioncompletemedicine",
      element: (
        <ProtectedRoute>
          <Transactioncomplete earnapi={earnapiEndpointsmedicine} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/transactioncompletevaccine",
      element: (
        <ProtectedRoute>
          <Transactioncomplete earnapi={earnapiEndpointsvaccine} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/withcardmedicine",
      element: (
        <ProtectedRoute>
          <Withdrawalcard withcardnavigate={withcardnavigatemedicine}/>
        </ProtectedRoute>
      ),
    },
    {
      path: "/withcardvaccine",
      element: (
        <ProtectedRoute>
          <Withdrawalcard withcardnavigate={withcardnavigatevaccine}/>
        </ProtectedRoute>
      ),
    },
    {
      path: "/login-otp",
      element: <LoginWithOtp />,
    },

    {
      path: "/Sidebarmobile",
      element: (
        <ProtectedRoute>
          <Sidebarmobile />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <SessionProvider>
      <AvailabilityProvider>
        <RouterProvider router={routes} />
      </AvailabilityProvider>
    </SessionProvider>
  );
}

export default App;

