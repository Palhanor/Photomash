var photomashScreen = document.querySelector("#photomash");
var photomash = document.querySelector("#logoName");
var ranking = document.querySelector("#ranking");
var rankingScreen = document.querySelector("#ranking-screen");

function openRanking() {
    photomashScreen.style.display = "none";
    rankingScreen.style.display = "block";

    for (let i = 0; i < numFotos; i++) {
        var rankingItem = document.createElement("div");
        rankingItem.classList.add("ranking-box");
        var rankingImage = document.createElement("img");
        rankingImage.classList.add("ranking-image");
        var scrPath = bancoDeFotos[i];
        scrPath = scrPath.replace("url('", "");
        scrPath = scrPath.replace("')", "");
        rankingImage.src = scrPath;
        var rankingScore = document.createElement("span");
        rankingScore.classList.add("ranking-text");
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