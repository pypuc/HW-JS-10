// 1

const world = () => {
      return 'Hello World!'
}
console.log(world())

// 2

const applyCallbackToEachElement = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i])); 
    }
    return result;
}
const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => num * num;

const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);

// 3

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