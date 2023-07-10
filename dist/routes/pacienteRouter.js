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
exports.pacienteRouter = void 0;
const express_1 = __importDefault(require("express"));
const pacienteModel = __importStar(require("../controllers/paciente"));
const pacienteRouter = express_1.default.Router();
exports.pacienteRouter = pacienteRouter;
//Crea un nuevo paciente
pacienteRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPaciente = req.body;
    pacienteModel.create(newPaciente, (err) => {
        if (err) {
            return res.status(500).json({ 'message hola': err.message });
        }
        res.status(200).json(newPaciente);
    });
}));
//Ver todos los pacientes de la BD
pacienteRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return pacienteModel.findAll((err, paciente) => {
        if (err) {
            return res.status(500).json({ 'error Message': err.message });
        }
        res.status(200).json({ 'Datos de los pacientes': paciente });
    });
}));
//Ver paciente por id
pacienteRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Id_Paciente = Number(req.params.id);
    pacienteModel.findOne(Id_Paciente, (err, paciente) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(200).json({ 'Datos del paciente': paciente });
    });
}));
//Actualiza el paciente por id
pacienteRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const paciente = req.body;
    pacienteModel.update(paciente, (err, numUpdate) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(200).json({ 'Datos actualizados': numUpdate });
    });
}));
//Elimina el paciente por id
pacienteRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_paciente = parseInt(req.params.id);
    pacienteModel.remove(id_paciente, (err, numDelete) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(200).json({ 'Paciente eliminado corectamente': numDelete });
    });
}));
