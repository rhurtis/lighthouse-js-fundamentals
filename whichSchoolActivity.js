// Code to help learners decide which school to attend.
// Code must be inside the function.

let age=0;


const whichSchool = function(age) {
if (age <13){
  return console.log("Elementary School");
} else if (age>=13 && age<18){
  return console.log('Secondary School');
} else{
  return console.log('Lighthouse Labs');
}
}

whichSchool(30);