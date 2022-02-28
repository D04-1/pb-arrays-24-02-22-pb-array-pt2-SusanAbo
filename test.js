// const longestWord1 = (text) =>{ 
    
//     let splitText = text.split(' ')
//     console.log(splitText);
//     for ( item in splitText){
//         let longest = splitText.length
//     console.log(longest);
//     }
    
//     return Math.max(longest )
// }
// console.log(longestWord1('Dies ist ein Webentwicklungskurs'));


//-----------------------------------------------

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