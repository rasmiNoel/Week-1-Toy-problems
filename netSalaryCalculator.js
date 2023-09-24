

let basicSalary = Number
let benefits = Number
let contributionBenefit = Number
const personalRelief = 2400
let insuraceRelief = Number
const taxablePay = (grossSalary - (contributionBenefit + personalRelief + insuraceRelief))

const grossSalary = basicSalary + benefits;
const netSalary = grossSalary - (payee + NHIF + NSSF_I + NSSF_II);

function limiter(insuraceRelief) {
    if (insuraceRelief.value < 0) insuraceRelief.value = 0;
    if (insuraceRelief.value > 5000) insuraceRelief.value = 5000;
} // this functions ensures the maximum amount of insurance relief that can be entered is 5,000

function payee() {
    if (taxablePay < 24000) {
        return (taxablePay * 0.1) //rate is 10%
    }
    else if (taxablePay > 24000 && taxablePay < 32334) {
        return (taxablePay * 0.25) //rate is 25%
    }

    else if (taxablePay > 32333 && taxablePay < 500001) {
        return (taxablePay * 0.3) //rate is 30%
    }
    else if (taxablePay > 500000 && taxablePay < 800001) {
        return (taxablePay * 0.325) //rate is 32.5%
    }
    else if (taxablePay > 8000000) {
        return (taxablePay * 0.35) //rate is 35%
    }
}

function NHIF() {
    if (grossSalary < 6000) { //checks the gross salary and returns a predetermined amount
        return 150
    }
    else if (grossSalary > 5999 && grossSalary < 8000) {
        return 300 //checks the gross salary and returns a predetermined amount
    }

    else if (grossSalary > 7999 && grossSalary < 12000) {
        return 400 //checks the gross salary and returns a predetermined amount
    }
    else if (grossSalary > 11999 && grossSalary < 15000) {
        return 500 //checks the gross salary and returns a predetermined amount
    }

    else if (grossSalary > 14999 && grossSalary < 20000) {
        return 600 //checks the gross salary and returns a predetermined amount
    }
    else if (grossSalary > 19999 && grossSalary < 25000) {
        return 750 //checks the gross salary and returns a predetermined amount
    }
    else if (grossSalary < 24999 && grossSalary < 30000) {
        return 850 //checks the gross salary and returns a predetermined amount
    }
    else if (grossSalary > 29999 && grossSalary < 35000) {
        return 900 //checks the gross salary and returns a predetermined amount
    }

    else if (grossSalary > 34999 && grossSalary < 40000) {
        return 950 //checks the gross salary and returns a predetermined amount
    }
    else if (grossSalary > 39999 && grossSalary < 45000) {
        return 1000 //checks the gross salary and returns a predetermined amount
    }

    else if (grossSalary > 44999 && grossSalary < 50000) {
        return 1100 //checks the gross salary and returns a predetermined amount
    }
    else if (grossSalary < 59999 && grossSalary < 60000) {
        return 1200 //checks the gross salary and returns a predetermined amount
    }
    else if (grossSalary > 59999 && grossSalary < 70000) {
        return 1300 //checks the gross salary and returns a predetermined amount
    }

    else if (grossSalary > 69999 && grossSalary < 80000) {
        return 1400 //checks the gross salary and returns a predetermined amount
    }
    else if (grossSalary > 79999 && grossSalary < 90000) {
        return 1500 //checks the gross salary and returns a predetermined amount
    }

    else if (grossSalary > 89000 && grossSalary < 100000) {
        return 1600 //checks the gross salary and returns a predetermined amount
    }
    else if (grossSalary > 100000) {
        return 1700 //checks the gross salary and returns a predetermined amount
    }
}

function NSSF_I() {
    function limiter(NSSF_I) {
        if (NSSF_I.value < 0) NSSF_I.value = 0;
        if (NSSF_I.value > 5000) NSSF_I.value = 6000;
        return (grossSalary * 0.06) //checks the amount paid and confirms the limit, then returns a calculated solution based on the amount.
    }
}
function NSSF_II() {
    function limiter(NSSF_II) {
        if (NSSF_II.value < 0) NSSF_II.value = 6001;
        if (NSSF_II.value > 5000) NSSF_II.value = 18000;
        return (grossSalary * 0.06) //checks the amount paid and confirms the limit, then returns a calculated solution based on the amount.
    }
}