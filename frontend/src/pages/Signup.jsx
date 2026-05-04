import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

const Signup = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    telefono: '',
    fechaNacimiento: '',
    password: '',
    confirmPassword: '',
    rol: 'PACIENTE'
  });
  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef();
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    if (!formData.nombreCompleto) tempErrors.nombreCompleto = "El nombre es obligatorio";
    if (!formData.email.includes('@')) tempErrors.email = "Email inválido";
    if (formData.password.length < 5) tempErrors.password = "Mínimo 5 caracteres";
    
    // Contraseña no puede ser solo letras
    const onlyLetters = /^[A-Za-z]+$/.test(formData.password);
    if (onlyLetters) tempErrors.password = "La contraseña debe incluir números o símbolos";
    
    if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = "Las contraseñas no coinciden";
    if (!captchaToken) tempErrors.captcha = "Por favor verifica que no eres un robot";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Enviando datos al backend...", { ...formData, captchaToken });
      // Aquí iría la llamada al backend con Spring Boot
      // axios.post('/api/auth/signup', { ...formData, captchaToken })
      alert("Cuenta creada con éxito (Simulación)");
      navigate('/login');
    }
  };

  return (
    <div className="flex-center" style={{ minHeight: '80vh', padding: '2rem 0' }}>
      <div className="card" style={{ width: '100%', maxWidth: '500px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Únete a Odontolyt</h2>
          <p style={{ color: 'var(--outline)' }}>Crea tu cuenta para gestionar tus citas</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nombre Completo</label>
            <input 
              type="text" 
              placeholder="Ej: Juan Pérez"
              value={formData.nombreCompleto}
              onChange={(e) => setFormData({...formData, nombreCompleto: e.target.value})}
            />
            {errors.nombreCompleto && <small style={{color: 'var(--error)'}}>{errors.nombreCompleto}</small>}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="input-group">
              <label>Correo Electrónico</label>
              <input 
                type="email" 
                placeholder="juan@correo.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              {errors.email && <small style={{color: 'var(--error)'}}>{errors.email}</small>}
            </div>
            <div className="input-group">
              <label>Teléfono</label>
              <input 
                type="tel" 
                placeholder="314..."
                value={formData.telefono}
                onChange={(e) => setFormData({...formData, telefono: e.target.value})}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Fecha de Nacimiento</label>
            <input 
              type="date" 
              value={formData.fechaNacimiento}
              onChange={(e) => setFormData({...formData, fechaNacimiento: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            {errors.password && <small style={{color: 'var(--error)'}}>{errors.password}</small>}
          </div>

          <div className="input-group">
            <label>Confirmar Contraseña</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
            {errors.confirmPassword && <small style={{color: 'var(--error)'}}>{errors.confirmPassword}</small>}
          </div>

          <div className="flex-center" style={{ marginBottom: '1.5rem' }}>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test Key
              onChange={(token) => setCaptchaToken(token)}
            />
          </div>
          {errors.captcha && <div style={{textAlign: 'center', marginBottom: '1rem'}}><small style={{color: 'var(--error)'}}>{errors.captcha}</small></div>}

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
            Crear Cuenta
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <p style={{ fontSize: '0.875rem' }}>
            ¿Ya tienes cuenta? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 600 }}>Inicia Sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
