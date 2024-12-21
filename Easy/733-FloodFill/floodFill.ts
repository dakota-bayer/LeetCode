/* 733. Flood Fill

You are given an image represented by an m x n grid of integers image, 
    where image[i][j] represents the pixel value of the image. 
You are also given three integers sr, sc, and color. 
Your task is to perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill:
    Begin with the starting pixel and change its color to color.
    Perform the same process for each pixel that is directly adjacent (pixels that share 
        a side with the original pixel, either horizontally or vertically) and shares the 
        same color as the starting pixel.
    Keep repeating this process by checking neighboring pixels of the updated pixels and 
        modifying their color if it matches the original color of the starting pixel.
    The process stops when there are no more adjacent pixels of the original color to update.

Return the modified image after performing the flood fill.

Example 1:
    Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
    Output: [[2,2,2],[2,2,0],[2,0,1]]
    Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), 
        all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) 
        are colored with the new color.
        Note the bottom corner is not colored 2, because it is not horizontally or vertically 
        connected to the starting pixel.

        Input:
            image = [[1,1,1],
                     [1,1,0],
                     [1,0,1]],
            sr = 1, sc = 1, color = 2

        Output:
            [[2,2,2],
             [2,2,0],
             [2,0,1]]

Example 2:
    Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
    Output: [[0,0,0],[0,0,0]]
    Explanation: The starting pixel is already colored with 0, which is the same as the target 
        color. Therefore, no changes are made to the image.

    Input:
        image = [[0,0,0],
                 [0,0,0]],
        sr = 0, sc = 0, color = 0

    Output:
        [[0,0,0],
         [0,0,0]]

Constraints:
    m == image.length
    n == image[i].length
    1 <= m, n <= 50
    0 <= image[i][j], color < 2^16
    0 <= sr < m
    0 <= sc < n

*/

export function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const original = image[sr][sc];
    image[sr][sc] = color;
    const queue: number[][] = [];

    const visited = new Array(image.length);
    for (let i = 0; i < image.length; i++) {
        visited[i] = new Array(image[0].length);
    }
    const directions: number[][] = [[0, -1], [-1, 0], [0, 1], [1, 0]];

    queue.push([sr, sc]);

    while (queue.length) {
        let numToExplore = queue.length;
        for (let i = 0; i < numToExplore; i++) {
            const current = queue.shift()!;
            if (visited[current[0]][current[1]]) continue;
            visited[current[0]][current[1]] = true;

            for (let direction of directions) {
                const row = current[0] + direction[0];
                const col = current[1] + direction[1];
                if (row < 0 || col < 0 || row >= image.length || col >= image[0].length) {
                    continue;
                }

                if (image[row][col] === original) {
                    // fill it and add it to the queue
                    image[row][col] = color;
                    queue.push([row, col]);
                }
            }
        }
    }


    return image;
};

/*
const image = [[1]];
const sr = 0;
const sc = 0;
const color = 2;
floodFill(image, sr, sc, color);
*/