/*
Task 1

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer 


function squareDigits(num){
    let arr = num.toString().split(''),
        result= [];
    for (let num of arr){
      result.push((num**2).toString());
    }
    return +result.join('');
  }
  */
 /*
Task2

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b)=>a-b);
  let result = numbers[0] + numbers[1];
  return result
}

or

function sumTwoSmallestNumbers(numbers) {  
  let [a,b] = numbers.sort((a,b)=>a-b);
  let result = a + b;
  return result
}
*/
/*
Task 3

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

console.log(order("is2 Thi1s T4est 3a"));

function order(words){
  if(words === '') {
    return words;
  }
  let result = [];
  let arrWords = words.split(' ');
  arrWords.forEach((item)=>{
    for(let i=0; i<item.length; i++){
      if(Number.isInteger(+item[i])){
        result[+item[i] - 1] = item;
      }
    }
    result.join(' ');
  });
  return result;
}
function order(words){
    return words.split(' ').sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/)).join(' ');
  }
*/