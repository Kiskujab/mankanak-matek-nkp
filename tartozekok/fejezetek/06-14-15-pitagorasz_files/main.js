document.getElementById("totalScore").textContent = NO_OF_ACCEPTED_ANSWERS;

var allowedToClick;

var messageController = new MessageController();
var buttons = new Buttons();

// Main
main();
messageController.introduceExercise(INTRODUCTION_TEXT);

function main()
{
    allowedToClick = true;
    shuffleArraysIfNeeded();
    setScreen();
    answers = chooseThreeAnswers();
    putAnswersOnScreen();
}

function setScreen()
{
    for (var i = 1; i <= 3; i++)
    {
        var answerElement = document.getElementById("answer" + i);
        answerElement.innerHTML = "";
        answerElement.style.background = "#FFF";
        document.getElementById("currentScore").textContent = noOfAnswersRight;
    }
}

function putAnswersOnScreen()
{
    for (var i = 1; i <= 3; i++)
    {
        var item = document.getElementById("answer" + i);
        item.innerHTML = answers[i - 1][0];

        // Marking it right or wrong answer
        if (getIndex(rightAnswers, item.innerHTML) > -1)
        {
            item.setAttribute("index", getIndex(rightAnswers, item.innerHTML));
            item.setAttribute("answerType", "right");
        }
        else
        {
            item.setAttribute("index", getIndex(wrongAnswers, item.innerHTML));
            item.setAttribute("answerType", "wrong");
        }

    }
}


function chooseThreeAnswers()
{
    var theAnswers = [];

    // Push the three possible answers
    theAnswers.push(rightAnswers[rightCounter]);
    theAnswers.push(wrongAnswers[wrongCounter]);
    do {wrongCounter++} while(!wrongAnswers[wrongCounter % wrongAnswers.length]);
    theAnswers.push(wrongAnswers[wrongCounter % wrongAnswers.length]);

    calculateNextIndexes();

    theAnswers = shuffleArray(theAnswers);

    return theAnswers;
}

function calculateNextIndexes()
{

    // Choosing the next answers
    do { rightCounter++ } while (rightCounter < rightAnswers.length && !rightAnswers[rightCounter][1]);
    do { wrongCounter++ } while (wrongCounter < wrongAnswers.length && !wrongAnswers[wrongCounter][1]);

    // Reset counters if necessary
    if (rightCounter >= rightAnswers.length)
    {
        rightCounter = 0;
    }

    if (wrongCounter >= wrongAnswers.length)
    {
        wrongCounter = 0;
    }
}

// This function is from
// http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
function shuffleArray(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
  
// If an answer is right, it acts, otherwise simply moves on
function checkAnswer(item)
{
    if (allowedToClick)
    {
        allowedToClick = false;
        
        var guess = item.innerHTML;
        if (item.getAttribute("answerType") == "right")
        {
            // THE ANSWER IS RIGHT!

            $("#" + item.getAttribute("id")).animate( { backgroundColor: "#0F0" }, 500 );
            noOfAnswersRight++;
            removeInputValuesFromArray();
        }
        else
            for (var i = 0; i < 3; i++ ) {
            $("#" + item.getAttribute("id"))
                .animate( { backgroundColor: "#FFF" }, 150 )
                .animate( { backgroundColor: "#F00" }, 150 );
            }

        if (noOfAnswersRight < NO_OF_ACCEPTED_ANSWERS)
            setTimeout(function() { main(); }, 2000);
        else
            setTimeout(function() { document.getElementById("currentScore").textContent = noOfAnswersRight;
                                    quit(); }, 1000);
    }
    
}

function reset() {

    rightAnswers.forEach(function(answer) {
        answer[1] = true;
    });

    wrongAnswers.forEach(function(answer) {
        answer[1] = true;
    });

    noOfAnswersRight = 0;

    main();


}

function showSolution() {

    var answerID;

    

    for (var i = 1; i <= 3; i++) {
        if (document.getElementById("answer" + i).getAttribute("answerType") == "right") {
            answerID = i;
            break;
        }
    }
    $('#answer' + answerID).click();


}

// Returns where the item is in the array
function getIndex(array, item)
{
    for (var i = 0; i < array.length; i++)
        if (array[i][0] === item)
            return i;

    return -1;
}

// What's currently in the inputs, it deletes those from the opportunities.
function removeInputValuesFromArray()
{
    for (var i = 1; i <= 3; i++)
    {
        var answerElement = document.getElementById("answer" + i);
        var index = Number(answerElement.getAttribute("index"));
        if (answerElement.getAttribute("answerType") == "right")
            rightAnswers[index][1] = false;
        else
            wrongAnswers[index][1] = false;
    }

}

function shuffleArraysIfNeeded()
{
    // Arrays are shuffled if counter has been reset
    if (rightCounter == 0 || wrongAnswers == 0)
    {
        rightAnswers = shuffleArray(rightAnswers);
        wrongAnswers = shuffleArray(wrongAnswers);
    }
}


function quit()
{
    messageController.markExercise(1);
}


function introduce() {

    messageController.introduceExercise(FELADATLEIRAS);

}