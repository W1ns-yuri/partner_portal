import React, { useState } from 'react';
import { Bell, Lock, Globe, Save, Shield, Mail, Smartphone, Eye, EyeOff } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('notifications');
  const [showPassword, setShowPassword] = useState(false);
  const [saved, setSaved] = useState(false);

  const [settings, setSettings] = useState({
  // Уведомления
  emailNotifications: true,
  tenderUpdates: true,
  systemAlerts: true,
  
  // Безопасность
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
  twoFactorAuth: false,
  
  // Язык и регион
  language: 'en',
  timezone: 'UTC+5',
  dateFormat: 'DD/MM/YYYY',
  currency: 'USD',
});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const tabs = [
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'language', label: 'Language & Region', icon: Globe },
  ];

  return (
    <div className="p-8 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full mx-auto">
        {/* Заголовок */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">Settings</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your account settings and preferences</p>
        </div>

        {/* Уведомление о сохранении */}
        {saved && (
          <div className="mb-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center">
            <Shield className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
            <span className="text-green-800 dark:text-green-400 font-medium">Settings saved successfully!</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Боковое меню вкладок */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-petronas-primary to-petronas-secondary text-white shadow-md'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Контент вкладок */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              
              {/* Notifications Tab */}
{activeTab === 'notifications' && (
  <div className="space-y-6">
    <div className="flex items-center mb-6">
      <Bell className="w-6 h-6 text-petronas-primary mr-3" />
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Notification Preferences</h2>
    </div>

    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <div className="flex items-center">
          <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-3" />
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white">Email Notifications</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Receive notifications via email</p>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="emailNotifications"
            checked={settings.emailNotifications}
            onChange={handleInputChange}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-petronas-primary/20 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-petronas-primary"></div>
        </label>
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <div className="flex items-center">
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-3" />
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white">Tender Updates</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Get notified about tender status changes</p>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="tenderUpdates"
            checked={settings.tenderUpdates}
            onChange={handleInputChange}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-petronas-primary/20 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-petronas-primary"></div>
        </label>
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <div className="flex items-center">
          <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-3" />
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white">System Alerts</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Important system notifications</p>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="systemAlerts"
            checked={settings.systemAlerts}
            onChange={handleInputChange}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-petronas-primary/20 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-petronas-primary"></div>
        </label>
      </div>
    </div>
  </div>
)}


              {/* Security Tab */}
              {activeTab === 'security' && (
                <div className="space-y-6">
                  <div className="flex items-center mb-6">
                    <Lock className="w-6 h-6 text-petronas-primary mr-3" />
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Security Settings</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Current Password
                          </label>
                          <div className="relative">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              name="currentPassword"
                              value={settings.currentPassword}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            New Password
                          </label>
                          <input
                            type="password"
                            name="newPassword"
                            value={settings.newPassword}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            name="confirmPassword"
                            value={settings.confirmPassword}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center">
                          <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-3" />
                          <div>
                            <h3 className="font-semibold text-gray-800 dark:text-white">Two-Factor Authentication</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Add an extra layer of security</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            name="twoFactorAuth"
                            checked={settings.twoFactorAuth}
                            onChange={handleInputChange}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-petronas-primary/20 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-petronas-primary"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Language & Region Tab */}
              {activeTab === 'language' && (
                <div className="space-y-6">
                  <div className="flex items-center mb-6">
                    <Globe className="w-6 h-6 text-petronas-primary mr-3" />
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Language & Region</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Language
                      </label>
                      <select
                        name="language"
                        value={settings.language}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                      >
                        <option value="en">English</option>
                        <option value="ru">Русский</option>
                        <option value="tk">Türkmençe</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Timezone
                      </label>
                      <select
                        name="timezone"
                        value={settings.timezone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                      >
                        <option value="UTC+5">UTC+5 (Ashgabat)</option>
                        <option value="UTC+0">UTC+0 (London)</option>
                        <option value="UTC+3">UTC+3 (Moscow)</option>
                        <option value="UTC+8">UTC+8 (Singapore)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Date Format
                      </label>
                      <select
                        name="dateFormat"
                        value={settings.dateFormat}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                      >
                        <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                        <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                        <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Currency
                      </label>
                      <select
                        name="currency"
                        value={settings.currency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                      >
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                        <option value="TMT">TMT (m)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Кнопка сохранения */}
              <div className="flex items-center justify-end pt-6 border-t border-gray-200 dark:border-gray-700 mt-8">
                <button
                  onClick={handleSave}
                  className="px-8 py-3 bg-gradient-to-r from-petronas-primary to-petronas-secondary text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
                >
                  <Save className="w-5 h-5" />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
