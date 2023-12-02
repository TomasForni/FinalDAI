class Pregunta{
    Id;
    Pregunta;
    Respuesta01;
    Respuesta02;
    Respuesta03;
    Respuesta04;
    RespuestaCorrecta;
    FechaCreacion;

    constructor(pregunta, respuesta01, respuesta02, respuesta03, respuesta04, respuestaCorrecta, fechaCreacion){
        this.Pregunta = pregunta;
        this.Respuesta01 = respuesta01;
        this.Respuesta02 = respuesta02;
        this.Respuesta03 = respuesta03;
        this.Respuesta04 = respuesta04;
        this.RespuestaCorrecta = respuestaCorrecta;
        this.FechaCreacion = fechaCreacion;
    }
}

export default Pregunta;