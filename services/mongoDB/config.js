require('dotenv').config(); // traeme las variables de entorno
const mongoose = require('mongoose'); // moongose es una libreria para conectarme a la base de datos

const dbConnection = async()=>{
    try{
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.HOST,{useNewUrlParser: true, useUnifiedTopology: true,retryWrites:true}) //la conexion
        .then(()=>{console.log('Connected to mongoose');}) // respuesta positiva
        .catch(err => console.log('Could not connect to mongoose',err)); // respuesta negativa
    }

    catch(error){
        throw new Error('Database Error');
    }
}

module.exports = {
    dbConnection
}