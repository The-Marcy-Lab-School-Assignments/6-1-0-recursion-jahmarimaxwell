// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr, index = 0) => {
   // used index as and index for array
   // Base case: when index reaches the end of the array, return 0
if (index === arr.length) {
    return 0;
}

// Recursive case: sum current element with the result of the function called with the next index
return arr[index] + sum(arr, index + 1);
}


// Reverse string using recursive approach
const reverse = (str) => {

    if(str.length === 1) return str;
    //.substr (deprecated)
    //.substring
    //.slice
    return reverse(str.substring(1)) + str[0]
    //reverse: concatinating, the front character to the end of the substring
    // attatching front character to the right side
};

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
    //guard clause for 0 input
    if(n === 0) return 0
    // to get the fib, add previous number with current number
    let first = 0
    let second = 1;
    let fib = first + second;
    // start building fibonacci sequence iteratively
    // loop n amount of times to build the nth fib number
    for(let i = 2; i < n; i++) {
        console.log(fib);
        //update prev
        first = second
        //update curr
        second = fib
        //udate fib
        fib = first + second;
    }
    return fib;
};

// Recursive fibonacci
//fib(5) = fib(4) + fib(3) -> 5
//fib(4) = fib(3) + fib(2) -> 3
//fib(3) = fib(2) + fib(1) -> 2
//fib(2) = fib(1) + fib(0) -> 1
//fib(1) = 1;
//fib(0) = 0;
const fibRec = (n) => {
    //base case: if we reach 0 we return 0
    if (n <= 1) return n
    //recursive case
    return fibRec(n - 1) + fibRec(n - 2);
};

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
    // Base case: if start exceeds end, target is not in the array
    if (start > end) {
        return -1;
    }

    // Calculate the middle index
    const mid = Math.floor((start + end) / 2);

    // If the target is found at the mid index, return mid
    if (arr[mid] === target) {
        return mid;
    }

    // If the target is less than the mid element, search the left half
    if (target < arr[mid]) {
        return binarySearch(arr, target, start, mid - 1);
    }

    // If the target is greater than the mid element, search the right half
    return binarySearch(arr, target, mid + 1, end);
};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
