function getObjectValue(obj, prop) {
    parts = prop.split('.'),
    last = parts.pop(),
    j = parts.length,
    i = 1,
    current = parts[0];

    while ((obj = obj[current]) && i < j) {
        current = parts[i];
        i++;
    }

    if(obj[last] === undefined){
        return null;
    }

    if (obj) {
        return obj[last];
    }

}

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan);
