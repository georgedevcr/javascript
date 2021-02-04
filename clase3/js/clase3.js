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
    /

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



