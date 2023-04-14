import burek from "./../assets/burek.png";
import kruh from "./../assets/kruh.png";
import kolači from "./../assets/kolači.png";
import horeca from "./../assets/horeca.png";
import pakirano from "./../assets/pakirano.png";
import peciva from "./../assets/peciva.png";
import pizza from "./../assets/pizza.png";
import prigodnetorte from "./../assets/prigodne torte.png";
import salata from "./../assets/salata.png";
import sendviči from "./../assets/sendviči.png";
import slano from "./../assets/slano.png";
import slatko from "./../assets/slatko.png";
import torte from "./../assets/torte.png";

const Mlinar = () => {
  return (
    <>
      <div className="container--dark">
        <h2 className="title">
          <span className="bold">Najukusniji</span> pekarski<br></br>proizvodi u
          susjedstvu.
        </h2>
        <div className="tags">
          <button className="tag">Kruh</button>
          <button className="tag">Peciva</button>
          <button className="tag">Slano</button>
          <button className="tag">Slatko</button>
          <button className="tag">Burek</button>
          <button className="tag">Pizza</button>
          <button className="tag">Sendviči</button>
          <button className="tag">Salata</button>
          <button className="tag">HoReCa</button>
          <button className="tag">Pakirano</button>
          <button className="tag">Kolači</button>
          <button className="tag">Torte</button>
          <button className="tag">Prigodne torte</button>
        </div>
        <div className="grid">
          <div className="grid-box">
            <img src={kruh}></img>
            <h4>Kruh</h4>
            <p>Kruhovi ravno iz peći</p>
          </div>
          <div className="grid-box">
            <img src={peciva}></img>
            <h4>Peciva</h4>
            <p>Tradicionalna, ukusna i jednostavna</p>
          </div>
          <div className="grid-box">
            <img src=""></img>
            <h4>Slano</h4>
            <p>Neodoljivi slani zalogaji</p>
          </div>
          <div className="grid-box">
            <img src=""></img>
            <h4>Slatko</h4>
            <p>Najslađe od finih peciva</p>
          </div>
          <div className="grid-box">
            <img src={burek}></img>
            <h4>Burek</h4>
            <p>Sočni okusi tradicije</p>
          </div>
          <div className="grid-box">
            <img src=""></img>
            <h4>Pizza</h4>
            <p>Svježe, bogate i slasne</p>
          </div>
          <div className="grid-box">
            <img src=""></img>
            <h4>Sendviči</h4>
            <p>Bogati i neodoljivi</p>
          </div>
          <div className="grid-box">
            <img src=""></img>
            <h4>Salata</h4>
            <p>Zdrav obrok u žurbi</p>
          </div>
          <div className="grid-box">
            <img src=""></img>
            <h4>HoReCa</h4>
            <p>Prednost vašeg poslovanja</p>
          </div>
          <div className="grid-box">
            <img src=""></img>
            <h4>Pakirano</h4>
            <p>Dugotrajni i puni okusa</p>
          </div>
          <div className="grid-box">
            <img src=""></img>
            <h4>Kolači</h4>
            <p>Bogati okusom</p>
          </div>
          <div className="grid-box">
            <img src=""></img>
            <h4>Torte</h4>
            <p>Kraljevski ukusne slastice</p>
          </div>
          <div className="grid-box">
            <img src=""></img>
            <h4>Prigodne torte</h4>
            <p>Torte za sve prigode</p>
          </div>
        </div>
        <hr></hr>
      </div>
    </>
  );
};

export default Mlinar;
