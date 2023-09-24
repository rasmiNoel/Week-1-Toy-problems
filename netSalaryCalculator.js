

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
}

function payee() {
    if (taxablePay < 24000) {
        return 0
    }
    else if (taxablePay > 24000 && taxablePay < 288000) {
        return (taxablePay * 0.1)
    }

    else if (taxablePay > 288000 && taxablePay < 388001) {
        return (taxablePay * 0.25)
    }
    else if (taxablePay > 388000 && taxablePay < 5612000) {
        return (taxablePay * 0.3)
    }

    else if (taxablePay > 5612001 && taxablePay < 9600000) {
        return (taxablePay * 0.325)
    }
    else if (taxablePay > 9600000) {
        return (taxablePay * 0.35)
    }
}

function NHIF() {
    if (grossSalary < 6000) {
        return 150
    }
    else if (grossSalary > 5999 && grossSalary < 8000) {
        return 300
    }

    else if (grossSalary > 7999 && grossSalary < 12000) {
        return 400
    }
    else if (grossSalary > 11999 && grossSalary < 15000) {
        return 500
    }

    else if (grossSalary > 14999 && grossSalary < 20000) {
        return 600
    }
    else if (grossSalary > 19999 && grossSalary < 25000) {
        return 750
    }
    else if (grossSalary < 24999 && grossSalary < 30000) {
        return 850
    }
    else if (grossSalary > 29999 && grossSalary < 35000) {
        return 900
    }

    else if (grossSalary > 34999 && grossSalary < 40000) {
        return 950
    }
    else if (grossSalary > 39999 && grossSalary < 45000) {
        return 1000
    }

    else if (grossSalary > 44999 && grossSalary < 50000) {
        return 1100
    }
    else if (grossSalary < 59999 && grossSalary < 60000) {
        return 1200
    }
    else if (grossSalary > 59999 && grossSalary < 70000) {
        return 1300
    }

    else if (grossSalary > 69999 && grossSalary < 80000) {
        return 1400
    }
    else if (grossSalary > 79999 && grossSalary < 90000) {
        return 1500
    }

    else if (grossSalary > 89000 && grossSalary < 100000) {
        return 1600
    }
    else if (grossSalary > 100000) {
        return 1700
    }
}

function NSSF_I() {
    function limiter(NSSF_I) {
        if (NSSF_I.value < 0) NSSF_I.value = 0;
        if (NSSF_I.value > 5000) NSSF_I.value = 6000;
        return (grossSalary * 0.06)
    }
}
function NSSF_II() {
    function limiter(NSSF_II) {
        if (NSSF_II.value < 0) NSSF_II.value = 6001;
        if (NSSF_II.value > 5000) NSSF_II.value = 18000;
        return (grossSalary * 0.06)
    }
}