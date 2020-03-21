var coins = 0;
var coinsPerSec = 1;
var secOnPage = 0;
var btnCoin,btnFirst,btnSecond,btnThird; //zmienne do obsługi przycisków ze sklepu
var coinsPerClick = 1;
var firstElAmount=0,secondElAmount=0,thirdElAmount=0; //ilość posiadanych obiektów ze sklepu
var itemNr; //Zmienna pokazująca który element został zakupiony
var message_display; //pokazuje tekst w okienku pod monetą
var message; //przetrzymuje treść wiadomości która ma być pokazana w okienku pod monetą
var firstElPrice = 35,secondElPrice = 100 ,thirdElPrice = 2000;

// Służy do dodawania monet co sekundę
function AddCoinsPerSec(){
    coins = coins + coinsPerSec;
}
//Służy do dodawania monet co kliknięcie
function AddCoinClick(){
    coins = coins + coinsPerClick;
}
//Służy do wyświetlania monet na stronie
function DisplayCoins(){
    var coins_display = document.getElementById("money").innerHTML = coins;
}
//Służy do wyświetlania przychodu na sekundę na stronie
function DisplayIncome(){
    var income_display = document.getElementById("income").innerHTML = coinsPerSec;
}
//Służy do liczenia czasu gry
function HowManySec(){
    secOnPage = secOnPage +1;
}
//Służy do wyświetlania czasu gry
function DisplaySecOnPage(){
    var time_display = document.getElementById("time").innerHTML = secOnPage;
}
//Służy do wyświetalnia komunikatu ile dostaje się monet za naciśnięcie przycisku z monetą
function DisplayMoneyAmountButtonMessage(){
    message_display = document.getElementById("button-message").innerHTML = "Dostajesz " + coinsPerClick + " monetę" ;
}
//Służy do wyświetlania wiadomości w okienku pod monetą
function DisplayMessage(){
    message_display =document.getElementById("button-message").innerHTML= message;
}
//Służy do wyczyszczenia wiadomości w okienku pod monetą
function ClearMessage(){
    setTimeout(function(){message_display =document.getElementById("button-message").innerHTML= "Zbieraj hajs!!!"},1000)
}
//ustawia zmienną itemNr na 1
function SetItemNrTo1(){
    itemNr =1;
}
//ustawia zmienną itemNr na 2
function SetItemNrTo2(){
    itemNr =2;
}
//ustawia zmienną itemNr na 3
function SetItemNrTo3(){
    itemNr =3;
}
//Służy do wyświetalania ilości posiadanych elementów ze sklepu
function Display(){
    document.getElementById("first-element-amount").innerHTML ="&nbsp;"+ firstElAmount  + " &nbsp; ukraińców";
    document.getElementById("second-element-amount").innerHTML = "&nbsp;"+secondElAmount + "&nbsp; polaczków";
    document.getElementById("third-element-amount").innerHTML ="&nbsp;"+ thirdElAmount + "&nbsp; inwestycji";
}
//Obługa zakupu elementu ze sklepu
function BuyElement(){
    if(itemNr===1){
        if(coins > firstElPrice){
        coins = coins - firstElPrice;
        coinsPerSec = coinsPerSec + 2;
        firstElAmount = firstElAmount +1;
        firstElPrice = firstElPrice + firstElPrice;
        Display();
        DisplayIncome();
        DisplayPrice();}
        else{
        message = "Nie masz wystarczającej ilości monet";
        DisplayMessage();    
        }
    }
    else if(itemNr===2){
        if(coins > secondElPrice){
        coins = coins -secondElPrice;
        coinsPerSec = coinsPerSec + 10;
        secondElAmount = secondElAmount +1;
        secondElPrice = secondElPrice + secondElPrice;
        Display();
        DisplayIncome();
        DisplayPrice();}
        else{message = "Nie masz wystarczającej ilości monet";
        DisplayMessage();    
        }    }
    else if(itemNr===3){
        if(coins>thirdElPrice){
        coins = coins -thirdElPrice;
        coinsPerSec = coinsPerSec + 100;
        thirdElAmount = thirdElAmount +1;
        thirdElPrice = thirdElPrice + thirdElPrice;
        Display();
        DisplayIncome();
        DisplayPrice()}
        else{message = "Nie masz wystarczającej ilości monet";
        DisplayMessage();    
        }
    }
}
//Wyświetla cenę elementów ze sklepu
function DisplayPrice(){
    document.getElementById("first-element-description").innerHTML ="Zatrudnij ukraińca za jedyne &nbsp <b>" + firstElPrice + "</b> &nbsp monet. Twój zarobek wzrośnie o dwie monety na sekundę. Aktualnie posiadasz";
    document.getElementById("second-element-description").innerHTML = "Zatrudnij polaczka za &nbsp <b>" + secondElPrice + "</b>&nbsp monet. Twój zarobek wzrośnie o 10 monet na sekundę. Aktualnie posiadasz";
    document.getElementById("third-element-description").innerHTML ="Zainwestuj na giełdzie &nbsp <b>"+ thirdElPrice + "</b>&nbsp; monet. Zarobisz dzięki temu 100 monet na sekundę. Aktualnie posiadasz";
}



setInterval(DisplayCoins,50);
setInterval(HowManySec,1000);
setInterval(DisplaySecOnPage,1000);
setInterval(AddCoinsPerSec,1000);


//Wybieram przycisk z monetą
btnCoin = document.getElementById("money-button");

//Przypisuję do niego event listnery
btnCoin.addEventListener("click",AddCoinClick);
btnCoin.addEventListener("click",DisplayMoneyAmountButtonMessage);
btnCoin.addEventListener("click",ClearMessage);


//Przypisuje przyciski ze sklepu
btnFirst = document.getElementById("first-element-button");
btnSecond = document.getElementById("second-element-button");
btnThird = document.getElementById("third-element-button");

//Dodaje event listnery do przycisków ze sklepu
btnFirst.addEventListener("click",SetItemNrTo1);
btnFirst.addEventListener("click",BuyElement);
btnFirst.addEventListener("click",ClearMessage);


btnSecond.addEventListener("click",SetItemNrTo2);
btnSecond.addEventListener("click",BuyElement);
btnFirst.addEventListener("click",ClearMessage);

btnThird.addEventListener("click",SetItemNrTo3);
btnThird.addEventListener("click",BuyElement);
btnThird.addEventListener("click",ClearMessage);



