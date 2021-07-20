/*
1. Given an array of numbers. Print frequency of each unique number. (Frequency is the
count of particular element divided by the count of all elements)
*/
function isExists(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}

function printFrequency(array, length) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] / length);
    }
}

function numFrequency(array) {
    let uniqueArray = new Array();
    let countNumbers = new Array();
    for (let i = 0; i < array.length; i++) {
        let index = isExists(uniqueArray, array[i]);
        if (index >= 0) {
            countNumbers[index]++
        } else {
            uniqueArray.push(array[i]);
            countNumbers.push(1);
        }
    }
    printFrequency(countNumbers, array.length);
}

/*
2. Write a function that accepts a string(a sentence) as a parameter and finds the longest
word within the string․ If there are several words which are the longest ones, print the
last word(words can be separated by space, comma or hyphen).
*/

function getLongestWord(str) {
    let array = str.split(/[\s,]+/);
    let max = array[0].length;
    let index = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i].length >= max) {
            max = array[i].length;
            index = i;
        }
    }
    console.log(array[index]);
}

/*
3. Write a function to find longest substring in a given a string without repeating characters
except space character.
If there are several, return the last one. Consider that all letters are lowercase.

there are no two words in the english language more harmful than "good job".
*/

function getLongestSubstring(sentence) {
    let chars = sentence.substring("");
    let longestSubstring = "";
    let currentSubstring = "";
    for (let i = 0; i < chars.length; i++) {
        for (let j = i; j < chars.length; j++) {
            if (chars[j] !== " " && currentSubstring.includes(chars[j])) {
                break;
            } else {
                currentSubstring += chars[j];
            }
        }
        if (currentSubstring.length >= longestSubstring.length) {
            longestSubstring = currentSubstring;
        }
        currentSubstring = "";
    }
    console.log(longestSubstring);
}


/*
4. Write a function to compute a new string from the given one by moving the first char to
come after the next two chars, so "abc" yields "bca". Repeat this process for each
subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.

"dfgjkloyp"
"aweyoolp"
*/

function firstCharToLast(str) {
    return str[1] + str[2] + str[0];
}

function transformString(word) {
    let newWord = "";
    for (let i = 0; i < word.length; i += 3) {
        if (i + 3 <= word.length) {
            newWord += firstCharToLast(word.substring(i, i + 3));
        } else {
            newWord += word.substring(i, word.length);
        }
    }
    console.log(newWord);
}


/*
5. Write a function, which receives an array as an argument which elements arrays of
numbers. Find biggest negative number of each array. Return product of that numbers.If
there is not any negative number in an array, ignore that one. Check that items of the
given array are arrays.
*/
function isValidArray(arr) {
    return Array.isArray(arr);
}

function productNegative(arr) {
    let p = 1;
    let negativeArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (isValidArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] < 0) {
                    negativeArray.push(arr[i][j]);
                }
            }
            if (negativeArray.length !== 0) {
                p *= Math.max(...negativeArray);
                negativeArray.length = 0;
            }
        } else {
            console.log("Invalid Argument");
        }
    }

    if (p === 1) {
        console.log("No Negatives");
    } else {
        console.log(p);
    }
}

/*
6. Write a JavaScript function to get all possible subsets of length 3 of the given array.
Assume that all elements in the array are unique.
*/
function getAllPossibleSubarray(array) {
    let allArrays = [];
    if (array.length <= 3) {
        return array;
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j ++) {
            for(let k = j + 1; k < array.length; k++) {
                allArrays.push([array[i], array[j], array[k]]);
            }
        }
    }
    return allArrays;
}
