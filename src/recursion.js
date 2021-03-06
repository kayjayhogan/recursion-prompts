/* jshint esversion: 6 */

// utility functions
function objIsEmpty(object) {
	for(var key in object) {
		if(object.hasOwnProperty(key)) {
			return false;
		}
	}
	return true;
}

function arraysAreEqual(arr1, arr2) {
  return arr1.every(function(element, i) {
    return element === arr2[i];
  });
}
// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	if(n === 0) {
		return 1;
	} else if(n < 0) {
		return null;
	} else {
		return n * factorial(n - 1);
	}
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
	var index = array.length - 1;
	if(array.length === 0) {
		return 0;
	} else {
		return array[index] + sum(array.slice(0, index));
	}
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	var index = array.length - 1;
	if(array.length === 0) {
		return 0;
	} else if(Array.isArray(array[index])) {
		function takeOutOfArray(arr) {
			for(var i=0; i<arr.length; i++) {
				if(Array.isArray(arr[i])) {
					takeOutOfArray(arr[i]);
				} else {
					sum += arr[i];
				}
			}
		}
		var sum = 0;
		takeOutOfArray(array[index]);
		return sum + arraySum(array.slice(0, index));
	} else {
		return array[index] + arraySum(array.slice(0, index))
	}
};

// 4. Check if a number is even.
var isEven = function(n) {
	var num = Math.abs(n);
	if(num === 0) {
		return true;
	} else if(num ===1 ){
		return false;
	} else {
		return isEven(num - 2);
	}
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	var num = Math.abs(n);
	if(num <= 0) {
		return 0;
	} else if (n < 0) {
		return -((num - 1) + sumBelow(num - 1));
	} else {
		return (num - 1) + sumBelow(num - 1);
	}
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
	if(Math.abs(y - x) === 0 || Math.abs(y - x) === 1) {
		return [];
	} else if(y > x) {
		return [x+1].concat(range(x+1, y));
	} else {
		return [x-1].concat(range(x-1, y));
	}
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	if(exp === 0) {
		return 1;
	} else if (exp > 0) {
		return base * exponent(base, exp - 1);
	} else {
		return 1 / exponent(base, exp * -1);
	}
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	if(n === 0) {
		return false;
	} else if(n ===1) {
		return true;
	} else if(Number.isInteger(n)) {
		return powerOfTwo(n / 2);
	} else {
		return false;
	}
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
	var maxIndex = string.length - 1;
	if(string === "") {
		return "";
	} else {
		return string[maxIndex] + reverse(string.slice(0, maxIndex));
	}
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	var lowerString = string.replace(/\s/g, '').toLowerCase();
	if(lowerString.length === 1 || lowerString.length === 0) {
		return true;
	} else if(lowerString[0] === lowerString[lowerString.length -1]) {
		return palindrome(lowerString.slice(1, lowerString.length-1));
	} else {
		return false;
	}
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) { 
  	return NaN; 
  } else if (x < 0) { 
  	return -modulo(-x,  y); 
  } else if (y < 0) { 
  	return  modulo( x, -y); 
  } else if (x < y) { 
  	return  x; 
  } else {
  	return modulo(x - y, y);
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
	if(x === 0 || y === 0) {
		return 0;
	} else if(y > 0) {
		return x + multiply(x, y-1);
	} else {
		return -x + multiply(x, y+1);
	}
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
	if(y === 0) {
		return NaN;
	} else if(x ===0) {
		return 0;
	} else {
		function myAbs(num) {
			if(num >= 0) {
				return num;
			} else {
				return -num;
			}
		}
		if((x < 0 && y < 0) || (x > 0 && y > 0)) { 
			if(myAbs(x) >= myAbs(y)) { 
				return 1 + divide(myAbs(x) - myAbs(y), myAbs(y));
			} else { 
				if(myAbs(x) - myAbs(y) < divide(myAbs(y), 2)) {
					return 0;
				} else {
					return 1;
				}
			}
		} else {
			if(myAbs(x) >= myAbs(y)) { 
				return -1 + divide(myAbs(x) - myAbs(y), y);
			} else { 
				if(myAbs(x) - myAbs(y) < divide(myAbs(y), 2)) {
					return 0;
				} else {
					return -1;
				}
			}
		}
	}
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
	if(x === 0) {
		return y;
	} else if(y === 0) {
		return x;
	} else if(x < 0 || y < 0) {
		return null;
	}	else {
		var larger = Math.max(x, y);
		var smaller = Math.min(x, y);
		var quotient = Math.floor(larger / smaller);
		var remainder = larger - (smaller * quotient);	
		return gcd(smaller, remainder);	
	}
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) { 
	if(str1 === "" && str2 === "") {
		return true;
	} else if(str1[0] === str2[0]){
		return compareStr(str1.slice(1), str2.slice(1));
	} else {
		return false;
	}
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
	if(str.length === 0) {
		return [];
	} else {
		return [str[0]].concat(createArray(str.slice(1)));
	}
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
	if(array.length === 0) {
		return [];
	} else {
		return [array[array.length - 1]].concat(reverseArr(array.slice(0, array.length-1)));
	}
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	if(length === 0) {
		return [];
	} else {
		return [value].concat(buildList(value, length - 1));
	}
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
	if(n <= 0) {
		return [];
	} else if(n % 3 === 0 && n % 5 === 0) {
		return fizzBuzz(n - 1).concat(["FizzBuzz"]);
	} else if(n % 3 === 0) {
		return fizzBuzz(n - 1).concat(["Fizz"]);
	} else if(n % 5 === 0) {
		return fizzBuzz(n - 1).concat( ["Buzz"]);
	} else {
		return fizzBuzz(n - 1).concat([n.toString()]);
	}
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	if(array.length === 0) {
		return 0;
	} else {
		if(array[0] === value) {
			return 1 + countOccurrence(array.slice(1), value);
		} else {
			return 0 + countOccurrence(array.slice(1), value);
		}
	}
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
	if(array.length === 0 || callback === undefined) {
		return array;
	} else {
		return [callback(array[0])].concat(rMap(array.slice(1), callback));
	}
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
	var count = 0;
	if(objIsEmpty(obj)) {
		return 0;
	} else {
		for(var k in obj) {
			if(k === key) {
				count++;
			} else if(typeof obj[k] === "object") {
				count += countKeysInObj(obj[k], key);
			}
		}
		return count;
	}
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
	var count = 0;
	if(objIsEmpty(obj)) {
		return 0;
	} else {
		for(var k in obj) {
			if(obj[k] === value) {
				count++;
			} else if(typeof obj[k] === "object") {
				count += countValuesInObj(obj[k], value);
			}
		}
		return count;
	}
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {	
	if(objIsEmpty(obj)) {
		return obj;
	} else {
		for(var k in obj) {
			if(k === oldKey) {
				obj[newKey] = obj[oldKey];
				delete obj[oldKey];
			} else if(typeof obj[k] === "object") {
				replaceKeysInObj(obj[k], oldKey, newKey);
			} 				
		}
		return obj;
	}
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {	
	if(n <= 0) {
		return null;
	} else if(n === 1) {
		return [0, 1];
	} else {
		var priorFib = fibonacci(n-1);
		return priorFib.concat(priorFib[priorFib.length - 2] + priorFib[priorFib.length - 1]);
	}
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
	if(n<0) {
		return null;
	} else if(n === 0) {
		return 0;
	} else if(n === 1) {
		return 1;
	} else {
		return nthFibo(n - 2) + nthFibo(n - 1);
	}
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
	if(array.length === 0) {
		return [];
	} else {
		return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
	}
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
	if(array.length === 0) {
		return [];
	} else {
		var string = array[0];
		var capString = string[0].toUpperCase() + string.slice(1);
		return [capString].concat(capitalizeFirst(array.slice(1)));
	}
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
	var sum = 0;
	if(objIsEmpty(obj)) {
		return null;
	} else {
		for(var k in obj) {
			if(obj[k] % 2 === 0) {
				sum += obj[k];
			} else if(typeof obj[k] === "object") {
			    sum += nestedEvenSum(obj[k]);
			}
		}
	}
	return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
	var flatArr = [];
	if(array.length === 0) {
		return [];
	} else {
		for(var i=0; i<array.length; i++) {
			if(Array.isArray(array[i])) {
				flatArr = flatArr.concat(flatten(array[i]));
			} else {
				flatArr.push(array[i]);
			}
		}
	}
	return flatArr;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
	if(obj === undefined) {
		obj = {};
	}
	if(str === "") {
		return {};
	} else {
		if(obj.hasOwnProperty(str[0])) {
			obj[str[0]]++;
		} else {
			obj[str[0]] = 1;
		}
	} 
	letterTally(str.slice(1), obj);
	return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
	var compressed = [];
	if(list.length === 0) {
		return [];
	} else {
		compressed.push(list[0]);
		var index = 1;
		while(list[index] === list[0]) {
			index++;
		}
		return compressed.concat(compress(list.slice(index)));
	}
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
	var augArr = [];
	if(array.length === 0) {
		return [];
	} else if(aug === undefined) {
		return array;
	} else {
		array[0].push(aug);
		augArr.push(array[0]);
		return augArr.concat(augmentElements(array.slice(1), aug));
	}
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
	var minimized = [];
	if(array.length === 0) {
		return [];
	} else {
		minimized.push(array[0]);
		if(array[0] !== 0) {
			return minimized.concat(minimizeZeroes(array.slice(1)));
		} else {
			var index = 1;
			while(array[index] === 0) {
				index++;
			}
			return minimized.concat(minimizeZeroes(array.slice(index)));
		}
	}
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
	var alternated = [];
	function posArray(arr) {
		return arr.map(function(num) {
			return Math.abs(num);
		});
	}	
	function negArray(arr) {
		return arr.map(function(num) {
			return -Math.abs(num);
		});
	}
	if(array.length === 0) {
		return [];
	} else {
		if(arraysAreEqual(posArray(array), array)) {
			alternated.push(array[0]);
			return alternated.concat(alternateSign(negArray(array.slice(1))));
		} else if(arraysAreEqual(negArray(array), array)) {
			alternated.push(array[0]);
			return alternated.concat(alternateSign(posArray(array.slice(1))));
		} else {
			alternated.push(posArray(array)[0]);
			return alternated.concat(alternateSign(negArray(array.slice(1))));
		}
	}
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
	var returnStr = "";
	if(str === "") {
		return "";
	} else {
		var wordObj = {
			0: "zero",
			1: "one",
			2: "two",
			3: "three",
			4: "four",
			5: "five",
			6: "six",
			7: "seven",
			8: "eight",
			9: "nine"
		};
		if(wordObj.hasOwnProperty(str[0])) {
			returnStr += wordObj[str[0]] + numToText(str.slice(1));
		} else {
			returnStr += str[0] + numToText(str.slice(1));
		}
	}
	return returnStr;
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
