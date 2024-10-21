"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fizzbuzz_1 = require("./fizzbuzz");
describe('fizzBuzz', () => {
    it('should return ["1", "2", "Fizz"] for n = 3', () => {
        expect((0, fizzbuzz_1.fizzBuzz)(3)).toEqual(["1", "2", "Fizz"]);
    });
    it('should return ["1", "2", "Fizz", "4", "Buzz"] for n = 5', () => {
        expect((0, fizzbuzz_1.fizzBuzz)(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
    });
    it('should return ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"] for n = 15', () => {
        expect((0, fizzbuzz_1.fizzBuzz)(15)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
    });
    it('should handle n = 1 correctly', () => {
        expect((0, fizzbuzz_1.fizzBuzz)(1)).toEqual(["1"]);
    });
    it('should handle n = 0 (edge case)', () => {
        expect((0, fizzbuzz_1.fizzBuzz)(0)).toEqual([]);
    });
});
