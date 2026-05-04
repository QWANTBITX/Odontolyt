import React from 'react';

const OdontologoDashboard = () => {
  return (
    <div>
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Agenda de Especialista</h1>
        <p style={{ color: 'var(--outline)' }}>Gestiona tus pacientes y citas de hoy</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Citas Próximas</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '1rem', borderLeft: '4px solid var(--primary)', backgroundColor: 'var(--background)', borderRadius: '0 12px 12px 0' }}>
              <p style={{ fontWeight: 600 }}>09:00 AM - Limpieza Dental</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--outline)' }}>Paciente: Ana Beltrán</p>
            </div>
            <div style={{ padding: '1rem', borderLeft: '4px solid var(--primary)', backgroundColor: 'var(--background)', borderRadius: '0 12px 12px 0' }}>
              <p style={{ fontWeight: 600 }}>10:30 AM - Ortodoncia Control</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--outline)' }}>Paciente: Pedro Duarte</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3>Historiales Clínicos Recientes</h3>
            <button className="btn btn-primary">Nuevo Registro</button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--outline-variant)' }}>
                <th style={{ padding: '1rem' }}>Fecha</th>
                <th style={{ padding: '1rem' }}>Paciente</th>
                <th style={{ padding: '1rem' }}>Tratamiento</th>
                <th style={{ padding: '1rem' }}>Notas</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--outline-variant)' }}>
                <td style={{ padding: '1rem' }}>03/05/2026</td>
                <td style={{ padding: '1rem' }}>Luis Gómez</td>
                <td style={{ padding: '1rem' }}>Extracción</td>
                <td style={{ padding: '1rem' }}>Post-operatorio indicado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OdontologoDashboard;
