import kenny from "./../assets/kenny.png";
import strongwoman from "./../assets/strongwoman.png";
import grass from "./../assets/grass.png";

import { useState } from "react";

const BootstrapGame = () => {
  // const [right, setRight] = useState(0);
  // const [playerOne, setPlayerOne] = useState("Player one");
  // const [playerTwo, setPlayerTwo] = useState("Player two");

  const handleKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      // console.log("You pressed arrow right");
      moveRight("playerOne");
    } else if (event.key === " ") {
      // console.log("You pressed space");
      moveRight("playerTwo");
    }
  };

  const moveRight = (id: string) => {
    const player = document.querySelector(`#${id}`) as HTMLElement;

    let position = parseInt(player.style.left);
    // console.log(position); 1325
    //napraviti finish
    let newPos = position + 25;
    player.style.left = newPos + "px";
  };

  return (
    <>
      <div className="player-container" tabIndex={0} onKeyDown={handleKey}>
        <div className="players">
          <img
            style={{ left: 0 }}
            src={strongwoman}
            className="game-img strongwoman"
            id="playerOne"
          ></img>
          <img src={grass} className="grass-img"></img>
        </div>
        <div className="players">
          <img
            style={{ left: 0 }}
            src={kenny}
            className="game-img kenny"
            id="playerTwo"
          ></img>
          <img src={grass} className="grass-img"></img>
        </div>
      </div>
    </>
  );
};

export default BootstrapGame;
