// Object Methods
// The Greater Numbers. 
//Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.

function findGreatest (array , zahl){
   return array.filter((item) => item > zahl ?  true : false)}

console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));
console.log('----------------');

// 2. For the longest word. Create a function to find the longest word in a given string.

const longestWord = (text) =>{
    textArray = text.split(' ');
    let longest = '' ;
    
    for (let i = 0; i < textArray.length; i++) {
        let word = textArray[i];
      if( word.length > longest.length ){
          longest = word ;
    } 
 } return longest
} 
console.log('the longest word :',longestWord("this is a web development course"))

// another way with map .....................

function longestWord2(text) {
    let textArr = text.split(' ');
    let longest = '' ;
    textArr.map( (word) => {
        if (word.length > longest.length) {
            longest = word
        }
    });
    return longest
}
        console.log('longest with map :',longestWord2('Biscuit shortbread liquorice toffee danish'))

// another way with Math.max (...array)

console.log('----------------');
//---------------------------------------------

//3- Reverse. Create a function to reverse a number.
const reverse = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

console.log('reversed Num :',reverse(34532) );

 // another Lösung 
 function getReverseNum(number) {
     let string = number.toString();
     let array1 = string.split('');
     let returnable = '';
     array1.forEach((element) => {
         returnable = element + returnable // das ist genau so wie reversing number
         //  يجب ان تحافظ علئ هذا الترتيب ليطلع الرقم معكوس     
        });
     return parseInt(returnable) * Math.sign(number)
      // math.sign to keep the sign of number (-10 تبقئ كما هي) 

    }
            console.log(getReverseNum(-34532)); 
console.log('----------------');
//----------------------------------------
// 4. AEIOU: Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string.
const findVowels = (text)=> {
    let vowels = 'aeoui'
    let sum = 0 ; //hier  function block
    for (let i = 0; i < text.length; i++) {
        let letter = text[i].toLowerCase()
        if(vowels.indexOf(letter)> -1 ) sum = sum+1 ;   
    }
 return sum
}
console.log('number of vowels :',findVowels("this is a string"));

// another way with forEach()................

function getNumberOfVowels(string) {
    const array = string.split("");
    const vowels = "aeiou";
    let returnable = 0;

    array.forEach((element) => {
        if (vowels.indexOf(element.toLowerCase()) > -1) {
            returnable++;
        }
    });

    return returnable;
}

console.log(getNumberOfVowels("this is a string"));

console.log('----------------');
//----------------------------------------
// 5. Missing Number. Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

const missingNums = (array) => {
    let missing = 0
    for (let i = 1; i <= 10; i++) {
       if(array.indexOf(i) == -1 ) {
           missing = i ;
        }else{
            continue;
        }
    } return missing
}
console.log('missing integer:', missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log('missing integer:', missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log('missing integer:', missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));
console.log('----------------');
//----------------------------------------
// 6. Cubed. Create a function that takes in an array of numbers and returns the sum of its cubes.

const sumOfCubes = (zahlArray) =>{
    let sum = 0 ;
    for (let num of zahlArray ){
        sum = sum + num **3 
    } return sum
}
console.log('sum of its cubes :',sumOfCubes([1, 5, 9]));
console.log('sum of its cubes :',sumOfCubes([2]));
console.log('sum of its cubes :',sumOfCubes([]) );
console.log('----------------');
//----------------------------------------

// 7. Dictionary. Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.

const dictionary = (stg, WortArray)=>{
    const searched = WortArray.filter(
        (word) => {
            return word.startsWith(stg)
        }
    )
        return searched
} 
console.log('7.',dictionary("bu", ["button", "breakfast", "border"]));
console.log('7.',dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log('7.',dictionary("beau", ["pastry", "delicious", "name", "boring"]));
console.log('----------------');
//----------------------------------------

// 8. Even Number Generator. Create a function that finds all even numbers from 1 to the given number.
// If there are no even numbers, return an empty array.

const evenNums = (zahl)=> {
    let evenArray = []
    for (let i = 2; i <= zahl; i++) {
       if (i%2 == 0 ) {
           evenArray.push(i)
        };
    } return evenArray
}
console.log('even numbers:',evenNums(8));
console.log('even numbers:',evenNums(13));
console.log('even numbers:',evenNums(1));
console.log('----------------');
//----------------------------------------

// Bonus: Alphabetical Order. Create a function to sort a string into alphabetical order. NB: assume numbers, symbols and punctuation are not included in the string.

function alphaOrder(str){
    let strArr = str.split('');
    let sorted = strArr.sort();
    return sorted.join('');
  }
console.log('sorted string :',alphaOrder("webdev"));
console.log('sorted string :',alphaOrder("how are you")); console.log();
console.log('--------End--------');
//----------------------------------------


