const prompt = require("prompt-sync")(); //спочатку в консолі потрібно було виконати npm install prompt-sync, та прописати цей рядок, без нього не працює
function pow (){
var x = prompt ('Введіть значення х: ');
var y = prompt ('Введіть значення y: ');
var result = (x**y);
return result;
}
let result = pow();
console.log('Результат приведення числа "x" до ступеня "y": '+ result);