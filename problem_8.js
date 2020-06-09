class Cuboid {
    constructor(height,width,length) {
        this.h = height;
        this.w = width;
        this.l = length;
    }
    surfaceArea() {
        return  (2*(this.l*this.w))+(2*(this.l*this.h))+(2*(this.h*this.w));
    }
    volume() {
        return this.l * this.w * this.h;
    }
}

class Cube extends Cuboid {
    constructor(length) {
        super(length);
        this.l = length;
    }
    surfaceArea() {
        return 6 * (Math.pow(this.l,2));
    }
    volume() {
        return Math.pow(this.l, 3);
    }
}

console.log('\n------------problem_8--------------');

let cuboidCal = new Cuboid(50,100,150);
console.log('Surface Area of Cuboid : '+cuboidCal.surfaceArea());
console.log('Volume of Cuboid : '+cuboidCal.volume());

let cubeCal = new Cube(50);
console.log('Surface Area of Cube : '+cubeCal.surfaceArea());
console.log('Volume of Cube : '+cubeCal.volume());

console.log('---------problem_8 ends--------------\n\n');