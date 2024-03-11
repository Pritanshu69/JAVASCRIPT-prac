const heroes = ["thor", "ironman", "spiderman"]
const dc = ["batman", "superman", "wonder woman"];

const all_hero = heroes.concat(dc);
console.log(all_hero)

const another_array = [1, 2 ,3, [2,3], 7, [3,5,8]];
const real = another_array.flat(Infinity)
console.log(real)

let score1 = 100
let score2 = 200

console.log(Array.of(score1, score2))