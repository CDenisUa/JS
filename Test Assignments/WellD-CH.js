/*
Task 1
Array Challenge
Have the function ArrayChallenge(strArr) read the strArr
parameter being passed which will represent two rectangles
on a Cartesian coordinate plane and will contain 8 coordinates
with the first 4 making up rectangle 1 and the last 4 making up
rectangle 2. It will be in the following format:

["(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)"]

Your program should determine the area of the space where the
two rectangles overlap, and then output the number of times this
overlapping region can fit into the first rectangle.
For the above example, the overlapping region makes up a rectangle
of area 2, and the first rectangle (the first 4 coordinates) makes
up a rectangle of area 4, so your program should output 2.
The coordinates will all be integers. If there's no overlap
between the two rectangles return 0.

Examples
Input: ["(0,0),(0,-2),(3,0),(3,-2),(2,-1),(3,-1),(2,3),(3,3)"]
Output: 6
Input: ["(0,0),(5,0),(0,2),(5,2),(2,1),(5,1),(2,-1),(5,-1)"]
Output: 3
*/

function TaskOne(strArr) {
    const dataFiltering = strArr[0].split(/[),(]/).filter(Boolean);
    const coordinateOfFirstRect = findEachCorner(dataFiltering.slice(0,8));
    const coordinateOfSecondRect = findEachCorner(dataFiltering.slice(8));

    function findEachCorner(coordinateOfRec) {
        let leftBottomPoint = [coordinateOfRec[0],coordinateOfRec[1]],
            leftTopPoint = [coordinateOfRec[2],coordinateOfRec[3]],
            rightTopPoint = [coordinateOfRec[4],coordinateOfRec[5]],
            rightBottomPoint = [coordinateOfRec[6],coordinateOfRec[7]];

        const coordinates = [
            leftBottomPoint,
            leftTopPoint,
            rightTopPoint,
            rightBottomPoint
        ];

        for (const coordinateOfRecElement of coordinates) {
            if ( coordinateOfRecElement[0] <= leftTopPoint[0] &&
                 coordinateOfRecElement[1] >= leftTopPoint[1] ) {
                leftTopPoint = coordinateOfRecElement;
            }
            if( coordinateOfRecElement[0] <= leftBottomPoint[0]  &&
                coordinateOfRecElement[1] <= leftBottomPoint[1] ) {
                leftBottomPoint = coordinateOfRecElement;
            }

            if (coordinateOfRecElement[0] >= rightTopPoint[0] &&
                coordinateOfRecElement[1] >= rightTopPoint[1]) {
                rightTopPoint = coordinateOfRecElement;
            }

            if (coordinateOfRecElement[0] >= rightBottomPoint[0] &&
                coordinateOfRecElement[1] <= rightBottomPoint[1] ) {
                rightBottomPoint = coordinateOfRecElement;
            }
        }
        return {
            leftTopPoint: leftTopPoint,
            leftBottomPoint: leftBottomPoint,
            rightTopPoint: rightTopPoint,
            rightBottomPoint: rightBottomPoint,
        }
    }

    function overlapArea () {
        const {leftBottomPoint: leftBottomPointFirstRec, rightTopPoint: rightTopPointFirstRec} = coordinateOfFirstRect;
        const {leftBottomPoint: leftBottomPointSecondRec, rightTopPoint: rightTopPointSecondRec} = coordinateOfSecondRect;

        const { max, min } = Math;
        const left = max(leftBottomPointFirstRec[0], leftBottomPointSecondRec[0]);
        const top = min(rightTopPointFirstRec[1], rightTopPointSecondRec[1]);
        const right = min(rightTopPointFirstRec[0], rightTopPointSecondRec[0]);
        const bottom = max(leftBottomPointFirstRec[1], leftBottomPointSecondRec[1]);

        const width = right - left;
        const height = top - bottom;

        if(width < 0 || height < 0 ) {
            return 0;
        }
        return width * height;
    }

    function sFirstRect () {
        const { leftBottomPoint, rightTopPoint } = coordinateOfFirstRect;
        return (leftBottomPoint[0]-rightTopPoint[0]) * (rightTopPoint[1]-leftBottomPoint[1]);
    }

    return Math.round(Math.abs(sFirstRect() / overlapArea()));
}

console.log(TaskOne(["(0,0),(0,-2),(3,0),(3,-2),(2,-1),(3,-1),(2,3),(3,3)"]));
console.log(TaskOne(["(0,0),(5,0),(0,2),(5,2),(2,1),(5,1),(2,-1),(5,-1)"]));

/*
Task 2

Array Challenge
Have the function ArrayChallenge(strArr)
read the array of strings stored in strArr,
 which will contain 2 elements: the first element
 will be a sequence of characters, and the second
 element will be a long string of comma-separated words,
  in alphabetical order, that represents a dictionary
  of some arbitrary length. For example: strArr can be:
  ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"].
  Your goal is to determine if the first element in the
  input can be split into two words, where both words exist in
  the dictionary that is provided in the second input. In this example,
  the first element can be split into two words: hello and cat because
  both of those words are in the dictionary.

Your program should return the two words that exist in the
dictionary separated by a comma. So for the example above, your
program should return hello,cat. There will only be one correct way
to split the first element of characters into two words. If there is
no way to split string into two words that exist in the dictionary,
return the string not possible. The first element itself will never
exist in the dictionary as a real word.

Examples

Input: ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]
Output: base,ball

Input: ["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]
Output: abcg,efd
*/

function taskTwo(arr){
    const word = arr[0];
    const lib = arr[1].split(',');

    for (const libElement of lib) {
        if(word.match(libElement)){
            for (const nextLibElement of lib) {
                const resultWord = libElement + nextLibElement;
                if(resultWord === word){
                    return `${libElement},${nextLibElement}`;
                }
            }
        }
    }
    return 'not possible';
}

// console.log(taskTwo(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]));
// console.log(taskTwo(["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]));

/*
Task 3
Array Challenge
Have the function ArrayChallenge(arr) take the array of integers stored
in arr, and find the four largest elements and return their sum.
For example: if arr is [4, 5, -2, 3, 1, 2, 6, 6] then the four
largest elements in this array are 6, 6, 4, and 5 and the total
sum of these numbers is 21, so your program should return 21.
If there are less than four numbers in the array your program should
return the sum of all the numbers in the array.

Examples

Input: [1, 1, 1, -5]
Output: -2

Input: [0, 0, 2, 3, 7, 1]
Output: 13
*/

function taskThree(arr) {
    if(arr.length === 4) {
        return arr
            .reduce((previousValue, currentValue) => previousValue + currentValue);
    }
    else {
        return arr
            .sort((a,b) => a - b)
            .slice(-4)
            .reduce((previousValue, currentValue) => previousValue + currentValue);
    }
}

// console.log(taskThree([1, 1, 1, -5]));
// console.log(taskThree([0, 0, 2, 3, 7, 1]));
