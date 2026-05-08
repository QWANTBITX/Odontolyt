-- 1. Insertar usuario Administrador inicial
INSERT INTO usuarios (id, nombre_completo, email, telefono, rol, password) VALUES
(random_uuid(), 'Administrador Odontolyt', 'admin@odontolyt.com', '3143258995', 'ADMIN', '$2a$10$8.UnVuG9HHgffUDAlk8qfOuVGkqRzgVymGe07NWqE2GshB2z4rq9W');
