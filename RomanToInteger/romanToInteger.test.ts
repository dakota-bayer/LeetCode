import { romanToInt } from './romanToInteger';

describe("romanToIntConversion", () => {
    test("Example 1: converts III to 3", () => {
        const result = romanToInt("III");
        expect(result).toEqual(3);
    });

    test("Example 2: converts LVIII to 58", () => {
        const result = romanToInt("LVIII");
        expect(result).toEqual(58);
    });

    test("Example 3: converts MCMXCIV to 1994", () => {
        const result = romanToInt("MCMXCIV");
        expect(result).toEqual(1994);
    });

    // Additional test cases

    test("Edge Case: converts I to 1", () => {
        const result = romanToInt("I");
        expect(result).toEqual(1);
    });

    test("Edge Case: converts IV to 4 (subtraction rule)", () => {
        const result = romanToInt("IV");
        expect(result).toEqual(4);
    });

    test("Converts IX to 9 (subtraction rule)", () => {
        const result = romanToInt("IX");
        expect(result).toEqual(9);
    });

    test("Converts XL to 40 (subtraction rule)", () => {
        const result = romanToInt("XL");
        expect(result).toEqual(40);
    });

    test("Converts XC to 90 (subtraction rule)", () => {
        const result = romanToInt("XC");
        expect(result).toEqual(90);
    });

    test("Converts CD to 400 (subtraction rule)", () => {
        const result = romanToInt("CD");
        expect(result).toEqual(400);
    });

    test("Converts CM to 900 (subtraction rule)", () => {
        const result = romanToInt("CM");
        expect(result).toEqual(900);
    });

    test("Minimal Valid Roman Numeral: converts MMMCMXCIX to 3999", () => {
        const result = romanToInt("MMMCMXCIX");
        expect(result).toEqual(3999);
    });

    // Test for invalid cases (depends on function handling)
    test("Invalid Input: returns 0 or an error for empty string", () => {
        const result = romanToInt("");
        expect(result).toEqual(0); // Adjust if function throws error or returns null
    });

    // test("Invalid Input: handles invalid sequence (e.g., 'IIII')", () => {
    //     const result = romanToInt("IIII");
    //     expect(result).toEqual(0); // Adjust if function throws error or returns null
    // });

    // test("Invalid Input: handles lowercase roman numeral 'iv'", () => {
    //     const result = romanToInt("iv");
    //     expect(result).toEqual(4); // Adjust if function ignores case
    // });

    // test("Invalid Input: returns 0 or error for non-roman characters", () => {
    //     const result = romanToInt("ABC");
    //     expect(result).toEqual(0); // Adjust if function throws error or returns null
    // });
});