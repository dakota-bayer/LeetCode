import { fizzBuzz } from './fizzBuzz'; // Replace with the correct file path

describe('fizzBuzz', () => {
  test('returns correct result for n = 3 (example 1)', () => {
    const result = fizzBuzz(3);
    expect(result).toEqual(["1", "2", "Fizz"]);
  });

  test('returns correct result for n = 5 (example 2)', () => {
    const result = fizzBuzz(5);
    expect(result).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });

  test('returns correct result for n = 15 (example 3)', () => {
    const result = fizzBuzz(15);
    expect(result).toEqual([
      "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz",
      "11", "Fizz", "13", "14", "FizzBuzz"
    ]);
  });

  test('handles smallest input n = 1', () => {
    const result = fizzBuzz(1);
    expect(result).toEqual(["1"]);
  });

  test('handles input where n is only divisible by 3', () => {
    const result = fizzBuzz(6);
    expect(result).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz"]);
  });

  test('handles input where n is only divisible by 5', () => {
    const result = fizzBuzz(10);
    expect(result).toEqual([
      "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"
    ]);
  });

  test('handles large input n = 100', () => {
    const result = fizzBuzz(100);
    expect(result[14]).toBe("FizzBuzz"); // Check 15th element (1-indexed)
    expect(result[99]).toBe("Buzz"); // Check 100th element (1-indexed)
  });
});
