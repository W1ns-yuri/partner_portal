import React, { useState } from 'react';
import { Send, MessageCircle, Mail, Phone, Clock, CheckCircle, MapPin } from 'lucide-react';

const Support = () => {
  const [formData, setFormData] = useState({
    subject: '',
    category: '',
    message: '',
    priority: 'medium',
  });

  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Technical issues',
    'Tender questions',
    'Document issues',
    'Payment questions',
    'Account',
    'Other',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Support request:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        subject: '',
        category: '',
        message: '',
        priority: 'medium',
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="p-8 flex items-center justify-center min-h-screen">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">
            <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Request sent!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Your request has been received. Our support team will contact you soon.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Usual response time: 2-4 hours
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full mx-auto">
        {/* Header - reduced */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Support center
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400">
            We are ready to help you solve any issue
          </p>
        </div>

        {/* Request form - compact */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 mb-6">
          <div className="flex items-center justify-center mb-5">
            <div className="w-12 h-12 bg-gradient-to-br from-petronas-primary to-petronas-secondary rounded-xl flex items-center justify-center mr-3">
              <Send className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Send request</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Fill out the form below</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all"
                >
                  <option value="">Select category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Priority *
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all"
                >
                  <option value="low">🟢 Low</option>
                  <option value="medium">🟡 Medium</option>
                  <option value="high">🟠 High</option>
                  <option value="urgent">🔴 Urgent</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Request subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all"
                placeholder="Briefly describe your problem"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Detailed description *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white resize-none transition-all"
                placeholder="Describe your problem or question in as much detail as possible..."
              />
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-petronas-light dark:from-blue-900/20 dark:to-petronas-dark/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
              <div className="flex items-start">
                <MessageCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-800 dark:text-blue-400">
                  <strong>Tip:</strong> The more detailed you describe the problem, the faster we can help you.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center pt-2">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-petronas-primary to-petronas-secondary text-white rounded-xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 flex items-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send request</span>
              </button>
            </div>
          </form>
        </div>

        {/* Contact information - small cards at the bottom */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {/* Email */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="w-10 h-10 bg-gradient-to-br from-petronas-primary to-petronas-secondary rounded-xl flex items-center justify-center mx-auto mb-2">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-gray-800 dark:text-white mb-1 text-xs">Email</h3>
            <a 
              href="mailto:support@petronas.com" 
              className="text-xs text-petronas-primary hover:text-petronas-secondary transition-colors break-all"
            >
              support@petronas.com
            </a>
          </div>

          {/* Телефон */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-gray-800 dark:text-white mb-1 text-xs">Phone</h3>
            <a 
              href="tel:+993XXXXXXXX" 
              className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
            >
              +993 XX XXX XX XX
            </a>
          </div>

          {/* Часы работы */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-gray-800 dark:text-white mb-1 text-xs">Working hours</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">Mon-Fri: 9:00-18:00</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Sat: 10:00-14:00</p>
          </div>

          {/* Адрес */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-gray-800 dark:text-white mb-1 text-xs">Office</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">Ashgabat, Turkmenistan</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Bitarap Turkmenistan</p>
          </div>
        </div>

        {/* Additional information */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Average response time: <span className="font-semibold text-petronas-primary">2-4 hours</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
