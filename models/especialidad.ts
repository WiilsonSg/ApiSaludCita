export interface BasicEspecialidades {
    id_especialidad: number;
}

export interface Especialidad extends BasicEspecialidades {
    nombre: string,
}

/*
Esta interfas te permitira solo crear una especialidad su id sera creado automaticamente en la DB. 
*/



