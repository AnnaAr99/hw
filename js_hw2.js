const prompt = require("prompt-sync")(); //спочатку в консолі потрібно було виконати npm install prompt-sync, та прописати цей рядок, без нього не працює

function pow (){
let x = prompt ('Введіть значення х: ');
let y = prompt ('Введіть значення y: ');
let result = 1;
    while (y){
        result = x * result;
        y = y - 1;
    };
return result;
};
let result = pow ();
console.log('Результат приведення числа "x" до ступеня "y": '+ result);