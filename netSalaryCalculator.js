
//calculates Payee using provided parameters to obtain a value
function calculatePayee(Salary) {
    if (Salary < 24000) {
        return (Salary * 0.1); //rate is 10%
    } else if (23999 < Salary && Salary < 32334) {
        return (Salary * 0.25); //rate is 25%
    } else if (32333 < Salary && Salary < 500001) {
        return (Salary * 0.3); //rate is 30%
    } else if (500000 < Salary && Salary < 800001) {
        return (Salary * 0.325); //rate is 32.5%
    } else if (Salary > 800000) {
        return (Salary * 0.35); //rate is 35%
    }
}

//calculates NHIF from the parameter of grossSalary to give predetermined amounts based on the classes where grossSalary falls
function calculateNHIF(Salary) {
    if (Salary < 6000) {
        //checks the gross salary and returns a predetermined amount
        return 150;
    } else if (Salary > 5999 && Salary < 8000) {
        return 300; //checks the gross salary and returns a predetermined amount
    } else if (Salary > 7999 && Salary < 12000) {
        return 400; //checks the gross salary and returns a predetermined amount
    } else if (Salary > 11999 && Salary < 15000) {
        return 500; //checks the gross salary and returns a predetermined amount
    } else if (Salary > 14999 && Salary < 20000) {
        return 600; //checks the gross salary and returns a predetermined amount
    } else if (Salary > 19999 && Salary < 25000) {
        return 750; //checks the gross salary and returns a predetermined amount
    } else if (Salary < 24999 && Salary < 30000) {
        return 850; //checks the gross salary and returns a predetermined amount
    } else if (Salary > 29999 && Salary < 35000) {
        return 900; //checks the gross salary and returns a predetermined amount
    } else if (Salary > 34999 && Salary < 40000) {
        return 950; //checks the gross salary and returns a predetermined amount
    } else if (Salary > 39999 && Salary < 45000) {
        return 1000; //checks the gross salary and returns a predetermined amount
    } else if (Salary > 44999 && Salary < 50000) {
        return 1100; //checks the gross salary and returns a predetermined amount
    } else if (Salary < 59999 && Salary < 60000) {
        return 1200; //checks the gross salary and returns a predetermined amount
    } else if (Salary > 59999 && Salary < 70000) {
        return 1300; //checks the gross salary and returns a predetermined amount
    } else if (Salary > 69999 && Salary < 80000) {
        return 1400; //checks the gross salary and returns a predetermined amount
    } else if (Salary > 79999 && Salary < 90000) {
        return 1500; //checks the gross salary and returns a predetermined amount
    } else if (Salary > 89000 && Salary < 100000) {
        return 1600; //checks the gross salary and returns a predetermined amount
    } else if (Salary > 99999) {
        return 1700; //checks the gross salary and returns a predetermined amount
    }
}

//determines the lowest value of the two to be picked, determines whether a taxpayer is in NSSF tier 1 or 2
function floor(valA, valB) {
    if (valA < valB) {
        return valA;
    }
    return valB;
}

//to obtain nssf we check whether the individual falls on tier 1 or 2 based on their index, this is then used to calculate the nssf pay
function calculateNSSF(Salary) {
    let tier1Taxable = floor(Salary, 6000);
    let tier2Taxable = floor(Salary, 18000) - tier1Taxable;
    let tier1 = tier1Taxable * 0.06;
    let tier2 = tier2Taxable * 0.06;
    let nssf = tier1;
    if (tier2 > 0) {
        nssf = tier2;
    }
    return nssf;
}

//checks the amount paid and confirms the limit, then returns a calculated solution based on the amount.
function calculateNetSalary(Salary, payee, nhif, nssf) {
    return (Salary - (payee + nhif + nssf));
}

//function to obtain the payee, nhif, nssf and net salary
function onClickCalcuate() {

    //obtain the values from the UI
    let Salary = document.getElementById("bpI").value;

    //calculate the payee, nhif, nssf and net salary
    let payee = calculatePayee(Salary);
    let nhif = calculateNHIF(Salary);
    let nssf = calculateNSSF(Salary);
    let netSalary = calculateNetSalary(Salary, payee, nhif, nssf);

    //run this to output the values on the UI
    document.getElementById("payeeO").innerHTML = payee;
    document.getElementById("nhifO").innerHTML = nhif;
    document.getElementById("nssfO").innerHTML = nssf;
    document.getElementById("netSalaryO").innerHTML = netSalary;
}
