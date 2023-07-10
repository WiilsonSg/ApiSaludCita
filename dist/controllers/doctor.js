"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.findOne = exports.findAll = exports.create = void 0;
const db_1 = require("../db");
//Crea nuevo doctor
const create = (doctor, callback) => {
    const queryString = 'INSERT INTO doctor (id_doctor, nombre, apellido, especialidad_id, consultorio, correo) VALUES (?, ?, ?, ?, ?, ?)';
    db_1.db.query(queryString, [
        doctor.id_doctor,
        doctor.nombre,
        doctor.apellido,
        doctor.especialidad_id,
        doctor.consultorio,
        doctor.correo
    ], (err, result) => {
        if (err) {
            callback(err);
        }
        const id_doctor = result.insertId;
        callback(null, id_doctor);
    });
};
exports.create = create;
//Ver todos los doctores
const findAll = (callback) => {
    const queryString = 'SELECT * FROM apisalud.doctor;';
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
            return;
        }
        const rows = result;
        const doctores = [];
        rows.forEach(row => {
            const doctor = {
                id_doctor: row.id_doctor,
                nombre: row.nombre,
                apellido: row.apellido,
                especialidad_id: row.especialidad_id,
                consultorio: row.consultorio,
                correo: row.correo
            };
            doctores.push(doctor);
        });
        callback(null, doctores);
    });
};
exports.findAll = findAll;
//Ver un doctor po id
const findOne = (Id_Doctor, callback) => {
    const queryString = "SELECT * FROM apisalud.doctor where id_doctor=?";
    db_1.db.query(queryString, Id_Doctor, (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        const doctor = {
            id_doctor: row.id_doctor,
            nombre: row.nombre,
            apellido: row.apellido,
            especialidad_id: row.especialidad_id,
            consultorio: row.consultorio,
            correo: row.correo
        };
        callback(null, doctor);
    });
};
exports.findOne = findOne;
//Actualizar datos de un doctor
const update = (doctor, callback) => {
    const queryString = 'UPDATE doctor SET id_doctor =?, nombre=?, apellido=?, especialidad_id= ?, consultorio=? WHERE id_doctor=?;';
    db_1.db.query(queryString, [
        doctor.id_doctor,
        doctor.nombre,
        doctor.apellido,
        doctor.especialidad_id,
        doctor.consultorio,
        doctor.correo
    ], (err, result) => {
        if (err) {
            callback(err);
        }
        const numUpdate = result.affectedRows;
        callback(null, numUpdate);
    });
};
exports.update = update;
//Eliminar a un doctor 
const remove = (id_doctor, callback) => {
    const queryString = 'DELETE FROM doctor WHERE id_doctor=?;';
    db_1.db.query(queryString, [
        id_doctor
    ], (err, resul) => {
        if (err) {
            callback(err);
        }
        const numDelete = resul.affectedRows;
        callback(null, numDelete);
    });
};
exports.remove = remove;
