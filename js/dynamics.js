/* Getting DOM */
var modal = document.getElementById("modal");
var modalBox = document.getElementById("modalBox");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");

var countVotes = 0;
var storeFirstImage = [];
var firstImage;
var storeSecondImage = [];
var secondImage;

function calcRandom() {
    return Math.floor(Math.random() * bancoDeFotos.length);
}

function addPhoto() {
    firstImage = calcRandom();
    secondImage = calcRandom();
    if (firstImage == secondImage) {
        while (firstImage == secondImage) {
            firstImage = calcRandom();
            secondImage = calcRandom();
        }
    }
    img1.style.backgroundImage = bancoDeFotos[firstImage].img;
    img2.style.backgroundImage = bancoDeFotos[secondImage].img;
}

function clickImg(ev) {
    storeFirstImage[countVotes] = firstImage;
    storeSecondImage[countVotes] = secondImage;
    countVotes++;
    switch (ev.target.id) {
        case "img1":
            bancoDeFotos[firstImage].score++;
            bancoDeFotos[secondImage].score--;
            secondImage = calcRandom();
            validateConditions("img1");
            img2.style.backgroundImage = bancoDeFotos[secondImage].img;
            break;
        case "img2":
            bancoDeFotos[secondImage].score++;
            bancoDeFotos[firstImage].score--;
            firstImage = calcRandom();
            validateConditions("img2");
            img1.style.backgroundImage = bancoDeFotos[firstImage].img;
            break;
    }
}

function validateConditions(img) {
    var loopCounter = 0;
    for (let i = 0; i < countVotes; i++) {
        if ((firstImage == storeFirstImage[i] && secondImage == storeSecondImage[i]) || firstImage == secondImage) {
            while ((firstImage == storeFirstImage[i] && secondImage == storeSecondImage[i]) || firstImage == secondImage) {
                if (img == "img1") {
                    secondImage = calcRandom();
                } else if (img == "img2") {
                    firstImage = calcRandom();
                }
                i = 0;
                loopCounter++;
                if (loopCounter > countVotes) {
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