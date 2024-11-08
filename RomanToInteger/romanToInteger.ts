/*

13. Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 
12 is written as XII, which is simply X + II. 
The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 

There are six instances where subtraction is used:
    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

    Given a roman numeral, convert it to an integer.

Example 1:
    Input: s = "III"
    Output: 3
    Explanation: III = 3.

Example 2:
    Input: s = "LVIII"
    Output: 58
    Explanation: L = 50, V= 5, III = 3.

Example 3:
    Input: s = "MCMXCIV"
    Output: 1994
    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

Constraints:
1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

*/

export function romanToInt(s: string): number {
  let total: number = 0;
  let values: number[] = getValueArray(s);

  for (let c of values) {
    total += c;
  }

  total = performSubtraction(total, values);

  return total;
}

function performSubtraction(total: number, values: number[]): number {
  // if one value is < than the value after it, then subtract that value twice (beacuse it was added, now we need to subtract it)

  for (let i = 1; i < values.length; i++) {
    if(values[i - 1] < values[i]){
        total -= (values[i - 1] * 2);
    }
  }

  return total;
}

enum numerals {
  I = 1,
  V = 5,
  X = 10,
  L = 50,
  C = 100,
  D = 500,
  M = 1000,
}

function convertStrToEnum(convertingStr: string): numerals {
  switch (convertingStr) {
    case "I":
      return numerals.I;
    case "V":
      return numerals.V;
    case "X":
      return numerals.X;
    case "L":
      return numerals.L;
    case "C":
      return numerals.C;
    case "D":
      return numerals.D;
    case "M":
      return numerals.M;
    default:
      throw new Error("invalid word!");
  }
}

function getValueArray(s: string): number[] {
  let valueArray: number[] = [];
  let stringArray: string[] = s.split("");

  for (let c of stringArray) {
    valueArray.push(convertStrToEnum(c));
  }

  return valueArray;
}