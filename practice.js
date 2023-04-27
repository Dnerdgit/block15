const dinner = {
    chBurger: 12,
    steak: 20,
    soup: 8,
    macCheese: 14,
    soupSalad: 16
};

const prices = Object.values(dinner);

let total = 0;
/*for (let i = 0; i < prices.length; i++) {
    total += prices[i];
}
console.log(total);*/
for (let price in prices) {
    total += prices[price];
}

console.log(total);