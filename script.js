// script.js
document.addEventListener('DOMContentLoaded', function () {
    const num1Element = document.getElementById('num1');
    const num2Element = document.getElementById('num2');
    const operatorElement = document.getElementById('operator');
    const answerElement = document.getElementById('answer');
    const resultElement = document.getElementById('result');
    const checkButton = document.getElementById('check');
    const newEquationButton = document.getElementById('newEquation');

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateRandomOperator() {
        const operators = ['+', '-'];
        const randomIndex = Math.floor(Math.random() * operators.length);
        return operators[randomIndex];
    }

    function generateEquation() {
        const num1 = generateRandomNumber(10, 50);
        const num2 = generateRandomNumber(0, 50);
        const operator = generateRandomOperator();
        num1Element.textContent = num1;
        num2Element.textContent = num2;
        operatorElement.textContent = operator;
        answerElement.value = '';
        resultElement.textContent = '';
    }

    function checkAnswer() {
        const num1 = parseInt(num1Element.textContent);
        const num2 = parseInt(num2Element.textContent);
        const operator = operatorElement.textContent;
        const answer = parseInt(answerElement.value);
        let correctAnswer;

        if (operator === '+') {
            correctAnswer = num1 + num2;
        } else {
            correctAnswer = num1 - num2;
        }

        if (answer === correctAnswer) {
            resultElement.textContent = 'Đúng!';
        } else {
            resultElement.textContent = 'Sai! Hãy thử lại.';
        }
    }

    checkButton.addEventListener('click', checkAnswer);
    newEquationButton.addEventListener('click', generateEquation);
    // if (num1 > num2)
    //     generateEquation();
    // Tạo phép tính đầu tiên khi trang được nạp
    generateEquation();
});
