let coursesCount = 0;

function addCourse() {
    coursesCount++;
    const coursesDiv = document.getElementById('courses');
    const newCourseDiv = document.createElement('div');
    newCourseDiv.innerHTML = `
        <input type="text" id="courseName${coursesCount}" placeholder="Course Name">
        <input type="number" id="credits${coursesCount}" placeholder="Credits">
        <input type="number" id="grade${coursesCount}" placeholder="Grade">
    `;
    coursesDiv.appendChild(newCourseDiv);
}

function calculateSGPA() {
    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 1; i <= coursesCount; i++) {
        const credits = parseFloat(document.getElementById(`credits${i}`).value);
        const grade = parseFloat(document.getElementById(`grade${i}`).value);

        if (!isNaN(credits) && !isNaN(grade)) {
            totalCredits += credits;
            totalPoints += credits * grade;
        }
    }

    if (totalCredits === 0) {
        alert("Please enter at least one course");
        return;
    }

    const sgpa = totalPoints / totalCredits;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h2>Your SGPA is: ${sgpa.toFixed(2)}</h2>`;
}
