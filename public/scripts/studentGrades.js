var student;

var unitGrades = [];

window.onload = () => {
    student = 'Francis Lamb';

    setStudentTag(`${student} grades`);

    unitGrades.push({
        unit: 'Mathematics',
        grade: 7.5,
    });

    unitGrades.push({
        unit: 'Literature',
        grade: 11.2,
    });

    showCards();
};

function setStudentTag(text) {
    document.getElementById('student').innerHTML = text;
}

function showCards() {
    for (var grade of unitGrades) {
        var card = buildCard(grade);
        document.getElementById('container').innerHTML += card;
    }
}

function buildCard(grade) {
    var html = `<div class="card ${(grade.grade <= 9.5) ? 'failed' : ''}">`;
    html += '<section class="card-grade-title ">';
    html += '<div class="card-head">';
    html += `<h1>${grade.unit.substring(0, 2)}</h1>`;
    html += '</div>';
    html += `<h4>${grade.unit}</h4>`;
    html += '<div>';
    html += '</section>';
    html += `<p>Grade: ${grade.grade}</p>`
    html += '</div>';
    return html;
}