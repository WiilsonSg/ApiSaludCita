export interface BasicDoctor {
    id_doctor?: number
}

export interface Doctor extends BasicDoctor {
    nombre: string,
    apellido: string,
    especialidad_id?: number,
    consultorio: string,
    correo: string
}

/*
En está interfas te permitira crear objetos co atributos específicos y asegurarte de que cumplan ciertos requisitos
puedes usarla para crear diferentes doctores con los datos solicitados.
*/