// 1. Greater Numbers

function findGreatest(arrOfNumbers, num) {
    const greaterElements = [];
    for (let i = 0; i < arrOfNumbers.length; i++) {
        if (arrOfNumbers[i] > num) {
            greaterElements.push(arrOfNumbers[i]);
        }
    }
    return greaterElements.join(", ");
}

console.log(findGreatest([3, 4, 5], 4));

console.log(findGreatest([10, 20, 30], 12));

console.log(findGreatest([0, 10, 3], 4));

// 2. Longest Word

function getLongestWord(str) {
    let words = str.split(' ');
    let maxLength = 0;
    let longestWord = null;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            longestWord = words[i];
            // * Show when multiple words are tied for longest length
            // for (let j = 0; j < words.length; j++) {
            //   if (words[i].length == words[j].length && words[i] !== words[j]) {
            //     console.log(
            //       `Watch out there may be multiple  words tied for longest in this string! Here's looking at you, ${words[
            //         i
            //       ].toUpperCase()} and ${words[j].toUpperCase()}!`
            //     );
            //   }
            // }
        }
    }
    return longestWord;
}

console.log(getLongestWord("this is one of my strings"));

console.log(getLongestWord("this is another one of my strings"));

// 3. Reverse

function reverseNum(numToReverse) {
    // if (Number.isNaN(Number(numToReverse))) return 'Please Enter a number';
    return (
        parseFloat(
            numToReverse
                .toString()
                .split("")
                .reverse()
                .join("")
        ) * Math.sign(numToReverse)
    ); // Math.sign() returns the positive or negative sign of the integer
}

console.log(reverseNum(123));
console.log(reverseNum("abc"));
console.log(reverseNum("123"));
console.log(reverseNum(-123.456));

// 4. Vowels

function vowelCounter(strToCheck) {
    const vowelArr = ["a", "e", "i", "o", "u"];
    let counter = 0;
    for (let i = 0; i < strToCheck.length; i++) {
        if (vowelArr.includes(strToCheck[i])) {
            counter++;
        }
    }
    return counter;
}
console.log(vowelCounter("count this"));

// 5. Missing Number

function findMissingNum(incompleteArray) {
    incompleteArray.push(0);
    let addUpArray = 0;
    let total = 0;
    for (let i = 0; i < incompleteArray.length; i++) {
        addUpArray += incompleteArray[i];
        total += (i + 1);
    }
    const missingNum = total - addUpArray;
    return missingNum;
}

const numbersArr = [1, 5, 6, 2, 4, 9, 8, 7, 10];
console.log(findMissingNum(numbersArr));

// 6. Cubed

function sumOfCubes(arrayOfNumbers) {
    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const cube = arrayOfNumbers[i] ** 3;
        sum += cube;
    }
    return sum;
}
console.log(sumOfCubes([3, 4, 5]));

// 7. Dictionary

function dictionary(initialStr, arrayOfWords) {
    const initialStrLower = initialStr.toLowerCase();
    const filteredArr = [];
    for (let i = 0; i < arrayOfWords.length; i++) {
        let arrayOfWordsLower = arrayOfWords[i].toLowerCase();
        if (arrayOfWordsLower.includes(initialStrLower)) {
            filteredArr.push(arrayOfWordsLower);
        }
    }
    return filteredArr;
}

console.log(dictionary("boo", ["don't", "blame", "sunshine", "blame", "boogie"]));
console.log(dictionary("cool", ["hey", "yo", "let's", "go"]))

// 8. Even Number Generator

function getEvenNums(cutOffNumber) {
    const evenNumsArr = [];
    for (let i = 1; i <= cutOffNumber; i++) {
        if (i % 2 === 0) {
            evenNumsArr.push(i);
        }
    }
    return evenNumsArr;
}

console.log(getEvenNums(10));

//  Alphabetical Order

function alphabetise(str) {
    sortedStr = str.toLowerCase()
        .split("")
        .sort()
        .join("");
    return sortedStr;
}

console.log(alphabetise("waddUpArray"));  