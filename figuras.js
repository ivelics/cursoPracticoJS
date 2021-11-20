// Cuadrado

console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}


function areaCuadrado(lado) {
    return lado ** 2;
}


console.groupEnd();

// Triangulo
console.group("Triangulo");


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

console.group("Ciruclo");
// Triangulo
const radioCirculo = 4;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCiruclo(radio) {
    return diametroCirculo(radio) * Math.PI;
}

function areaCirculo(radio) {
    return (radioCirculo ** 2) * Math.PI;
}

console.groupEnd();

function calcularPerimCuad() {
    let e = document.getElementById('ladoCuadrado');
    let perimetro = perimetroCuadrado(e.value);
    alert('El perimetro del cuadrado es: ' + perimetro);
}