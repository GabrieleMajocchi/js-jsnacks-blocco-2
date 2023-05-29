
const peperonis = []
const pepType = ['red', 'yellow', 'green'];

for (i=0; i<10; i++){
peperonis.push(randomPeperoni(pepType));
}

console.log(peperonis)

// ---Generate random stats---


function randomPeperoni (listoftype){
    const peperone = {};
    peperone.type = randomtype(listoftype);
    peperone.weight = randomNum(100, 200)+' gr';
    peperone.lenght = randomNum(10, 15)+' cm';
    return peperone;
}


function randomtype (listoftype){
    const number = Math.floor(Math.random() * 2) + 0
    const type = listoftype[number]
    return type;
}

function randomNum (min, max){
    const number = Math.floor(Math.random() * max) + min
    return number;
}

