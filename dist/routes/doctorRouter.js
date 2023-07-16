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
exports.doctorRouter = void 0;
const express_1 = __importDefault(require("express"));
const doctorModel = __importStar(require("../controllers/doctor"));
const doctorRouter = express_1.default.Router();
exports.doctorRouter = doctorRouter;
//Crea un nuevo doctor.
doctorRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newDoctor = req.body;
    doctorModel.create(newDoctor, (err) => {
        if (err) {
            return res.status(500).json({ 'Error al crear': err.message });
        }
        res.status(200).json({ "registro exitoso": newDoctor });
    });
}));
//Ver todos los dostores.
doctorRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return doctorModel.findAll((err, doctor) => {
        if (err) {
            return res.status(500).json({ 'Error ': err.message });
        }
        res.status(200).json({ 'Doctores registrados': doctor });
    });
}));
//Ver doctor por id.
doctorRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_doctor = Number(req.params.id);
    if (isNaN(id_doctor)) {
        return res.status(400).json({ "message": "Numero del id invalido" });
    }
    doctorModel.findOne(id_doctor, (err, doctor) => {
        if (err) {
            return res.status(500).json({ 'Error': err.message });
        }
        res.status(200).json({ 'Datos del doctor': doctor });
    });
}));
//Acualizar doctor por id.
doctorRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const doctor = req.body;
    doctorModel.update(doctor, (err, numUpdate) => {
        if (err) {
            return res.status(500).json({ 'No se puede actualizar': err.message });
        }
        res.status(200).json({ 'Datos actualizados': numUpdate });
    });
}));
//Eliminar docotor por id.
doctorRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_doctor = parseInt(req.params.id);
    doctorModel.remove(id_doctor, (err, numDelete) => {
        if (err) {
            return res.status(500).json({ 'Error al eliminar': err.message });
        }
        res.status(200).json({ 'Doctor eliminado corectamente': numDelete });
    });
}));
