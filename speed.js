//Here we declare a function named calculatSpeed()
//Function calculateSpeed has one parameter as speed
//It calculate speedCheck based on the speed input
// We use if -- else condition to determine the speed limit

function calculateSpeed(speed) {
  let speedCheck;
  if (speed <= 70) {
    speedCheck = "Ok";
  } else {
    speedCheck = Math.floor((speed - 70) / 5);
    if ((speed - 70) / 5 <= 12) {
      return `Points: ${speedCheck}`;
    } else {
      return "Licence Suspended";
    }
  }
  return speedCheck;
}

// Define a function called displaySpeed
function displaySpeed() {
  // Retrieve the value of an HTML element with the id "speed" and assign it to the variable speed
  const speed = document.getElementById("speed").value;
  // Call the calculateSpeed function with the retrieved speed value as an argument and assign the result to the variable speedCheck
  const speedCheck = calculateSpeed(speed);
  // Update the content of an HTML element with the id "points" to display the speed check result
  document.getElementById("points").innerHTML = `Your Speed Check is:${speedCheck}`;
}
