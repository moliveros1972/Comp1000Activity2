// alert("home");


// <!-- Challenging algorithm exercises -->

// <!-- 1. Write a function that returns the largest element in a list. -->

// var a = [1,2,3,4,5,6,7,8,9];

// function f1(a) {
// 	return Math.max(arr);
// }

// document.write(fa);
document.write("<br/>")

// max([1,2,3,4,5,6,7,8,9]);

// function max(arr){
//  var max = arr[0];
//  for(var i=1; i<arr.length; i++){
//    if(arr[i] > max){
//      max = arr[i];   
//    }
//   }
// return max;
// }

// document.write(max);


// <!-- 2. Write function that reverses a list, preferably in place. -->

var a = [1,2,3,4,5,6,7,8,9];

function f2(a) {
	var stack = new Array();
	stack.push(a[0]);
	stack.push(a[1]);
	stack.push(a[2]);
	stack.push(a[3]);
	stack.push(a[4]);
	stack.push(a[5]);
	stack.push(a[6]);
	stack.push(a[7]);
	stack.push(a[8]);
	document.write(stack.pop());
	document.write(stack.pop());
	document.write(stack.pop());
	document.write(stack.pop());
	document.write(stack.pop());
	document.write(stack.pop());
	document.write(stack.pop());
	document.write(stack.pop());
	document.write(stack.pop());
}

document.write("<br/>");
f2(a);


// <!-- 3. Write a function that checks whether an element occurs in a list. -->

var a = [1,2,3,4,5,6,7,8,9];


function f3(x, a) {
	var found = false;
	for (var i = 0; i < a.length; i++) {
		if (a[i] == x) {
			found = true;
		}
	}
return found;	
} 
document.write("<br/>")
document.write(f3(2,a));



// <!-- 4. Write a function that returns the elements on odd positions in a list. -->


// <!-- 5. Write a function that computes the running total of a list. -->



// <!-- 6. Write a function that tests whether a string is a palindrome. -->

// <!-- 7. Write three functions that compute the sum of the numbers in a list: using a for-loop, forEach and map. -->

// <!-- 8. Write a function on_all that applies a function to every element of a list. Use it to print the first twenty perfect squares. The perfect squares can be found by multiplying each natural number with itself. The first few perfect squares are 11= 1, 22=4, 33=9, 44=16. Twelve for example is not a perfect square because there is no natural number m so that m*m=12. (This question is tricky if your programming language makes it difficult to pass functions as arguments.) -->


// <!-- 9. Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3] -->

// <!-- 10. Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. -->

var arr1 = [1,2,3,4,5,6,7,8,9];
var arr2 = [a,b,c,d,e,f,g,h,i];

function f10(arr1, arr2) {
	var result = new Array();

	for (var i = 0; i < arr1.length; i++) {
		result.push(arr1[i]);
		result.push(arr2[i]);
	}

	return result;
}
document.write("<br/>");
var letters = ['i','b','i','s'];
document.write("<br/>");
document.write(f10(letters, numbers).join(""));





// <!-- 11. Write a function that merges two sorted lists into a new sorted list. [1,4,6],[2,3,5] → [1,2,3,4,5,6]. You can do this quicker than concatenating them followed by a sort. -->


// <!-- 12. Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. -->


// <!-- 13. Write a function that computes the list of the first 100 Fibonacci numbers. The first two Fibonacci numbers are 1 and 1. The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number. The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8. -->


// <!-- 14. Write a function that takes a number and returns a list of its digits. So for 2342 it should return [2,3,4,2]. -->

function f14 (numbers) {
	var result = new Array();
	result = numbers.toString().split("");
	return result;
}

var resultArray = f14(8675309);
document.write("<br/>");
document.write(resultArray.join());




// <!-- 15. Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. For example the list ["Hello", "World", "in", "a", "frame"] gets printed as: -->
// <!-- *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// ********* -->


var wordsArr = ['Hello', 'World', 'in', 'a', 'box'];

function longest(wordsArr) {
    var length = 0;
    for (var i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i].length > length) {
            length = wordsArr.length;
        }
    }
    return length;
}

function drawAllStars(length) {
    document.write("<br/>");
    for (var i = 0; i < length+4; i++) {
        document.write("*")
    }
}

function drawPrefix() {
    document.write("<br/>* ");
}

function drawSuffix(length, word) {
    document.write(word);
    var filler = length - word.length;
    for (var i=0; i < filler+1; i++) {
        document.write("&nbsp;");
    }
    document.write("*");
}

var biggest = longest(wordsArr);
document.write("<br/>");
document.write("biggest is " + biggest);
document.write("<br/>");
drawAllStars(biggest);
for(var i = 0; i < wordsArr.length; i++) {
    drawPrefix();
    drawSuffix(biggest, wordsArr[i]);
}
drawAllStars(biggest);








