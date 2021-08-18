/*
1.	Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).
*/

function concat(arr1, arr2) {
    let result = []
    for (let i = 0; i < arr1.length + arr2.length; i++) {
        if (i < arr1.length) {
            result.push(arr1[i])
        } else {
            result.push(arr2[i - arr1.length])
        }
    }
    return result
}

function flatArray(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {

        if (!Array.isArray(array[i])) {
            result.push(array[i])
        } else {
            result = concat(result, flatArray(array[i]))
        }
    }
    return result;
}

/*
2.	 Given a number. Write a function that calculates its sum of the digits and
if that sum has more than 1 digit find the sum of digits of that number.
Repeat that process if needed and return the result.
*/

function sumOfDigits(n) {
    // debugger
    let temp = n;
    let sum = temp % 10;
    do {
        temp = Math.floor(temp / 10)
        sum += temp % 10
    } while (Math.floor(temp / 10) !== 0)

    if (Math.floor(sum / 10) !== 0) {
        sum = sumOfDigits(sum)
    }
    return sum
}


/*
3.	Given an object. Invert it (keys become values and values become keys). 
If there is more than key for that given value create an array.
*/

function invertObject(object) {
    let temp = {}
    Object.keys(object).forEach(key => {

        if (temp.hasOwnProperty(object[key])) {

            Array.isArray(temp[object[key]]) ? temp[object[key]].push(key) : temp[object[key]] = [temp[object[key]], key]
            
        } else {
            temp[object[key]] = key
        }
    })
    return temp
}

/*
4. Given a string of digits, output all the contiguous substrings of length n in that string.
*/

function getContiguousSubstrings(str, length){
    if(str.length <= length) {
        return str
    }
    let arr = [];

    for (let i = 0; i <= str.length-length; i++) {
        arr.push(str.substr(i, length))
    }
    return arr.join(', ')
}

/*
5.	Given an array of integers. All numbers are unique. 
Find the count of missing numbers between minimum and maximum elements to make integers sequence.
*/

function countOfMissingNumbers(array) {
    let countBetweenMaxAndMin = Math.max(...array) - Math.min(...array) - 1
    let countInArrayWithoutMaxAndMin = array.length - 2
    return  countBetweenMaxAndMin - countInArrayWithoutMaxAndMin
}

/*
6. Write a JavaScript function to get all possible subsets of given length of the given array.
*/

function getAllPossibleSubarrays(array, length) {
    // debugger
    // let array = [1, 2, 3, 4, 5] length = 2
    let result = []
    let mask = []
    for (let i = 0; i < Math.pow(2, array.length); i++) {
        let binary = i.toString(2)
        if(binary.match(/1/g) !== null && binary.match(/1/g).length === length) {
            mask.push(binary)
        }
    }

    //let mask = 101 than temp have to been [3, 5]
    for(let i = mask.length-1; i >= 0 ; i--) {
        let temp = []
        let index = array.length-1;
        for(let j = mask[i].length-1; j >= 0; j--){
            // console.log(mask[i][j])
            if(mask[i][j] === "1") {
                temp.unshift(array[index])
            }
            index--
        }
        result.push(temp)
    }

    return result
}
