const ul = document.querySelector('ul');
let li;

function generate (){
    li = document.createElement('li');
    return li
}

const numberofli = parseInt(prompt('Quanti li vuoi?'));

for(let i = 0; i < numberofli; i++){
    generate();
    ul.append(li);
}