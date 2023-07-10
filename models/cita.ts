import {BasicEspecialidades, Especialidad} from "./especialidad";
import {BasicPaciente, Paciente } from "./paciente";
import {Doctor} from "./doctor";

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

