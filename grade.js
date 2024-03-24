// Here we are declaring a function called grading() that accepts one parameter called marks
//The function calculates the student grade based on the marks obtained using the if else condition
//For each mark entered from 100 to 0 there is a corresponding grade displayed.
// The return value for this function is grade
function grading(marks) {
  let grade;
  if (marks > 79 && marks <= 100) {
    grade = "A";
  } else if (marks >= 60 && marks <= 79) {
    grade = "B-";
  } else if (marks > 49 && marks <= 59) {
    grade = "C";
  } else if (marks >= 40 && marks <= 49) {
    grade = "B-";
  } else if (marks >= 60 && marks <= 79) {
    grade = "D-";
  } else if (marks < 40) {
    grade = "E";
  } else {
    alert("Invalid input");
  }
  return grade;
}
// /This line declares a function named printGrade without any parameters.
//  This function is responsible for displaying the grade based on the input marks.
function printGrade() {
  // This line retrieves the value of an HTML element with the id "marks".
  // It uses the getElementById() method of the document object to find the HTML element with the specified id.
  //  The .value property then retrieves the current value of the input field.
  const marks = document.getElementById("marks").value;
  const grade = grading(marks);
  // This line updates the content of an HTML element with the id "Result". It sets the inner HTML of this element to a string that includes the word "Result:" followed by the calculated grade stored in the grade variable.
  document.getElementById("Results").innerHTML = `Your Results Is:${grade}`;
}
