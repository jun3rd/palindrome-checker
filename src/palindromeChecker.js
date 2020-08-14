/* Palindrome Checker */
/* Verify word/phrase/sentence is identical if characters are reversed. */
/* Ignore puntuation, case, and spacing. */

let test_palindrome = (test) => {
    palindrome("eye");
    palindrome("_eye");
    palindrome("race car");
    palindrome("not a palindrome");
    palindrome("A man, a plan, a canal. Panama");
    palindrome("never odd or even");
    palindrome("nope");
    palindrome("almostomla");
    palindrome("My age is 0, 0 si ega ym.");
    palindrome("1 eye for of 1 eye.");
    palindrome("0_0 (: /-\ :) 0-0");
    palindrome("five|\_/|four");
    if (typeof test != "undefined") {
        palindrome(test);
    }
}

/* START: submission to FreeCodeCamp */
let isNumber = (character) => {
    return (((character.charCodeAt(0) >= 48 ) && (character.charCodeAt(0) <= 57 )) ? true : false);
};

let isLowerCase = (character) => {
    return (((character.charCodeAt(0) >= 97 ) && (character.charCodeAt(0) <= 122 )) ? true : false);
};

let isUpperCase = (character) => {
    return (((character.charCodeAt(0) >= 65 ) && (character.charCodeAt(0) <= 90 )) ? true : false);
};

let keepLettersNumbers = (str) => {
    let lettersNumbers = str.split("")
        .map( character => {
            if (isNumber(character) === true) {
                return character;
            } else if (isLowerCase(character) === true) {
                return character;
            } else if (isUpperCase(character) === true) {
                return character;
            }
        })
        .join("")
        .toLowerCase();
    return lettersNumbers;
};

let reverseAll = (lettersNumbers) => {
    let lettersNumbersReversed = lettersNumbers.split("").reverse().join("");
    return lettersNumbersReversed;
};

function palindrome(str) {
    let lettersNumbers = keepLettersNumbers(str);
    let lettersNumbersReversed = reverseAll(lettersNumbers);
    console.log("palindrome '" + str + "' : " + ((lettersNumbers === lettersNumbersReversed) ? true : false));
    return ((lettersNumbers === lettersNumbersReversed) ? true : false);
}

/* END: submission to FreeCodeCamp */

test_palindrome();

