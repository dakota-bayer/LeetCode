import { romanToInt } from './romanToInt'; // Replace with the correct file path

describe('romanToInt', () => {
  test('converts "III" to 3 (example 1)', () => {
    const result = romanToInt("III");
    expect(result).toBe(3);
  });

  test('converts "LVIII" to 58 (example 2)', () => {
    const result = romanToInt("LVIII");
    expect(result).toBe(58);
  });

  test('converts "MCMXCIV" to 1994 (example 3)', () => {
    const result = romanToInt("MCMXCIV");
    expect(result).toBe(1994);
  });

  test('converts "IV" to 4 (subtraction rule)', () => {
    const result = romanToInt("IV");
    expect(result).toBe(4);
  });

  test('converts "IX" to 9 (subtraction rule)', () => {
    const result = romanToInt("IX");
    expect(result).toBe(9);
  });

  test('converts "XL" to 40 (subtraction rule)', () => {
    const result = romanToInt("XL");
    expect(result).toBe(40);
  });

  test('converts "XC" to 90 (subtraction rule)', () => {
    const result = romanToInt("XC");
    expect(result).toBe(90);
  });

  test('converts "CD" to 400 (subtraction rule)', () => {
    const result = romanToInt("CD");
    expect(result).toBe(400);
  });

  test('converts "CM" to 900 (subtraction rule)', () => {
    const result = romanToInt("CM");
    expect(result).toBe(900);
  });

  test('handles smallest roman numeral "I"', () => {
    const result = romanToInt("I");
    expect(result).toBe(1);
  });

  test('handles largest valid roman numeral "MMMCMXCIX" (3999)', () => {
    const result = romanToInt("MMMCMXCIX");
    expect(result).toBe(3999);
  });

  test('handles mixed roman numerals "MMXXIII" (2023)', () => {
    const result = romanToInt("MMXXIII");
    expect(result).toBe(2023);
  });

  test('handles repeated characters "XXX" (30)', () => {
    const result = romanToInt("XXX");
    expect(result).toBe(30);
  });
});
