import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaToken, setCaptchaToken] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Por favor completa el captcha");
      return;
    }
    // Simulación de login exitoso
    console.log("Login con:", email, password, captchaToken);
    onLoginSuccess({ email, rol: 'PACIENTE' }); // Mock user
    navigate('/');
  };

  return (
    <div className="flex-center" style={{ minHeight: '80vh' }}>
      <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Bienvenido</h2>
          <p style={{ color: 'var(--outline)' }}>Ingresa a tu cuenta de Odontolyt</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Correo Electrónico</label>
            <input 
              type="email" 
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex-center" style={{ marginBottom: '1.5rem' }}>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test Key
              onChange={(token) => setCaptchaToken(token)}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
            Iniciar Sesión
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <p style={{ fontSize: '0.875rem' }}>
            ¿No tienes cuenta? <Link to="/signup" style={{ color: 'var(--primary)', fontWeight: 600 }}>Regístrate aquí</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
