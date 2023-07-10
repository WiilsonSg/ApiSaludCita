"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.findOne = exports.findAll = exports.create = void 0;
const db_1 = require("../db");
//Crea un nuevo paciente
const create = (paciente, callback) => {
    const queryString = 'INSERT INTO paciente (id_paciente, nombre, apellido, edad, telefono) VALUES (?, ?, ?, ?, ?)';
    db_1.db.query(queryString, [
        paciente.id_paciente,
        paciente.nombre,
        paciente.apellido,
        paciente.edad,
        paciente.telefono
    ], (err, result) => {
        if (err) {
            callback(err);
        }
        const Id_Paciente = result.insertId;
        callback(null, Id_Paciente);
    });
};
exports.create = create;
//Ver todos los pacientes
const findAll = (callback) => {
    const queryString = 'SELECT * FROM apisalud.paciente;';
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
            return;
        }
        const rows = result;
        const pacientes = [];
        rows.forEach(row => {
            const paciente = {
                id_paciente: row.id_paciente,
                nombre: row.nombre,
                apellido: row.apellido,
                edad: row.edad,
                telefono: row.telefono
            };
            pacientes.push(paciente);
        });
        callback(null, pacientes);
    });
};
exports.findAll = findAll;
//Ver paciente por id
const findOne = (id_paciente, callback) => {
    const queryString = "SELECT * FROM apisalud.paciente WHERE id_paciente=?";
    db_1.db.query(queryString, id_paciente, (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        const paciente = {
            id_paciente: row.id_paciente,
            nombre: row.nombre,
            apellido: row.apellido,
            edad: row.edad,
            telefono: row.telefono
        };
        callback(null, paciente);
    });
};
exports.findOne = findOne;
//Actualiza datos del paciente
const update = (paciente, callback) => {
    const queryString = 'UPDATE paciente SET id_paciente =?, nombre =?, apellido =?, edad =?, telefono =? WHERE id_paciente=?;';
    db_1.db.query(queryString, [
        paciente.id_paciente,
        paciente.nombre,
        paciente.apellido,
        paciente.edad,
        paciente.telefono,
        paciente.id_paciente
    ], (err, result) => {
        if (err) {
            callback(err);
        }
        const numUpdate = result.affectedRows;
        callback(null, numUpdate);
    });
};
exports.update = update;
/*
export const update = (paciente: Paciente, callback: Function) => {
  const queryString = 'UPDATE paciente SET id_paciente =?, nombre =?, apellido =?, edad =?, telefono =? WHERE id_paciente=?;';
  const values = [paciente.id_paciente, paciente.nombre, paciente.apellido, paciente.edad, paciente.telefono, paciente.id_paciente];

  db.query(queryString, values, (err, result) => {
    if (err) {
      callback(err);
      return;
    }
    const numUpdate = (<OkPacket>result).affectedRows;
    callback(null, numUpdate);
  });
};
*/
//Elimana un paciente 
const remove = (id_paciente, callback) => {
    const queryString = 'DELETE FROM paciente WHERE id_paciente=?;';
    db_1.db.query(queryString, [id_paciente], (err, resul) => {
        if (err) {
            callback(err);
        }
        const numDelete = resul.affectedRows;
        callback(null, numDelete);
    });
};
exports.remove = remove;
