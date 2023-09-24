
const speed = Number
let speedLimit = 70
let demeritPoints = Number
function speedCheck(speed) {
    if (speed < speedLimit) {
        return 'OK'
    }
    else if (demeritPoints = Math.floor((speed - speedLimit) / 5) && demeritPoints < 12)
        return `Points: ${demeritPoints}`
    else {
        return 'Lisence Suspended'
    }
}