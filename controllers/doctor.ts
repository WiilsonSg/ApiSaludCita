import { Doctor, BasicDoctor } from "../models/doctor";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";

//Crea nuevo doctor
export const create = (doctor: Doctor, callback: Function) => {
  const queryString = 'INSERT INTO doctor (id_doctor, nombre, apellido, especialidad_id, consultorio, correo) VALUES (?, ?, ?, ?, ?, ?)';

  db.query(
    queryString,
    [
      doctor.id_doctor,
      doctor.nombre,
      doctor.apellido,
      doctor.especialidad_id,
      doctor.consultorio,
      doctor.correo
    ],
    (err, result) => {
      if (err) { callback(err); }
      const id_doctor = (<OkPacket>result).insertId;
      callback(null, id_doctor);
    }
  );
};

//Ver todos los doctores
export const findAll = (callback: Function) => {
  const queryString = 'SELECT * FROM apisalud.doctor;';

  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
      return;
    }
    const rows = <RowDataPacket[]>result;
    const doctores: BasicDoctor[] = [];

    rows.forEach(row => {
      const doctor: Doctor = {
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

//Ver un doctor po id
export const findOne = (Id_Doctor: number, callback: Function) => {
  const queryString = "SELECT * FROM apisalud.doctor where id_doctor=?";
  db.query(queryString, Id_Doctor, (err, result) => {
    if (err) { callback(err); }

    const row = (<RowDataPacket>result)[0];
    const doctor: Doctor = {
      id_doctor: row.id_doctor,
      nombre: row.nombre,
      apellido: row.apellido,
      especialidad_id: row.especialidad_id,
      consultorio: row.consultorio,
      correo: row.correo
    }
    callback(null, doctor)
  });
};

//Actualizar datos de un doctor
export const update = (doctor: Doctor, callback: Function) => {
  const queryString = 'UPDATE doctor SET id_doctor =?, nombre=?, apellido=?, especialidad_id= ?, consultorio=? WHERE id_doctor=?;';
  db.query(
    queryString,
    [
      doctor.id_doctor,
      doctor.nombre,
      doctor.apellido,
      doctor.especialidad_id,
      doctor.consultorio,
      doctor.correo
    ],
    (err, result) => {
      if (err) { callback(err); }

      const numUpdate = (<OkPacket>result).affectedRows;
      callback(null, numUpdate);
    }
  );
};

//Eliminar a un doctor 
export const remove = (id_doctor: number, callback: Function) => {
  const queryString = 'DELETE FROM doctor WHERE id_doctor=?;';
  db.query(queryString,
    [
      id_doctor
    ],
    (err, resul) => {
      if (err) { callback(err); }
      const numDelete = (<OkPacket>resul).affectedRows
      callback(null, numDelete)
    });
};