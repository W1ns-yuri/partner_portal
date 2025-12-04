import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children, darkMode, toggleDarkMode, onLogout, currentPage, setCurrentPage, userRole }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className={`flex h-screen ${darkMode ? 'dark' : ''}`}>
      <Sidebar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        onLogout={onLogout}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        userRole={userRole}
      />
      
      <div className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900 transition-colors">
        {children}
      </div>
    </div>
  );
};

export default Layout;
