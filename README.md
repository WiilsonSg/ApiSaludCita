# REST API para Gestión de Citas 🩺

*ApiSalud agendamiento de citas<br>*
_Este proyecto REST API permite getionar citas médicas con diferentes especialidades, almacena la información de pacientes, doctores y citas agendadas.
# Tecnologías Utilizadas 

Back End

<img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" width="120" height="120"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original-wordmark.svg" width="120" height="120">&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-plain.svg" width="80" height="80">&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/mysql/mysql-original-wordmark.svg" width="100" height="100">&nbsp;


Paquetes
- nodemon
- dotenv

Front End

<img src="https://github.com/devicons/devicon/blob/master/icons/angularjs/angularjs-original.svg" width="80" height="80">&nbsp;

frontEnd [apisalud]()


 ---
 Características
 ---
* 🚶 Crea pacientes y doctores.
* 👨‍⚕ Crea citas médicas con información de pacientes, doctores y especialidades.
* 🤕 Obten todas las citas médicas registradas.
* 😷 Obten una cita médica específica por su Id.
* 👾 Actualización de información personal de pacientes y doctores.
* 🏥 Actualización de información de una cita médica existente.
* ❌ Eliminar un paciente, doctor o cita médica por su Id.
---
Instalación y Configuración de ApiSalud 💻
---
Puedes clonar el reposotorio seguiendo estos pasos:

1. Abre tu terminal o línea de comandos.
2. Navega hasta el directorio donde deseas clonar el repositorio.
3. Ejecuta el siguiente comando:
```
https://github.com/WiilsonSg/ApiSaludCita.git
```

4. Instala los paquetes requeridos para que funcione el repo:
```
npm install 
```
5. Crea la base de datos en MySQL:
- [DB](https://github.com/WiilsonSg/ApiSaludCita/blob/main/scrip.sql)
  
6. Configura el archivo .env con tus datos:
- PORT=3000
- DB_HOST=127.0.0.1
- DB_USER=root
- DB_PWD=******
- DB_NAME=nameDB

7. Corre el el comando `npm run dev` para iniciar y ve a la url https://127.0.0.1:3000 en tu navegador.🤘

---
Endpoints 
---
Puedes ejecutarlos en [postman](https://www.postman.com/)

Ejecuta GET/POST/PUT/DELET

GET
```
http://127.0.0.1:3000/paciente/
```
enlista los pacientes registrados [img](https://github.com/WiilsonSg/ApiSaludCita/blob/main/imgGif/img/pacienteAll.png) puedes agregar el id para ver solo la informacion de un paciente [img](https://github.com/WiilsonSg/ApiSaludCita/blob/main/imgGif/img/pacienteOne.png)
```
http://127.0.0.1:3000/doctor
```
enlista los doctores registrados [img](https://github.com/WiilsonSg/ApiSaludCita/blob/main/imgGif/img/doctorAll.png) puedes agregar el id para ver solo la informacion de un doctor [img](https://github.com/WiilsonSg/ApiSaludCita/blob/main/imgGif/img/doctorOne.png)
```
http://127.0.0.1:3000/cita
```
enlista las citas agendadas por los pacientes mostrando la informacion  completa de la cita [img](https://github.com/WiilsonSg/ApiSaludCita/blob/main/imgGif/img/citaAll.png) agrega el id del paciente [img](https://github.com/WiilsonSg/ApiSaludCita/blob/main/imgGif/img/citaOne.png)
  
Capturas
---
<img src="https://github.com/WiilsonSg/ApiSaludCita/blob/main/imgGif/frontGet.gif"/>
Pacientes
<img src="https://github.com/WiilsonSg/ApiSaludCita/blob/main/imgGif/paciente.gif"/> 
<img src="https://github.com/WiilsonSg/ApiSaludCita/blob/main/imgGif/frontpostp.gif">
Doctores
<img src="https://github.com/WiilsonSg/ApiSaludCita/blob/main/imgGif/doctor.gif">
<img src="https://github.com/WiilsonSg/ApiSaludCita/blob/main/imgGif/frontcreard.gif">
Citas
<img src="https://github.com/WiilsonSg/ApiSaludCita/blob/main/imgGif/cita.gif">

---
GRUPO
---
* Wilson Serrato Garzón 

* [Natalia Mayiorqion](https://github.com/nmayorquin) 

* [Camilo Soto](https://github.com/Cks726)

Curso: BACK END INTERMEDIO ATENEA - Universidad Distrital - Todos a la U






