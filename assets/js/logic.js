// Variables to store the current question, score, and time
let currentQuestion = 0;
let score = 0;
let time = 0;
let timerId;

const questions = [
    {
      question: "What is the keyword used to declare a variable in javascript?",
      choices: ["variable", "if", "con", "def"],
      correctAnswer: "var"
    },
    {
      question: "which of the below is a data-type?",
      choices: ["variable", "function", "string", "method"],
      correctAnswer: "string"
    },
    {
        question: "What is the symbol for the AND operator?",
        choices: ["&", "|", "%", "x"],
        correctAnswer: "&"
    },
    {
        question: "Which option is a valid boolean result?",
        choices: ["true", "yes", "i", "if"],
        correctAnswer: "true"
    },
    {
        question: "which of the below compares the input and type?",
        choices: ["=", "==", "===", "TypeOf"],
        correctAnswer: "==="
    },
  ];

// Function to display the current question
function displayQuestion() {
    // Update the question title
    document.getElementById("question-title").innerHTML = questions[currentQuestion].question;

// Display the choices for the current question
  for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
    let choice = document.createElement("button");
    choice.innerHTML = questions[currentQuestion].choices[i];
    choice.onclick = checkAnswer;
    document.getElementById("choices").appendChild(choice);
  }}
