let navBar = document.querySelector('nav');
let highscoresLink = document.getElementById('highscores-link');
let container = document.getElementById('container');
let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('start-button');
let title = document.getElementById('title');
let text = document.getElementById('text');
let quizAnswers = document.getElementById('quiz-answers');
let answerButtons = document.getElementsByClassName('answer-button');
let answerMessage = document.getElementById('answer-message');
let inputField = document.getElementById('input-field');
let initials = document.getElementById('initials');
let submitButton = document.getElementById('submit-button');


let timerSecs = 0;
let currentQuestion = 0
let score = 0;
let scoreArray = [];
let timerInterval = false;