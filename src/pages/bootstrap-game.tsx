import kenny from "./../assets/kenny.png";
import strongwoman from "./../assets/strongwoman.png";
import grass from "./../assets/grass.png";

import { useState } from "react";

import ModalWindow from "../components/modalwindow";

type NamesType = {
  playerOne: string;
  playerTwo: string;
};

const BootstrapGame = () => {
  const [raceOver, setRaceOver] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>("");
  const [names, setNames] = useState<NamesType>({
    playerOne: "Player one",
    playerTwo: "Player Two",
  });

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
    const moving = 25;
    let position = parseInt(player.style.left);
    let newPos = position + moving;
    player.style.left = newPos + "px";
    // console.log(position); 1325
    //napraviti finish s modalom

    const finishPos = 1325;
    if (position > finishPos) {
      setRaceOver(true);
      setWinner(id === "player_one" ? names.playerOne : names.playerTwo);
    } else {
      player.style.marginLeft = position + moving + "px";
    }
  };

  //napraviti restart
  const handleReset = () => {
    setRaceOver(false);
    setWinner("");
    const playerOne = document.querySelector(`#player_one`) as HTMLImageElement;
    const playerTwo = document.querySelector(`#player_two`) as HTMLImageElement;
    playerOne.style.marginLeft = "0";
    playerTwo.style.marginLeft = "0";
  };

  const handleName = (name: string, id: string) => {
    const newState = { ...names };
    if (id === "player_one") {
      newState.playerOne = name;
    } else {
      newState.playerTwo = name;
    }
    setNames(newState);
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
        {raceOver ? (
          <>
            <ModalWindow
              onClick={() => handleReset}
              title="Pobjedio je"
              btnInfo="Reset"
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default BootstrapGame;
