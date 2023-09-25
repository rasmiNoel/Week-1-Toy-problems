
//calculates Payee using provided parameters to obtain a value
function calculatePayee(taxablePay) {
    if (taxablePay < 24000) {
        return taxablePay * 0.1; //rate is 10%
    } else if (taxablePay > 23999 && taxablePay < 32334) {
        return taxablePay * 0.25; //rate is 25%
    } else if (taxablePay > 32333 && taxablePay < 500001) {
        return taxablePay * 0.3; //rate is 30%
    } else if (taxablePay > 500000 && taxablePay < 800001) {
        return taxablePay * 0.325; //rate is 32.5%
    } else if (taxablePay > 800000) {
        return taxablePay * 0.35; //rate is 35%
    }
}
//calculates NHIF from the parameter of grossSalary to give predetermined amounts based on the classes where grossSalary falls
function calculateNHIF(grossSalary) {
    if (grossSalary < 6000) {
        //checks the gross salary and returns a predetermined amount
        return 150;
    } else if (grossSalary > 5999 && grossSalary < 8000) {
        return 300; //checks the gross salary and returns a predetermined amount
    } else if (grossSalary > 7999 && grossSalary < 12000) {
        return 400; //checks the gross salary and returns a predetermined amount
    } else if (grossSalary > 11999 && grossSalary < 15000) {
        return 500; //checks the gross salary and returns a predetermined amount
    } else if (grossSalary > 14999 && grossSalary < 20000) {
        return 600; //checks the gross salary and returns a predetermined amount
    } else if (grossSalary > 19999 && grossSalary < 25000) {
        return 750; //checks the gross salary and returns a predetermined amount
    } else if (grossSalary < 24999 && grossSalary < 30000) {
        return 850; //checks the gross salary and returns a predetermined amount
    } else if (grossSalary > 29999 && grossSalary < 35000) {
        return 900; //checks the gross salary and returns a predetermined amount
    } else if (grossSalary > 34999 && grossSalary < 40000) {
        return 950; //checks the gross salary and returns a predetermined amount
    } else if (grossSalary > 39999 && grossSalary < 45000) {
        return 1000; //checks the gross salary and returns a predetermined amount
    } else if (grossSalary > 44999 && grossSalary < 50000) {
        return 1100; //checks the gross salary and returns a predetermined amount
    } else if (grossSalary < 59999 && grossSalary < 60000) {
        return 1200; //checks the gross salary and returns a predetermined amount
    } else if (grossSalary > 59999 && grossSalary < 70000) {
        return 1300; //checks the gross salary and returns a predetermined amount
    } else if (grossSalary > 69999 && grossSalary < 80000) {
        return 1400; //checks the gross salary and returns a predetermined amount
    } else if (grossSalary > 79999 && grossSalary < 90000) {
        return 1500; //checks the gross salary and returns a predetermined amount
    } else if (grossSalary > 89000 && grossSalary < 100000) {
        return 1600; //checks the gross salary and returns a predetermined amount
    } else if (grossSalary > 100000) {
        return 1700; //checks the gross salary and returns a predetermined amount
    }
}
//determines the lowest value of the two to be picked, determines whether a taxpayer is in NSSF tier 1 or 2
function floor(valA, valB) {
    if (valA < valB) {
        return valA;
    }
    else {
        return valB;       
    }
}
//to obtain nssf we check whether the individual falls on tier 1 or 2 based on their index, this is then used to calculate the nssf pay
function calculateNSSF(grossSalary) {
    const tier1Taxable = floor(grossSalary, 6000);
    const tier2Taxable = floor(grossSalary, 18000) - tier1Taxable;
    const tier1 = tier1Taxable * 0.06;
    const tier2 = tier2Taxable * 0.06;
    let nssf = tier1;
    if (tier2 > 0) {
        nssf = tier2;
    }
    return nssf;
}

//checks the amount paid and confirms the limit, then returns a calculated solution based on the amount.
function calculateNetSalary(grossSalary, payee, nhif, nssf) {
    return grossSalary - (+payee + +nhif + +nssf);
}

function onClickCalcuate() {
    //obtain the values from the UI
    let basicSalary = document.getElementById("bpI").value;
    let benefits = document.getElementById("bI").value;
    //const contributionBenefit = document.getElementById("cbI").value;
    //const insuraceRelief = document.getElementById("irI").value;

    //calculate the gross salary, taxable pay, payee, nhif, nssf and net salary
    const personalRelief = 2400;
    let grossSalary = +basicSalary + +benefits;
    let taxablePay = +grossSalary - +personalRelief;
    let payee = calculatePayee(taxablePay);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary);
    let netSalary = calculateNetSalary(grossSalary, payee, nhif, nssf);

    //run this to output the values on the UI
    document.getElementById("gsO").innerHTML = grossSalary;
    document.getElementById("tbO").innerHTML = taxablePay;
    document.getElementById("payeeO").innerHTML = payee;
    document.getElementById("nhifO").innerHTML = nhif;
    document.getElementById("nssfO").innerHTML = nssf;
    document.getElementById("netSalaryO").innerHTML = netSalary;
}
