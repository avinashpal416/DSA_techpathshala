/*Steps:
Anagram
1. store the given anagram to String
2.convert the given string to toLowerCase
3.create two empty objects
4. iterate over the string and for each character, increment its value in the object if it exists, otherwise add it with a value of 1
5. compare the two objects. If they are equal, the strings are anagrams, otherwise not.
*/

// Anagram

function isAnagram(str1, str2) {
    let lowerStr1 = '';
    let lowerStr2 = '';

    // Convert str1 to lowercase
    for (let i = 0; i < str1.length; i++) {
        lowerStr1 += str1[i].toLowerCase();
    }

    // Convert str2 to lowercase
    for (let i = 0; i < str2.length; i++) {
        lowerStr2 += str2[i].toLowerCase();
    }

    // Check if lengths are equal
    if (lowerStr1.length !== lowerStr2.length) {
        return false;
    }

    // Initialize frequency counters
    let obj1 = {};
    let obj2 = {};

    // Count frequencies of characters in lowerStr1
    for (let i = 0; i < lowerStr1.length; i++) {
        let x = lowerStr1[i];
        if (x in obj1) {
            obj1[x]++;
        } else {
            obj1[x] = 1;
        }
    }

    // Count frequencies of characters in lowerStr2
    for (let i = 0; i < lowerStr2.length; i++) {
        let y = lowerStr2[i];
        if (y in obj2) {
            obj2[y]++;
        } else {
            obj2[y] = 1;
        }
    }

    // Compare the frequency objects
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    // If all frequencies match, the strings are anagrams
    return true;
}

let str1 = 'listen';
let str2 = 'silent';
let result = isAnagram(str1, str2);
console.log(result);  // Output: true
