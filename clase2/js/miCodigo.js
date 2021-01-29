
/**
 * Funcion para sumar las dos variables
 * @author Jorge Torres <jorge.torres@ucreativa.com>
 * @version 1.0.2
 * @param {*} variableUno 
 * @param {*} variableDos 
 * @returns total numeric
 */
function sumarDosVariables(variableUno, variableDos){

    if(parseInt(variableUno)>10 && parseInt(variableDos)>=30){
        let total = parseInt(variableDos) + parseInt(variableUno);
        return total;
    }else{
        let total = parseInt(variableDos) - parseInt(variableUno);
        return total; 
    }
}

/**
 * Funcion para obtener la info del html y enviarla al metodo para sumar
 */
function procesarInfo(){
    //obtiene el valor en la caja input
    let primerNumero = document.getElementById('txtNumberOne').value;
    let segundoNumero = document.getElementById('txtNumberTwo').value;
    console.log('primer numero ===> ', primerNumero);
    console.log('segundo numero ====> ', segundoNumero);

    // asigna a una variable el resultado del metodo
    let resultado = sumarDosVariables(primerNumero, segundoNumero);

    // asigna en el div el resultado de la variable
    document.getElementById('divResultado').innerHTML = 'Resultado => '+resultado;
}