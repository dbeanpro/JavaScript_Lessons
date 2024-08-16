/* 
BASIC STRING METHODS

Javascript strings are simple and immutable: All string methods produce a NEW STRING
without altering the original string.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
JAVASCRIPT STRING PROPERTIES

LENGTH
The length Property returns the length of a string.

*/
var text = "abcdefghijklmnopqrstuvwxyz";
var length = text.length;

console.log(length); // Note that this should log "26"
/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
EXTRACTING STRING CHARACTERS

There are 4 methods for extracting string characters:

1. The at(position) Method
2. the charAt(position) Method
3. the charCodeAt(position) Method
4. using property access [] like in arrays

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
THE "at(position)" METHOD

This method is a relatively new addition to JavaScript (having been introduced in 2022).
This method returns the character at a specified index (position) in a string.
This method ALSO allows for the use of NEGATIVE INDEXES which charAt() does not.

*/
var noun = "W3Schools";
var letter = noun.at(2);

console.log(letter);
/*
Note that this will log "S" instead of "3". This is because counting begins with the 
number value of 0 (and therefore character #2 is the third character in the string).

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
THE "charAt()" METHOD

This method returns the character at a specified index (position) in a string.

*/
var text = "HELLO WORLD";
var char = text.charAt(0);

console.log(char);
/*

Note again that counting begins with the number 0.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
THE "charCodeAt()" METHOD

This method returns the code of the character at a specified index (position) in a string:
This method is distinguished by the fact that it retusn a UTF-16 CODE (integer between 0 & 65535);

*/
let charCode = text.charCodeAt(0);

console.log(charCode);
/*

Note that we kept the text variable from the last example.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
THE "property Access []" METHOD

This method may seem unpredictable. This is due to the following.

1. It makes strings look like arrays (but they are not)
2. If no character is found, [] returns "undefined" while charAt() will return an empty string.
3. It's read-only. str[0] = "A" gives NO ERROR but does not work!

*/
var char = text[0];

console.log(char);

text[0] = "A"; 
console.log(text); // No flags or errors but DOES NOT WORK
/*

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
EXTRACTING STRING PARTS

There are 3 methods for extracting a part of a string:

1. slice(start, end);
2. substring(start, end);
3. substr(start, length);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
JavaScript String SLICE()

"slice()" extracts a part of a string and returns the extracted part in a NEW STRING.
This method takes TWO parameters; start position & end position (end is NOT INCLUDED!).

It helps to think of it as "Up to but NOT INCLUDING".

*/
var text = "Apple, Banana, Kiwi";
var part = text.slice(7,13);
var part2 = text.slice(15, 19);

console.log(part);
console.log(part2);
/*


*/
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("concatButton").addEventListener("click", function() {
    
    let name = prompt("What is your name? (First AND last)");
    
    function firstName() {
    let spacePosition = name.indexOf(" ");
    let fname = name.slice(0, spacePosition);
    return fname;
    }

    function lastName() {
        let spacePosition = name.indexOf(" ");
        let lname = name.slice(spacePosition + 1, name.length);
        return lname;
    }

    firstName();
    lastName();
    
    document.getElementById("greeting").textContent = `Hello! your first name is ${firstName()} and your last name is ${lastName()}!`;
    });
});