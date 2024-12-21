import { floodFill } from './floodFill';

describe('floodFill', () => {
    test('should correctly perform flood fill for example 1', () => {
        const image = [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1],
        ];
        const sr = 1;
        const sc = 1;
        const color = 2;
        const expected = [
            [2, 2, 2],
            [2, 2, 0],
            [2, 0, 1],
        ];

        expect(floodFill(image, sr, sc, color)).toEqual(expected);
    });

    test('should correctly handle no changes when starting pixel already matches target color (example 2)', () => {
        const image = [
            [0, 0, 0],
            [0, 0, 0],
        ];
        const sr = 0;
        const sc = 0;
        const color = 0;
        const expected = [
            [0, 0, 0],
            [0, 0, 0],
        ];

        expect(floodFill(image, sr, sc, color)).toEqual(expected);
    });

    test('should handle a single pixel image', () => {
        const image = [[1]];
        const sr = 0;
        const sc = 0;
        const color = 2;
        const expected = [[2]];

        expect(floodFill(image, sr, sc, color)).toEqual(expected);
    });

    test('should handle an image where no pixels need to change', () => {
        const image = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
        ];
        const sr = 1;
        const sc = 1;
        const color = 1;
        const expected = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
        ];

        expect(floodFill(image, sr, sc, color)).toEqual(expected);
    });

    test('should handle filling only one region when there are distinct regions', () => {
        const image = [
            [1, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 1, 1],
            [0, 0, 1, 1],
        ];
        const sr = 0;
        const sc = 0;
        const color = 2;
        const expected = [
            [2, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 0, 1, 1],
            [0, 0, 1, 1],
        ];

        expect(floodFill(image, sr, sc, color)).toEqual(expected);
    });
});
