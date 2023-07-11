# REST API para Gestión de Citas 🩺

*ApiSalud agendamiento de citas<br>*
_Este proyecto REST API permite getionar citas médicas con deferentes especialidades, almacena la información de pacientes, doctores y citas agendadas.
# Tecnologías Utilizadas

<img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" width="100" height="100"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original-wordmark.svg" width="100" height="100">&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-plain.svg" width="70" height="70">&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/mysql/mysql-original-wordmark.svg" width="100" height="100">&nbsp;

Paquetes
- nodemon
- dotenv
 ---
 Características
 ---
* 🚶 Crea pacientes y doctores
* 👨‍⚕ Crea citas médicas con información de pacientes, doctores y especialidades.
* 🤕 Obten todas las citas médicas registradas.
* 😷 Obten una cita médica específica por su Id.
* 👾 Actualización de información personal de pacientes y doctores.
* 🏥 Actualización de información de una cita médica existente.
* ❌ Eliminar una paciente, doctor o cita médica por su Id.
---
Instalacón y Configuración de ApiSalud 💻
---
Puedes clonar el reposotorio seguiendo estos pasos:

1. Abre tu terminal o línea de comandos.
2. Navega hasta el directorio donde deseas clonar el repositorio.
3. Ejecuta el siguiente comando:
```
https://github.com/WiilsonSg/ApiSaludCita.git
```

4. Instala los paquetes requeridos para que funcione el repo
```
npm install 
```
5. Crea la base de datos en MySQL
- [DB] (https://github.com/WiilsonSg/ApiSaludCita/blob/main/scrip.sql)
  
6. Configura el archivo .env con tus datos
- PORT=3000
- DB_HOST=127.0.0.1
- DB_USER=root
- DB_PWD=******
- DB_NAME=nameDB

7. Corre el el comando `npm run dev` para iniciar y ve a la url https://127.0.0.1:3000 en tu navegador.🤘

---
Endpoints 
---
Puedes ejecutarlos en postman

Ejecuta GET/POST/PUT/DELET en
* http://127.0.0.1:3000/paciente
* http://127.0.0.1:3000/doctor
* http://127.0.0.1:3000/cita
  
Capturas
---
