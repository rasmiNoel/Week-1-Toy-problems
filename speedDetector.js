
//define speed using const and making it a number
let speedLimit = 70;
let demeritPoints = (Math.floor((speed - speedLimit) / 5));

function speedCheck(speed) {
    
    if (speed < speedLimit) {        //if the speed is less than the speed limit then a value of 'OK' is returned
        return 'OK';
    }
    else if (speed > 70 && demeritPoints < 12) {                  //if the speed is above the speed limit, we find the difference and devide by 5 to obtain the demeritpoints
        return `Points: ${demeritPoints}`;
    }
    else {
        return 'License Suspended';           //if the demeritpoints is above 12, a text of 'License Suspended' is returned.
    }
}

function onclickCheckSpeed() {
    let speed = document.getElementById("speedI").value;
    let checkResult = speedCheck(speed);
    document.getElementById("speedO").innerHTML = checkResult;
}