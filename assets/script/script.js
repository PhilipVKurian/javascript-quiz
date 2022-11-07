var time = document.getElementById("time-left").innerHTML;
var startButton = document.querySelector("#start-game");
var question = document.querySelector('#questions');
var answer = document.querySelector('#answers');
var quizSection = document.getElementById("quiz");
var timer = document.getElementById('timer');
var scores = document.getElementById('scores');
var resetBtn = document.getElementById('reset');
var backBtn = document.getElementById('back');
var interval;

var left = 0;
var timeleft = 200;
var score = 0;

scores.style.visibility = 'hidden';
document.querySelector('#highscores').style.visibility = 'hidden';

startButton.addEventListener('click', function startTimer(){
    interval = setInterval( playGame, 1000);
    startButton.style.display = 'none';
    getAnswer(1);
    function playGame(){        
        timeleft--; 
        if (timeleft < 0){
            clearInterval(interval);
            submitQuiz();

        } else {
            document.getElementById("time-left").innerHTML = timeleft;            
        }    
    }   
});

resetBtn.addEventListener('click', function resetScores(){
    var displayedHS = document.getElementById("display-highscore");
    displayedHS.style.visibility = "hidden";
    localStorage.clear();
});

backBtn.addEventListener('click', function goBack(){
    window.location.reload();
});

function getAnswer(q){
    var questionNum = q;
    var h1 = document.createElement('h1');
    var option1 = document.createElement('BUTTON');
    var option2 = document.createElement('BUTTON');
    var option3 = document.createElement('BUTTON');
    var option4 = document.createElement('BUTTON');

    if (questionNum == 1){
        h1.innerHTML ="What is JavaScript?";
        question.appendChild(h1);
        option1.innerHTML = "A subset of Java";
        option2.innerHTML = "math";
        option3.innerHTML = "a coding language";
        option4.innerHTML = "Language the egyptians spoke";
        answer.appendChild(option1);
        answer.appendChild(option2);
        answer.appendChild(option3);
        answer.appendChild(option4);

        option1.onclick = function() {            
            timeleft -= 5;            
            getAnswer(2);                       
        }
        option2.onclick = function() {
            timeleft -= 5;
            getAnswer(2);     
        }
        option3.onclick = function() { 
            score++;
            getAnswer(2);                   
        }
        option4.onclick = function() { 
            timeleft -= 5;  
            getAnswer(2);                    
        }        
    } 
    if (questionNum == 2){
        clearFields();
        h1.innerHTML ="What is a function?";
        question.appendChild(h1);
        console.log(question);
        option1.innerHTML = "A complicated Task";
        option2.innerHTML = "math";
        option3.innerHTML = "a set of statements that performs a task or calculates a value";
        option4.innerHTML = "You never taught me this!";
        answer.appendChild(option1);
        answer.appendChild(option2);
        answer.appendChild(option3);
        answer.appendChild(option4);
        option1.onclick = function() {            
            timeleft -= 5;   
            getAnswer(3);                       
        }
        option2.onclick = function() {
            timeleft -= 5;
            getAnswer(3);     
        }
        option3.onclick = function() { 
            score++;    
            getAnswer(3);                   
        }
        option4.onclick = function() { 
            timeleft -= 5;  
            getAnswer(3);                    
        } 
    }
    if (questionNum == 3){
        clearFields();
        h1.innerHTML = "What is a variable?";
        question.appendChild(h1);
        console.log(question);
        option1.innerHTML = "something that changes";
        option2.innerHTML = "the weather";
        option3.innerHTML = "That friend you know you vibe with";
        option4.innerHTML = "stores the data value that can be changed later on";
        answer.appendChild(option1);
        answer.appendChild(option2);
        answer.appendChild(option3);
        answer.appendChild(option4);
        option1.onclick = function() {            
            timeleft -= 5;   
            getAnswer(4);                       
        }
        option2.onclick = function() {
            timeleft -= 5;
            getAnswer(4);     
        }
        option3.onclick = function() {
            timeleft -= 5;          
            getAnswer(4);                   
        }
        option4.onclick = function() { 
            score++;     
            getAnswer(4);                    
        } 
    }
    if (questionNum == 4){
        clearFields();
        h1.innerHTML ="The first item in an array is also known as____________";
        question.appendChild(h1);
        console.log(question);
        option1.innerHTML = "Element 0";
        option2.innerHTML = "The early bird";
        option3.innerHTML = "Element 5";
        option4.innerHTML = "JavaScript";
        answer.appendChild(option1);
        answer.appendChild(option2);
        answer.appendChild(option3);
        answer.appendChild(option4);
        option1.onclick = function() {            
            score++;  
            getAnswer(5);                       
        }
        option2.onclick = function() {
            timeleft -= 5;
            getAnswer(5);     
        }
        option3.onclick = function() {     
            getAnswer(5);                   
        }
        option4.onclick = function() { 
            timeleft -= 5;  
            getAnswer(5);                    
        } 

    }
    if (questionNum == 5){
        clearFields();
        h1.innerHTML ="Did you find this quiz hard?";
        question.appendChild(h1);
        option1.innerHTML = "No";
        option2.innerHTML = "Yes";
        option3.innerHTML = "Yes";
        option4.innerHTML = "Yes";
        answer.appendChild(option1);
        answer.appendChild(option2);
        answer.appendChild(option3);
        answer.appendChild(option4);

        option1.onclick = function() { 
            score++;        
            submitQuiz();                      
        }
        option2.onclick = function() {
            timeleft -= 5;
            submitQuiz();     
        }
        option3.onclick = function() { 
            timeleft -= 5;
            submitQuiz();
        }
        option4.onclick = function() { 
            timeleft -= 5;  
            submitQuiz();                     
        }        
    } 
    function clearFields() {
        question.innerHTML = "";
        answer.innerHTML = "";  
    }
};

function submitQuiz(){
    clearInterval(interval);
    var h1 = document.querySelector("h1");
    var submitButton = document.getElementById("submit");
    var name = "Name";
    h1.innerHTML = "Your Score.." + score + "/5";
    timer.style.display = 'none';
    quizSection.style.display = 'none';
    scores.style.visibility = 'visible'; 
    var scoreList = []; 


    submitButton.addEventListener('click', function (event){
        event.preventDefault();
        name = document.querySelector('#user-name').value;
        var listItem = [name, score];

        if(window.localStorage.length == 0){
            localStorage.setItem("listItem", JSON.stringify(listItem));
            scoreList.push( JSON.parse(localStorage.getItem("listItem", listItem))); 
        } else {            
            scoreList.push( JSON.parse(localStorage.getItem("listItem", listItem))); 
            scoreList.push(listItem); 
            localStorage.setItem("listItem", JSON.stringify(scoreList));
        }
        displayScores(scoreList);

    });
};

function displayScores(sl){
    scores.style.visibility = 'hidden'; 
    document.querySelector('#highscores').style.visibility = 'visible';
    var highscore = document.getElementById('display-highscore');
    var displayedHS = document.getElementById("display-highscore");
    var storedScores = JSON.stringify(sl);
    var splitScores = storedScores.toString().replace(/[\[\]'"]+/g, "").split(",");

    for (var i =0; i < splitScores.length; i++){      
        var p1 = document.createElement("p");
        if(i%2 == 0){
            p1.textContent += "Name:  " + splitScores[i];

        } else {
            p1.textContent += "Score:  " + splitScores[i]
        }
        displayedHS.appendChild(p1);
    }
};

