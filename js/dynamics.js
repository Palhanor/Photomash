/* Getting DOM */
var modal = document.getElementById("modal");
var modalBox = document.getElementById("modalBox");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");

/* Database */
var bancoDeFotos = ["url('Images/Capturar1.PNG')", "url('Images/Capturar2.PNG')", "url('Images/Capturar3.PNG')", "url('Images/Capturar4.PNG')", "url('Images/Capturar5.PNG')", "url('Images/Capturar6.PNG')", "url('Images/Capturar7.PNG')", "url('Images/Capturar8.PNG')", "url('Images/Capturar9.PNG')", "url('Images/Capturar10.PNG')", "url('Images/Capturar11.PNG')", "url('Images/Capturar12.PNG')", "url('Images/Capturar13.PNG')", "url('Images/Capturar14.PNG')", "url('Images/Capturar15.PNG')", "url('Images/Capturar16.PNG')", "url('Images/Capturar17.PNG')", "url('Images/Capturar18.PNG')", "url('Images/Capturar19.PNG')", "url('Images/Capturar20.PNG')", "url('Images/Capturar21.PNG')", "url('Images/Capturar22.PNG')", "url('Images/Capturar23.PNG')", "url('Images/Capturar24.PNG')", "url('Images/Capturar25.PNG')", "url('Images/Capturar26.PNG')", "url('Images/Capturar27.PNG')", "url('Images/Capturar28.PNG')", "url('Images/Capturar29.PNG')", "url('Images/Capturar30.PNG')"];

var numFotos = bancoDeFotos.length;
var placar = new Array(numFotos).fill(0);
var countRodada = 0;
var armazenaX = [];
var x;
var armazenaY = [];
var y;

function calcRandom() {
    return Math.floor(Math.random() * numFotos);
}

function addPhoto() {
    x = calcRandom();
    y = calcRandom();
    if (x == y) {
        while (x == y) {
            x = calcRandom();
            y = calcRandom();
        }
    }
    img1.style.backgroundImage = bancoDeFotos[x];
    img2.style.backgroundImage = bancoDeFotos[y];
}

function clickImg(ev) {
    armazenaX[countRodada] = x;
    armazenaY[countRodada] = y;
    countRodada++;
    switch (ev.target.id) {
        case "img1":
            placar[x]++;
            placar[y]--;
            y = calcRandom();
            validateConditions("img1");
            img2.style.backgroundImage = bancoDeFotos[y];
            break;
        case "img2":
            placar[y]++;
            placar[x]--;
            x = calcRandom();
            validateConditions("img2");
            img1.style.backgroundImage = bancoDeFotos[x];
            break;
    }
}

function validateConditions(img) {
    var loopCounter = 0;
    for (let i = 0; i < countRodada; i++) {
        if ((x == armazenaX[i] && y == armazenaY[i]) || x == y) {
            while ((x == armazenaX[i] && y == armazenaY[i]) || x == y) {
                if (img == "img1") {
                    y = calcRandom();
                } else if (img == "img2") {
                    x = calcRandom();
                }
                i = 0;
                loopCounter++;
                if (loopCounter > countRodada) {
                    openRanking();
                    break;
                }
            }
        }
    }
}

/* Init page */
addPhoto();
img1.addEventListener("click", clickImg);
img2.addEventListener("click", clickImg);