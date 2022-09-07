class Rectangle {
    //There can be only one constructor
    constructor(h, w) {
        this.h = h;
        this.w = w;
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

const cuadrado = new Rectangle(2,4);

console.log(cuadrado);
console.log(cuadrado.h);
console.log(cuadrado.w);

const cuadrado_2 = new Rectangle(20,30);
cuadrado_2.h = 100;
cuadrado_2.w = 50;

console.log(cuadrado_2);

console.log(cuadrado_2.area());

const cuadrado_3 = new Rectangle(50, 50);
console.log(cuadrado_3.area());