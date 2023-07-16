import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import express from 'express';
import { db } from './db';
import { citaRouter } from './routes/citaRouter';
import { doctorRouter } from './routes/doctorRouter';
import { especialidadRouter } from './routes/especialidadRouter';
import { pacienteRouter } from './routes/pacienteRouter';

const app = express();
dotenv.config();

app.use(bodyParser.json());

// AConexión con el FrontEnd en Angular
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); //URL de Angular
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Endpoints
app.use('/paciente', pacienteRouter);
app.use('/especialidad', especialidadRouter);
app.use('/doctor', doctorRouter);
app.use('/cita', citaRouter);


//Conexión a la Bade de Datos.
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

 




