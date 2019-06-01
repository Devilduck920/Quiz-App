const questions = [
    {
        question: 'What is the name of Ariel\'s prince?',
        answers:['Prince Philip','Prince Naveen','Prince Eric','Prince Ali','Prince Gabo'],
        correctAnswer: 2
    },
    {
        question: 'What is the name of the female mouse in \'The Rescuers\'?',
        answers:['Bianca','Bernadette','Brittany','Bridget','Gabo'],
        correctAnswer: 0
    },
    {
        question: 'Who is the villian in \'Sleeping Beauty\'?',
        answers:['Ursala','Malificent','Hades','Cuella De Vil','Gabo'],
        correctAnswer: 1
    },
    {
        question: 'What Character says they have a snake in their boot in Toy Story?',
        answers:['Buzz','Boo Peep','Woody','Mr. Potato Head','Gabo'],
        correctAnswer: 2
    },
    {
        question: 'Which character from Disney\'s Pixar \'Finding Nemo\' suffers from short term memory loss?',
        answers:['Marlin','Nemo','Dory','Bruce','Gabo'],
        correctAnswer: 2
    },
    {
        question: 'From Disney\'s \'UP\'What type of soda is the Ellie Badge?',
        answers:['Orange','Grape','Cherry','Lime','Gabo'],
        correctAnswer: 1
    },
    {
        question: 'How many dogs do the dogs Pongo and Purdy have?',
        answers:['101','15','7','10','Gabo'],
        correctAnswer: 0
    },
    {
        question: 'What is the name of the dog from \'COCO\'?'
        answers:['Chico','Dante','Doug','Pongo','Gabo'],
        correctAnswer: 1
    },
    {
        question: 'What is the phrase Timon and Pumba taught Simba from \'Lion King\'?',
        answers:['Hakuna Matata','No Way Jose!','You have our blessing','Kill the beast','Gabo Gabo'],
        correctAnswer: 0 
    },
    {
        question: 'Which one of these is NOT a 7 dwarf?',
        answers:['Dopey','Happy','Sleepy','Doc','Gabo'],
        correctAnswer: 4 
    }
];
let currentQuestion = 0;
let score = 0;


    $('.backgroundSection').on('click','.startButton',function(e){
        e.preventDefault();
        $('.start').hide();
        $('.quiz').show();
    })



function startQuiz(){

}
function showQuestion(){

}
function checkAnswer(){

}
function showSummary(){

}
