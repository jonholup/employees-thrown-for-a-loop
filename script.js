// Create a function that takes in an array of employee objects
// . Each employee object will come in with a property called yearsOfExperience.
//  Your function should return the total
//  years of experience for all of the employees.

var personArray = [
    { name: 'Tony', yearsOfExperience: 10 },
    { name: 'Carla', yearsOfExperience: 4 },
    { name: 'Kris', yearsOfExperience: 14 }
];

console.log(personArray);

function years(array) {
  var totalYears = 0;
  array.forEach(function(employee, i){
    totalYears += employee.yearsOfExperience;
    console.log(totalYears);
  });
  return totalYears;
}
// var years = function (array) {
//   (array.forEach(function(totalYears, i){
//     console.log(array.yearsOfExperience);
//     totalYears += array.yearsOfExperience;
//     console.log(totalYears);
// })

console.log(years(personArray));
