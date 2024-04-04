function identificarMayorEdad()
{
    //Identificar si es mayor o menor edad
    let edad = prompt("Por favor ingrese su Edad: ");

    if(edad >= 18 ){
        alert(`Es mayor de edad - tiene: ${edad}`);
    } else {
        alert(`Es menor de Edad - tiene: ${edad}`)
    }

}         