export interface BasicPaciente {
    id_paciente: number;
}

export interface Paciente extends BasicPaciente {
    nombre: string;
    apellido: string;
    edad: number;
    telefono: string;
}

/*
En esta interfas te permitira crear un objeto con los atributos especificos para un paciente o usuario 
*/