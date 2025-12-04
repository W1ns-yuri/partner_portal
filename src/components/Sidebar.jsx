import React from 'react';
import { User, Settings, FileText, LogOut, Moon, Sun, ChevronLeft, ChevronRight, Home, PlusCircle, List, Users, HeadphonesIcon } from 'lucide-react';

const Sidebar = ({ darkMode, toggleDarkMode, onLogout, currentPage, setCurrentPage, collapsed, setCollapsed, userRole }) => {
  // Menu for partner
  const partnerMenuItems = [
    { id: 'dashboard', icon: Home, label: 'My tenders' },
    { id: 'profile', icon: User, label: 'Personal account' },
    { id: 'support', icon: HeadphonesIcon, label: 'Support' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  // Menu for Petronas/Admin
  const petronasMenuItems = [
    { id: 'petronas-dashboard', icon: Home, label: 'Dashboard' },
    { id: 'create-tender', icon: PlusCircle, label: 'Create tender' },
    { id: 'tenders-list', icon: List, label: 'All tenders' },
    { id: 'partners', icon: Users, label: 'Partners' },
    { id: 'support', icon: HeadphonesIcon, label: 'Support' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

 
  const menuItems = userRole === 'partner' ? partnerMenuItems : petronasMenuItems;


  return (
    <div 
      className={`${
        collapsed ? 'w-20' : 'w-64'
      } bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 ease-in-out`}
    >
      {/* Logo */}
      <div className="h-20 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-700">
        {!collapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-petronas-primary to-petronas-secondary rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-white">P</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800 dark:text-white">Petronas</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {userRole === 'partner' ? 'Partner Portal' : userRole === 'admin' ? 'Admin Panel' : 'Management'}
              </p>
            </div>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center ${
                collapsed ? 'justify-center' : 'justify-start'
              } px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-petronas-primary to-petronas-secondary text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              title={collapsed ? item.label : ''}
            >
              <Icon className={`w-5 h-5 ${!collapsed && 'mr-3'}`} />
              {!collapsed && <span className="font-medium">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Bottom panel */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
        {/* Theme switcher */}
        <button
          onClick={toggleDarkMode}
          className={`w-full flex items-center ${
            collapsed ? 'justify-center' : 'justify-start'
          } px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all`}
          title={collapsed ? (darkMode ? 'Light theme' : 'Dark theme') : ''}
        >
          {darkMode ? (
            <Sun className={`w-5 h-5 ${!collapsed && 'mr-3'}`} />
          ) : (
            <Moon className={`w-5 h-5 ${!collapsed && 'mr-3'}`} />
          )}
          {!collapsed && <span className="font-medium">{darkMode ? 'Light theme' : 'Dark theme'}</span>}
        </button>

        {/* Logout */}
        <button
          onClick={onLogout}
          className={`w-full flex items-center ${
            collapsed ? 'justify-center' : 'justify-start'
          } px-4 py-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all`}
          title={collapsed ? 'Logout' : ''}
        >
          <LogOut className={`w-5 h-5 ${!collapsed && 'mr-3'}`} />
          {!collapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
