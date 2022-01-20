console.log("this is tutorial 37");
const students = [
    {name: "harry", subject:"javaScript"},
    {name: "rohan", subject:"Machine Learning"},
]

function enrollStudent(newStudent, getStudents){
    setTimeout(function(){
students.push(newStudent);
console.log("student has been enrolled")
getStudents();
    }, 1000);
}
 function getStudents(){
     setTimeout(function(){
  let str = "";
  students.forEach(function(student ){

      str += `<li>${student.name}</li>`
  });
  document.getElementById('students').innerHTML = str;
  console.log("student have been fatched");
     },3000);
 }
let newStudent = {name:"Sunny",subject:"Python"}
enrollStudent(newStudent,getStudents);
getStudents();