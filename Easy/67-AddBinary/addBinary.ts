/* 67. Add Binary

Given two binary strings a and b, return their sum as a binary string.

Example 1:
    Input: a = "11", b = "1"
    Output: "100"

Example 2:
    Input: a = "1010", b = "1011"
    Output: "10101"

Constraints:
    1 <= a.length, b.length <= 10^4
    a and b consist only of '0' or '1' characters.
    Each string does not contain leading zeros except for the zero itself.

*/

export function addBinary(a: string, b: string): string {
    let result: string = "";
    let carry: number = 0;

    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        let num1: number = Number.parseInt(a[i] ?? "0");
        let num2: number = Number.parseInt(b[j] ?? "0");
        let sum: number = num1 + num2 + carry;
        carry = sum > 1 ? 1 : 0;
        result = (sum % 2 == 0 ? 0 : 1) + result;
    }

    return (carry === 0 ? "" : "1") + result;
};

/*
let str = addBinary("11", "1");
console.log(str);
*/