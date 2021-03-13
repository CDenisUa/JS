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
*/