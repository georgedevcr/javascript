/** 1- onclick
 * 2- onchange
 * 3- onmouseover
 * 4- onkeydown
 * 5- onmouseout
 * 6- onload
 */

 //1 Evento onclick
 /**
  * Eliminar solo un elemento
  */
 function deleteElement(){
     const miElemento =  document.getElementById('divAeliminar');
     console.info(miElemento);
     miElemento.remove();
 }
/**
 * 
 * @param {*} idElemento Numero distintivo del elemento para amarrarlo o concatenarlo
 */
 function deleteOneElement(idElemento){
     console.log('PARAMETRO => ',idElemento);
     //divAeliminar-3 por ejemplo
     const divToDelete = 'divAeliminar-'+idElemento;
     console.log('string contatenado => ',divToDelete);
     document.getElementById(divToDelete).remove();
     //document.getElementById('divAeliminar-'+idElemento).remove();
 }

 /**
  * Funcion para agregar un elemento
  */
 function addElement(valor){
     if(valor=="agregar"){
        document.getElementById('divParaAgrega')
        .innerHTML = '<div><h1>Este es mi titulo</1></div>';
     }else{
        agregarUnNodo();
     }

 }

 function agregarUnNodo(){
    const miNuevoElemento = document.createElement("h1");
    //hasta aqui solo esta declarada
    const textoDelElemento = document.createTextNode("HOLA NUEVO TITULO");
    miNuevoElemento.appendChild(textoDelElemento);

    const padreDelElemento = document.getElementById("divPadre");
    padreDelElemento.appendChild(miNuevoElemento);

    // agrega evento on click de forma dinamica / otra forma
    padreDelElemento.addEventListener("click", agregarTitulo);

 }

 function agregarTitulo(){
    document.getElementById('divParaAgregarTitulo')
    .innerHTML = '<div><h1>Este es mi otro titulo</1></div>';
 }

