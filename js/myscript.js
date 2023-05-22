
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

let numbers = 0;

const numamm = 10;

for (let i = 1 ; i <= 10 ; i++){
    numbers = numbers + i;
    console.log(numbers);
}

const media = numbers / numamm;

console.log('Il totale dei numeri è; '+numbers);
console.log('la media dei numeri è: '+ media);


