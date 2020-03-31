// ex 1------------------------------------------------

// Write a
// function which receives an array and a number as arguments and returns a
// new array from the elements of the given array which are larger than the given
// number.

////  solution 1-------

// let array = [1, 1, 2, -3, 0, 8, 4, 0];
// let number = 9;

// let array1 = [10, 25, 16, -5, 30, 15, 24];
// let number1 = 16

// function sort(arr, num) {

//     let a = arr.filter(a => a > num)

//     if (a.length === 0) {
//         return "Such values do not exist"
//     } else {
//         return a
//     }

// }

// console.log(sort(array, number))
// console.log(sort(array1, number1))

// /// solution 2-------

// function sort1(arr, num) {
//     let myArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > num) {
//             myArr.push(arr[i])
//         }
//     }
//     if (myArr.length === 0) {
//         return "Such values do not exist"
//     } else {
//         return myArr
//     }

// }

// console.log(sort1(array, number))
// console.log(sort1(array1, number1))


///// ex 2-----------------------------------------
// Write a function, which receives two numbers as arguments and finds all numbers
// between them such that each digit of the number is even. The numbers obtained should be
// printed in a comma-separated sequence on a single line.

// let number = 19;
// let number1 = 42;

// function even(num, num1) {
//     let result = ''

//     for (let i = num; i <= num1; i++) {
//         if (a(i) !== false) {
//             result += ", " + a(i)
//         }
//     }

//     function a(arg) {

//         let arr = arg.toString().split("")

//         for (let i = 0; i < arr.length; i++) {
//             let res = ""
//             for (let j = i; j < arr.length; j++) {
//                 if (arr[j] % 2 === 0) {
//                     res += arr[j]
//                 } else return false
//             }
//             return res
//         }
//     }

//     if (result === "") {
//         return "Such numbers does not exist."
//     } else return result.slice(2)

// }
// console.log(even(number, number1))


////// ex 3----------------------------------------

// Given an array of numbers which is almost sorted in ascending order.  Find the index
// where sorting order is violated.


// let array = [2, 12, 15, 48, 64] // =>-1
// let array1 = [-9, -4, -4, 3, 12, 4, 5] // =>5



// function sorted(arr) {
//     let count = 0
//     let index = 0

//     if (arr[0] > arr[1]) {
//         return index
//     }

//     while (count < arr.length) {
//         if (arr[count] <= arr[count + 1]) {
//             index++

//         } else {
//             index++
//             break;
//         }

//         count++

//     }
//     if (index === arr.length) {
//         return -1
//     } else return index
// }
// console.log(sorted(array))
// console.log(sorted(array1))




///// ex 4 -----------------------------------------

// Given an array of integers, find the pair of adjacent elements that has the largest
// product and return that product.


// let array = [-4, -5, 1, 2, 3, 3]

// function mult(arr) {
//     let a = []
//     for (let i = 0; i < arr.length - 1; i++) {

//         a.push(arr[i] * arr[i + 1])

//     }
//     let b = Math.max(...a)

//     return b

// }
// console.log(mult(array))




///// ex 5 -----------------------------------------

// Given an array of integers. All numbers are unique. Find the count of missing
// numbers between minimum and maximum elements to make integers sequence.

// let array = [1, 3, 10, 5, 7, ]

// function missing(arr) {
//     let myArr = arr.sort((a, b) => a > b) 

//     let lastEl = myArr[myArr.length - 1]

//     return lastEl - myArr.length


// }

// console.log(missing(array))



///// ex 6 -----------------------------------------

// // Given an array consisting from the arrays of numbers (like a two-dimensional array).
// // Find sum of each row and print them as an array

// let array = [
//     [3, 4, 5],
//     [1, 0, 0],
//     [4, 5, 4],
//     [8, 8, -1]
// ]
// let array1 = [
//     [8, 35, 2],
//     [8],
//     [5, 6, -5, -6],
//     [1, 3, -9, 0, -1]
// ]

// let array2 = [
//     [1],
//     [2],
//     [3],
//     [4]
// ]



// function sum(arr) {

//     let myArr = []

//     for (let i = 0; i < arr.length; i++) {
//         myArr.push(sum1(arr[i]))
//     }

//     function sum1(arg) {
//         let d = arg.reduce((a, b) => a + b) ///             or we can use a for loop here 
//         //                                                     let a = 0
//         //                                                     for (let i = 0; i < arg.length; i++) {
//         //                                                     a += arg[i]
//         //                                                       }
//         //                                                     return a
//         return d
//     }
//     return myArr

// }

// console.log(sum(array))
// console.log(sum(array1))
// console.log(sum(array2))


/// ex 7--------------------------------------------------------

// Given an array of integers. Write a function that return new array from first array,
// where removed even numbers, and odd numbers was multiplied with new array length

/// solution 1 -------

// let array = [5, 4, 78, 0, -3, 7];
// let array1 = [2, 4, 6, 88];
// let array2 = [];


// function odd(arr) {
//     if (arr.length === 0) {
//         return arr
//     }

//     let myArr = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             myArr.push(arr[i])
//         }
//     }
//     let myNewArr = [];

//     for (let j = 0; j < myArr.length; j++) {
//         myNewArr.push(myArr[j] * myArr.length)

//     }

//     return myNewArr
// }

// console.log(odd(array))
// console.log(odd(array1))
// console.log(odd(array2))


///// solution 2----------

// function odd1(arr) {
//     if (arr.length === 0) {
//         return arr
//     }
//     let myArr = []

//     myArr = arr.filter(a => a % 2 !== 0)
//     myArr = myArr.map(b => b * myArr.length)

//     return myArr
// }


// console.log(odd1(array))
// console.log(odd1(array1))
// console.log(odd1(array2))