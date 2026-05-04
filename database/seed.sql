-- Script de configuración inicial para Odontolyt

-- 1. Insertar servicios básicos
INSERT INTO servicios (nombre, descripcion, precio, duracion_minutos) VALUES
('Consulta General', 'Evaluación integral y diagnóstico inicial', 50000, 30),
('Limpieza Dental', 'Limpieza profunda con ultrasonido', 80000, 45),
('Blanqueamiento', 'Tratamiento aclarador de alta eficacia', 350000, 60);

-- 2. Insertar usuario Administrador inicial
-- Nota: La contraseña 'admin123' debe ser encriptada con BCrypt en la aplicación.
-- Por ahora, este es un registro de referencia.
INSERT INTO usuarios (nombre_completo, email, telefono, rol, password) VALUES
('Administrador Odontolyt', 'admin@odontolyt.com', '3143258995', 'ADMIN', '$2a$10$8.UnVuG9HHgffUDAlk8qfOuVGkqRzgVymGe07NWqE2GshB2z4rq9W');
-- El password anterior es 'admin123' encriptado.
