// console.log("Did it!");

// const students = ['Ellie', 'Chie', 'Holly'];

// ***ACCESSING ITEMS IN ARRAYS***
// console.log(students[1]); //Chie
// console.log(students[students.length - 1]); //Holly

// students[0] = "Matthew";
// console.log(students);

// const valuePrinter =  (array, index) => {
//   return array[index];
// }

// console.log(valuePrinter([1,2,3,4,5], [4]));

const names = ['Bobby','Steve', 'Greg'];

// if(names.indexOf('Greg') >= 0){
//   return true;
// } else {
//   return false;
// }

var nameGreg = (names.some(myFunction));

function myFunction (value, index, array) {
  return value == 'Greg';
}

console.log(nameGreg);