// function longest(wordArr) {
// 	var length = 0;
// 	for (var i = 0; i < wordsArr.length; i++){
// 		if(wordsArr[i].length > length) {
// 			length = wordsArr.length
// 		}
// 	}

// 	return length;
// }

// function drawAllStars(length) {
// 	for (var i = 0; i < length+4; i++);{
// 		document.write("*")
// 	}

// }

// function drawPrefix() {
// 	document.write("* ");
// }

// function drawSuffix(length, word) {
// 	document.write(word);
// 	var filler = length - word.length;
// 	for (var i=0; < filler; i++) {
// 		document.write(" ");
// 	}
// 	document.write("*");
// }

// var biggest = longest(wordsArr);
// document.write


// document.write("<br/>");

// <!-- 16. Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”. -->


// <!-- 17. Write a program that outputs all possibilities to put + or - or nothing between the numbers 1,2,…,9 (in this order) such that the result is 100. For example 1 + 2 + 3 - 4 + 5 + 6 + 78 + 9 = 100. -->


// <!-- 18. Write a program that automatically generates essays for you. -->


// <!-- 19. Write a program that automatically converts English text to Morse code and vice versa. -->


// <!-- 20. Write a program that finds the longest palindromic substring of a given string. Try to be as efficient as possible! -->


// <!-- 21. Given two strings, write a program that efficiently finds the longest common subsequence. -->


// <!-- 22. Given an array with numbers, write a program that efficiently answers queries of the form: “Which is the nearest larger value for the number at position i?”, where distance is the difference in array indices. For example in the array [1,4,3,2,5,7], the nearest larger value for 4 is 5. After linear time preprocessing you should be able to answer queries in constant time. -->



// <!-- 23. Given two strings, write a program that outputs the shortest sequence of character insertions and deletions that turn one string into the other. -->


// var name = 'ibis';
// var address = "123 Main St";

// var city = "Miami";
// var job = "Professor";
// var acctNum = 442374;
// var bornIn = city;

// name = "Dylan";
// name = "Roberto";
// name = "Gorda";
// job = "Programmer";
// acctNum = 142375;
// document.write(name);
// document.write("<br/>");
// document.write(name + " " +job);
// document.write("<br/>");
// document.write("My name is " + name + " and my account number is " + acctNum);
// if (acctNum > 440000) {
// 	document.write("<br/>Welcome to the Miami Branch.");
// } else if (acctNum < 100000) {
// 	document.write("<br/>You have been a customer for over 10 years!");
// } else if ( job == "Programmer") {
// 	document.write("<br/>You have been a customer for over 5 years!");
// } else {
// 	document.write("<br/>Thanks for being a customer.");
// }

// if (job == "Programmer") {
// 	document.write("<br/>Me too!");
// }

// if (city != "Miami") {
// 	document.write("<br/>Let's go to the beach!");
// }

// document.write("<br/>I'm here!");

// var count = 9;
// while(job == "Programmer" && count < 20) {
// 	document.write("<br/>Write that code!");
// 	count = count + 1;
// }

// var winner = 7;
// var userInput = 0;
// while (userInput != winner) {
// 	userInput = prompt("Guess the number I am thinking of:");
// }

// while (acctNum == 442374) {
// 	document.write("Your account Number is " + acctNum);
// 	acctNum = 0;
// }

// var counter = 0;
// while (counter < 5) {
// 	document.write("<br/>Hi Ibis");
// 	counter++;
// }

// for (var counter = 0;  counter < 5;  counter++) {
// 	document.write("<br/>Hi Ibis");
// }

// for (var i = 0; i < 10; i++) {
// 	document.write("We can count: " + i);
// }

// for (var j = 0; j < 10; j++) {
// 	document.write("We can count: " + j);
// }

// for (var k = 0; k < 10; k++) {
// 	document.write("We can count: " + k);
// }

// var country = ['USA', 'Canada', 'Cuba', 'Puerto Rico', 'Dubai', 'Morocco'];
// var population = [1000000000, 10000000, 11000000, 50000000, 500000, 36000000];

// document.write("<br/>");
// document.write(country[2]);
// document.write("<br/>");

// document.write(population[3]);
// document.write("<br/>");

// document.write(country.length);
// country.push("India");
// document.write("<br/>");
// document.write(country.length);

// //looping through an array
// for (var i = 0; i < country.length; i++) {
// 	document.write("<br/>" + country[i]);
// }

// for (var i = 0; i < population.length; i++) {
// 	document.write("<br/>" + population[i]);
// }

// function add3(n) {
// 	return n + 3;
// }

// var newArr = population.map(add3);

// for (var i = 0; i < newArr.length; i++) {
// 	document.write("<br/>" + newArr[i]);
// }

