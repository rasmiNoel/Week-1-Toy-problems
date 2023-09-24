// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


//this links to the html document and inputs the figure that a user types into the function

function limiter(marks) {

    if (marks < 0) return 0;
    if (marks > 100) return 100;
    return marks;
}
//this ensures that the value of marks does not go below 0 and more than 100

function calculateGrade(marks) {
    if (marks > 79) {
        return 'A';
        //if the grade is more than 79 a grade of "A" is returned
    }
    else if (marks > 59 && marks < 80) {
        return 'B';
        //if the grade is between 60 to 79 a grade of "B" is returned
    }
    else if (marks > 48 && marks < 60) {
        return 'C';
        //if the grade is between 59 to 49 a grade of "C" is returned
    }
    else if (marks > 39 && marks < 50) {
        return 'D';
        //if the grade is between 40 to 49 a grade of "A" is returned
    }
    else if (marks < 40) {
        return 'E';
        //if the grade is between 40 to 49 a grade of "A" is returned
    }

    //this links to the html document and returns a grade when the user inputs the marks
}

function onClickCalcuateGrade() {
    let marks = document.getElementById('marksI').value;
    //marks = limiter(marks);
    let grade = calculateGrade(marks);
    document.getElementById("marksO").innerHTML = grade;
}