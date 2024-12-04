// question 2 taks 1 //
let products = 500;
let products_sold = 376;

// task 2 //
let total_products = products;
let total_products_sold = products_sold;

// task 3//
let products_left_sum = total_products + total_products_sold;
let products_left_difference = total_products - total_products_sold;
let products_left_product = total_products * total_products_sold;
let products_left_quotient = total_products / total_products_sold;

console.log("Sum:", products_left_sum)
console.log("Difference:", products_left_difference)
console.log("Product:", products_left_product)
console.log("Quotient:", products_left_quotient)

// task 4 //
let num1 = products_left_sum
let num2 = products_left_difference

console.log("Updated num1:", num1)
console.log("Updated num2:", num2)

// task 5 //
let equal_to = num1 === num2;
let greater_than = num1 <= num2;
let not_equal = num1 != num2;

console.log("Is num1 equal to num2?", equal_to);
console.log("Is num1 greater than num2?", greater_than);
console.log("Is num1 not equal to num2?", not_equal);

//task 6 //
let isPositive = products;
let isEven = products_sold;
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);