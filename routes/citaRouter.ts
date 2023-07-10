import express, { Request, Response } from "express";
import * as citaModel from "../controllers/cita";
import { Cita, BasicCita } from "../models/cita";

const citaRouter = express.Router();

//Crea una cia nueva
citaRouter.post("/", async (req: Request, res: Response) => {
    const newCita: Cita = req.body;
    citaModel.create(newCita, (err: Error, Id_Cita: number) => {
        if (err) {
            return res.status(400).json({ "message": err.message })
        }
        res.status(200).json({ "Id_Cita": Id_Cita });
    });
});

//Ver todos los datos de la citas 
citaRouter.get('/', async (req: Request, res: Response) =>
    citaModel.findAll((err: Error, cita: Cita[]) => {
        if (err) {
            return res.status(400).json({ 'error Message': err.message });
        }
        res.status(200).json({ 'Datos de la citas': cita });
    }));

//Ver todos los datos de ina cita por id del paciente
citaRouter.get('/:id', async (req: Request, res: Response) => {
    const id_cita = Number(req.params.id);
    citaModel.findOne(id_cita, (err: Error, cita: Cita) => {
        if (err) {
            return res.status(500).json({ 'message': err.message })
        }
        res.status(200).json({ 'Datos de tu cita': cita });
    });
});

//Actualiza la cita a otra especialidad por id de paciente
citaRouter.put('/:id', async (req: Request, res: Response) => {
    const cita: Cita = req.body;
    citaModel.update(cita, (err: Error, numUpdate: number) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(200).json({ 'Datos actualizados': numUpdate });
    });
});

//Elimina la cita del paciente
citaRouter.delete('/:id', async (req: Request, res: Response) => {
    const id_cita: number = parseInt(req.params.id);
    citaModel.remove(id_cita, (err: Error, numDelete: number) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(200).json({ 'Tu cita fue eliminada corectamente': numDelete });
    });
});



export { citaRouter }

