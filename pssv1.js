let correctCount = 0;
let incorrectCount = 0;

function generateRandomQuestion() {
    let n = Math.floor(Math.random() * 1000);
    let currentSquare = n * n;
    let previousSquare = (n - 1) * (n - 1);
    let squareDifference = currentSquare - previousSquare;
    return [previousSquare, currentSquare, squareDifference];
}

function generateQuestion() {
    let [previousSquare, currentSquare] = generateRandomQuestion();
    document.getElementById("question").textContent = `Find the next perfect square in the series ${previousSquare},${currentSquare}...`;
    document.getElementById("resultrt").textContent = "";
    document.getElementById("resultw").textContent = "";
    document.getElementById("inputBox").value = "";
}


function checkAnswer() {
    let answer = parseInt(document.getElementById("inputBox").value);
    let [previousSquare, currentSquare, squareDifference] = generateRandomQuestion();
    if (answer === (squareDifference + currentSquare + 2)) {
        document.getElementById("resultr").textContent = "Correct! Well done!";
        correctCount++;
    } else {
        document.getElementById("resultw").textContent = "Try again. Incorrect!";
        incorrectCount++;
    }
    document.getElementById("score").textContent = `Correct: ${correctCount} | Incorrect: ${incorrectCount}`;
}

generateQuestion();

