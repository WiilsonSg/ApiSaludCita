"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.findAll = exports.create = void 0;
const db_1 = require("../db");
//Crea una nueva especialidad 
const create = (especialidad, callback) => {
    const queryString = 'INSERT INTO especialidad (id_especialidad, nombre) VALUES (?,?)';
    db_1.db.query(queryString, [
        especialidad.id_especialidad,
        especialidad.nombre
    ], (err, result) => {
        if (err) {
            callback(err);
        }
        const Id_Especialidad = result.insertId;
        callback(null, Id_Especialidad);
    });
};
exports.create = create;
//Ver todas la especialidades registradas 
const findAll = (callback) => {
    const queryString = 'SELECT * FROM apisalud.especialidad;';
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
            return;
        }
        const rows = result;
        const especialidades = [];
        rows.forEach(row => {
            const especialidad = {
                id_especialidad: row.id_especialidad,
                nombre: row.nombre,
            };
            especialidades.push(especialidad);
        });
        callback(null, especialidades);
    });
};
exports.findAll = findAll;
//Elimina una especialidad
const remove = (id_especialidad, callback) => {
    const queryString = 'DELETE FROM especialidad WHERE id_especialidad=?;';
    db_1.db.query(queryString, [id_especialidad], (err, resul) => {
        if (err) {
            callback(err);
        }
        const numDelete = resul.affectedRows;
        callback(null, numDelete);
    });
};
exports.remove = remove;
