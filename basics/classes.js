class Rectangle {
    //There can be only one constructor
    constructor(h, w) {
        this.h = 20;
        this.w = 10;
    }
    //getter
    get area() {
        return this.calcArea
    }
    //Method
    calcArea() {
        return this.h * this.w;
    }
};

const cuadrado = new Rectangle();

console.log(cuadrado);
console.log(cuadrado.h);
console.log(cuadrado.w);

const cuadrado_2 = new Rectangle();
cuadrado_2.h = 100;
cuadrado_2.w = 50;

console.log(cuadrado_2);

console.log(cuadrado_2.area());
