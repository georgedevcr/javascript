/**
 * Metodos de arrays y objetos
 * 
 */

 var personas = ["Jorge", "Diego", "Luis"];
 var persona = {0: {provincia: "San Jose", nombre: "Jorge", apellido: "Torres"}};
 var personaDos = {0: {provincia: "San Jose", nombre: "Jorge", apellido: "Torres"}};

 //ELIMINAR ELEMENTOS DEL ARRAY O DEL OBJETO
 function borrarElemento(){
    persona[0] = undefined;
    console.log(persona);
    personas.splice(2, 1);
    console.log(personas);
    delete personaDos[0];
    console.log(personaDos);
 }
//EQUIVALENTE A DOCUMENT READY
 $(function() {
   console.log( "ready!" );
});
//DOCUMENT READY
 $(document).ready(function(){
    //SELECTORES JQUERY
    let miVariableP = $('p'); //selector de etiqueta
    let miVariableIdentificador = $('#miIdentificador'); //selector de indentificador
    let miVariableConCss = $('.miClase'); //selector de clase
    //EVENTOS
    $('#miIdentificador').click(function(){
     
       $('#miElementoTres').html('<a onclick="otroMetodo()">Mi Boton</a>');
       //OBTENER VALORES DE INPUTS o de formularios
      // let miValor = $('#miElementoCuatro').val(); //obtiene un valor de un input o select
      $('#miElementoSeis').append("<p class=''>Texto append</p>");// ANTES DE TERMINAR EL NODO LO AGREGA
      $('#miElementoSeis').prepend("<h1>titulo preppend</h1>"); // DESPUES DE EMPEZAR EL NODO LO AGREGA
      //$('#elementoDos').remove();
      });

    $('#miIdentificadorCinco').change(function(){
       //RECIBIR EL ELEMENTO QUEL HIZO CHANGE
       let elementoQueHizoClick = $(this);
       //Esto se ejecuta cuando se cambia el valor
    });

   $(document).on('click','#miIdentificador',function(){
    //aca va el mentodo que ustedes quieran;
   })

   //FOREACH 
   $('li').each(function(index, element){
      $(this).append("otro elemento "+index );
      console.log('Elemento ===> ', element);
      console.log($(this));
   });

 });

 //RETO DE HOY ES 
 // Generar un metodo para enceder una luz del arbolito
 // 1 metodo, 1 bolita, por persona
 // 1 branch por persona: con el nombre de la persona
 // 1 pull request cuando lo tenga terminado
 /**
  * SEGUN EL ID DEL DIV
  * 1- Andres barrientos
  * 2- Carlos Berrrocal
  * 3- Daniel Cordero
  * 4- Diego Mejia
  * 5- Jose Daniel Benavides
  * 6- Luis Diego Zuñiga
  * 7- Raul Rodriguez
  * 8- Ronald Meses Sanchez
  * 9- Yossy Muñoz
  * 10- Salvador 
  */











