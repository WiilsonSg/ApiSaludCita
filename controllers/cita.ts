import { OkPacket, RowDataPacket } from "mysql2";
import { db } from "../db";
import { Cita, citaDetalles } from "../models/cita";

//Crea una nueva cita 
export const create = (cita: Cita, callback: Function) => {
  const queryString = "INSERT INTO cita(paciente_id, especialidad_id) VALUES(?, ?);";

  db.query(
    queryString,
    [
      cita.paciente_id,
      cita.especialidad_id
    ],
    (err, result) => {
      if (err) { callback(err); }

      const Id_Cita = (<OkPacket>result).insertId;
      callback(null, Id_Cita);
    }
  );
};

//Obtener todas las citas con toda la información.
export const findAll = (callback: Function) => {
  const queryString =`
    SELECT c.id_cita, e.id_especialidad, e.nombre AS nombre_especialidad, c.paciente_id,
    p.nombre AS nombre_paciente, p.apellido AS apellido_paciente, p.edad, p.telefono,
    d.nombre AS nombre_doctor, d.apellido AS apellido_doctor,
    d.consultorio, d.correo
    FROM cita AS c
    JOIN paciente AS p ON c.paciente_id = p.id_paciente
    JOIN doctor AS d ON c.especialidad_id = d.especialidad_id
    JOIN especialidad AS e ON c.especialidad_id = e.id_especialidad;
    `;

  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
      return;
    }
    const rows = <RowDataPacket[]>result;
    const citas: citaDetalles[] = [];

    rows.forEach(row => {
      const cita: citaDetalles = {

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

//Obtener citas con toda la información por id del paciente.
export const findOne = (id_cita: number, callback: Function) => {
  const queryString =`
    SELECT c.id_cita, e.id_especialidad, e.nombre AS nombre_especialidad, c.paciente_id,
    p.nombre AS nombre_paciente, p.apellido AS apellido_paciente, p.edad, p.telefono,
    d.nombre AS nombre_doctor, d.apellido AS apellido_doctor,
    d.consultorio, d.correo
    FROM cita AS c
    JOIN paciente AS p ON c.paciente_id = p.id_paciente
    JOIN doctor AS d ON d.id_doctor
    JOIN especialidad AS e ON c.especialidad_id = e.id_especialidad 
    WHERE c.paciente_id=?;`;

  db.query(queryString, id_cita, (err, result) => {
    if (err) { callback(err); }

    const row = (<RowDataPacket>result)[0];
    const cita: citaDetalles = {

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


    }
    callback(null, cita)
  });
};

//Actualizar cita se puede cambiar por otra especialidad.
export const update = (cita: Cita, callback: Function) => {
  const queryString = 'UPDATE cita SET  paciente_id= ?, especialidad_id= ? WHERE id_cita=?;';
  db.query(
    queryString,
    [
      
      cita.paciente_id,
      cita.especialidad_id,
      cita.id_cita
    ],
    (err, result) => {
      if (err) { callback(err); }

      const numUpdate = (<OkPacket>result).affectedRows;
      callback(null, numUpdate);
    }
  );
};

//Eliminar cita. 
export const remove = (id_cita: number, callback: Function) => {
  const queryString = 'DELETE FROM cita WHERE id_cita=?;';
  db.query(queryString,
    [
      id_cita
    ],
    (err, resul) => {
      if (err) { callback(err); }
      const numDelete = (<OkPacket>resul).affectedRows
      callback(null, numDelete)
    });
};