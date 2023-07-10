import express, { Request, Response } from 'express';
import * as especialidadModel from '../controllers/especialidad';
import { Especialidad, BasicEspecialidades } from '../models/especialidad';

const especialidadRouter = express.Router();

//Crea una especialidad nueva
especialidadRouter.post('/', async (req: Request, res: Response) => {
    const newEspecialidad: Especialidad = req.body;
    especialidadModel.create(newEspecialidad, (err: Error) => {
        if (err) {
            return res.status(400).json({ 'message': err.message });
        }
        res.status(200).json(newEspecialidad);
    });
});

//Ver todas las especialidades
especialidadRouter.get('/', async (req: Request, res: Response) =>
    especialidadModel.findAll((err: Error, especialidad: Especialidad[]) => {
        if (err) {
            return res.status(500).json({ 'error Message': err.message });
        }
        res.status(200).json({ 'Datos de la especilidad': especialidad });
    }));

//Elimina una especialidad por id
especialidadRouter.delete('/:id', async (req: Request, res: Response) => {
    const id_paciente: number = parseInt(req.params.id);
    especialidadModel.remove(id_paciente, (err: Error, numDelete: number) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(200).json({ 'Especialidad eliminada corectamente': numDelete });
    });
});

export { especialidadRouter };




