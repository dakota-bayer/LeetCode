import { nextGreatestLetter } from './nextGreatestLetter';

describe('nextGreatestLetter', () => {
    test('solution is beginng of input', () => {
        const letters = ["c", "f", "j"];
        const target = "a";
        expect(nextGreatestLetter(letters, target)).toEqual("c");
    });

    test('solution is middle of input', () => {
        const letters = ["c", "f", "j"];
        const target = "c";
        expect(nextGreatestLetter(letters, target)).toEqual("f");
    });

    test('solution is middle of input, target not in input', () => {
        const letters = ["c", "f", "j"];
        const target = "d";
        expect(nextGreatestLetter(letters, target)).toEqual("f");
    });

    test('solution not found, returns first character in input', () => {
        const letters = ["x", "x", "y", "y"];
        const target = "z";
        expect(nextGreatestLetter(letters, target)).toEqual("x");
    });

    test('single target within input, returns next', () => {
        const letters = ["a", "b", "c", "c", "f", "j", "p"];
        const target = "b";
        expect(nextGreatestLetter(letters, target)).toEqual("c");
    });

    test('multiple target within input, returns next', () => {
        const letters = ["a", "b", "c", "c", "c", "f", "j", "p"];
        const target = "c";
        expect(nextGreatestLetter(letters, target)).toEqual("f");
    });

    test('target is last within input, returns first from input', () => {
        const letters = ["a", "b", "c", "c", "c", "f", "j", "p"];
        const target = "p";
        expect(nextGreatestLetter(letters, target)).toEqual("a");
    });

    test('target is first within input, returns next', () => {
        const letters = ["a", "b", "c", "c", "c", "f", "j", "p"];
        const target = "a";
        expect(nextGreatestLetter(letters, target)).toEqual("b");
    });
})