
const speed = Number
//define speed using const and making it a number
let speedLimit = 70

let demeritPoints = Number

function speedCheck(speed) {
    if (speed < speedLimit) {
        return 'OK'
//if the speed is less than the speed limit then a value of 'OK' is returned
    }
    else if (demeritPoints = Math.floor((speed - speedLimit) / 5) && demeritPoints < 12)
        return `Points: ${demeritPoints}`
//if the speed is above the speed limit, we find the difference and devide by 5 to obtain the demeritpoints
    else {
        return 'License Suspended'
//if the demeritpoints is above 12, a text of 'License Suspended' is returned.
    }
}
function onclickCheckSpeed(){
    const speed = document.getElementById("speedI").value;
    const checkResult = speedCheck(speed);
    document.getElementById("speedO").value = checkResult;
}