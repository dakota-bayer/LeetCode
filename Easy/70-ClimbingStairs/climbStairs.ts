/* 70. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. 
In how many distinct ways can you climb to the top?

Example 1:
    Input: n = 2
    Output: 2
    Explanation: There are TWO ways to climb to the top.
        1. 1 step + 1 step
        2. 2 steps

Example 2:
    Input: n = 3
    Output: 3
    Explanation: There are THREE ways to climb to the top.
        1. 1 step + 1 step + 1 step
        2. 1 step + 2 steps
        3. 2 steps + 1 step

Constraints:
    1 <= n <= 45

*/

export function climbStairs(n: number): number {
    if (n <= 2) return n;

    let first: number = 1;
    let second: number = 2;

    for (let i = 3; i <= n; i++) {
        const temp = first + second;
        first = second;
        second = temp;
    }

    return second;
};