"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.findOne = exports.findAll = exports.create = void 0;
const db_1 = require("../db");
//Crea una nueva cita 
const create = (cita, callback) => {
    const queryString = "INSERT INTO cita(paciente_id, especialidad_id) VALUES(?, ?);";
    db_1.db.query(queryString, [
        cita.paciente_id,
        cita.especialidad_id
    ], (err, result) => {
        if (err) {
            callback(err);
        }
        const Id_Cita = result.insertId;
        callback(null, Id_Cita);
    });
};
exports.create = create;
//Ver todas las citas con su información
const findAll = (callback) => {
    const queryString = `
    SELECT c.id_cita, e.id_especialidad, e.nombre AS nombre_especialidad, c.paciente_id,
    p.nombre AS nombre_paciente, p.apellido AS apellido_paciente, p.edad, p.telefono,
    d.nombre AS nombre_doctor, d.apellido AS apellido_doctor,
    d.consultorio, d.correo
    FROM cita AS c
    JOIN paciente AS p ON c.paciente_id = p.id_paciente
    JOIN doctor AS d ON c.especialidad_id = d.especialidad_id
    JOIN especialidad AS e ON c.especialidad_id = e.id_especialidad;
    `;
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
            return;
        }
        const rows = result;
        const citas = [];
        rows.forEach(row => {
            const cita = {
                id_cita: row.id_cita,
                especialidad: {
                    id_especialidad: row.id_especialidad,
                    nombre: row.nombre_especialidad
                },
                paciente: {
                    id_paciente: row.paciente_id,
                    nombre: row.nombre_paciente,
                    apellido: row.apellido_paciente,
                    edad: row.edad,
                    telefono: row.telefono
                },
                doctor: {
                    nombre: row.nombre_doctor,
                    apellido: row.apellido_doctor,
                    consultorio: row.consultorio,
                    correo: row.correo
                },
            };
            citas.push(cita);
        });
        callback(null, citas);
    });
};
exports.findAll = findAll;
//Ver cita por id del paciente con su información 
const findOne = (id_cita, callback) => {
    const queryString = `
    SELECT c.id_cita, e.id_especialidad, e.nombre AS nombre_especialidad, c.paciente_id,
    p.nombre AS nombre_paciente, p.apellido AS apellido_paciente, p.edad, p.telefono,
    d.nombre AS nombre_doctor, d.apellido AS apellido_doctor,
    d.consultorio, d.correo
    FROM cita AS c
    JOIN paciente AS p ON c.paciente_id = p.id_paciente
    JOIN doctor AS d ON d.id_doctor
    JOIN especialidad AS e ON c.especialidad_id = e.id_especialidad 
    WHERE c.paciente_id=?;`;
    db_1.db.query(queryString, id_cita, (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        const cita = {
            id_cita: row.id_cita,
            especialidad: {
                id_especialidad: row.id_especialidad,
                nombre: row.nombre_especialidad
            },
            paciente: {
                id_paciente: row.paciente_id,
                nombre: row.nombre_paciente,
                apellido: row.apellido_paciente,
                edad: row.edad,
                telefono: row.telefono
            },
            doctor: {
                nombre: row.nombre_doctor,
                apellido: row.apellido_doctor,
                consultorio: row.consultorio,
                correo: row.correo
            },
            paciente_id: row.pasiente_id
        };
        callback(null, cita);
    });
};
exports.findOne = findOne;
//Actualizar cita
const update = (cita, callback) => {
    const queryString = 'UPDATE cita SET  paciente_id= ?, especialidad_id= ? WHERE id_cita=?;';
    db_1.db.query(queryString, [
        cita.id_cita,
        cita.paciente_id,
        cita.especialidad_id,
    ], (err, result) => {
        if (err) {
            callback(err);
        }
        const numUpdate = result.affectedRows;
        callback(null, numUpdate);
    });
};
exports.update = update;
//Eliminar cita
const remove = (id_cita, callback) => {
    const queryString = 'DELETE FROM cita WHERE id_cita=?;';
    db_1.db.query(queryString, [
        id_cita
    ], (err, resul) => {
        if (err) {
            callback(err);
        }
        const numDelete = resul.affectedRows;
        callback(null, numDelete);
    });
};
exports.remove = remove;
