/**
 * Metodos de arrays y objetos
 * 
 */

 var personas = ["Jorge", "Diego", "Luis"];
 var persona = {0: {provincia: "San Jose", nombre: "Jorge", apellido: "Torres"}};

//AGREGAR ELEMENTOS AL ARRAY
function agregarPersona(valor){
   var valor = document.getElementById("miValor").value;
   personas.push(valor);
   console.log(personas);
   document.getElementById("miValor").value = '';
}

//AGREGAR ELEMENTOS AL OBJETO
function agregarInfoPersona(){
   const tmpObj = {otraPersona: "Luis", otroApellido: "Vega"};
   Object.assign(persona, {1: tmpObj});
   Object.assign(persona, {2: tmpObj});
   console.log(persona);
}

//2do Entregable
//- Agregar el o los metodos para agregar elementos del todo
//- Debe actualizar automaticamente el listado de todos sin perder la data o 
// los datos que ya contiene
//- Debe Indicarle al usuario que la accion se proceso eficazmente, este 
//Se debe mostrar en el html y no como un alert



