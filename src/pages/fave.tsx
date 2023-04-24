import setting from "./../assets/setting.png";
import dashboard from "./../assets/dashboard.png";
import leaderboard from "./../assets/leaderboard.png";
import livescores from "./../assets/livescores.png";
import profileicon from "./../assets/profileicon.png";
import arrowright from "./../assets/arrowright.png";
import nikephoto1 from "./../assets/nikephoto1.png";
import nikephoto2 from "./../assets/nikephoto2.png";

const Fave = () => {
  return (
    <>
      <div className="container--dark">
        <div className="section-columns">
          <div className="link-column">
            <div>
              <div className="player-box">
                <div className="player-img">
                  <img src={profileicon}></img>
                </div>
                <div className="player-info">
                  <h4>jesus_navas</h4>
                  <a href="">View profile</a>
                </div>
              </div>
              <div className="player-stats">
                <div>
                  <div className="player-stats__link">
                    <a href="#">
                      {" "}
                      <img src={dashboard}></img>Dashboard
                    </a>
                    <img src={arrowright} className="arrow-right"></img>
                  </div>
                  <div className="player-stats__link">
                    <a href="#">
                      {" "}
                      <img src={leaderboard}></img>Leaderboard
                    </a>
                    <img src={arrowright} className="arrow-right"></img>
                  </div>
                  <div className="player-stats__link">
                    <a href="#">
                      {" "}
                      <img src={dashboard}></img>Prizes
                    </a>
                  </div>
                  <div className="player-stats__link">
                    <a href="#">
                      {" "}
                      <img src={livescores}></img>Live scores
                    </a>
                  </div>
                  <div className="player-stats__link">
                    <a href="#">
                      {" "}
                      <img src={dashboard}></img>Game rules
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="player-stats__link down">
              <a href="#">
                {" "}
                <img src={setting}></img>Settings
              </a>
            </div>
          </div>
        </div>
        <div className="section-columns">
          <div className="prize-info">
            <h3>Redeem prize</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor sollicitudin blandit. Duis quis sem a odio euismod maximus.
            </p>
          </div>
          <div className="prize-columns">
            <div className="column">
              <div className="column__text">
                <h3>Signed Jersey</h3>
                <span>Gameweek 17</span>
                <p>Premier league</p>
              </div>
              <div className="column__line"></div>
              <div className="column__button">
                {" "}
                <a href="#">
                  Redeem prize <img src={arrowright}></img>
                </a>
              </div>
            </div>
            <div className="column bigger">
              <div className="column__text">
                <h3>Signed Jersey but longer text in second row</h3>
                <span>Gameweek 17</span>
                <p>Premier league</p>
              </div>
              <div className="column__line"></div>
              <div className="column__button ">
                <a href="#" className="redeemed">
                  Prize redeemed
                </a>
              </div>
            </div>
            <div className="column">
              <div className="column__text">
                <h3>Signed Jersey</h3>
                <span>Gameweek 17</span>
                <p>Premier league</p>
              </div>
              <div className="column__line"></div>
              <div className="column__button">
                <a href="#">
                  Redeem prize <img src={arrowright}></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="section-columns">
          <div className="comercials-column">
            <img src={nikephoto1}></img>
            <img src={nikephoto2}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fave;
