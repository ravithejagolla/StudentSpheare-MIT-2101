import React, { useState } from "react";

export const Register = () => {

  let token = Boolean(localStorage.getItem("authToken"));
  const [isLogin, setLogin] = useState(token);

  const handleLogin = () => {
    localStorage.setItem("authToken", "bahubali");
    setLogin(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setLogin(false);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white shadow-2xl rounded-xl p-10 text-center w-96 transform transition duration-300 hover:scale-105">
        <h1 className="text-3xl font-extrabold mb-4 text-gray-800">
          {isLogin ? "Welcome Back!" : "Join Us Today!"}
        </h1>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          {isLogin
            ? "You're logged in! Explore the amazing features we have to offer."
            : "Discover the best features by logging into your account now."}
        </p>
        {isLogin ? (
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Log In
          </button>
        )}
        <div className="mt-6">
          <p className="text-gray-500 text-xs">
            By continuing, you agree to our{" "}
            <a
              href="#"
              className="text-blue-500 underline hover:text-blue-600"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-blue-500 underline hover:text-blue-600"
            >
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};
