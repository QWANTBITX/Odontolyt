import React from 'react';
import { Link } from 'react-router-dom';

const PacienteDashboard = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem' }}>¡Hola, Juan!</h1>
          <p style={{ color: 'var(--outline)' }}>Bienvenido a tu portal de salud dental</p>
        </div>
        <Link to="/reservar" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
          <span className="material-symbols-outlined">add</span>
          Reservar Nueva Cita
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Mis Próximas Citas</h3>
          <div style={{ textAlign: 'center', padding: '3rem 0', backgroundColor: 'var(--background)', borderRadius: 'var(--radius-3xl)', border: '2px dashed var(--outline-variant)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: 'var(--outline)', marginBottom: '1rem', opacity: 0.5 }}>calendar_today</span>
            <p style={{ color: 'var(--outline)' }}>No tienes citas reservadas para esta semana.</p>
            <Link to="/reservar" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', display: 'block', marginTop: '1rem' }}>Reserva tu primera cita aquí</Link>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Acceso Rápido</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start' }}>
              <span className="material-symbols-outlined">description</span>
              Descargar Consentimientos
            </button>
            <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start' }}>
              <span className="material-symbols-outlined">history</span>
              Ver Historial Completo
            </button>
            <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start' }}>
              <span className="material-symbols-outlined">clinical_notes</span>
              Mis Resultados
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacienteDashboard;
