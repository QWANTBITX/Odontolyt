import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--tertiary)',
      color: 'white',
      padding: '4rem 0 2rem',
      marginTop: '4rem'
    }}>
      <div className="container">
        <div className="grid-cols-3">
          <div>
            <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Odontolyt</h3>
            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
              Transformando sonrisas con la frescura y confianza que mereces.
              Tecnología dental de vanguardia a tu alcance.
            </p>
          </div>
          
          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Contacto</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="material-symbols-outlined">mail</span>
                ideiosduei@gmail.com
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="material-symbols-outlined">call</span>
                3143258995
              </li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Redes Sociales</h4>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://www.tiktok.com/@odontolyt" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem', borderRadius: '50%' }}>
                <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" style={{ width: '20px' }} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61589032808993" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem', borderRadius: '50%' }}>
                <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" style={{ width: '20px' }} />
              </a>
              <a href="https://x.com/Odontolyt" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem', borderRadius: '50%' }}>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png" alt="X" style={{ width: '20px' }} />
              </a>
              <a href="https://www.youtube.com/@Odontolyt" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem', borderRadius: '50%' }}>
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" style={{ width: '20px' }} />
              </a>
              <a href="https://www.instagram.com/odontolyt" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem', borderRadius: '50%' }}>
                <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" style={{ width: '20px' }} />
              </a>
            </div>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          marginTop: '3rem',
          paddingTop: '2rem',
          textAlign: 'center',
          fontSize: '0.8rem',
          opacity: 0.6
        }}>
          &copy; {new Date().getFullYear()} Odontolyt. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
