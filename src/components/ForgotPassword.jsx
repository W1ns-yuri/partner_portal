import React, { useState } from 'react';
import { Mail, ArrowLeft, Moon, Sun } from 'lucide-react';

const ForgotPassword = ({ onBack, darkMode, toggleDarkMode }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email');
      return;
    }
    
    // Здесь добавьте логику отправки email
    console.log('Password reset for:', email);
    setSubmitted(true);
    setError('');
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-900 transition-colors ${darkMode ? 'dark' : ''}`}>
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

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors">
          {!submitted ? (
            <>
              {/* Back button */}
              <button
                onClick={onBack}
                className="flex items-center text-petronas-primary hover:text-petronas-secondary mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="font-medium">Back to login</span>
              </button>

              {/* Title */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-petronas-primary to-petronas-secondary rounded-2xl mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Forgot password?</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Enter your email and we will send password recovery instructions
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className={`w-full pl-11 pr-4 py-3 border ${
                        error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {error && (
                    <p className="mt-1 text-sm text-red-500">{error}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-petronas-primary to-petronas-secondary text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Send instructions
                </button>
              </form>
            </>
          ) : (
            <>
              {/* Successful submission */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Check your email</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  We have sent password recovery instructions to <strong>{email}</strong>
                </p>
                <button
                  onClick={onBack}
                  className="text-petronas-primary hover:text-petronas-secondary font-medium transition-colors"
                >
                  Return to login
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