// //one line with commas
// document.write("<br/>");
// document.write(population.toString());
// document.write("<br/>");

// //one line all squished
// document.write(country.join(""));

// //turn a word into an array
// var wordArr = job.split("");

// //keep the order = Queue
// var Arr = new Array()
// Arr.push("apple");
// Arr.push("banana");
// Arr.shift();
// Arr.shift();

// 	var stackArr = new Array;
// 	var startArr = new Array;
// 	for (var i = 0; i < startArr.length; i++) {
// 		stackArr.push(startArr[i]);
// 	}
// 	for (var i = 0; i < stackArr.length; i++) {
// 		stackArr.shift();
// 	}


// //reverse the order = Stack
// var Arr = new Array()
// Arr.push("apple");
// Arr.push("banana");
// Arr.pop();
// Arr.pop();


// 	for (var i = 0; i < startArr.length; i++) {
// 		stackArr.push(startArr[i]);
// 	}
// 	for (var i = 0; i < stackArr.length; i++) {
// 		stackArr.pop();
// 	}

// document.write("<br/>");
// document.write(job);
// document.write("<br/>");
// document.write(wordArr.length);

// //turn an array back to a word
// document.write("<br/>" + wordArr.join(""));

// var numbers = [4,8,100,6];
// function findNum(num, arr) {
// 	var found = false;
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] == num) {
// 			found = true;
// 		}
// 	}
// 	return found;
// }

// document.write("<br/>");
// document.write(findNum(8, numbers));
// document.write("<br/>");
// document.write(findNum(1, numbers));

// function allItems(arr) {
// 	for (var i = 0; i < arr.length; i++) {
// 		document.write("<br/>" + arr[i]);
// 	}
// }
// allItems(numbers);

// function oddItems(arr) {
// 	for (var i = 0; i < arr.length; i++) {
// 		if (i % 2 != 0) {
// 		  document.write("<br/>" + arr[i]);
// 		}
// 	}
// }
// oddItems(numbers);

// function sumItems(arr) {
// 	var sum = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		sum = sum + arr[i];
// 	}
// 	return sum;
// }
// document.write("<br/>");
// document.write(sumItems(numbers));


// var sum = numbers.reduce(function(total, amount) { return total + amount});
// document.write("<br/>");
// document.write(sum);

// var test1 = "racecar";
// var test2 = "ibis";

// function checkPalendrome(start) {

// 	var end;
// 	var startArr = start.split("");    // ['i','b','i','s']
// 	var endArr = new Array();
// 	var stackArr = new Array();
// 	for (var i = 0; i < startArr.length; i++) {
// 		stackArr.push(startArr[i]);
// 	}
// 	for (var i = 0; i < startArr.length; i++) {
// 		endArr.push(stackArr.pop());
// 	}
// 	end = endArr.join("");
// 	return start == end;
// }
// document.write("<br/>");
// document.write(checkPalendrome(test1));
// document.write("<br/>");
// document.write(checkPalendrome(test2));
// document.write(checkPalendrome('Roberto'));
// document.write(checkPalendrome('Dylan'));

// //Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// function f10(arr1, arr2) {
// 	var result = new Array();

// 	for (var i = 0; i < arr1.length; i++) {
// 		result.push(arr1[i]);
// 		result.push(arr2[i]);
// 	}

// 	return result;
// }
// document.write("<br/>");
// var letters = ['i','b','i','s'];
// document.write(f10(letters, numbers).join(""));

// function f14(numbers) {
// 	var result = new Array();

// 	result = numbers.toString().split("");

// 	return result;
// }

// var resultArray = f14(8675309);
// document.write("<br/>");
// document.write(resultArray.join());

var wordsArr = ['Hello', 'World', 'in', 'a', 'box'];

function longest(wordsArr) {
    var length = 0;
    for (var i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i].length > length) {
            length = wordsArr.length;
        }
    }
    return length;
}

function drawAllStars(length) {
	var filler = length - word.length;
	var left = Math.floor(filler/2);
    var right = Math.ceil(filler/2);
    document.write("<br/>");
    for (var i = 0; i < left; i++) {
        document.write("*")
    }
}

function drawPrefix() {
    document.write("<br/>* ");
}

function drawSuffix(length, word) {
    for (var i=0; i < right +1; i++) {
        document.write("&nbsp;");
    }
    document.write(word);
    document.write("*");
}


var biggest = longest(wordsArr);
document.write("<br/>");
document.write("biggest is " + biggest);
document.write("<br/>");
drawAllStars(biggest);
for(var i = 0; i < wordsArr.length; i++) {
    drawPrefix();
    drawSuffix(biggest, wordsArr[i]);
}
drawAllStars(biggest);

