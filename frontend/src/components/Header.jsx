import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  return (
    <header className="header" style={{
      padding: '1rem 0',
      backgroundColor: 'var(--surface)',
      borderBottom: '1px solid var(--outline-variant)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img src="/logo.png" alt="Odontolyt Logo" style={{ height: '40px' }} />
          <span className="headline" style={{ fontSize: '1.5rem', letterSpacing: '-0.5px' }}>Odontolyt</span>
        </Link>

        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#444', fontWeight: 500 }}>Inicio</Link>
          <Link to="/contacto" style={{ textDecoration: 'none', color: '#444', fontWeight: 500 }}>Contacto</Link>
          
          {user ? (
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Link to="/dashboard" className="btn btn-secondary">Panel de Control</Link>
              <button onClick={onLogout} className="btn" style={{ color: 'var(--error)' }}>
                <span className="material-symbols-outlined">logout</span>
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/login" className="btn btn-secondary">Ingresar</Link>
              <Link to="/signup" className="btn btn-primary">Crear Cuenta</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
