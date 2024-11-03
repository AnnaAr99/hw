var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
var filteredArr = [];
for (var i = 0; i < arr.length; i++){
    var re = /[a-zA-Z0-9]+(\.[a-zA-Z0-9])?@gmail\.com|@yahoo\.com/;
    if (arr[i].email.search(re) !== -1) {
        filteredArr.push(arr[i]);
    }
}


console.log(filteredArr);