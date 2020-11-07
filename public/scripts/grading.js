window.onload = () => {

    document.getElementById('calculate').onclick = () => {
        var output = document.getElementById('output');

        var studentName = document.getElementById('studentName').value;

        var unitName = document.getElementById('unitName').value;

        var projectGrade = document.getElementById('projectGrade').value;
        var projectPercentage = document.getElementById('projectPercentage').value;

        var testGrade = document.getElementById('testGrade').value;
        var testPercentage = document.getElementById('testPercentage').value;

        var fields = document.querySelectorAll('input[type=text]');

        for (field of fields) {
            if (field.value == '') {
                alert('Please fill out all fields.');
                return;
            }
        }

        if (testPercentage + projectPercentage != 100) {
            alert('The percentages don\'t add up to 100.');
            return;
        }

        var finalGrade = projectGrade * projectPercentage * 0.01 + testGrade * testPercentage * 0.01;
        Math.ceil(finalGrade);

        output.innerHTML = `Student ${studentName} obtained ${finalGrade} on the ${unitName} unit.`;
    };

    document.getElementById('reset').onclick = () => {
        var fields = document.querySelectorAll('input[type=text]');
        for (field of fields) {
            field.value = '';
        }
    };
};