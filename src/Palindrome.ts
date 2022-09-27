export class Palindrome {
    
    isPalindrome (word: string) {
        word = word.replace(/[^a-z0-9]/gi, "");
        word = word.replace(" ", "").toLowerCase();
        
        let array : string[];
        array = word.split("");
        array = array.reverse();
        
        let reverseWord : string;
        reverseWord = array.join("");
        
        if(reverseWord == word) {
            return true; 
        }
        else {
            return false;
        }
    }
}