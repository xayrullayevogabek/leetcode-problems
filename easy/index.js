// #1. Two Sum
// const twoSum = function(nums, target) {
//     for (let i = 1; i < nums.length; i++) {
//         for (let j = i; j < nums.length; j++) {
//             if (nums[j] + nums[j - i] === target) {
//                 return [j - i, j];
//             }
//         }
//     }
//     return [];
// };

// #2. Palindrome Number
// const isPalindrome = function(x) {
//     const reversedNumber = +x.toString().split("").reverse().join("")
//     if(reversedNumber == x){
//         return true
//     } else {
//         return false
//     }
// };

// #3. Roman to integer
// const romanToInt = (s) => {
//   const symbol = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let result = 0;

//   for (i = 0; i < s.length; i++) {
//     if (symbol[s[i]] < symbol[s[i + 1]]) {
//       result -= symbol[s[i]];
//     } else {
//       result += symbol[s[i]];
//     }
//   }
//   return result;
// };
// romanToInt("IV");  Output: 4

// #4. Longest Common Prefix
// const longestCommonPrefix = (strs) => {
//   if (strs.length === 0) return "";

//   let prefix = strs[0];
//   for (let i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) !== 0) {
//       prefix = prefix.slice(0, -1);
//       if (prefix === "") return "";
//     }
//   }
//   return prefix;
// };
// longestCommonPrefix(["flower", "flow", "flight"]); Output: "fl"

// #5. Valid Parentheses
// const isValid = (s) => {
//   const parentheses = [];
//   for (let i = 0; i < s.length; i++) {
//     let c = s.charAt(i);
//     switch (c) {
//       case "(":
//         parentheses.push(")");
//         break;
//       case "[":
//         parentheses.push("]");
//         break;
//       case "{":
//         parentheses.push("}");
//         break;
//       default:
//         if (c !== parentheses.pop()) {
//           return false;
//         }
//     }
//   }
//   return parentheses.length === 0
// };

// #6. Merge two sorted arrays
// const mergeTwoLists = (l1, l2) => {
//   if (!l1) return l2;
//   else if (!l2) return l1;
//   else if (l1.val <= l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   } else {
//     l2.next = mergeTwoLists(l1, l2.next);
//     return l2;
//   }
// };

// #6. Merge two sorted array second way
// const mergeTwoLists = (l1, l2) => {
//   const newArr = [...l1, ...l2].sort();

//   return newArr;
// };

// #7. removeDuplicates
// const removeDuplicates = function (nums) {
//   let count = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[count - 1]) {
//       nums[count] = nums[i];
//       count++;
//     }
//   }
//   return count;
// };
// const clearedArr = removeDuplicates([1, 1, 2]);

// #8.Length of Last Word
// const lengthOfLastWord = (s) => {
//   return s.trim().split(" ").slice(-1).join('').length
// };

// #9. Plus One
// const plusOne = (digits) => {
//   let number = BigInt(digits.join(""));
//   number++;

//   return String(number).split("");
// };

// #10. Sqrt(x)
// const mySqrt = (x) => {
//   return Math.floor(Math.sqrt(x));
// };

// #11 Remove Duplicates from nodelist
// const deleteDuplicates = function (head) {
//   let current = head;

//   while (current !== null && current.next !== null) {
//     if (current.val === current.next.val) {
//       current.next = current.next.next;
//     } else {
//       current = current.next;
//     }
//   }

//   return head;
// };

// #12. Same Tree
// const isSameTree = function (p, q) {
//   if (!p && !q) return true;
//   if (!p || !q) return false;
//   return (
//     p.val === q.val &&
//     isSameTree(p.left, q.left) &&
//     isSameTree(p.right, q.right)
//   );
// };

// #13. Valid Palidrome
// const isPalindrome = function (s) {
//   function clearTheString(str) {
//     return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   }

//   return clearTheString(s) === clearTheString(s).split("").reverse().join("");
// };

//#14. IsAnagram
// const isAnagram = (s, t) => {
//   if (s.length !== t.length) {
//     return false;
//   }

//   const countOfS = {};
//   const countOfT = {};

//   for (const char of s) {
//     if (countOfS[char]) {
//       countOfS[char]++;
//     } else {
//       countOfS[char] = 1;
//     }
//   }

