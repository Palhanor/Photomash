var photomash = document.querySelector(".header__logo");
var ranking = document.querySelector(".header__ranking");
var photomashScreen = document.querySelector(".photomash-screen");
var rankingScreen = document.querySelector(".ranking-screen");
var body = document.querySelector("body");

function openRanking() {
    photomashScreen.style.display = "none";
    rankingScreen.style.display = "block";
    rankingScreen.innerHTML = "";
    body.style.overflow = "scroll";

    for (let i = 0; i < bancoDeFotos.length; i++) {
        var rankingItem = document.createElement("div");
        rankingItem.classList.add("ranking-screen__box");
        var rankingImage = document.createElement("img");
        rankingImage.classList.add("ranking-screen__image");
        var scrPath = bancoDeFotos[i].img;
        scrPath = scrPath.replace("url('", "");
        scrPath = scrPath.replace("')", "");
        rankingImage.src = scrPath;
        var rankingScore = document.createElement("span");
        rankingScore.classList.add("ranking-screen__text");
        rankingScore.textContent = bancoDeFotos[i].score;

        rankingScreen.appendChild(rankingItem);
        rankingItem.appendChild(rankingImage);
        rankingItem.appendChild(rankingScore);
    }
}

function closeRanking() {
    photomashScreen.style.display = "block";
    rankingScreen.style.display = "none";
    rankingScreen.innerHTML = "";
    body.style.overflow = "hidden";
}

photomash.addEventListener("click", closeRanking);
ranking.addEventListener("click", openRanking);