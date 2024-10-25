var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    
    //розрахунок суми    
    price() {
        var sum = 0;
        for (let i of Object.values(services)) {
            if (typeof(i) === "string") {
            sum += parseInt(i);
            }
        }
        return sum;
     },

     //розрахунок мінімального значення
     minPrice() {
        var min = Infinity;
        for (let i of Object.values(services)) {
            if (typeof(i) === "string" ) {
                let x = parseInt(i);
                if (min > x) {
                min = x;
                }
            }
        }
        return min;
     },

     //розрахунок максимального значення
     maxPrice() {
        var max = 0;
        for (let i of Object.values(services)) {
            if (typeof(i) === "string" ) {
                let x = parseInt(i);
                if (max < x) {
                max = x;
                }
            }
        }
        return max;
     },

}
console.log("Сума за послуги: " + services.price() + " грн");
console.log("Мінімальна ціна за послуги: " + services.minPrice() + " грн");
console.log("Максимальна ціна за послуги: " + services.maxPrice() + " грн");