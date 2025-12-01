


const diceSrc = ["/Img/dice1.png", "/Img/dice2.png", "/Img/dice3.png", "/Img/dice4.png", "/Img/dice5.png", "/Img/dice6.png"]
const slider = document.getElementById('antall');
const verdiTekst = document.getElementById('antallVerdi');
const diceHolder = document.getElementById("dice");

//går igjennom hver IMG element og putter inn en random index.
//lager et tomt array og putter inn diceSrc index+1(value 1-6)
function rollDice(){
    let diceValue = [];

    document.querySelectorAll(".diceImg").forEach(img => {
    let randomIndex = Math.floor(Math.random() * diceSrc.length);
    img.src = diceSrc[randomIndex];
    console.log(randomIndex + 1);
    diceValue.push(randomIndex +1);
    });

    console.log(diceValue);
    addValue(diceValue)
}

// legger sammen terning verdiene og putter dem i en div.
function addValue(diceValue){
    let sum = diceValue.reduce((a,b) => a + b, 0);
    console.log(sum);
    document.getElementById('diceValue').innerHTML = sum;
}

// sjekker verdien på slideren og inputter antall dice utifra verdien.
slider.addEventListener('input', () => {
    diceHolder.innerHTML = "";
    for(let i = 0; i < slider.value; i++){
        diceHolder.innerHTML += '<img class="diceImg" src="/Img/dice1.png" alt="Dice1">';
    }

  // Oppdater tekstfeltet med nåværende verdi
    verdiTekst.textContent = slider.value;
});