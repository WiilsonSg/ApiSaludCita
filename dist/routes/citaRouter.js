"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.citaRouter = void 0;
const express_1 = __importDefault(require("express"));
const citaModel = __importStar(require("../controllers/cita"));
const citaRouter = express_1.default.Router();
exports.citaRouter = citaRouter;
//Crea una cia nueva
citaRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newCita = req.body;
    citaModel.create(newCita, (err, Id_Cita) => {
        if (err) {
            return res.status(400).json({ "message": err.message });
        }
        res.status(200).json({ "Id_Cita": Id_Cita });
    });
}));
//Ver todos los datos de la citas 
citaRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return citaModel.findAll((err, cita) => {
        if (err) {
            return res.status(400).json({ 'error Message': err.message });
        }
        res.status(200).json({ 'Datos de la citas': cita });
    });
}));
//Ver todos los datos de ina cita por id del paciente
citaRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_cita = Number(req.params.id);
    citaModel.findOne(id_cita, (err, cita) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(200).json({ 'Datos de tu cita': cita });
    });
}));
//Actualiza la cita a otra especialidad por id de paciente
citaRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cita = req.body;
    citaModel.update(cita, (err, numUpdate) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(200).json({ 'Datos actualizados': numUpdate });
    });
}));
//Elimina la cita del paciente
citaRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_cita = parseInt(req.params.id);
    citaModel.remove(id_cita, (err, numDelete) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(200).json({ 'Tu cita fue eliminada corectamente': numDelete });
    });
}));
