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