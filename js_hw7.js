var str = "Happiness, Time, Task, Apple, Wonderful, Joyful";
var splitstr = str.split(/[\s,]+/);
var resultArr = [];
for (var i = 0; i < splitstr.length; i++) {
    var re = /^[b-zB-Z]{6,}/;
    if (re.test(splitstr[i])) {
        resultArr.push(splitstr[i]);
    }
}
console.log('Початкові дані: ' + str);
console.log('Результат: ' + resultArr);