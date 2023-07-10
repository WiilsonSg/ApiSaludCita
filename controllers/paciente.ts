import { Paciente, BasicPaciente } from "../models/paciente";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";

//Crea un nuevo paciente
export const create = (paciente: Paciente, callback: Function) => {
  const queryString = 'INSERT INTO paciente (id_paciente, nombre, apellido, edad, telefono) VALUES (?, ?, ?, ?, ?)';

  db.query(
    queryString,
    [
      paciente.id_paciente,
      paciente.nombre,
      paciente.apellido,
      paciente.edad,
      paciente.telefono
    ],
    (err, result) => {
      if (err) { callback(err); }
      const Id_Paciente = (<OkPacket>result).insertId;
      callback(null, Id_Paciente);
    }
  );
};

//Ver todos los pacientes
export const findAll = (callback: Function) => {
  const queryString = 'SELECT * FROM apisalud.paciente;';

  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
      return;
    }
    const rows = <RowDataPacket[]>result;
    const pacientes: Paciente[] = [];

    rows.forEach(row => {
      const paciente: Paciente = {
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

//Ver paciente por id
export const findOne = (id_paciente: number, callback: Function) => {
  const queryString = "SELECT * FROM apisalud.paciente WHERE id_paciente=?";

  db.query(queryString, id_paciente, (err, result) => {
    if (err) { callback(err); }

    const row = (<RowDataPacket>result)[0];
    const paciente: Paciente = {
      id_paciente: row.id_paciente,
      nombre: row.nombre,
      apellido: row.apellido,
      edad: row.edad,
      telefono: row.telefono
    }
    callback(null, paciente)
  });
};

//Actualiza datos del paciente
export const update = (paciente: Paciente, callback: Function) => {
  const queryString = 'UPDATE paciente SET id_paciente =?, nombre =?, apellido =?, edad =?, telefono =? WHERE id_paciente=?;';
  db.query(
    queryString,
    [
      paciente.id_paciente,
      paciente.nombre,
      paciente.apellido,
      paciente.edad,
      paciente.telefono,
      paciente.id_paciente
    ],
    (err, result) => {
      if (err) { callback(err); }

      const numUpdate = (<OkPacket>result).affectedRows;
      callback(null, numUpdate);
    }
  );
};

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
export const remove = (id_paciente: number, callback: Function) => {
  const queryString = 'DELETE FROM paciente WHERE id_paciente=?;';
  db.query(queryString, [id_paciente], (err, resul) => {
    if (err) { callback(err); }
    const numDelete = (<OkPacket>resul).affectedRows
    callback(null, numDelete)
  });
};

