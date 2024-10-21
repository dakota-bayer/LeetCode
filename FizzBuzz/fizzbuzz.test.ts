import { fizzBuzz } from './fizzbuzz';

describe('fizzBuzz', () => {
    it('should return ["1", "2", "Fizz"] for n = 3', () => {
        expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"]);
    });

    it('should return ["1", "2", "Fizz", "4", "Buzz"] for n = 5', () => {
        expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
    });

    it('should return ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"] for n = 15', () => {
        expect(fizzBuzz(15)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
    });

    it('should handle n = 1 correctly', () => {
        expect(fizzBuzz(1)).toEqual(["1"]);
    });

    it('should handle n = 0 (edge case)', () => {
        expect(fizzBuzz(0)).toEqual([]);
    });
});
