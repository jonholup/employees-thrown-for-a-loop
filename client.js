// Create a function that takes in an array of employee objects
// . Each employee object will come in with a property called yearsOfExperience.
//  Your function should return the total
//  years of experience for all of the employees.
var totalYears = 0;
var personArray = [];
$(document).ready(function(){
  $('form').on('submit', function (event){
    event.preventDefault();
    $('#employeeTable').empty();
    totalYears = 0;
    var submissionArray = $(this).serializeArray();
    var newEmployeeObject = {};
    submissionArray.forEach(function(inputFieldObject){
      newEmployeeObject[inputFieldObject.name] = inputFieldObject.value;
    })


    personArray.push(newEmployeeObject);
    personArray.forEach(function(employee){
      totalYears += parseInt(employee.yearsHere);
      $('#employeeTable').append(
        '<tr>' +
        '<td>' + employee.name + '</td>' +
        '<td>' + employee.yearsHere + '</td>' +
        '</tr>')
      });
      $('#totalYears').text(totalYears);

    });

  });
