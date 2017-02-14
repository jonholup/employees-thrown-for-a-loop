// Create a function that takes in an array of employee objects
// . Each employee object will come in with a property called yearsOfExperience.
//  Your function should return the total
//  years of experience for all of the employees.
$(document).ready(function(){
  var personArray = [
    { name: 'Tony', yearsOfExperience: 10 },
    { name: 'Carla', yearsOfExperience: 4 },
    { name: 'Kris', yearsOfExperience: 14 }
  ];

  years(personArray);

  function years(array) {
    var totalYears = 0;
    $('#employeeTable').empty();
    array.forEach(function(employee, i){
      totalYears += employee.yearsOfExperience;
      $('#employeeTable').append(
        '<tr>' +
        '<td>' + employee.name + '</td>' +
        '<td>' + employee.yearsOfExperience + '</td>' +
        '</tr>'
      );
      $('#totalYears').text(totalYears);
    });
    return totalYears;
  }

  $('#submit').on('click', function (){
    var newName = $('#name').val();
    var yearsHere = parseInt($('#yearsHere').val());
    var newEmployeeObject = {name: newName, yearsOfExperience: yearsHere};
    personArray.push(newEmployeeObject);
    years(personArray);
  });

});
