var score = 0;
var currentQuestion = 0;
const questions = [
    {
        title: 'What is the name of Ariel\'s prince?',
        answers:['Prince Philip','Prince Naveen','Prince Eric','Prince Ali','Prince Gabo'],
        correct: 2
    },
    {
        title: 'What is the name of the female mouse in \'The Rescuers\'?',
        answers:['Bianca','Bernadette','Brittany','Bridget','Gabo'],
        correct: 0
    },
    {
        title: 'Who is the villian in \'Sleeping Beauty\'?',
        answers:['Ursala','Malificent','Hades','Cuella De Vil','Gabo'],
        correct: 1
    },
    {
        title: 'What Character says they have a snake in their boot in Toy Story?',
        answers:['Buzz','Boo Peep','Woody','Mr. Potato Head','Gabo'],
        correct: 2
    },
    {
        title: 'Which character from Disney\'s Pixar \'Finding Nemo\' suffers from short term memory loss?',
        answers:['Marlin','Nemo','Dory','Bruce','Gabo'],
        correct: 2
    },
    {
        title: 'From Disney\'s \'UP\'What type of soda is the Ellie Badge?',
        answers:['Orange','Grape','Cherry','Lime','Gabo'],
        correct: 1
    },
    {
        title: 'How many dogs do the dogs Pongo and Purdy have?',
        answers:['101','15','7','10','Gabo'],
        correct: 0
    },
    {
        title: 'What is the name of the dog from \'COCO\'?',
        answers:['Chico','Dante','Doug','Pongo','Gabo'],
        correct: 1
    },
    {
        title: 'What is the phrase Timon and Pumba taught Simba from \'Lion King\'?',
        answers:['Hakuna Matata','No Way Jose!','You have our blessing','Kill the beast','Gabo Gabo'],
        correct: 0 
    },
    {
        title: 'Which one of these is NOT a 7 dwarf?',
        answers:['Dopey','Happy','Sleepy','Doc','Gabo'],
        correct: 4 
    }
];

 $('.start a').on('click', function(e){
    e.preventDefault();
    $('.start').hide();
    $('.quiz').show();
    showQuestion();
});

$('.quiz ul').on('click', 'li', function(){
    $('.selected').removeClass()
    $(this).toggleClass('selected')
})

$('.quiz a').click(function(e){
    e.preventDefault();
    if($('li.selected').length){
        let guess = parseInt($('li.selected').attr('id'));
        checkAnswer(guess);        
    } else {
        alert('Please select an answer')
    }
$('.summary a').click(function(e){
     e.preventDefault();
    restartQuiz();
    });

})
function correctResponse(){
    $('.quiz h2, ul, a').hide();

}

function updateNumber() {
    $('.headerRow').text(`Question: ${currentQuestion + 1}/10`);
}
function showQuestion() {
    let question = questions[currentQuestion];
    $('.quiz h2').text(question.title);
    $('.quiz ul').html('');
    for(let i=0; i<question.answers.length; i++){
        $('.quiz ul').append(`<li id="${i}">${question.answers[i]}</li>`);
    }
    updateNumber()
}
function checkAnswer(guess) {
    let question = questions[currentQuestion];
    if(question.correct === guess){
        score++;
    }
    correctResponse()
    currentQuestion++;
    if(currentQuestion >= questions.length ){
        showSummary();
    } else {
    showQuestion();
    }
}
function showSummary(){
    $('.quiz').hide();
    $('.summary').show();
    $('.summary p').text('You got ' +score+ ' out of ' +questions.length+' correct!');
}
function restartQuiz(){
    $('.summary').hide();
    $('.quiz').show();
    score = 0;
    currentQuestion = 0;
    showQuestion();
};