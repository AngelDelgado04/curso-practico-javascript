//Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm.`);

function perimetroCuadrado(lado){
    return lado *  4;
}; 

perimetroCuadrado();
//console.log(`El perimetro del cuadrado miden: ${perimetroCuadrado}cm.`);

function areaCuadrado(lado){
    return lado * lado;
} ;
areaCuadrado();
//console.log(`El area del cuadrado miden: ${areaCuadrado}cm^2.`);
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;


//console.log(`Los lados del triangulo miden ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm.`);

//const alturaTriangulo = 5.5;
//console.log(`La altura del triangulo es de ${alturaTriangulo}cm`);

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
};

perimetroTriangulo();
//console.log(`El perimetro del triangulo es de ${perimetroTriangulo}cm`);
function areaTriangulo(base,altura){
    return (base * altura) / 2;
};

areaTriangulo();
//console.log(`El area del triangulo es de ${areaTriangulo}cm^2`);


console.groupEnd();
//Codigo del circulo
console.group("Circulos");
//const radioCirculo = 4;
//const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
};

diametroCirculo();
//console.log(`El radio del circulo es: ${radioCirculo}cm, el diametro del circulo es: ${diametroCirculo}cm y PI es igual a ${PI}.`);

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};

perimetroCirculo();
//console.log(`El perimetro del circulo es ${perimetroCirculo}cm`);

function areaCirculo(radio){
    return (radio * radio) * PI;
};

areaCirculo();
//console.log(`El area del circulo es ${areaCirculo}cm^2`);

console.groupEnd();

//Aqui interactuamos con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
};

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulo3");
    const value1 = Number(input1.value); //base
    const input2 = document.getElementById("InputTriangulo4");
    const value2 = Number(input2.value); //altura

    const area = areaTriangulo(value1,value2);
    alert(area);
};

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert("El perimetro del circulo es: " + perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert("El area del circulo es: " + area);
}   