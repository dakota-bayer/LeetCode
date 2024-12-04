/* 279. Perfect Squares -- using BFS

Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; 
    in other words, it is the product of some integer with itself. 
For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

Example 1:
    Input: n = 12
    Output: 3
    Explanation: 12 = 4 + 4 + 4.

Example 2:
    Input: n = 13
    Output: 2
    Explanation: 13 = 4 + 9.

Constraints:
    1 <= n <= 10^4

*/

/*
The thought behind this one is to generate all the perfect squares
Then for each perfect square, subtract it from the remaining value
If the remaining value minus perfect square is 0, then we've found the solution
But if the remaining value is greater than 0, we need to continue searching
Since we're using BFS, once the remaining value minus the perfect square is 0, 
    you know you've found the optimal solution

https://youtu.be/wZqW204FC6k?si=0cu6vEspT_szgzfj
*/

export function numSquares(n: number): number {
    // generate all perfect squares <= n, ordered from smallest to largest
    const perfectSqures: number[] = [];
    for (let i = 1; i * i <= n; i++) {
        perfectSqures.push(i * i);
    }

    const queue: [number, number][] = [[n, 0]]; // [remaining number, steps]
    const visited = new Set<number>(); // stores perfect squares that have already been "tried"
        // if 12 - 2^2 = 8, and 8 has been "tried" already, then we know the current path is not optimal

    while (queue.length > 0) {
        const [current, steps] = queue.shift()!;

        // Try subtracting each perfect square to see if they reach 0
        for (let square of perfectSqures) {
            const remainder = current - square;
            if (remainder === 0) {
                return steps + 1;
            }

            // if the remainder is stil positive and hasn't been visited, add it to the queue
            if (remainder > 0 && !visited.has(remainder)) {
                visited.add(remainder);
                queue.push([remainder, steps + 1]);
            }

            // if remainder becomes negative, no need to continue subtracting LARGER square
            if(remainder < 0){
                break;
            }
        }

    }

    return 0; // should never happen
}