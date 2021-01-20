// ****LOOPS****

// for(let i = 0; i <= 15; i++) {
//   console.log(i);
// }

// ****ARRAYS WITH LOOPS***

// const ec14Instructers = ['Aja', 'Trinity', 'Dr. T', 'Discussion Tickets']
// for (let i = 0; i < ec14Instructers.length; i++) {
//   console.log(ec14Instructers[i]);
// }


// ***ARRAYS, LOOPS, FUNCTIONS***

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
// const colorLoop = () => {
//   let domString = '';
//   for (let i = 0; i < colors.length; i++) {
//     domString += `<h1>${colors[i]}</h1>`
//   }

//   console.log(domString);
// }

// colorLoop();

const instructors = [
  {first: 'Trinity', last: 'Christina'},
  {first: 'Aja', last: 'Washington'},
  {first: 'Teresa', last: 'Vasquez'},
];

const nameLoop = () => {
  domString = '';
  for (let i = 0; i < instructors.length; i++) {
    domString += `<h1>${instructors[i].first} ${instructors[i].last}</h1>`
  }
  console.log(domString);
}

nameLoop();
