var cat = {
    name: 'Пухнастик',
    age: 5,
    weight: 4.5,
    getInfo: function () {
        console.log("Ім'я кота: " + this.name +"\nВік кота: " + this.age + "\nВага кота: " + this.weight)
    }
}
cat.type = "Нова властивість!";
console.log (cat.type);
cat.getInfo();