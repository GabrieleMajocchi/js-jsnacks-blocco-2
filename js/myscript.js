
const UserNumbers = [];

console.log(UserNumbers);

let sum = 0;
let i = 0;

while(sum < 50){
    
    UserNumbers.push(parseInt(prompt()));
    sum = sum + UserNumbers[i];
    i++;

}