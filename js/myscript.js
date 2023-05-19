
// ---Primo Snack---

// const UserNumbers = [];

// let sum = 0;
// let i = 0;


// while(sum < 50){
    
//     UserNumbers.push(parseInt(prompt()));
//     sum = sum + UserNumbers[i];
//     i++;

// }


let rightNumber = Math.floor(Math.random() * 100) + 1;

console.log(rightNumber)

const Sendit = document.querySelector('button');

let i = 0;

win = false


    sendit.addEventListener('click', 
        function(){
            if(win == false){
                i++;

                let number = document.getElementById('number').value;

                number = parseInt(number);

                if(number === rightNumber){
                    document.getElementById('result').innerHTML = 'Complimenti hai azzeccato il numero! <br> Con un totale di:'+i+' tentativi';
                    win = true
                }else if (number < rightNumber){
                    document.getElementById('result').innerHTML = 'Numero errato, il numero da indovinare è più alto, sei al tentativo numero: '+i;
                }else if (number > rightNumber){
                    document.getElementById('result').innerHTML = 'Numero errato, il numero da indovinare è più basso, sei al tentativo numero: '+i;
                }
            }
        }
    )
