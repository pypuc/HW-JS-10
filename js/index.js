// 1

const world = () => {
      return 'Hello World!'
}
console.log(world())

// 2

let randomNumber = Math.floor(Math.random() * 100) + 1
console.log(randomNumber)
function textMessage(message) {
    alert(message);
}
function numberGame() {
    textMessage("я загадав число від 1 до 100 відгадайй його");
}
numberGame()
let userNumber = Number(prompt("ведіть ваше число: "));
if (randomNumber === userNumber){
    alert("ви вгадали число")
} else if (randomNumber < userNumber){
    alert("забагато")
} else if (randomNumber > userNumber){
    alert("мало")
} else {
    alert("помилка")
}
// 3

const calbackElement = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i])); 
    }
    return result;
}
const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => num * num;

const result = calbackElement(arr, squareCallback);
console.log(result);

// 4

const calculateDiscountPrice = (price, discount, callback) => {
    return callback(price, discount);
};
const discountCallback = (price, discount) => {
    return price - (price * (discount / 100));
};
const originalPrice = 1000; 
const discountPercentage = 20; 
const discountedPrice = calculateDiscountPrice(originalPrice, discountPercentage, discountCallback);
console.log(`Ціна зі знижкою: ${discountedPrice} грн`);