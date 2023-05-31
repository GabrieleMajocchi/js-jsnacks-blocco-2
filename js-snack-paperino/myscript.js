
const names = ["AliceFF", "BobBB", "CharliEEe", "DavidDD", "EvEe", "FraFnk", "Grace", "HenryYA", "IsabeSSl", "JacEk"]

const propername = [];

names.forEach(element => {
    let fix = element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
    propername.push(fix);
});

console.log (propername)