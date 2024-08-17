
function addMe(a, b) {
  console.log("Addition : ", a + b)
}

addMe(2, 5)
addMe(2, 111)
addMe(2, 111)


// function expression / anonymous

const addMe2 = function(a, b) {
  console.log("Addition : ", a + b)
}


addMe2(12, 13)


// arrow functions

const addMe3 = (a , b = 2) => {
  console.log("Addition :", a + b)
}
addMe3(5)


function myFunction(a, b) {
    return a * b;
}
console.log(myFunction(1,2))