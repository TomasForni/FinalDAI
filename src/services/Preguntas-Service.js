import config from '../../dbconfig.js';
import sql from 'mssql';
import Escribir from '../modules/log-helper.js';

class PreguntaService {
    getAll = async () => {
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM Preguntas');
            returnEntity = result.recordsets;
        } catch (error) {
            console.log(error);
            Escribir(error);
        }
        return returnEntity;
    }
    getById = async (id) => {
        let returnEntity = null;

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT * FROM Preguntas WHERE id = @pId');
            returnEntity = result.recordsets[0][0]
        } catch (error) {
            console.log(error);
        }

        return returnEntity;
    }
    insert = async (pregunta, echaCreacion) => {
        let rowsAffected = 0;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pregPregunta', sql.VarChar, pregunta.Pregunta)
                .input('pregRespuesta01', sql.VarChar, pregunta.Respuesta01)
                .input('pregRespuesta02', sql.VarChar, pregunta.Respuesta02)
                .input('pregRespuesta03', sql.VarChar, pregunta.Respuesta03)
                .input('pregRespuesta04', sql.VarChar, pregunta.Respuesta04)
                .input('pregRespuestaCorrecta', sql.Int, pregunta.RespuestaCorrecta)
                .input('pregFechaCreacion', sql.DateTime, pregunta.FechaCreacion)
                .query('INSERT INTO Preguntas(Pregunta, Respuesta01, Respuesta02, Respuesta03, Respuesta04, RespuestaCorrecta, FechaCreacion) VALUES (@pregPregunta, @pregRespuesta01, @pregRespuesta02, @pregRespuesta03, @pregRespuesta04, @pregRespuestaCorrecta, @pregFechaCreacion)');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    
    update = async (pregunta) => {
        let rowsAffected = 0;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pregId', sql.Int, pregunta.Id)
                .input('pregPregunta', sql.VarChar, pregunta.Pregunta)
                .input('pregRespuesta01', sql.VarChar, pregunta.Respuesta01)
                .input('pregRespuesta02', sql.VarChar, pregunta.Respuesta02)
                .input('pregRespuesta03', sql.VarChar, pregunta.Respuesta03)
                .input('pregRespuesta04', sql.VarChar, pregunta.Respuesta04)
                .input('pregRespuestaCorrecta', sql.Int, pregunta.RespuestaCorrecta)
                .input('pregFechaCreacion', sql.DateTime, pregunta.FechaCreacion)
                .query(`
                    UPDATE Preguntas 
                    SET 
                        Pregunta = @pregPregunta,
                        Respuesta01 = @pregRespuesta01,
                        Respuesta02 = @pregRespuesta02,
                        Respuesta03 = @pregRespuesta03,
                        Respuesta04 = @pregRespuesta04,
                        RespuestaCorrecta = @pregRespuestaCorrecta,
                        FechaCreacion = @pregFechaCreacion
                    WHERE Id = @pregId
                `);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    
    deleteById = async (id) => {
        let rowsAffected = 0;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('delete from Preguntas where Id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default PreguntaService;