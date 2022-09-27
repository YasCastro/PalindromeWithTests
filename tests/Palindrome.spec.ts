import { expect } from "chai";
import { Palindrome } from "../src/Palindrome"

describe("Test Palindrome", () => {
    it("test_init_doNothing", () => {
        let word = new Palindrome()
        expect(word).to.be.a.instanceof(Palindrome)
    })

    it("Test if it returns a boolean", () => {
        let word = new Palindrome()
        expect(word.isPalindrome("")).to.be.a('boolean')
    })

    it("Word 'eye' should return a boolean", () => {
        let word = new Palindrome()
        expect(word.isPalindrome("eye")).to.be.a('boolean')
    })

    it("Word 'eye' should return true", () => {
        let word = new Palindrome()
        expect(word.isPalindrome("eye")).to.be.true
    })

    it("Word '_eye' should return true", () => {
        let word = new Palindrome()
        expect(word.isPalindrome("_eye")).to.be.true
    })

    it("Word 'race car' should return true", () => {
        let word = new Palindrome()
        expect(word.isPalindrome("race car")).to.be.true
    })

    it("Word 'not a palindrome' should return false", () => {
        let word = new Palindrome()
        expect(word.isPalindrome("not a palindrome")).to.be.false
    })

    it("Word 'A man, a plan, a canal. Panama' should return true", () => {
        let word = new Palindrome()
        expect(word.isPalindrome("A man, a plan, a canal. Panama")).to.be.true
    })

    it("Word 'never odd or even' should return true", () => {
        let word = new Palindrome()
        expect(word.isPalindrome("never odd or even")).to.be.true
    })

    it("Word 'nope' should return false", () => {
        let word = new Palindrome()
        expect(word.isPalindrome("nope")).to.be.false
    })

    it("Word 'almostomla' should return false", () => {
        let word = new Palindrome()
        expect(word.isPalindrome("almostomla")).to.be.false
    })

    it("Word 'My age is 0, 0 si ega ym.' should return false", () => {
        let word = new Palindrome()
        expect(word.isPalindrome("My age is 0, 0 si ega ym.")).to.be.true
    })

    it("Word '1 eye for of 1 eye.' should return false", () => {
        let word = new Palindrome()
        expect(word.isPalindrome("1 eye for of 1 eye.")).to.be.false
    })

    it("Word '0_0 (: /-\ :) 0-0' should return false", () => {
        let word = new Palindrome()
        expect(word.isPalindrome("0_0 (: /-\ :) 0-0")).to.be.true
    })
    
    it("Word 'five|\_/|four' should return false", () => {
        let word = new Palindrome()
        expect(word.isPalindrome("five|\_/|four")).to.be.false
    })

})