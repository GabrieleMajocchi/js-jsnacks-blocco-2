
const cars = []
const fuel = ['benzina', 'diesel', 'gpl', 'elettrico', 'metano'];
const brand = ['Ferrari', 'Lamborghini', 'Porsche', 'Fiat', 'Alfa Romeo']


for (i=0; i<15; i++){
    cars.push(randomcar(fuel, brand));
}

console.log(cars);


let benz = [];

for (i=0; i<cars.length; i++){
    if(cars[i].fuel === 'benzina'){
        benz.push(cars[i]);
    }
}

console.log(benz);

let diesel = [];

cars.forEach(element => {
    if(element.fuel === 'diesel'){
        diesel.push(element);
    }
});

console.log(diesel);

let other = [];

cars.forEach(element => {
    if(element.fuel !== 'diesel' && element.fuel !== 'benzina'){
        other.push(element);
    }
});

console.log(other);

// ---Generate random stats---


function randomcar (carfuel, carbrand){
    const car = {};
    car.fuel = randomtype(carfuel);
    car.brand = randomtype(carbrand);
    car.model = 'supa fast';
    return car;
}


function randomtype (listoftype){
    const number = Math.floor(Math.random() * 4) + 0
    const type = listoftype[number]
    return type;
}

function randomNum (min, max){
    const number = Math.floor(Math.random() * max) + min
    return number;
}

