import bckimg2 from "./../assets/bckimg2.png";

const Vjezbe = () => {
  return (
    <>
      <div
        className="main-bck-img"
        style={{ backgroundImage: `url(${bckimg2})` }}
      >
        <div className="main-links-container">
          <a className="main-page-links" href="/exe">
            Excercises
          </a>
          <a className="main-page-links" href="/varijable">
            Varijable
          </a>
          <a className="main-page-links" href="/petlje">
            Petlje
          </a>
          <a className="main-page-links" href="/vjezba2604">
            Vježba 2604
          </a>
          <a className="main-page-links" href="/vjezba2804">
            Vježba 2804
          </a>
          <a className="main-page-links" href="/vjezba0305">
            Vježba 0305
          </a>
          <a className="main-page-links" href="/breweries">
            Breweries
          </a>
          <a className="main-page-links" href="/pokemon">
            Pokemon
          </a>
          <a className="main-page-links" href="/europe">
            Europe
          </a>
          <a className="main-page-links" href="/vjezba1505">
            Vjezba1505
          </a>
          <a className="main-page-links" href="/todo">
            Todo
          </a>
          <a className="main-page-links" href="/chat">
            Chat
          </a>
        </div>
      </div>
    </>
  );
};

export default Vjezbe;
