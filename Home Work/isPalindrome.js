function isPalindrome(string){
    
    let splitString = string.split(" ");
    let reverseString = splitString.reverse();
    
    return string==reverseString.join("");
}
console.log(isPalindrome("racecar"));