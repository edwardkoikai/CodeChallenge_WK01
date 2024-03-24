//Define function named calculateSalary()
// It takes two parameters: basicSalary and benefits
function calculateSalary(basicSalary, benefits) {
    // Define grossSalary and asign it
    const grossSalary = basicSalary + benefits;
    // Define payeeTax
    let payeeTax;
    // Use if else loop to determine our payeeTax
    if (grossSalary <= 24000) {
      payeeTax = grossSalary * 0.1;
    } else if (grossSalary > 24000 && grossSalary <= 32333) {
      payeeTax = (8333 * 0.25 + 24000 * 0.1);
    } else if (grossSalary >= 32334 && grossSalary <= 500000) {
      payeeTax = (467667 * 0.3 + 4483.25);
    } else if (grossSalary >= 500001 && grossSalary <= 800000) {
      payeeTax = (300000 * 0.325) + 144783.1;
    } else if (grossSalary > 800000) {
      payeeTax = (((grossSalary - 800000) * 0.35 ) + 242283.1);
      //Alert when the input is invallid
    } else {
      alert("Invalid input");
    }
  
    //Calculation of NHIF Deductions
    //Define a variable named nhifDeductions
    let nhifDeduction;
    // Use if else condition to define where our nhifDeduction falls
    if (grossSalary <= 5999) {
      nhifDeduction = 150;
    } else if (grossSalary <= 7999) {
      nhifDeduction = 300;
    } else if (grossSalary <= 11999) {
      nhifDeduction = 400;
    } else if (grossSalary <= 14999) {
      nhifDeduction = 500;
    } else if (grossSalary <= 19999) {
      nhifDeduction = 600;
    } else if (grossSalary <= 24999) {
      nhifDeduction = 750;
    } else if (grossSalary <= 29999) {
      nhifDeduction = 850;
    } else if (grossSalary <= 34999) {
      nhifDeduction = 900;
    } else if (grossSalary <= 39999) {
      nhifDeduction = 950;
    } else if (grossSalary <= 44999) {
      nhifDeduction = 1000;
    } else if (grossSalary <= 49999) {
      nhifDeduction = 1100;
    } else if (grossSalary <= 59999) {
      nhifDeduction = 1200;
    } else if (grossSalary <= 69999) {
      nhifDeduction = 1300;
    } else if (grossSalary <= 79999) {
      nhifDeduction = 1400;
    } else if (grossSalary <= 89999) {
      nhifDeduction = 1500;
    } else if (grossSalary <= 99999) {
      nhifDeduction = 1600;
    }
    else if(grossSalary >= 100000){
        nhifDeduction = 1700;
    }
  
    // calculate NSSF Deductions
    let nssfDeduction;
    if (grossSalary > 0 && grossSalary <= 6000) {
      nssfDeduction = grossSalary * 0.06;
    } else if (grossSalary > 6000 && grossSalary <= 18000) {
      nssfDeduction = 360 + (grossSalary - 6000) * 0.06;
    } else if (grossSalary > 18000) {
      nssfDeduction = 1080;
    }
  //Define and assign netSalary
    let netSalary = grossSalary - payeeTax - nhifDeduction - nssfDeduction;
    //return value for calculateSalary() function
    return { grossSalary, payeeTax, nhifDeduction, nssfDeduction, netSalary };
  }
  //Define a function named displaySalary()
  function displaySalary() {
    // Retrieve basic salary and benefits input values from HTML elements
    const basicSalary = parseInt(document.getElementById("basicSalary").value);
    const benefits = parseInt(document.getElementById("benefits").value);
     // Calculate salary using the provided basic salary and benefits
    const salary = calculateSalary(basicSalary, benefits);
  // Update HTML elements with the calculated salary details
    document.getElementById("grossSalary").innerText = `Gross Salary: ${salary.grossSalary}`;
    document.getElementById("payeeTax").innerText = `PAYEE Tax: ${salary.payeeTax}`;
    document.getElementById("nhifDeduction").innerText = `NHIF Deductions: ${salary.nhifDeduction}`;
    document.getElementById("nssfDeduction").innerText = `NSSF Deductions: ${salary.nssfDeduction}`;
    document.getElementById("netSalary").innerText = `Net Salary: ${salary.netSalary}`;
  }
  