import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ role }) => {
  const location = useLocation();

  const menuItems = {
    ADMIN: [
      { path: '/admin/usuarios', icon: 'group', label: 'Usuarios' },
      { path: '/admin/servicios', icon: 'medical_services', label: 'Servicios' },
      { path: '/admin/reportes', icon: 'bar_chart', label: 'Reportes' },
      { path: '/admin/mensajes', icon: 'mail', label: 'Mensajería' },
    ],
    ODONTOLOGO: [
      { path: '/odontologo/agenda', icon: 'calendar_month', label: 'Mi Agenda' },
      { path: '/odontologo/pacientes', icon: 'patient_list', label: 'Historiales' },
      { path: '/odontologo/horarios', icon: 'schedule', label: 'Mi Disponibilidad' },
      { path: '/odontologo/mensajes', icon: 'mail', label: 'Mensajería' },
    ],
    PACIENTE: [
      { path: '/paciente/citas', icon: 'event', label: 'Mis Citas' },
      { path: '/paciente/perfil', icon: 'person', label: 'Mi Perfil' },
      { path: '/paciente/documentos', icon: 'description', label: 'Documentos' },
      { path: '/paciente/mensajes', icon: 'mail', label: 'Mensajería' },
    ]
  };

  const currentMenu = menuItems[role] || [];

  return (
    <aside style={{
      width: '260px',
      backgroundColor: 'var(--surface)',
      borderRight: '1px solid var(--outline-variant)',
      height: 'calc(100vh - 73px)',
      padding: '2rem 1rem',
      position: 'sticky',
      top: '73px'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {currentMenu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-xl)',
              textDecoration: 'none',
              color: location.pathname === item.path ? 'var(--primary)' : 'var(--outline)',
              backgroundColor: location.pathname === item.path ? 'rgba(0, 97, 148, 0.08)' : 'transparent',
              fontWeight: location.pathname === item.path ? '600' : '500',
              transition: 'var(--transition)'
            }}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
