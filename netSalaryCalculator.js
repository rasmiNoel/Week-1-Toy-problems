const personalRelief = 2400;

function limiter(insuraceRelief) {
    if (insuraceRelief.value < 0) insuraceRelief.value = 0;
    if (insuraceRelief.value > 5000) insuraceRelief.value = 5000;
} // this functions ensures the maximum amount of insurance relief that can be entered is 5,000

function calculatePayee(taxablePay) {
    if (taxablePay < 24000) {
        return taxablePay * 0.1; //rate is 10%
    } else if (taxablePay > 24000 && taxablePay < 32334) {
        return taxablePay * 0.25; //rate is 25%
    } else if (taxablePay > 32333 && taxablePay < 500001) {
        return taxablePay * 0.3; //rate is 30%
    } else if (taxablePay > 500000 && taxablePay < 800001) {
        return taxablePay * 0.325; //rate is 32.5%
    } else if (taxablePay > 8000000) {
        return taxablePay * 0.35; //rate is 35%
    }
}

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

function floor(valA, valB) {
    if (valA < valB) {
        return valA;
    }
    return valB;
}

function calculateNSSF(grossSalary) {
    const tier1Taxable = floor(grossSalary, 6000);
    const tier2Taxable = floor(grossSalary, 18000) - tier1Taxable;

    const tier1 = tier1Taxable * 0.06;
    const tier2 = tier2Taxable * 0.06;

    let nssf = tier1;
    if (tier2 >= 0) {
        nssf += tier2;
    }
    return nssf;
}

//checks the amount paid and confirms the limit, then returns a calculated solution based on the amount.

function calculateNetSalary(grossSalary, payee, nhif, nssf) {
    return grossSalary - (payee + nhif + nssf);
}

function onClickCalcuate() {
    //obtain the values from the UI
    const basicSalary = document.getElementById("basicSalary").value;
    const benefits = document.getElementById("benefits").value;
    const contributionBenefit = document.getElementById(
        "contributionBenefit"
    ).value;
    const insuraceRelief = document.getElementById("insuraceRelief").value;

    //calculate the gross salary, taxable pay, payee, nhif, nssf and net salary
    const grossSalary = basicSalary + benefits;
    const taxablePay =
        grossSalary - (contributionBenefit + personalRelief + insuraceRelief);

    const payee = calculatePayee(taxablePay);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const netSalary = calculateNetSalary(grossSalary, payee, nhif, nssf);

    //run this to output the values on the UI
    document.getElementById("grossSalary").value = grossSalary;
    document.getElementById("taxablePay").value = taxablePay;
    document.getElementById("payee").value = payee;
    document.getElementById("nhif").value = nhif;
    document.getElementById("nssf").value = nssf;
    document.getElementById("netSalary").value = netSalary;
}
