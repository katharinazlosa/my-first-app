const BootstrapGame = () => {
    const gameBoard = document.getElementsByClassName("player-container");

const PlayerCharacter = document.createElement("div");
PlayerCharacter.classList.add("player-character");
gameBoard.appendChild(PlayerCharacter);

Kenny.style.right = 0;
Strongwoman.style.right = 0;

let moveBy = 10;

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    
    case "ArrowRight":
      PlayerCharacter.style.right =
        parseInt(PlayerCharacter.style.right) + moveBy + "px";
      break;
    
    case "Space":
      PlayerCharacter.style.right =
        parseInt(PlayerCharacter.style.right) + moveBy + "px";
      break;
  }
});

  return <></>;
};

export BootstrapGame;
