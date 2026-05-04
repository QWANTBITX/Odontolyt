import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{
        position: 'relative',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #006194 0%, #007bb9 100%)',
        color: 'white',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '600px' }} className="animate-fade-in">
            <h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Tu Sonrisa, <br />Nuestra Prioridad
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9 }}>
              En Odontolyt combinamos tecnología de vanguardia con un trato humano para brindarte la mejor experiencia dental.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link to="/signup" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Agenda tu Cita
              </Link>
              <Link to="/contacto" className="btn" style={{ color: 'white', border: '1px solid white' }}>
                Saber más
              </Link>
            </div>
          </div>
        </div>
        <img 
          src="/banner.png" 
          alt="Odontolyt Banner" 
          style={{
            position: 'absolute',
            right: '-100px',
            top: '50%',
            transform: 'translateY(-50%)',
            height: '110%',
            opacity: 0.8,
            objectFit: 'contain'
          }}
        />
      </section>

      {/* Services/Features */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Nuestros Servicios</h2>
            <p style={{ color: 'var(--outline)' }}>Soluciones integrales para toda la familia</p>
          </div>

          <div className="grid-cols-3">
            <div className="card">
              <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: var(--primary), marginBottom: '1rem' }}>dentistry</span>
              <h3>Odontología General</h3>
              <p>Limpiezas, calzaduras y prevención para mantener tu salud bucal al día.</p>
            </div>
            <div className="card">
              <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: var(--primary), marginBottom: '1rem' }}>orthodontics</span>
              <h3>Ortodoncia</h3>
              <p>Alinea tu sonrisa con los sistemas más modernos y cómodos del mercado.</p>
            </div>
            <div className="card">
              <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: var(--primary), marginBottom: '1rem' }}>health_and_safety</span>
              <h3>Implantes</h3>
              <p>Recupera la funcionalidad y estética de tu sonrisa con resultados naturales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div className="animate-fade-in">
              <img src="/imagen0002.png" alt="Profesional" style={{ width: '100%', borderRadius: 'var(--radius-3xl)', boxShadow: 'var(--shadow-xl)' }} />
            </div>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Confianza Profesional</h2>
              <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem' }}>
                Nuestro equipo de especialistas está altamente calificado para brindarte la seguridad que necesitas en cada procedimiento. Utilizamos materiales de primera calidad y protocolos de bioseguridad estrictos.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>check_circle</span>
                  Tecnología de Diagnóstico Digital
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>check_circle</span>
                  Ambiente Seguro y Relajante
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>check_circle</span>
                  Atención Personalizada
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Cuidado Familiar</h2>
              <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem' }}>
                En Odontolyt pensamos en todos. Desde los más pequeños hasta los abuelos, tenemos planes y atenciones diseñadas para cada etapa de la vida.
              </p>
              <Link to="/signup" className="btn btn-primary">Registra a tu Familia</Link>
            </div>
            <div className="animate-fade-in" style={{ order: -1 }}>
              <img src="/imagen0001.png" alt="Familia" style={{ width: '100%', borderRadius: 'var(--radius-3xl)', boxShadow: 'var(--shadow-xl)' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
