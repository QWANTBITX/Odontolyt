import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReservaCita = () => {
  const [formData, setFormData] = useState({
    servicio: '',
    odontologo: '',
    fecha: '',
    hora: '',
    motivo: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cita reservada:", formData);
    alert("¡Cita reservada con éxito!");
    navigate('/dashboard');
  };

  return (
    <div className="flex-center" style={{ padding: '4rem 0' }}>
      <div className="card" style={{ width: '100%', maxWidth: '600px' }}>
        <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Reservar Cita</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Selecciona el Servicio</label>
            <select 
              value={formData.servicio}
              onChange={(e) => setFormData({...formData, servicio: e.target.value})}
              required
            >
              <option value="">Seleccione un servicio...</option>
              <option value="odontologia_general">Odontología General</option>
              <option value="ortodoncia">Ortodoncia</option>
              <option value="implantes">Implantes</option>
              <option value="blanqueamiento">Blanqueamiento</option>
            </select>
          </div>

          <div className="input-group">
            <label>Selecciona el Odontólogo</label>
            <select 
              value={formData.odontologo}
              onChange={(e) => setFormData({...formData, odontologo: e.target.value})}
              required
            >
              <option value="">Cualquier especialista disponible</option>
              <option value="dr_ruiz">Dr. Carlos Ruiz</option>
              <option value="dra_gomez">Dra. Maria Gomez</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="input-group">
              <label>Fecha</label>
              <input 
                type="date" 
                value={formData.fecha}
                onChange={(e) => setFormData({...formData, fecha: e.target.value})}
                required
              />
            </div>
            <div className="input-group">
              <label>Hora</label>
              <select 
                value={formData.hora}
                onChange={(e) => setFormData({...formData, hora: e.target.value})}
                required
              >
                <option value="">Hora...</option>
                <option value="08:00">08:00 AM</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <label>Motivo de la consulta (opcional)</label>
            <textarea 
              rows="3" 
              placeholder="Describa brevemente su necesidad..."
              value={formData.motivo}
              onChange={(e) => setFormData({...formData, motivo: e.target.value})}
            ></textarea>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <button type="button" onClick={() => navigate(-1)} className="btn btn-secondary" style={{ flex: 1 }}>Cancelar</button>
            <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>Confirmar Reserva</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservaCita;
