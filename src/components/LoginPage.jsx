import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Moon, Sun } from 'lucide-react';

const LoginPage = ({ onLogin, onForgotPassword, darkMode, toggleDarkMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must contain at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onLogin({ email, password });
    }
  };

  return (
    <div className={`min-h-screen flex ${darkMode ? 'dark' : ''}`}>
      {/* Left panel with branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-petronas-primary via-petronas-secondary to-petronas-dark relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('src/img/login_bg.jpg')`
          }}
        ></div>

        \

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full p-16 text-white text-center">
          {/* Petronas SVG Logo */}
          <div className="mb-4">
            <img
              src="src/img/Petronas_Logo.svg"
              alt="Petronas Logo"
              className=" drop-shadow-2xl"
            />
          </div>


          {/* Title */}
          <h1 className="text-4xl font-bold mb-5 drop-shadow-lg">
            Petronas Partner Portal
          </h1>

          {/* Subtitle */}
          <div className="w-24 h-1 bg-white mb-6 opacity-80"></div>

          {/* Description */}
          <p className="text-xl mb-8 leading-relaxed max-w-md opacity-90">
            Welcome! Your gateway to seamless tender management and collaboration.
          </p>

          {/* Additional description */}
          {/* <p className="text-base opacity-75 max-w-lg">
            Access your tender invitations, manage submissions, and stay connected with Petronas procurement opportunities through our secure platform.
          </p> */}


        </div>
      </div>


      {/* Right panel with form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="w-full max-w-md">
          {/* Theme switcher */}
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-petronas-dark" />
              )}
            </button>
          </div>

          {/* Logo */}
<div className="text-center mb-8">
  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-petronas-primary to-petronas-secondary rounded-2xl mb-4">
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  </div>
  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Login</h2>
  <p className="text-gray-600 dark:text-gray-400">Enter your credentials</p>
</div>



          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-11 pr-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all`}
                  placeholder="your.email@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full pl-11 pr-12 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Remember me and forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-petronas-primary border-gray-300 rounded focus:ring-petronas-primary"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
              </label>
              <button
                type="button"
                onClick={onForgotPassword}
                className="text-sm text-petronas-primary hover:text-petronas-secondary font-medium transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-petronas-primary to-petronas-secondary text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Login
            </button>
          </form>

          {/* Additional information */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              No account?{' '}
              <a href="#" className="text-petronas-primary hover:text-petronas-secondary font-medium transition-colors">
                Contact administrator
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
