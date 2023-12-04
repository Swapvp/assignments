/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let input1 = str1.length;
  let input2 = str2.length;
  if (input1 !== input2 ) {
    console.log("Not a valid input")
  }
   let value1 = str1.split('').sort().join('');
   let value2 = str2.split('').sort().join('');
   if(value1 === value2){
      console.log("True");
   } else { 
      console.log("False");
   }
  
}

module.exports = isAnagram;
