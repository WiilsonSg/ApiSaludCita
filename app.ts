import * as dotenv from 'dotenv';
import express from 'express';
import * as bodyParser from 'body-parser';
import { pacienteRouter } from './routes/pacienteRouter';
import { especialidadRouter } from './routes/especialidadRouter';
import { doctorRouter } from './routes/doctorRouter';
import { citaRouter } from './routes/citaRouter';
import { db } from './db';

const app = express();
dotenv.config();

app.use(bodyParser.json());

// Agrega middleware para permitir CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); //URL de Angular
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/paciente', pacienteRouter);
app.use('/especialidad', especialidadRouter);
app.use('/doctor', doctorRouter);
app.use('/cita', citaRouter);


//Conexión a bade de datos.
db.connect((err) => {
  if (err) {
    console.log('Database connection error');
  } else {
    console.log('Database Connected');
  }
});

app.listen(process.env.PORT, () => {
  console.log('Node server started running');
  console.log(`Go to http://${process.env.DB_HOST}:${process.env.PORT}`);
  console.log('Hostname:', process.env.DB_HOST);
  console.log('Port:', process.env.PORT);
});

 




