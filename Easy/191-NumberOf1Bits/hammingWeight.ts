/* 191. Number of 1 Bits

Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).

Example 1:
    Input: n = 11
    Output: 3
    Explanation: The input binary string 1011 has a total of three set bits.

Example 2:
    Input: n = 128
    Output: 1
    Explanation: The input binary string 10000000 has a total of one set bit.

Example 3:
    Input: n = 2147483645
    Output: 30
    Explanation: The input binary string 1111111111111111111111111111101 has a total of thirty set bits.

*/

export function hammingWeight(n: number): number {
  let count = 0;
  while (n !== 0) {
    count += n & 1; // Check if the least significant bit is 1
    n >>>= 1; // Unsigned right shift to drop the least significant bit
  }
  return count;
}
