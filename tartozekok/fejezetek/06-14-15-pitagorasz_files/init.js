//jó válaszok
var rightAnswers =  [["3, 4, 5", true], ["6, 8, 10", true],
                     ["9, 12, 15", true], ["12, 16, 20", true],
                     ["15, 20, 25", true], ["18, 24, 30", true],
                     ["21, 28, 35", true], ["24, 32, 40", true],
                     ["27, 36, 45", true], ["30, 40, 50", true],
                     ["5, 12, 13", true], ["10, 24, 26", true],
                     ["35, 84, 91", true], ["40, 96, 104", true],
                     ["45, 108, 117", true], ["50, 120, 130", true],
                     ["60, 80, 100", true] ];
//rossz válaszok
var wrongAnswers =  [["4, 5, 6", true], ["6, 9, 10", true],
                     ["65, 85, 105", true], ["55, 115, 125", true],
                     ["35, 45, 55", true], ["21, 30, 35", true],
                     ["9, 16, 25", true], ["16, 25, 36", true],
                     ["25, 36, 64", true], ["5, 8, 12", true],
                     ["13, 14, 15", true], ["36, 49, 81", true],
                     ["2, 3, 4", true], ["11, 22, 44", true],
                     ["11, 12, 13", true], ["26, 35, 44", true],
                     ["101, 102, 150", true], ["65, 85, 105", true],
                     ["33, 44, 88", true], ["12, 13, 25", true],
                     ["55, 65, 95", true], ["11, 33, 66", true],
                     ["14, 28, 47", true], ["36, 72, 108", true]];

//hány jó válasziga menjen a feladat
var NO_OF_ACCEPTED_ANSWERS = 10;

// The number of the right answers of the user
var noOfAnswersRight = 0;

//feladat utasítása amikor betöltődik a feladat. Ne felejtsd el ezt az utasítást lejjebb is beírni
INTRODUCTION_TEXT = 
"Válaszolj 10 kérdésre helyesen! <br>Minden feladatnál csak egy jó válasz van.";


var answers = [];

var rightCounter = 0;
var wrongCounter = 0;



var

// WIDTH PER HEIGHT OF THE WINDOW

    SZELESSEG_PER_MAGASSAG = 1.7,


// COLORS

    CIM_HATTER  = "#dadad9",
    CIM_SZOVEG  = "#333",
    JEGY_HATTER = "#6498EE",
    JEGY_SZOVEG = "#000",


// OPTIONS

    UJRAKEZDES = true,
    MEGOLDAS = true,
    INSTRUKCIO = true,
    ELLENORZES = false,
    TOVABB = false,



// INTRODUCTION OF THE EXERCISE
//ez az utasítás akkor jön elő, ha a kérdőjelre kattint a felhasználó

    FELADATLEIRAS = "Válaszolj 10 kérdésre helyesen! <br>Minden feladatnál csak egy jó válasz van."


;