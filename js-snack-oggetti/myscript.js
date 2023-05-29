
const basketPlayer = {
    'Codice giocatore': 21,
    Nome: 'Michele',
    Cognome: 'Giordano',
    Età: 25,
    'Media punti fatti per partita': 15,
    'Percentuale di successo per tiri da 3 punti': 5,
    Stoppate: 3, 
    Tiri: 8,
}

// ---Generate random stats---

basketPlayer['Codice giocatore'] = randStr(3)+randNum(3);
basketPlayer['Media punti fatti per partita'] = randomNum(0, 50);
basketPlayer['Percentuale di successo per tiri da 3 punti'] = randomNum(0, 100);
basketPlayer.Stoppate = randomNum(0, 30);
basketPlayer.Tiri = randomNum(20, 80);


console.log(basketPlayer);

function randomNum (min, max){
    const number = Math.floor(Math.random() * max) + min
    return number;
}

function randStr(lenght) {
    const list = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
    let res = "";
    for(let i = 0; i < lenght; i++) {
        let rnd = Math.floor(Math.random() * list.length);
        res = res + list.charAt(rnd);
    }
    return res;
}


function randNum(lenght) {
    const list = "123456789";
    let res = "";
    for(let i = 0; i < lenght; i++) {
        let rnd = Math.floor(Math.random() * list.length);
        res = res + list.charAt(rnd);
    }
    return res;
}
