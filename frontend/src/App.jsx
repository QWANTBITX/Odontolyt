import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import OdontologoDashboard from './pages/OdontologoDashboard';
import PacienteDashboard from './pages/PacienteDashboard';
import DashboardLayout from './components/DashboardLayout';
import ReservaCita from './pages/ReservaCita';

// Layout wrapper to keep Header/Footer constant
const Layout = ({ children, user, onLogout }) => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header user={user} onLogout={onLogout} />
    <main style={{ flex: 1 }}>
      {children}
    </main>
    <Footer />
  </div>
);

function App() {
  const [user, setUser] = useState(null); // Mock auth state

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Layout user={user} onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLoginSuccess={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={
            user ? (
              <DashboardLayout role={user.rol}>
                {user.rol === 'ADMIN' && <AdminDashboard />}
                {user.rol === 'ODONTOLOGO' && <OdontologoDashboard />}
                {user.rol === 'PACIENTE' && <PacienteDashboard />}
              </DashboardLayout>
            ) : <Navigate to="/login" />
          } />

          <Route path="/reservar" element={
            user ? <ReservaCita /> : <Navigate to="/login" />
          } />

          {/* Sub-routes for sidebars (placeholders for now) */}
          <Route path="/admin/*" element={
            user?.rol === 'ADMIN' ? (
              <DashboardLayout role="ADMIN">
                <AdminDashboard />
              </DashboardLayout>
            ) : <Navigate to="/dashboard" />
          } />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
