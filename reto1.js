function calcularAltura(){
    const lado1 = document.getElementById("InputLado1")
    const value1 = Number(lado1.value);
    const lado2 = document.getElementById("InputLado2")
    const value2 = Number(lado2.value);
    const base = document.getElementById("InputBase")
    const value3 = Number(base.value);

    if (value1 === value2 && value1 != base) {
        const altura = alturaTriangulo(value1,value3);
        alert(altura);
    } else{
        alert("Las medidas no corresponden a un triangulo isoseles")
    }

};

function alturaTriangulo(lado,base){
    return Math.sqrt((lado**2)-((base**2)/4));
};