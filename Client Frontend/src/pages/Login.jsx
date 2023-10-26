// import React from "react";
// import {
//   getAuth,
//   signInWithPhoneNumber,
//   RecaptchaVerifier,
// } from "firebase/auth";
// import { useState } from "react";
// // import React, { useState } from "react";
// // // import Style from "../Auth/login.module.css";
// // import bgimg from "../Asset/Img/back.jpg";
// import { BiSolidPhoneCall } from "react-icons/bi";
// import { BsFillShieldLockFill } from "react-icons/bs";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import OtpInput from "react-otp-input";
// import { auth } from "../firebase.config";
// // import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { Toaster, toast } from "react-hot-toast";

// const Login = () => {
//   const [otp, setOtp] = useState("");
//   const [ph, setPh] = useState("");
//   const [showOtp, setShowOtp] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [user, setUser] = useState(false);

//     function onCaptchaVerify() {
//     if (!window.RecaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         auth,
//         "recaptcha-container",
//         {
//           size: "normal",
//           callback: (response) => {
//             onSignup();
//           },
//           "expired-callback": () => {},
//         }
//       );
//     }
//   }

//     function onSignup(event) {
//     event.preventDefault();
//     setLoading(true);
//     onCaptchaVerify();
//     const appVerifier = window.recaptchaVerifier;
//     const phoneNumber = "+" + ph;

//     signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//       .then((confirmationResult) => {
//         window.confirmationResult = confirmationResult;
//         setLoading(false);
//         setShowOtp(true);
//         toast.success("OTP Sended Sucessfully");
//       })
//       .catch((error) => {
//         setLoading(false);
//         toast.error(error.message);
//       });
//   }

//     function onOtpverify() {
//     window.confirmationResult
//       .confirm(otp)
//       .then(async (result) => {
//         // User signed in successfully.
//         const user = result.user;
//         setUser(user);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error.message);
//         toast.error(error.message);
//       });
//   }
//   return (
// <div className="flex">
//   <div className="w-[55vw] h-[100vh] bg-black"></div>
//   <div className="w-[45vw] h-[100vh] flex items-center justify-center bg-black/60">
//     <div className=" w-[30rem] h-[30rem] flex flex-col">
//       <h1 className="text-3xl">Login</h1>
//       <div className="flex flex-col gap-5">
//         <div>
//           <h1 className="mt-10  text-xl">UserName</h1>
//           <input
//             type="text"
//             placeholder="JohnDoe"
//             className="block w-96 h-14 px-4 py-2  text-gray-700  bg-transparent border
//           border-x-0 border-t-0  focus:outline-none "
//           />
//         </div>

//         <div>
//           <h1 className="mt-10 text-xl">Phone-no</h1>
//           <input
//             type="text"
//             placeholder="xxx-xxx-xxxx"
//             className="block w-96 h-14 px-4 py-2  text-gray-700  bg-transparent border
//           border-x-0 border-t-0  focus:outline-none "
//           />
//            <PhoneInput
//               country={"in"}
//               value={ph}
//               onChange={setPh}
//             ></PhoneInput>
//         </div>
//         <div>
//           <button
//             onClick={onSignup}
//             className="bg-blue-500 text-white w-48 h-14 rounded-md focus:outline-none"
//           >
//             {loading && (
//               <span
//                 className="spinner-border spinner-border-sm"
//                 style={{ marginRight: "10px" }}
//               ></span>
//             )}
//             Send OTP
//           </button>
//           <div id="recaptcha-container" className="mt-6"></div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
// import Style from "../Auth/login.module.css";
// import bgimg from "../Asset/Img/back.jpg";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsFillShieldLockFill } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "react-otp-input";
import { auth } from "../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
const Login = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(false);

  function onCaptchaVerify() {
    if (!window.RecaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "normal",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        }
      );
    }
  }

  function onSignup(event) {
    event.preventDefault();
    setLoading(true);
    onCaptchaVerify();
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = "+" + ph;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOtp(true);
        toast.success("OTP Sended Sucessfully");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  }

  function onOtpverify() {
    window.confirmationResult
      .confirm(otp)
      .then(async (result) => {
        // User signed in successfully.
        const user = result.user;
        setUser(user);
        console.log(user.uid);
        const usermain = user;
        await axios
          .post("http://localhost:3000/api/book/login", { usermain })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });

        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  }

  return (
    <div className={`d-flex justify-content-center `}>
      <Toaster toastOptions={{ duration: 4000 }} />
      {/* <img src={bgimg} alt="bgimg" className={` ${Style.loginimg}`} /> */}
      {!user ? (
        <div className={`  absolute  `}>
          {/* <div className="signuppage mt-5 bg-dark text-white p-5 "> */}
          {showOtp ? (
            <div className="optvarificationcontent">
              <span className="d-flex justify-content-center">
                <BsFillShieldLockFill size={40} />
              </span>
              <h6 className="text-center mt-3">Enter Your OTP </h6>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                shouldAutoFocus
                renderInput={(props) => (
                  <input
                    {...props}
                    style={{
                      width: "30px",
                      marginRight: "12px",
                    }}
                  />
                )}
              ></OtpInput>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-primary mt-3 w-75 "
                  onClick={onOtpverify}
                >
                  {loading && (
                    <span
                      className="spinner-border spinner-border-sm"
                      style={{ marginRight: "10px" }}
                    ></span>
                  )}
                  <span> Verify OTP</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex">
              <div className="w-[55vw] h-[100vh] bg-black">
                {/* <h1>dsjhjkdshjkfdshkj</h1> */}
              </div>
              <div className="w-[45vw] h-[100vh] flex items-center justify-center bg-black/60">
                <div className=" w-[30rem] h-[30rem] flex flex-col">
                  <h1 className="text-3xl">Login</h1>
                  <div className="flex flex-col gap-5">
                    <div>
                      <h1 className="mt-10  text-xl">UserName</h1>
                      <input
                        type="text"
                        placeholder="JohnDoe"
                        className="block w-96 h-14 px-4 py-2  text-gray-700  bg-transparent border
              border-x-0 border-t-0  focus:outline-none "
                      />
                    </div>

                    <div>
                      <h1 className="mt-10 text-xl">Phone-no</h1>
                      <input
                        type="text"
                        placeholder="email"
                        className="block w-96 h-14 px-4 py-2  text-gray-700  bg-transparent border
              border-x-0 border-t-0  focus:outline-none "
                      />
                      <PhoneInput
                        className="w-96"
                        inputStyle={{ color: "green" }}
                        country={"in"}
                        value={ph}
                        onChange={setPh}
                      ></PhoneInput>
                    </div>
                    <div>
                      <button
                        onClick={onSignup}
                        className="bg-blue-500 text-white w-48 h-14 rounded-md focus:outline-none"
                      >
                        {loading && (
                          <span
                            className="spinner-border spinner-border-sm"
                            style={{ marginRight: "10px" }}
                          ></span>
                        )}
                        Send OTP
                      </button>
                      <div id="recaptcha-container" className="mt-6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* </div> */}
        </div>
      ) : (
        <div className=" row position-absolute  text-white p-5">
          <p style={{ marginTop: "70%" }}>Login Sucessfully</p>
        </div>
      )}
    </div>
  );
};

export default Login;
