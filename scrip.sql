-- Tabla de especialidades
CREATE TABLE especialidad (
    id_especialidad INT auto_increment PRIMARY KEY,
    nombre VARCHAR(200)
);
--Ingresar especialidad
INSERT INTO especialidad (id_especialidad, nombre) VALUES (?,?);
INSERT INTO especialidad VALUES (Medicina general);

-- Tabla de doctores
CREATE TABLE doctor (
    id_doctor BIGINT PRIMARY KEY, 
    nombre VARCHAR(30),
    apellido VARCHAR(30),
    especialidad_id INT,
    consultorio VARCHAR(30),
    correo VARCHAR(50),
    FOREIGN KEY (especialidad_id) REFERENCES especialidad(id_especialidad)
);
-- Ingresar un Doctor
INSERT INTO doctor (id_doctor, nombre, apellido, especialidad_id, consultorio, correo) VALUES (?, ?, ?, ?, ?, ?);
INSERT INTO doctor VALUES (1235657869, "Gregory", "House", 1, "203", "dr.gregoryHouse@gmail.com");

-- Tabla de Pacientes
CREATE TABLE paciente (
    id_paciente BIGINT,
    nombre VARCHAR(30),
    apellido VARCHAR(30),
    edad INT,
    telefono VARCHAR(30),
    PRIMARY KEY(id_paciente)
);
-- Ingresar un Paciente
INSERT INTO pacientes VALUES (10124563964, "Wilson", "Serrato Garzón", 28, "3196832654");
INSERT INTO paciente (id_paciente, nombre, apellido, edad, telefono) VALUES (?, ?, ?, ?, ?);

-- Tabla de Cita
CREATE TABLE cita (
    id_cita INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id BIGINT,
    especialidad_id INT,
    FOREIGN KEY (paciente_id) REFERENCES pacientes (id_paciente),
    FOREIGN KEY (especialidad_id) REFERENCES especialidad (id_especialidad)
);
-- Agendar/crear cita nueva
INSERT INTO cita(paciente_id, especialidad_id) VALUES(10124563964, 2);
INSERT INTO cita(paciente_id, especialidad_id) VALUES(?, ?);

