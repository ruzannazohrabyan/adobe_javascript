/*
1. Write a function which receives an array and a number as arguments and returns a new array
from the elements of the given array which are larger than the given number.
*/

function filterArray(arr, num) {
    let result = arr.filter(el => el > num)
    return result.length !== 0 ? result : "Such values do not exist"
}


/*
2. Write a function, which receives two numbers as arguments and finds all numbers between
them such that each digit of the number is even. The numbers obtained should be printed in a
comma-separated sequence on a single line.
*/

function isDigitsEven(num) {
    let result = true
    for (let i = 0; i < num.length; i++) {
        if (num.charAt(i) % 2 !== 0) {
            result = false
            break
        }
    }
    return result
}


function getEvenRange(num1, num2) {
    let array = []
    let start = num1, end = num2
    if (start > end) {
        let temp = start
        start = end
        end = temp
    }
    for (let i = start; i <= end; i++) {
        array.push(String(i))
    }
    let result = array.filter(isDigitsEven)
    return result.length !== 0 ? result.join(', ') : "Such numbers do not exist"
    //return result.length !== 0 ? result.reduce((acc, el) => acc + ", " + el) : "Such numbers do not exist"
}


/*
3.  Write a recursive function to determine whether all digits of the number are odd or not.
*/

function isDigitsOdd(num) {
    //debugger

    let number = Math.abs(num)

    if (Math.floor(number / 10) === 0 && number % 2 === 1) {
        return true
    }
    if ((number % 10) % 2 === 1) {
        return true && isDigitsOdd(Math.floor(number / 10))
    }
    return false
}


/*
4. Given an array of numbers. Write a recursive function to find its minimal positive element.
(if such element does not exist, return -1)․

*/

function getMinimalPositive(array) {
    // debugger
    let positiveArray = array.filter(el => el >= 0)

    if (positiveArray.length === 0) {
        return -1
    }

    if (positiveArray.length === 1) {
        return positiveArray[0]
    }

    let min = positiveArray[0] < positiveArray[1] ? positiveArray[0] : positiveArray[1]
    positiveArray.splice(0, 2, min)
    return getMinimalPositive(positiveArray)
}

/*
5.	Create a function that builds a tree like object given an array with object which contains parent and id properties.
*/
let treeNodes = [{ parent: null, id: 0 }, { parent: 0, id: 1 }, { parent: 0, id: 2 }, { parent: 1, id: 3 }, { parent: 2, id: 5 }, { parent: 4, id: 6 }]

function dataTransformation(array) {

    
}
