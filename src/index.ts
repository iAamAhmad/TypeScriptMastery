let count1 = 1;
let total1 = 0;
while (count1 <= 10) {
  total1 += count1
  count1 += 1
}

console.log("Total Will Be Printed here : ", total1);
// console.log(sum(range(1,10)));

const firstName = "Muhammad Ahmad";
// console.log("firstName : ", firstName)
// console.log("firstName : ", firstName.length)


let bestSong = Math.random()
// console.log(bestSong > 0.5 ? "Best Song" : "Over Song")


let rocker;
rocker = "john";
console.log(rocker.toUpperCase())

type Person = {
  firstName: string,
  lastName: string,
  qualities: {
    age?: number,
    gender: string
  }
}


const person: Person = {
  firstName: "Muhammad Ahmad",
  lastName: "Ahmad",
  qualities: {
    gender: "Male"

  }
}


