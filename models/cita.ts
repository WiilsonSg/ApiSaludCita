import { Doctor } from "./doctor";
import { BasicEspecialidades, Especialidad } from "./especialidad";
import { BasicPaciente, Paciente } from "./paciente";

export interface BasicCita extends BasicCitaModel{
    id_cita: number
}

export interface Cita extends BasicCita{
    paciente_id?: Number,
    especialidad_id?: number
}


export interface citaDetalles extends Cita{
    especialidad: Especialidad,
    paciente:Paciente,
    doctor?:Doctor;
}

export interface BasicCitaModel {
    especialidad : BasicEspecialidades;
    paciente: BasicPaciente;
}

/*
Se definen varias interfaces para representar diferentes detalles de una cita médica, que incluye información
sobre el paciente, la especialidad y el doctor involucrados en la cita, se omite datos importantes o personales.
*/

