import express, { Request, Response } from 'express';
import * as pacienteModel from '../controllers/paciente';
import { Paciente, BasicPaciente } from '../models/paciente';

const pacienteRouter = express.Router();

//Crea un nuevo paciente
pacienteRouter.post('/', async (req: Request, res: Response) => {
    const newPaciente: Paciente = req.body;
    pacienteModel.create(newPaciente, (err: Error) => {
        if (err) {
            return res.status(500).json({ 'message hola': err.message });
        }
        res.status(200).json(newPaciente);
    });
});

//Ver todos los pacientes de la BD
pacienteRouter.get('/', async (req: Request, res: Response) =>
    pacienteModel.findAll((err: Error, paciente: Paciente[]) => {
        if (err) {
            return res.status(500).json({ 'error Message': err.message });
        }
        res.status(200).json({ 'Datos de los pacientes': paciente });
    }));

//Ver paciente por id
pacienteRouter.get('/:id', async (req: Request, res: Response) => {
    const Id_Paciente = Number(req.params.id);
    pacienteModel.findOne(Id_Paciente, (err: Error, paciente: Paciente) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(200).json({ 'Datos del paciente': paciente });
    });
});

//Actualiza el paciente por id
pacienteRouter.put('/:id', async (req: Request, res: Response) => {
    const paciente: Paciente = req.body;
    pacienteModel.update(paciente, (err: Error, numUpdate: number) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(200).json({ 'Datos actualizados': numUpdate });
    });
});

//Elimina el paciente por id
pacienteRouter.delete('/:id', async (req: Request, res: Response) => {
    const id_paciente: number = parseInt(req.params.id);
    pacienteModel.remove(id_paciente, (err: Error, numDelete: number) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(200).json({ 'Paciente eliminado corectamente': numDelete });
    });
});



export { pacienteRouter };




