import { BasicEspecialidades, Especialidad } from "../models/especialidad";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";

//Crea una nueva especialidad 
export const create = (especialidad: Especialidad, callback: Function) => {
  const queryString = 'INSERT INTO especialidad (id_especialidad, nombre) VALUES (?,?)';
  db.query(queryString,
    [
      especialidad.id_especialidad,
      especialidad.nombre
    ],
    (err, result) => {
      if (err) { callback(err); }
      const Id_Especialidad = (<OkPacket>result).insertId;
      callback(null, Id_Especialidad);
    }
  )
}

//Ver todas la especialidades registradas 
export const findAll = (callback: Function) => {
  const queryString = 'SELECT * FROM apisalud.especialidad;';

  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
      return;
    }
    const rows = <RowDataPacket[]>result;
    const especialidades: BasicEspecialidades[] = [];

    rows.forEach(row => {
      const especialidad: Especialidad = {
        id_especialidad: row.id_especialidad,
        nombre: row.nombre,
      };
      especialidades.push(especialidad);
    });

    callback(null, especialidades);
  });
};

//Elimina una especialidad
export const remove = (id_especialidad: number, callback: Function) => {
  const queryString = 'DELETE FROM especialidad WHERE id_especialidad=?;';
  db.query(queryString, [id_especialidad], (err, resul) => {
    if (err) { callback(err); }
    const numDelete = (<OkPacket>resul).affectedRows
    callback(null, numDelete)
  });
};

