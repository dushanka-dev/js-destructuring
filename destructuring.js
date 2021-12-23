/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages = [30, 26, 41]

// tradional way
// let john = ages[0]
// let mary = ages[1]
// let wick = ages[2]

let [john, mary, wick] = ages

console.log(john, mary, wick)

// Destructuring objects

let jobs = {
    mike: "developer",
    jill: "pen tester",
    smith: "tester"
}

let {mike, jill, smith} = jobs

console.log(mike, jill, smith)

// Destructuring subsets

let languages = ["english", "french", "spanish", "german", "japanese"]
let [johnsnative, johnssecondary] = languages

console.log(johnsnative, johnssecondary)

let lanugaes2 = {
    firstLanguage: "english",
    secondLanguage: "spanish",
    thirdLanguage: "french"
}

let {firstLanguage, secondLanguage} = lanugaes2

console.log(firstLanguage, secondLanguage)

// Using rest parameter syntax

let fruits = ["apple", "oranges", "peaches", "pears", "passionfruit"]
let [favFruit, secondFav, ...others] = fruits

console.log(favFruit)
console.log(secondFav)
console.log(others)

let faveFood = {
    anna: "pizza",
    charlie: "cat food",
    brian: "dog food",
    smithy: "chicken"
};

let {anna, brian, ...rest} = faveFood

console.log(anna)
console.log(brian)
console.log(rest)
