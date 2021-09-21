var photomash = document.querySelector(".header__logo");
var ranking = document.querySelector(".header__ranking");
var photomashScreen = document.querySelector(".photomash-screen");
var rankingScreen = document.querySelector(".ranking-screen");

function openRanking() {
    photomashScreen.style.display = "none";
    rankingScreen.style.display = "block";
    rankingScreen.innerHTML = "";

    for (let i = 0; i < numFotos; i++) {
        var rankingItem = document.createElement("div");
        rankingItem.classList.add("ranking-screen__box");
        var rankingImage = document.createElement("img");
        rankingImage.classList.add("ranking-screen__image");
        var scrPath = bancoDeFotos[i];
        scrPath = scrPath.replace("url('", "");
        scrPath = scrPath.replace("')", "");
        rankingImage.src = scrPath;
        var rankingScore = document.createElement("span");
        rankingScore.classList.add("ranking-screen__text");
        rankingScore.textContent = placar[i];

        rankingScreen.appendChild(rankingItem);
        rankingItem.appendChild(rankingImage);
        rankingItem.appendChild(rankingScore);
    }
}

function closeRanking() {
    photomashScreen.style.display = "block";
    rankingScreen.style.display = "none";
    rankingScreen.innerHTML = "";
}

photomash.addEventListener("click", closeRanking);
ranking.addEventListener("click", openRanking);