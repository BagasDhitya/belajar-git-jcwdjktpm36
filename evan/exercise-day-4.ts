// triangle scheme

function triangle(height: number) {
  let fullArray: string[][] = [[]];
  let increment: number = 1;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j <= i; j++) {
      if (!fullArray[i]) {
        fullArray[i] = [];
      }

      if (fullArray[i].length > i) {
        continue;
      }

      const numberToAdd = increment < 10 ? `0${increment}` : `${increment}`;
      fullArray[i].push(numberToAdd);
      increment++;
    }
  }
  return fullArray;
}

console.log(triangle(5));

// 2. FizzBuzz

function fizzBuzz(n: number) {
  let fizzBuzzArray: string[] = [];
  for (let i = 1; i <= n; i++) {
    let pushItem: string = `${i}`;
    if (i % 3 == 0) pushItem = "Fizz";
    if (i % 5 == 0) pushItem = "Buzz";
    if (i % (3 * 5) == 0) pushItem = "FizzBuzz";

    fizzBuzzArray.push(pushItem);
  }
  return fizzBuzzArray;
}

console.log(fizzBuzz(15));

// BMI

function BMIFormula(weight: number, height: number) {
  const BMIRate = weight / (height * height);
  if (BMIRate < 18.5) return "less weight";
  if (BMIRate >= 18.5 && BMIRate <= 24.9) return "ideal";
  if (BMIRate >= 25.0 && BMIRate <= 29.9) return "overweight";
  if (BMIRate >= 30.0 && BMIRate <= 39.9) return "very overweight";
  if (BMIRate > 39.9) return "obesity";
}

console.log(BMIFormula(70, 1.75));

// even number only

function evenNumber(listNumber: number[]) {
  let evenNumberOnly: number[] = [];
  for (let i = 0; i < listNumber.length; i++) {
    if (listNumber[i] % 2 == 0) evenNumberOnly.push(listNumber[i]);
  }
  return evenNumberOnly;
}

console.log(evenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// split string

function splitString(words: string) {
  let word: string = "";
  let wordArray: string[] = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] == " ") {
      wordArray.push(word);
      word = "";
      continue;
    }
    if (i == words.length - 1) {
      word += words[i];
      wordArray.push(word);
      break;
    }
    word += words[i];
  }
  return wordArray;
}

console.log(splitString("Hello World Lol"));

// arrow function

const splitStringArrow = (words: string) => words.split(" ");

console.log(splitStringArrow("Hello World"));
