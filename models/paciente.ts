export interface BasicPaciente {
    id_paciente: number;
}

export interface Paciente extends BasicPaciente {
    nombre: string;
    apellido: string;
    edad: number;
    telefono: string;
}

