/*
const pressGrindBeans1 = () => {
    console.log("gringing for 20 seconds");
}

pressGrindBeans1();


let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding){
        console.log("stopping the grind");
        coffeeIsGrinding = false
    } else{
        console.log("gringing for 20 seconds");
        coffeeIsGrinding = true
    }    
}

pressGrindBeans();
*/

/*
//task1
const factorial = (n) => {
    if (n >= 0 && n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

console.log(factorial(33));
*/

/*
//task2
let orderCount = 0;

const takeOrder = (topping, size) => {
  console.log(`Pizza with ${topping} topping and size ${size}.`);
  orderCount++;
  console.log(`Order count: ${orderCount}`);
}

takeOrder("pineapple", "large");
*/

//task 3

const cashMachine = (pin, balance, amount) => {
    if (pin === 1234 && amount > 0 && amount <= balance) {
      balance -= amount;
      return `Cash dispensed: $${amount}. Remaining balance: $${balance}`;
    } else {
      return "Transaction failed. Please check your PIN and/or balance.";
    }
  };

console.log(cashMachine(1234,))  