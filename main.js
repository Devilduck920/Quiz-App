
let questionNumber = 0;
let score = 0;
const STORE = [
{
  question: 'What is the name of Ariel\'s prince?',
  answers:['Prince Philip','Prince Naveen','Prince Eric','Prince Ali','Prince Gabo'],
  correctAnswer: 'Prince Eric'
},
{
  question: 'What is the name of the female mouse in \'The Rescuers\'?',
  answers:['Bianca','Bernadette','Brittany','Bridget','Gabo'],
  correctAnswer: 'Bernadette'
},
{
  question: 'Who is the villian in \'Sleeping Beauty\'?',
  answers:['Ursala','Maleficent','Hades','Cuella De Vil','Gabo'],
  correctAnswer: 'Maleficent'
},
{
  question: 'What Character says they have a snake in their boot in Toy Story?',
  answers:['Buzz','Bo Peep','Woody','Mr. Potato Head','Gabo'],
  correctAnswer: 'Woody'
},
{
  question: 'Which character from Disney\'s Pixar \'Finding Nemo\' suffers from short term memory loss?',
  answers:['Marlin','Nemo','Dory','Bruce','Gabo'],
  correctAnswer: 'Dory'
},
{
  question: 'From Disney\'s \'UP\' what type of soda is the Ellie Badge?',
  answers:['Orange','Grape','Cherry','Lime','Gup'],
  correctAnswer: 'Grape'
},
{
  question: 'How many dogs do the dogs Pongo and Purdy have?',
  answers:['101','15','7','10','18'],
  correctAnswer: '15'
},
{
  question: 'What is the name of the dog from\'COCO\'?',
  answers:['Chico','Dante','Doug','Pongo','Bonson'],
  correctAnswer: 'Dante'
},
{
  question: 'What is the phrase Timon and Pumba taught Simba from \'Lion King\'?',
  answers:['Hakuna Matata','No Way Jose!','You have our blessing','Kill the beast','Gabo Gabo'],
  correctAnswer: 'Hakuna Matata' 
},
{
  question: 'Which one of these is NOT a 7 dwarf?',
  answers:['Dopey','Happy','Sleepy','Doc','Gabo'],
  correctAnswer: 'Gabo'
}
];
function generateQuestion () {
  if (questionNumber < STORE.length) {
    return `<div class="question ${questionNumber}">
    <h2>${STORE[questionNumber].question}</h2>
    <form>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
    <span>${STORE[questionNumber].answers[0]}</span>
    </label><br>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
    <span>${STORE[questionNumber].answers[1]}</span>
    </label><br>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
    <span>${STORE[questionNumber].answers[2]}</span>
    </label><br>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
    <span>${STORE[questionNumber].answers[3]}</span>
    </label><br>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[4]}" name="answer" required>
    <span>${STORE[questionNumber].answers[4]}</span>
    </label><br>
    <button type="submit" class="submitButton">Submit</button>
    </form>
    </div>`;
} else {
    renderResults();
    restartQuiz();
    $('.questionNumber').text(10)
  }
}
function changeQuestionNumber () {
    questionNumber ++;
  $('.questionNumber').text(questionNumber+1);
}

function changeScore () {
  score ++;
}

function startQuiz () {
  $('.quizStart').on('click', '.startButton', function (e) {
    $('.quizStart').remove();
    $('.questionAnswerForm').css('display', 'block');
    $('.questionNumber').text(1);
});
}
function renderQuestion () {
  $('.questionAnswerForm').html(generateQuestion());
}
function userSelectAnswer () {
  $('form').on('submit', function (e) {
    e.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {

      ifAnswerIsCorrect();
    } else {

      ifAnswerIsWrong();
    }
  });
}
function ifAnswerIsCorrect () {
  userAnswerFeedbackCorrect();
  updateScore();
}

function ifAnswerIsWrong () {
  userAnswerFeedbackWrong();
}
function userAnswerFeedbackCorrect () {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  $('.questionAnswerForm').html(`<div class=" question"><p><b>You got it right!</b></p><button type=button class=" nextButton">Next</button></div>`);
}
function userAnswerFeedbackWrong () {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  $('.questionAnswerForm').html(`<div class=" question "><p><b>You got it wrong</b><br>correct answer: <span>"${correctAnswer}"</span></p><button type=button class=" nextButton">Next</button></div>`);
}
function updateScore () {
  changeScore();
  $('.score').text(score);
}
function renderResults () {
  if (score >= 5) {
    $('.questionAnswerForm').html(`<div class="question"><h3>YOU'RE TOO COOL FOR SCHOOL!</h3><p> ${score} / 10</p><button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.questionAnswerForm').html(`<div class="question"><h2>UHM, TRY AGAIN NEXT TIME !</h2><p>${score} / 10</p><button class="restartButton">Restart Quiz</button></div>`);
  }
}
function renderNextQuestion () {
  $('main').on('click', '.nextButton', function (e) {
    changeQuestionNumber();
    renderQuestion();
    userSelectAnswer();
  });
}
function restartQuiz () {
  $('main').on('click', '.restartButton', function (e) {
    location.reload();
  });
}
function createQuiz () {
  startQuiz();
  renderQuestion();
  userSelectAnswer();
  renderNextQuestion();
}

$(createQuiz);
