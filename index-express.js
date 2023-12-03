import express from "express";

import Pregunta from "./src/models/Pregunta.js";

import PreguntaService from "./src/services/Preguntas-Service.js";

let svcPregunta = new PreguntaService();


const app = express();
const port = 5000;
app.use(express.json());

app.get("/api/preguntas", async (req, res) => {
  try {
    let getAllResult = await svcPregunta.getAll();
    res.status(200).send(getAllResult);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
});

app.get("/api/preguntas/:id", async (req, res) => {
  try {
    let id = req.params.id
    let eleccion = req.query.respuesta
      let pregunta = await svcPregunta.getById(id);
      if (pregunta != null && pregunta != undefined){
        if(eleccion==pregunta.RespuestaCorrecta){
          res.status(200).send("true");
        }else{
          res.status(200).send("false");
        }   
      }else{
        res.status(404).send("ERROR. La pregunta no existe");
      }
      
  } catch (error) {
    res.send("error");
  }
});


app.delete('/api/preguntas/:id', async (req, res) => {
  let id = req.params.id
  console.log(req.params.id);
  let borrar = await svcPregunta.deleteById(id);
  res.send(borrar);
})

app.post("/api/preguntas", async (req, res) => {
  try {
    console.log(req.body);
    let svc2 = new Pregunta();
    let preguntaNew = new svc2.constructor(
      req.body.Pregunta,
      req.body.Respuesta01,
      req.body.Respuesta02,
      req.body.Respuesta03,
      req.body.Respuesta04,
      req.body.RespuestaCorrecta,
      req.body.FechaCreacion
    );
    let Insert = await svcPregunta.insert(preguntaNew);
    res.send(Insert);
  } catch (error) {
    res.send("error");
  }
});

app.put("/api/preguntas/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let preguntaToUpdate = await svcPregunta.getById(id);

    if (preguntaToUpdate) {
      // Actualizar propiedades solo si se proporcionan en el body
      preguntaToUpdate.Pregunta = req.body.Pregunta || preguntaToUpdate.Pregunta;
      preguntaToUpdate.Respuesta01 = req.body.Respuesta01 || preguntaToUpdate.Respuesta01;
      preguntaToUpdate.Respuesta02 = req.body.Respuesta02 || preguntaToUpdate.Respuesta02;
      preguntaToUpdate.Respuesta03 = req.body.Respuesta03 || preguntaToUpdate.Respuesta03;
      preguntaToUpdate.Respuesta04 = req.body.Respuesta04 || preguntaToUpdate.Respuesta04;
      preguntaToUpdate.RespuestaCorrecta = req.body.RespuestaCorrecta || preguntaToUpdate.RespuestaCorrecta;
      preguntaToUpdate.FechaCreacion = req.body.FechaCreacion || preguntaToUpdate.FechaCreacion;

      let Update = await svcPregunta.update(preguntaToUpdate);
      res.send(Update);
    } else {
      res.status(404).send("ERROR. La pregunta no existe");
    }
  } catch (error) {
    res.status(500).send("Error interno del servidor");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});