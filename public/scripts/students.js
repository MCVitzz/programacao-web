const students = [
    {
        name: 'John Smith',
        number: 202,
        id: 12
    },
    {
        name: 'Mary Jane',
        number: 512,
        id: 31
    },
    {
        name: 'Jane Dow',
        number: 45,
        id: 3
    },
];

window.onload = () => {
    createCards();
};

function createCards() {
    let main = document.getElementById('students');
    for (let idx in students) {
        main.innerHTML += makeCard(idx);
    }
}

function showStudent(idxStudent) {
    sessionStorage.setItem('studentId', idxStudent);
    sessionStorage.setItem('studentName', students[idxStudent].name);
    window.location = 'studentGrades.html';
}

function makeCard(idxStudent) {
    return `<div class="student-card" onclick="showStudent(${idxStudent})">
        <h2>
            ${students[idxStudent].name}
        </h2>
        <p>
            ${students[idxStudent].number}
        </p>
    </div>`;
}