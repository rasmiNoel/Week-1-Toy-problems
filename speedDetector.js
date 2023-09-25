
//define speed using const and making it a number
let speedLimit = 70;

//this function obtains the speed and returns a value/ string based on that speed.
function speedCheck(speed) {
    let demeritPoints = ((speed - speedLimit) / 5);
    if (speed < 71) {
        return 'OK';
    }
    else if (70 < speed && speed < 130) {
        return `Points: ${demeritPoints}`;
    }
    else if (speed > 129) {
        return 'License Suspended';
    }
}

//run this to output values in the UI
function onclickCheckSpeed() {
    let speed = document.getElementById("speedI").value;
    let checkResult = speedCheck(speed);
    document.getElementById("speedO").innerHTML = checkResult;
}