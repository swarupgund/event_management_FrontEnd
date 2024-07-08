import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   if (isLogin) {
  //     // Handle login
  //     try {
  //       const response = await axios.post("http://localhost:8080/api/login", {
  //         userEmail: email,
  //         userPassword: password,
  //       });
  //       console.log(response.data);
  //       navigate("/Home");
  //     } catch (error) {
  //       console.log("Login failed:", error);
  //     }
  //   } else {
  //     // Handle signup
  //     if (password !== confirmPassword) {
  //       alert("Passwords do not match!");
  //       return;
  //     }

  //     try {
  //       const response = await axios.post(
  //         "http://localhost:8080/api/register",
  //         {
  //           userName: name,
  //           userPhone: phoneNumber,
  //           userEmail: email,
  //           userPassword: password,
  //         }
  //       );
  //       console.log(response.data);
  //       navigate("/Home");
  //     } catch (error) {
  //       console.log("Sign up failed:", error);
  //     }
  //   }
  // };

  // return (
  //   <div className="flex justify-center" id="SignUp">
  //     <div className="w-full max-w-md mt-4">
  //       <div className="bg-white shadow-md rounded px-8 py-6">
  //         <h2 className="text-center mb-4 text-xl font-semibold">
  //           {isLogin ? "Login" : "Sign Up"}
  //         </h2>
  //         <form onSubmit={handleFormSubmit}>
  //           {!isLogin && (
  //             <>
  //               <div className="mb-4">
  //                 <label
  //                   htmlFor="name"
  //                   className="block text-gray-700 text-sm font-bold mb-2"
  //                 >
  //                   Name
  //                 </label>
  //                 <input
  //                   type="text"
  //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //                   id="name"
  //                   value={name}
  //                   onChange={(e) => setName(e.target.value)}
  //                   required
  //                 />
  //               </div>
  //               <div className="mb-4">
  //                 <label
  //                   htmlFor="phoneNumber"
  //                   className="block text-gray-700 text-sm font-bold mb-2"
  //                 >
  //                   Phone Number
  //                 </label>
  //                 <input
  //                   type="text"
  //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //                   id="phoneNumber"
  //                   value={phoneNumber}
  //                   onChange={(e) => setPhoneNumber(e.target.value)}
  //                   required
  //                 />
  //               </div>
  //               <div className="mb-4">
  //                 <label
  //                   htmlFor="email"
  //                   className="block text-gray-700 text-sm font-bold mb-2"
  //                 >
  //                   Email
  //                 </label>
  //                 <input
  //                   type="email"
  //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //                   id="email"
  //                   value={email}
  //                   onChange={(e) => setEmail(e.target.value)}
  //                   required
  //                 />
  //               </div>
  //             </>
  //           )}
  //           {isLogin && (
  //             <div className="mb-4">
  //               <label
  //                 htmlFor="email"
  //                 className="block text-gray-700 text-sm font-bold mb-2"
  //               >
  //                 Email
  //               </label>
  //               <input
  //                 type="email"
  //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //                 id="email"
  //                 value={email}
  //                 onChange={(e) => setEmail(e.target.value)}
  //                 required
  //               />
  //             </div>
  //           )}
  //           <div className="mb-6">
  //             <label
  //               htmlFor="password"
  //               className="block text-gray-700 text-sm font-bold mb-2"
  //             >
  //               Password
  //             </label>
  //             <input
  //               type="password"
  //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
  //               id="password"
  //               value={password}
  //               onChange={(e) => setPassword(e.target.value)}
  //               required
  //             />
  //           </div>
  //           {!isLogin && (
  //             <div className="mb-6">
  //               <label
  //                 htmlFor="confirmPassword"
  //                 className="block text-gray-700 text-sm font-bold mb-2"
  //               >
  //                 Confirm Password
  //               </label>
  //               <input
  //                 type="password"
  //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
  //                 id="confirmPassword"
  //                 value={confirmPassword}
  //                 onChange={(e) => setConfirmPassword(e.target.value)}
  //                 required
  //               />
  //             </div>
  //           )}
  //           <button
  //             type="submit"
  //             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  //           >
  //             {isLogin ? "Login" : "Sign Up"}
  //           </button>
  //           <button
  //             type="button"
  //             className="text-blue-500 hover:text-blue-700 font-bold py-2 px-4 mt-2 block w-full text-center"
  //             onClick={() => setIsLogin(!isLogin)}
  //           >
  //             {isLogin ? "Switch to Sign Up" : "Switch to Login"}
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>

  //new
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      try {
        const response = await axios.post("http://localhost:8080/api/login", {
          userEmail: email,
          userPassword: password,
        });
        console.log(response.data);
        navigate("/Home");
        toast.success("Login successful");
      } catch (error) {
        console.log("Login failed:", error);
        toast.error("User is not registered");
      }
    } else {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      try {
        const response = await axios.post(
          "http://localhost:8080/api/register",
          {
            userName: name,
            userPhone: phoneNumber,
            userEmail: email,
            userPassword: password,
          }
        );
        console.log(response.data);
        navigate("/Home");
        toast.success("Sign up successful");
      } catch (error) {
        console.log("Sign up failed:", error);
        toast.error("Sign up failed");
      }
    }
  };

  return (
    <div className="flex justify-center" id="SignUp">
      <div className="w-full max-w-md mt-4">
        <div className="bg-white shadow-md rounded px-8 py-6">
          <h2 className="text-center mb-4 text-xl font-semibold">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <form onSubmit={handleFormSubmit}>
            {!isLogin && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </>
            )}
            {isLogin && (
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {!isLogin && (
              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            )}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
            <button
              type="button"
              className="text-blue-500 hover:text-blue-700 font-bold py-2 px-4 mt-2 block w-full text-center"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Switch to Sign Up" : "Switch to Login"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AuthForm;
