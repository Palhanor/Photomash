var photomash = document.querySelector(".header__logo");
var ranking = document.querySelector(".ranking");
var photomashScreen = document.querySelector(".photomash-screen");
var rankingScreen = document.querySelector(".ranking-screen");
var body = document.querySelector("body");
var scoreRanking = [];

function openRanking() {
    // Create an copy of the database
    scoreRanking = [];
    for (let i = 0; i < bancoDeFotos.length; i++) {
        scoreRanking.push(bancoDeFotos[i]);
    }
    // Sort the new database by score
    scoreRanking.sort((a, b) => b.score - a.score);

    photomashScreen.style.display = "none";
    rankingScreen.style.display = "block";
    rankingScreen.innerHTML = "";
    body.style.overflow = "scroll";

    for (let i = 0; i < scoreRanking.length; i++) {
        var rankingItem = document.createElement("div");
        rankingItem.classList.add("ranking-screen__box");
        var rankingImage = document.createElement("img");
        rankingImage.classList.add("ranking-screen__image");
        var scrPath = scoreRanking[i].img;
        scrPath = scrPath.replace("url('", "");
        scrPath = scrPath.replace("')", "");
        rankingImage.src = scrPath;
        var rankingScore = document.createElement("span");
        rankingScore.classList.add("ranking-screen__text");
        rankingScore.textContent = scoreRanking[i].score;

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
    scoreRanking = [];
}

photomash.addEventListener("click", closeRanking);
ranking.addEventListener("click", openRanking);