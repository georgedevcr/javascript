//OBJETOS
//PERSONA->NOMBRE
/*
PERSONA-> APELLIDO
PERSONA-> AMIGOS
               -> NOMBRE AMIGO 1
               -> APELLIDO AMIGO 1

div-> ID
DIV-> CLASS
DIV-> DATA
DIV-> EVENTOS ->
               ONCLICK
               ONCHANGE

*/

// objetos los indices pueden ser o enteros o strings
var persona = {provincia: "San Jose", nombre: "Jorge", apellido: "Torres"};
var personas = {
   0: { infoPersonal:
            {nombre: "Jorge", 
            apellido: "Torres", 
            provincia: "San Jose"},
        notificaciones: {
            0: {titulo: "primer notificacion", estado: "enviada"},
            1: {titulo: "Segundo elemento", estado: "rechazada"}
        }
    },
    1: { infoPersonal:
        {nombre: "Jorge", 
        apellido: "Torres", 
        provincia: "San Jose"},
    notificaciones: {
        0: {titulo: "primer notificacion", estado: "enviada"},
        1: {titulo: "Segundo elemento", estado: "rechazada"}
    }, 
    2: { infoPersonal:
        {nombre: "Jorge", 
        apellido: "Torres", 
        provincia: "San Jose"},
    notificaciones: {
        0: {titulo: "primer notificacion", estado: "enviada"},
        1: {titulo: "Segundo elemento", estado: "rechazada"}
    }
},
},

}

//arreglo: maneja indices enteros
var miArreglo = ["Jorge", "Torres", "Aguero"];


function mostrarMisDatos(){
 
    Object.keys(personas).forEach(function (key) {
        console.log(key, personas[key].notificaciones);
    });
    /** solo para recorrer arrays */
    for(var i= 0; i<= personas.length; i++){
        console.log(personas[i].infoPersonal.nombre);
    }
}





