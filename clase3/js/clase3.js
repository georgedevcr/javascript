var resultado = 0;
let tmpNumeroEnCaja = parseInt(document.getElementById('divResultado').innerText);

function mostrarResultado(valoresCaja) {
    if (tmpNumeroEnCaja === 0) {
        alert("No puedo hacer nada es igual a 0 ");
        tmpNumeroEnCaja = 1;
        //return asi corta la ejecucion y no continua con el codigo
        return;
    }

    console.log('VALORES EN CAJA2 ==> ', valoresCaja);
    // let suma = '1+4';
    // let multiplicar = '3 * 4';
    // console.log(eval(suma))
    // console.log(eval(multiplicar));


    if(valoresCaja===''){
        return;
    }else{
        document.getElementById('divResultado').innerText = valoresCaja;
         return;
    }

    //@todo mostrar resultado
    let miDiv = 'divResultado';
    //document.getElementById(miDiv).innerHTML = "<b>RESULTADO => "+resultado+" </b>";
    document.getElementById('divResultado').innerText = resultado;
    //ESTO SUMA 1 A LA VARIABLE 'GLOVAL'
    resultado++;
}

function agregarSuma() {
    console.log('AGREGA SUMA => ', tmpNumeroEnCaja)
    let tmpTextoConSuma = tmpNumeroEnCaja.toString() + '+';
    mostrarResultado(tmpTextoConSuma);
}

// TAREA: Elaborar un HTML y javascript necesarios para visualizar un SLIDER
// Deben utilizar dos botones con evento onclick 
// utilizar metodos y funciones
// utilizar variables


/*
Proyecto: TODO: (lista de pendientes o cosas por hacer) (HTML, CSS, Javascript)
50% Exposicion
50% Codigo 
1- El usuario puede agregar un TODO
2- El usuario puede editar un TODO 
3- El usuario puede ver sus Pendientes
4- El usuario puede cambiar el estado de un TODO
5- El usuario puede filtrar pendientes
6- El usuario puede Buscar un pendiente
7- El usuario puede eliminar un todo 
8- El todo puede ser asignado a otro usuario
*/



