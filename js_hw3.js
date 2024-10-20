function Probabilityfunc (){
    var min = 100;
    var max = 1000;
    i = 0;
    n = 0;
    m = 0;
    x = 0;
    y = 0;
//Виводить 10 випадкових чисел
    while (i < 10){
        i = i + 1;
    var rnd = Math.random() * (max - min + 1) + min;
    rnd = Math.round(rnd);
    
//Перевірка на парність
    if (rnd % 2 == 0){
        n = n + 1;
        console.log(rnd + " - парне число під номером " + n);
         }
    else {
        m = m + 1;
        console.log(rnd + " - непарне число під номером " + m);
         }
        
    }
   
//Відсоткове співвідношення, де х - відсоток парних, а у - відсоток непарних
x = n * 100 / 10;
y = m * 100 / 10;

   // return rnd;
}
Probabilityfunc();
console.log(" ");
console.log("Кількіть парних чисел: " + n);
console.log("Кількіть непарних чисел: " + m);
console.log("Відсоткове співвідношення парних до непарних: " + x + "% до " + y + "%");