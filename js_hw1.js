//task 1: виведе number33 
//рядок + число + число. Де + в даному прикладі об'єднує значення, тому що першим в прикладі йде string
var number;
console.log('number' + 3 + 3);

//task2: виведе 3 
//null - відсутнє значення
console.log(null + 3);

//task3: виведе qwerty
//&& порівнює по черзі значення на те чи false вони. Якщо жоден не false, повертається останнє значення
console.log(5 && "qwerty");

//task4: виведе 42hillel 
//число + число + рядок. Де + в даному прикладі сумує значення, тому що першим в прикладі js конвертує string в number, поки не дійде до string
console.log(+'40' + +'2' + "hillel");

//task5: виведе false
//'10'-5 = 5, а 5 != 6
console.log('10' - 5 === 6);

//task6: виведе 1
//true прирівнюється до 1, а false до 0 
console.log(true + false);

//task7: виведе NaN 
//неможливо обчислити
console.log('4px' - 3);

//task8: виведе 1 
//число - число. Першим в прикладі js конвертує string в number
console.log('4' - 3);

//task9: виведе 61 
//першою виконується піднесення до степеня (3**0 =1) і (можу помилятись) через те, що першим типом для обчислення є number, а другим string  + number, то відбувається конкатенація
'6' + 3 ** 0;

//task10: виведе 2 
//перше значення є number, яке ділиться на string, який java конвертує в number 
console.log(12 / '6');

//task11: виведе 10false 
//5!=6, тобто false, і '10' - string, і string + false дасть 10false
'10' + (5 === 6);

//task12: виведе false 
//'' - це false, і null це окремий тип, і не дорівнює boolean false
console.log(null == '');

//task13: виведе 27 
//9/3 = 3, 3 в степені 3 = 27 
console.log(3 ** (9 / 3));

//task14: виведе true 
//!! - перетворює тип на boolean, а оскільки 'false' і 'true' - це string, то вони будуть обидва true
console.log(!!'false' == !!'true');

//task15: виведе 1 
//пріоритет буде у &&, тобто 0 || ('0' && 1), ('0' && 1) - результат 1, 0||1 - 0 - false, 1 - true, || поверне перше true
console.log(0 || '0' && 1);

//task16: виведе false
//унарний + в деяих випадках конвертує не числа в числа, +null в даному випадку буде = +0, Boolean значення можна конвертувати так: true в 1 и false в +0, тобто (+null == false) - true, true < 1 - це false
console.log((+null == false) < 1);

//task17: виведе true 
//спочатку виконається && - false && true = false (true лише коли всі значення true), false || true = true (true якщо хоча б одне значення true) 
console.log(false && true || true);

//task18: виведе false 
//спочатку виконається (false || true) = true ((true якщо хоча б одне значення true),  false && true = false ((true лише коли всі значення true)
console.log(false && (false || true));

//task19: виведе false
//унарний + в деяих випадках конвертує не числа в числа, +null в даному випадку буде = +0, Boolean значення можна конвертувати так: true в 1 и false в +0, тобто (+null == false) - true;  1**5 = 1, тобто true < 1 - це false
console.log((+null == false) < 1 ** 5);