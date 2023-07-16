import express, { Request, Response } from 'express';
import * as doctorModel from '../controllers/doctor';
import { Doctor } from '../models/doctor';

const doctorRouter = express.Router();

//Crea un nuevo doctor.
doctorRouter.post('/', async (req: Request, res: Response) => {
    const newDoctor: Doctor = req.body;
    doctorModel.create(newDoctor, (err: Error) => {
        if (err) {
            return res.status(500).json({ 'Error al crear': err.message });
        }
        res.status(200).json({"registro exitoso": newDoctor});
    });
});

//Ver todos los dostores.
doctorRouter.get('/', async (req: Request, res: Response) =>
    doctorModel.findAll((err: Error, doctor: Doctor[]) => {
        if (err) {
            return res.status(500).json({ 'Error ': err.message });
        }
        res.status(200).json({ 'Doctores registrados': doctor });
    }));

//Ver doctor por id.
doctorRouter.get('/:id', async (req: Request, res: Response) => {
    const id_doctor = Number(req.params.id);
    if(isNaN(id_doctor)){
        return res.status(400).json({"message":"Numero del id invalido"})
    }
    doctorModel.findOne(id_doctor, (err: Error, doctor: Doctor) => {
        if (err) {
            return res.status(500).json({ 'Error': err.message })
        }
        res.status(200).json({ 'Datos del doctor': doctor });
    });
});

//Acualizar doctor por id.
doctorRouter.put('/:id', async (req: Request, res: Response) => {
    const doctor: Doctor = req.body;
    doctorModel.update(doctor, (err: Error, numUpdate: number) => {
        if (err) {
            return res.status(500).json({ 'No se puede actualizar': err.message });
        }
        res.status(200).json({ 'Datos actualizados': numUpdate })
    });
});

//Eliminar docotor por id.
doctorRouter.delete('/:id', async (req: Request, res: Response) => {
    const id_doctor: number = parseInt(req.params.id);
    doctorModel.remove(id_doctor, (err: Error, numDelete: number) => {
        if (err) {
            return res.status(500).json({ 'Error al eliminar': err.message });
        }
        res.status(200).json({ 'Doctor eliminado corectamente': numDelete })
    });
});



export { doctorRouter };



