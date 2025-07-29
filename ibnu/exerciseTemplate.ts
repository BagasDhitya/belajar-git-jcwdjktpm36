console.log('kerjakan exercise di folder ini')

// 1. Write a code to display the multiplication table of given integer n
// Example: Number: 9
// Output:
// 9 x 1 = 9
// 9 x 2 = 18
// ... 
// // 9 x 10 = 90
let n: number = 9; // You can change this value to test with different integers
for (let i: number = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}     
console.log('----------------------');

// 2. Write a code to check whether a string is a palindrome or not
// Example: "madam" is a palindrome
let str: string = "madam"; // You can change this value to test with different strings
let isPalindrome1: boolean = true;
for (let i: number = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        isPalindrome1 = false;
        break;
    }
}
if (isPalindrome1) {
    console.log(`"${str}" adalah palindrom.`);
}else {
    console.log(`"${str}" bukan palindrom.`);
}  
// cara kedua
// console.log(isPalindrome1(str))
console.log('----------------------');

// 3. Write a code to convert centimeter to kilometer
// example: 100000 cm = 1 km
let centimeters: number = 100000; // You can change this value to test with different centimeters
let kilometers: number = centimeters / 100000;
console.log(`${centimeters} cm = ${kilometers} km`);
console.log('----------------------');  
// cara kedua
// console.log(cmToKm(100000)) 

// 4. Write a code to format number as currency
// Example: 1000 to Rp.1.000,00
let amount: number = 1000; // You can change this value to test with different amounts
let formattedAmount: string = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
}).format(amount);
console.log(`Formatted amount: ${formattedAmount}`);

console.log('----------------------');
// Cara kedua
// Ex : 1000 = 1.000 =Rp.1.000,00
// Looping terbalik dari belakang(i--)
// Buat variable penampung untuk hasil output
// variable penampung untuk jumlah pengulangan -> count++
// periksa setiap pengulangan 3 (Jika count % 3 === 0) beri tanda titik

// let data = amount.toString().length
// let rupiah: string = '';
// let count: number = 0;
// for (let i: number = data - 1; i >= 0; i--) {
//     console.log(i)

//     rupiah = data.charAt(i -1) + rupiah;
//     count++;
//     console.log(count)
//     if (count % 3 === 0 && i !== 0) {
//         rupiah = '.' + rupiah;
//     }
// }console.log(`Formatted amount: Rp.${rupiah},00`); 
console.log('----------------------');

// 5. Write a code to remove the first occurence of a given "search string" from a string
// Example: "Hello World" with search string = "Ell" = "Ho World"
let originalString1: string = "Hello World"; // You can change this value to test with different strings
let searchString1: string = "Ell"; // You can change this value to test with different search strings
let index: number = originalString.toLowerCase().indexOf(searchString.toLowerCase());
if (index !== -1) {
    let modifiedString: string = originalString.slice(0, index) + originalString.slice(index + searchString.length);
    console.log(`Modified string: "${modifiedString}"`);
}
else {
    console.log(`Search string "${searchString}" not found in "${originalString}".`);
}
console.log('----------------------');

// 6. Write a code to capitalize the first letter of each word in a string
// Example: "hello world" = "Hello World"
let inputString: string = "hello world"; // You can change this value to test with different strings
let capitalizedString: string = inputString.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(`Capitalized string: "${capitalizedString}"`);
console.log('----------------------');

// 7. Write a code to swap the caseof each character from string
// Example: ‘The QuiCk BrOwN Fox’ = ‘ tHE qUIcK bRoWn fOX’
let swapCaseString: string = "The QuiCk BrOwN Fox"; // You can change this value to test with different strings
let swappedCaseString: string = swapCaseString.split('').map(char => {
    return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}).join('');
console.log(`Swapped case string: "${swappedCaseString}"`);
console.log('----------------------');  

// 8. Write a code to find the largest of two given integers
// Example: num1=42, num2=27 = 42
let num1Ib: number = 42; // You can change this value to test with different integers
let num2Ib: number = 27; // You can change this value to test with different integers
let largest: number = num1 > num2 ? num1 : num2;
console.log(`Largest of ${num1} and ${num2} is: ${largest}`);
console.log('----------------------');

// 9. Write a conditional statement to sort three numbers
// Example: num1=42, num2=27, num3=18 = 18, 27, 42
let num3: number = 18; // You can change this value to test with different integers
let numbers: number[] = [num1, num2, num3];
numbers.sort((a, b) => a - b);
console.log(`Sorted numbers: ${numbers.join(', ')}`);
console.log('----------------------');

// 10. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for the other data types.
// Example: "hello" = 1, 42 = 2, true = 3
let input: any = "hello"; // You can change this value to test with different inputs
let typeIndicator: number;
if (typeof input === 'string') {
    typeIndicator = 1;
}
else if (typeof input === 'number') {
    typeIndicator = 2;
}
else {
    typeIndicator = 3;
}
console.log(`Type indicator for input "${input}": ${typeIndicator}`);
console.log('----------------------');

// 11. Write a code to change every letter a into * from a string input
// Example: "banana" = "b*n*n*"
let inputStringForAsterisk: string = "banana"; // You can change this value to test with different strings
let modifiedStringForAsterisk: string = inputStringForAsterisk.replace(/a/g, '*');
console.log(`Modified string: "${modifiedStringForAsterisk}"`);
console.log('----------------------');