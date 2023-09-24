// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

let marks = Number

function limiter(marks) {
    if (marks.value < 0) marks.value = 0;
    if (marks.value > 100) marks.value = 100;
}
function Grade(marks) {
    if (marks > 79) {
        return 'A'
    }
    else if (marks > 59 && marks < 80) {
        return 'B'
    }
    else if (marks > 48 && marks < 60) {
        return 'C'
    }
    else if (marks > 39 && marks < 50) {
        return 'D'
    }
    else if (marks < 40) {
        return 'E'
    }
}

