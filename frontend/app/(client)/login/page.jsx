"use client";
import React, { useState } from "react";
import { Eye, EyeOff, User, Lock, Mountain } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900">
      {/* Animated stone texture background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(120,113,108,0.3)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(168,162,158,0.2)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      {/* Floating stone particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-stone-400 rounded-full opacity-20 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div
            className={`bg-gradient-to-br from-stone-100 to-stone-200 backdrop-blur-lg rounded-2xl shadow-2xl border border-stone-300 p-8 transform transition-all duration-500 ${
              isHovered ? "scale-105 shadow-3xl" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            }}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-stone-600 to-stone-800 rounded-full mb-4 shadow-lg">
                <Mountain className="w-8 h-8 text-stone-100" />
              </div>
              <h1 className="text-3xl font-bold text-stone-800 mb-2">
                Welcome Back
              </h1>
              <p className="text-stone-600">Sign in to your account</p>
            </div>

            <div className="space-y-6">
              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-stone-700 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-500" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white bg-opacity-70 border-2 border-stone-300 rounded-xl focus:border-stone-600 focus:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-20 transition-all duration-300 text-stone-800 placeholder-stone-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-stone-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-500" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-3 bg-white bg-opacity-70 border-2 border-stone-300 rounded-xl focus:border-stone-600 focus:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-20 transition-all duration-300 text-stone-800 placeholder-stone-500"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-500 hover:text-stone-700 transition-colors duration-200"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-stone-600 to-stone-800 text-white font-semibold py-3 px-6 rounded-xl hover:from-stone-700 hover:to-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 focus:ring-offset-stone-100 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
              >
                Sign In
              </button>
            </div>

            {/* Divider */}
            <div className="my-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-stone-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gradient-to-br from-stone-100 to-stone-200 text-stone-600">
                    Or continue with
                  </span>
                </div>
              </div>
            </div>

            {/* Sign Up Link */}
            <p className="mt-6 text-center text-sm text-stone-600">
              Don't have an account?{" "}
              <button className="font-medium text-stone-800 hover:text-stone-900 transition-colors duration-200">
                Sign up here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
