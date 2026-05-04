import React from 'react';

const AdminDashboard = () => {
  return (
    <div>
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Panel de Administración</h1>
        <p style={{ color: 'var(--outline)' }}>Gestión integral de la clínica Odontolyt</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
        <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <h4 style={{ color: 'var(--outline)', fontSize: '0.875rem' }}>Usuarios Totales</h4>
          <p style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)' }}>128</p>
        </div>
        <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <h4 style={{ color: 'var(--outline)', fontSize: '0.875rem' }}>Citas Hoy</h4>
          <p style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--secondary)' }}>12</p>
        </div>
        <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <h4 style={{ color: 'var(--outline)', fontSize: '0.875rem' }}>Servicios Activos</h4>
          <p style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--tertiary)' }}>15</p>
        </div>
        <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <h4 style={{ color: 'var(--outline)', fontSize: '0.875rem' }}>Reportes Pendientes</h4>
          <p style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--error)' }}>3</p>
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3>Últimos Usuarios Registrados</h3>
          <button className="btn btn-secondary btn-sm">Ver todos</button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--outline-variant)' }}>
              <th style={{ padding: '1rem' }}>Nombre</th>
              <th style={{ padding: '1rem' }}>Email</th>
              <th style={{ padding: '1rem' }}>Rol</th>
              <th style={{ padding: '1rem' }}>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--outline-variant)' }}>
              <td style={{ padding: '1rem' }}>Carlos Ruiz</td>
              <td style={{ padding: '1rem' }}>carlos@example.com</td>
              <td style={{ padding: '1rem' }}><span style={{ padding: '0.25rem 0.75rem', borderRadius: 'full', backgroundColor: '#e3f2fd', color: '#1976d2', fontSize: '0.75rem', fontWeight: 600 }}>ODONTOLOGO</span></td>
              <td style={{ padding: '1rem' }}><button className="material-symbols-outlined" style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--outline)' }}>edit</button></td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}>Maria Lopez</td>
              <td style={{ padding: '1rem' }}>maria@example.com</td>
              <td style={{ padding: '1rem' }}><span style={{ padding: '0.25rem 0.75rem', borderRadius: 'full', backgroundColor: '#f5f5f5', color: '#616161', fontSize: '0.75rem', fontWeight: 600 }}>PACIENTE</span></td>
              <td style={{ padding: '1rem' }}><button className="material-symbols-outlined" style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--outline)' }}>edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
