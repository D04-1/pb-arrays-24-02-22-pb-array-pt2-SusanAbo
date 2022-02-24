const rewire = require("rewire");
const fs = require("fs");
const content = fs
    .readFileSync("./solution.js")
    .toString("utf-8")
    .replace(/ ()/g, "");
const solution = rewire("../solution");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));
describe("1.The Greater Number", () => {
    it("Take 2 Arguments, 'Array', 'Number' and returns elements in the Array that are greater than the number", () => {
        const findGreatest = solution.__get__("findGreatest");
        const arr = [3, 4, 5, 10, 20];
        const num = 4;
        expect(findGreatest(arr, num)).toBe("5, 10, 20");
    })
})

describe("2.Longest Word", () => {
    it("Return the longest word in a String", () => {
        const getLongestWord = solution.__get__("getLongestWord");
        const str = "this is one of my strings";
        expect(getLongestWord(str)).toBe("strings");
    })
})
describe("3.Reverse", () => {
    it("Returns reversed number", () => {
        const reverseNum = solution.__get__("reverseNum");
        const numToReverse = -123;
        expect(reverseNum(numToReverse)).toBe(-321);
    })
})
describe("4.Vowels", () => {
    it("Should return the number of vowels in the argument passed", () => {
        const getVowels = solution.__get__("vowelCounter");
        const strToCheck = "this is a string";
        expect(getVowels(strToCheck)).toBe(4);
    })
})
describe("5.Missing Number", () => {
    it("Takes an Array of integers, and returns the missing integer", () => {
        const findMissingNumber = solution.__get__("findMissingNum");
        const arr = [2, 1, 3, 4, 6, 7, 8];
        expect(findMissingNumber(arr)).toBe(5);

    })
})
describe("6.Cubed", () => {
    it("Expects an Array of nums, and returns sum of its cube", () => {
        const sumOfCubes = solution.__get__("sumOfCubes");
        const arr = [1, 5, 9];
        expect(sumOfCubes(arr)).toBe(855);

    })
})
describe("7.Dictionary", () => {
    it("Takes an initial string, and an Array of words, Returns words with the same letters as the initial string", () => {
        const dictionary = solution.__get__("dictionary");
        const initialString = "cat";
        const words = ["bat", "tab", "cat"];
        expect(dictionary(initialString, words)).toEqual(["cat"]);
        expect(dictionary("beau", ["pastry", "delicious", "name", "boring"])).toEqual([]);

    })
})

describe("8.Even Number Generator", () => {
    it("Returns all the Even Numbers", () => {
        const evenNumbers = solution.__get__("getEvenNums");
        expect(evenNumbers(8)).toEqual([2, 4, 6, 8]);

    })
})
describe("9.Alphabetical Order", () => {
    it("Should return the string in an Alphabetical Order", () => {
        const alphabeticalOrder = solution.__get__("alphabetise");
        const str = "hello";
        expect(alphabeticalOrder(str)).toBe("ehllo");
    })
})