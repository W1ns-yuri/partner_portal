import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import ForgotPassword from './components/ForgotPassword';
import Layout from './components/Layout';
import PartnerDashboard from './components/PartnerDashboard';
import TenderDetails from './components/TenderDetails';
import PartnerProfile from './components/PartnerProfile';
import PetronasDashboard from './components/PetronasDashboard';
import CreateTender from './components/CreateTender';
import TendersList from './components/TendersList';
import Support from './components/Support';
import Settings from './components/Settings';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'partner', 'petronas', 'admin'
  const [selectedTender, setSelectedTender] = useState(null);

  const handleLogin = (credentials) => {
    console.log('Login attempt:', credentials);

    // Temporary role determination logic (in real app will be from backend)
    // For test: if email contains 'petronas' - role petronas, if 'admin' - admin, otherwise partner
    let role = 'partner';
    if (credentials.email.includes('petronas')) {
      role = 'petronas';
    } else if (credentials.email.includes('admin')) {
      role = 'admin';
    }

    setUserRole(role);
    setIsAuthenticated(true);
    setCurrentPage(role === 'partner' ? 'dashboard' : 'petronas-dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setCurrentPage('login');
    setSelectedTender(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleTenderSelect = (tender) => {
    setSelectedTender(tender);
    setCurrentPage('tender-details');
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      {!isAuthenticated ? (
        <>
          {currentPage === 'login' && (
            <LoginPage
              onLogin={handleLogin}
              onForgotPassword={() => setCurrentPage('forgot')}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          )}
          {currentPage === 'forgot' && (
            <ForgotPassword
              onBack={() => setCurrentPage('login')}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          )}
        </>
      ) : (
        <Layout
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          onLogout={handleLogout}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          userRole={userRole}
        >
          {/* Pages for partner */}
          {userRole === 'partner' && (
            <>
              {currentPage === 'dashboard' && (
                <PartnerDashboard onTenderSelect={handleTenderSelect} />
              )}
              {currentPage === 'tender-details' && (
                <TenderDetails
                  tender={selectedTender}
                  onBack={() => setCurrentPage('dashboard')}
                />
              )}
              {currentPage === 'profile' && <PartnerProfile />}
            </>
          )}

          {/* Pages for Petronas/Admin */}
          {(userRole === 'petronas' || userRole === 'admin') && (
            <>
              {currentPage === 'petronas-dashboard' && (
                <PetronasDashboard setCurrentPage={setCurrentPage} />
              )}
              {currentPage === 'create-tender' && (
                <CreateTender onBack={() => setCurrentPage('petronas-dashboard')} />
              )}
              {currentPage === 'tenders-list' && (
                <TendersList onTenderSelect={handleTenderSelect} />
              )}
            </>
          )}

          {/* Common pages */}
          {currentPage === 'support' && <Support />}
          {currentPage === 'settings' && <Settings />}
          
        </Layout>
      )}
    </div>
  );
}

export default App;
