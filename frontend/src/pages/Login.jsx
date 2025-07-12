


// import React from "react";
// import SideBar from "../components/SideBar";

// import { Outlet, useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <div className="flex p-[24px] bg-[#FFFFFF] min-h-screen overflow-hidden sm:ml-5  sm:mt-5 -mt-[30px]">
//         <SideBar />
//         <div className="w-[800px] flex-1 sm:mx-0 -mx-[100px] bg-white top-[24px] left-[616px] justify-between p-[48px]">
           
//         {/* Add login and signup buttons */}
//         <div className="flex flex-col items-center justify-center w-full space-y-4">
//           {/* <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome to Dooper</h1> */}
          
//           {/* <button onClick={ () => { navigate('/login'); }}
//             className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
//           > Login</button>

//           <button onClick={ () => { navigate('/signup'); }}   
//             className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition"
//           >Signup</button> */}

//         </div>

//         <Outlet />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;



// 

import React from "react";
import SideBar from "../components/SideBar";
import dooper from "../assets/dooper.png";
import { Outlet } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex p-[24px] bg-[#FFFFFF] min-h-screen overflow-hidden sm:ml-5  sm:mt-5 -mt-[30px]">
        <SideBar />
        <div className="w-[800px] flex-1 sm:mx-0 -mx-[100px] bg-white top-[24px] left-[616px] justify-between p-[48px]">
          <img
            src={dooper}
            alt="dooper"
            className="mx-auto w-[170px]"
          />
            <Outlet />

         
        </div>
      </div>
    </>
  );
};

export default Login;