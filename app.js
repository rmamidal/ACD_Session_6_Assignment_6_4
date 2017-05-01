// Employe 1 Object with literal notation.
var emp1 = {
name: 'Raje1',
age:'31',
salary:'10001',
address: {
  city: 'mumbai1',
  state:'Maharashta1',
  pincode:'400031'},
}

// Employe 2 Object with literal notation.
var emp2 = {
name: 'Raje2',
age:'32',
salary:'10002',
address: {
  city: 'mumbai2',
  state:'Maharashta2',
  pincode:'400032'},
}
// Employe 3 Object with literal notation.
var emp3= {
name: 'Raje3',
age:'33',
salary:'10003',
address: {
  city: 'mumbai3',
  state:'Maharashta3',
  pincode:'400033'},
}

// Employe 4 Object with literal notation.
var emp4= {
name: 'Raje4',
age:'34',
salary:'10004',
address: {
  city: 'mumbai4',
  state:'Maharashta4',
  pincode:'400034'},
}

// Employe 5 Object with literal notation.
var emp5= {
name: 'Raje5',
age:'35',
salary:'10005',
address: {
  city: 'mumbai5',
  state:'Maharashta5',
  pincode:'400035'},
}

// Array to store employee objects.
var empArr = [emp1, emp2, emp3, emp4, emp5];

// Loop through employee array to print employees.
for (emp in empArr) {
  var strEmp = empArr[emp].name +" " + empArr[emp].age +" "+ empArr[emp].salary +" "; // Variable to store the empoyee data.
  strEmp  += empArr[emp].address.city +" "+ empArr[emp].address.state +" "+ empArr[emp].address.pincode;
  console.log(strEmp);
}