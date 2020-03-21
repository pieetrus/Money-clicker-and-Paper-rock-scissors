var choices = ["papier", "kamień", "nożyce"];
var i = Math.floor(Math.random()*3);
var computerChoice = choices[i];
var userPoints = 0;
var computerPoints = 0;
var result;

//Zmienia wybór figury przez komputer
function SetNewComputerChoice(){
    i = Math.floor(Math.random()*3);
    computerChoice = choices[i];
}
//Funkcja ustawia wynik rozgrywki
function SetScore(){
    var score_div = document.getElementById("score").innerHTML = userPoints + "-" + computerPoints;
}

setInterval(SetScore, 50); //funkcja będzie wywoływana co 50ms i ustawiała prawidłowy wynik

//Służy do sprawdzenia czy nikt jeszcze nie zdobył 10pkt, a jeśli tak to zeruje wynik
function newGame(){
    if(userPoints ===10){
        alert("Gratulacje! Wygrałeś!");
        userPoints = 0;
        computerPoints =0;
        end_message = document.getElementById("message").innerHTML = "";

    }
    else if(computerPoints === 10){
        alert("Niestety, komputer okazał się lepszy.")
        userPoints = 0;
        computerPoints =0;
        end_message = document.getElementById("message").innerHTML = "";

    }
}
//Funcja wyświetlająca wynik rozgrywki
function Message(){
    var end_message = document.getElementById("message").innerHTML = result;
}
//Funkcja obsługująca przebieg rozgrywki
function game(userChoice){
    if(userChoice==="papier"){
        switch(computerChoice){
            case "papier":
                result = "Remis";
                SetNewComputerChoice();
                break;
            case "kamień":
                result = "Wygrywasz z kamieniem!!!";
                userPoints++;
                SetNewComputerChoice();
                break;
            case "nożyce":
                result = "Przegrywasz z nożycami :("
                computerPoints++;
                SetNewComputerChoice();
                break;
        }
    }
    else if(userChoice==="kamień"){
        switch(computerChoice){
            case "papier":
                result = "Przegrywasz z papierem :(";
                computerPoints++;
                SetNewComputerChoice();
                break;
            case "kamień":
                result = "Remis";
                SetNewComputerChoice();
                break;
            case "nożyce":
                result = "Wygrywasz z nożycami!!!"
                userPoints++;
                SetNewComputerChoice();
                break;
        }
    }
     else if(userChoice==="nożyce"){
        switch(computerChoice){
            case "papier":
                result = "Wygrywasz z papierem !!!";
                userPoints++;
                SetNewComputerChoice();
                break;
            case "kamień":
                result = "Przegrywasz z kamieniem :(";
                computerPoints++;
                SetNewComputerChoice();
                break;
            case "nożyce":
                result = "Remis";
                SetNewComputerChoice();
                break;
        }
    }
    Message();
    newGame();
}