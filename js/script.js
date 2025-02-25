document.getElementById('calculate-btn').addEventListener('click', function() {
    let num = document.getElementById('number-input').value;
    let resultDisplay = document.getElementById('result');

    if (num === "" || num < 0) {
        resultDisplay.textContent = "Please enter a valid positive number.";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    resultDisplay.textContent = `${num}! = ${factorial}`;
});

document.getElementById('dark-mode').addEventListener('click', function() {
    document.body.classList.add('dark-mode');
});

document.getElementById('light-mode').addEventListener('click', function() {
    document.body.classList.remove('dark-mode');
});
