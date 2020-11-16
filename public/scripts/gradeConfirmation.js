window.onload = () => {
    let grade = JSON.parse(sessionStorage.getItem('grade'));

    let finalGrade = calcFinalGrade(grade.proj, grade.test);

    setTitle(grade.student.name, grade.unit.name);
    setProjectGrade(grade.proj.grade);
    setTestGrade(grade.test.grade);
    setFinalGrade(finalGrade, grade.proj.percentage, grade.test.percentage);
    setFeedback(finalGrade);
}

function setTitle(studentName, unitName) {
    let student = document.getElementById('studentName');
    let unit = document.getElementById('unitName');

    student.innerHTML = studentName;
    unit.innerHTML = unitName;
}

function setProjectGrade(projectGrade) {
    let pGrade = document.getElementById('projectGrade');
    pGrade.innerHTML = projectGrade;
}

function setTestGrade(testGrade) {
    let pGrade = document.getElementById('testGrade');
    pGrade.innerHTML = testGrade;
}

function setFinalGrade(finalGrade, projectPercentage, testPercentage) {
    let final = document.getElementById('finalGrade');
    let project = document.getElementById('projectPercentage');
    let test = document.getElementById('testPercentage');

    final.innerHTML = finalGrade;
    project.innerHTML = projectPercentage;
    test.innerHTML = testPercentage;
}

function setFeedback(finalGrade) {
    let feedback = document.getElementById('feedback');

    let passed = finalGrade > 9.5;

    let className = passed ? 'passed' : 'failed';

    feedback.classList.add(className);
    feedback.innerHTML = passed ? 'Passed! :D' : 'Failed :(';
}

function calcFinalGrade(project, test) {
    return (project.grade * project.percentage + test.grade + test.percentage) / 2;
}