//   for (const char of t) {
//     if (countOfT[char]) {
//       countOfT[char]++;
//     } else {
//       countOfT[char] = 1;
//     }
//   }

//   for (const char in countOfS) {
//     if (countOfS[char] !== countOfT[char]) {
//       return false;
//     }
//   }

//   return true;
// };

// #15. Single number
// const singleNumber = (nums) => {
//   const numsCount = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (numsCount[nums[i]]) {
//       numsCount[nums[i]] += 1;
//     } else {
//       numsCount[nums[i]] = 1;
//     }
//   }

//   for (let number in numsCount) {
//     if(numsCount[number] === 1){
//         return +number
//     }
//   }
// };

// singleNumber([4,1,2,1,2]);

// #16. Contains Duplicates
// const containsDuplicate = (nums) => {
//   const numsCount = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (numsCount[nums[i]]) {
//       numsCount[nums[i]] += 1;
//     } else {
//       numsCount[nums[i]] = 1;
//     }
//   }

//   for (let number in numsCount) {
//     if (numsCount[number] >= 2) {
//       return true;
//     }
//   }

//   return false;
// };

// #18. Missing Number
// const missingNumber = function (nums) {
//   const n = nums.length;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = nums.reduce((acc, num) => acc + num, 0);

//   return expectedSum - actualSum;
// };

// missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);

// #19. FizzBuzz
// const fizzBuzz = function (n) {
//   const arr = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       arr.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       arr.push("Fizz");
//     } else if (i % 5 === 0) {
//       arr.push("Buzz");
//     } else {
//       arr.push(i.toString());
//     }
//   }

//   return arr
// };
// fizzBuzz(15);

// #20. First unique character
// const firstUniqChar = function (s) {
//   const arrOfString = s.split("");
//   const wordsCount = {};
//   for (let i = 0; i < arrOfString.length; i++) {
//     if (wordsCount[arrOfString[i]]) {
//       wordsCount[arrOfString[i]] += 1;
//     } else {
//       wordsCount[arrOfString[i]] = 1;
//     }
//   }
//   for (let i = 0; i < arrOfString.length; i++) {
//     if (wordsCount[arrOfString[i]] === 1) {
//       return i;
//     }
//   }

//   return -1;
// };

// console.log(firstUniqChar("loveleetcode"));

//#22 Duplicate Zeros
// const duplicateZeros = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       arr.splice(i, 0, 0);
//       arr.pop();
//       i++;
//     }
//   }

//   return arr;
// };

// duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);

// #23 Day of the week
// const dayOfTheWeek = (day, month, year) => {
//   const date = new Date(year, month - 1, day);

//   const days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   return days[date.getDay()];
// };

// dayOfTheWeek(31, 8, 2019);

// #23. Remove Element
// function removeElement(nums, val) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[count++] = nums[i];
//     }
//   }
//   return count;
// }

// console.log(removeElement([2, 3, 2, 3], 3));

// #24. Move Zeros
// const moveZeros = (nums) => {
//   let lastNonZeroIndex = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[lastNonZeroIndex] = nums[i];
//       lastNonZeroIndex++;
//     }
//   }
//   for (let i = lastNonZeroIndex; i < nums.length; i++) {
//     nums[i] = 0;
//   }

//   return nums;
// };

// console.log(moveZeros([0, 0, 1]));

// #25. Add Digits
// const addDigits = function (num) {
//   const digitsArr = num.toString().split("").map(Number);

//   if (num < 10) {
//     return num;
//   }

//   const sum = digitsArr.reduce((acc, num) => {
//     return (acc += num);
//   }, 0);

//   return addDigits(sum);
// };

// addDigits(38)

// 26. Robot Return to origin
// const judgeCircle = function (moves) {
//   let up = 0;
//   let down = 0;
//   let left = 0;
//   let right = 0;

//   for (let i = 0; i < moves.length; i++) {
//     const target = moves[i];
//     switch (target) {
//       case "L":
//         left++;
//         break;
//       case "R":
//         right++;
//         break;
//       case "D":
//         down++;
//         break;
//       case "U":
//         up++;
//         break;
//     }
//   }

//   return up === down && left === right;
// };

// #27. Count of segments
// const countSegments = function (s) {
//   return s.match(/([^\s]+)/g)?.length ?? 0;
// };

// countSegments("Hello, my name is John");
