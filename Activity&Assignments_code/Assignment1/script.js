function checkMarks() {
    let marks = parseInt(document.getElementById('marks').value);
    let result = document.getElementById('result');

    if (isNaN(marks) || marks < 0 || marks > 100) {
        result.textContent = "Please enter valid marks between 0 and 100";
        result.style.color = "red";
        return;
    }

    if (marks >= 40) {
        result.textContent = "Pass";
        result.style.color = "green";
    } else {
        result.textContent = "Fail";
        result.style.color = "red";
    }
}