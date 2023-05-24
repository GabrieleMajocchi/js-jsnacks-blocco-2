
// ---Primo Snack---

// const UserNumbers = [];

// let sum = 0;
// let i = 0;


// while(sum < 50){
    
//     UserNumbers.push(parseInt(prompt()));
//     sum = sum + UserNumbers[i];
//     i++;

// }


// ----Secondo snack----

// let rightNumber = Math.floor(Math.random() * 100) + 1;

// console.log(rightNumber)

// const Sendit = document.querySelector('button');

// let i = 0;

// win = false


//     sendit.addEventListener('click', 
//         function(){
//             if(win == false){
//                 i++;

//                 let number = document.getElementById('number').value;

//                 number = parseInt(number);

//                 if(number === rightNumber){
//                     document.getElementById('result').innerHTML = 'Complimenti hai azzeccato il numero! <br> Con un totale di:'+i+' tentativi';
//                     win = true
//                 }else if (number < rightNumber){
//                     document.getElementById('result').innerHTML = 'Numero errato, il numero da indovinare è più alto, sei al tentativo numero: '+i;
//                 }else if (number > rightNumber){
//                     document.getElementById('result').innerHTML = 'Numero errato, il numero da indovinare è più basso, sei al tentativo numero: '+i;
//                 }
//             }
//         }
//     )


// ---terzo Snack---

// let numbers = 0;

// const numamm = 10;

// for (let i = 1 ; i <= 10 ; i++){
//     numbers = numbers + i;
//     console.log(numbers);
// }

// const media = numbers / numamm;

// console.log('Il totale dei numeri è; '+numbers);
// console.log('la media dei numeri è: '+ media);



// // ----quarto Snack----

// let firstword = prompt('inserisci una parola');

// let secondword = prompt('inserisci una parola');

// function check (v1, v2){
//     if(v1 == v2){
//         return true;
//     }
//     return false;
// }

// let samelenght = check(firstword.length, secondword.length);

// if(samelenght){
//     console.log(firstword+' '+secondword);
// }else if(firstword.length < secondword.length){
//     console.log(secondword);
// }else{
//     console.log(firstword);
// }


// ----quinto snack----
let array = [];
let i = 0;

nocopy(5);


//------------------
// ----Functions----
//------------------

/**
 * A function that will add an ammoun of random number that are not the same between them based on how many elements we ask
 */
function nocopy(elements){
    
    while (array.length < elements){
        let randomm = random(1,5)
        if (!array.includes(randomm)){
            array.push(randomm);
        }
    }
    console.log(array)
}

/**
 * A function that will return a random number that are between max and min
 */
function random(min, max){
    let random = Math.floor(Math.random() * max) + min;
    return random;
}