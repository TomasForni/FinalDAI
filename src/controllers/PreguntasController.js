import { Router } from 'express';
import Pregunta from '../models/Pregunta.js';
import PreguntaService from '../services/preguntas-services.js';


const router = Router();
const svcPregunta = new PreguntaService();

router.get('', async (req, res, next) => {
    try {
        let GetAll = await svcPregunta.getAll();
        res.send(GetAll);
    } catch (error) {
        res.send("error");
    }
});

router.get('/:id', async (req, res) => {
    try {
        let GetById = await svcPregunta.getById(req.params.id);
        res.send(GetById);
    } catch (error) {
        res.send("error");
    }
});

router.post('', async (req, res) => {
    try {
        let FechaCreacion=new Date()
        let pregunta = req.body;
        let Insert = await svcPregunta.insert(pregunta, FechaCreacion);
        res.send(Insert);
    } catch (error) {
        res.send("error");
    }
});

router.put('/:id', async (req, res) => {
    try {
        let svc2 = new Pregunta();
        let preguntaNew = new svc2.constructor(
            req.body.Id,
            req.body.Pregunta,
            req.body.Respuesta01,
            req.body.Respuesta02,
            req.body.Respuesta03,
            req.body.Respuesta04,
            req.body.RespuestaCorrecta,
            FechaCreacion=new Date()
        );
        let update = await svcPregunta.update(preguntaNew);
        console.log(preguntaNew.FechaCreacion)
        res.send(update);
    } catch (error) {
        res.send("error");
    }
});

router.delete('/:id',  async (req, res) => {
    try {
        let deleteById = await svcPregunta.deleteById(req.params.id);
        res.send(deleteById);
    } catch (error) {
        res.send("error");
    }
});

export default router; 