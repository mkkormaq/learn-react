/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5];
// -->       [1, 4, 9, 16, 25]
// Your code here
nums.map((num) => num ^ 2);

/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"];
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
names.map((name) => name.slice(0, 1).toUpperCase() + name.slice(1));

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here
pokemon.map((pokemon) => "<p>" + pokemon + "</p>");
