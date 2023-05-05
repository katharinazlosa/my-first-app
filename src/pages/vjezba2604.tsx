const Vjezba2604 = () => {
  //nizovi

  let arr = ["mama", "tata", "brat", "baka", "sestra"];
  //   for (let i = 0; i < arr.length; i++) {
  //   arr.push('Kath');
  // if (arr[i] == "baka") {
  //   break;
  // }
  // if (arr[i] == "tata") {
  //   delete arr[i];
  // }
  // console.log(arr[i]);
  //   }

  //funkcije
  function bringBaka() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "baka") {
        const bakaBasket = arr[i];
        return bakaBasket;
      }
    }
  }
  let basket = bringBaka();
  console.log(basket);

  const printText = (arg: string) => {
    return arg;
  };

  //objekti
  type CarType = {
    [key: string]: number | string;
  };
  let car: CarType = {
    marka: "Subaru",
    model: "Impreza",
    motor: "benzin",
    boja: "crna",
    prijenos: "lineartronic",
    obujamMotora: 2000,
    širina: 1540,
    visina: 2400,
  };

  const printValue = (key: string) => {
    return car[key];
  };

  const recenica = `Ja imam ${car.marka} ${car.model} auto koji je ${car.motor} te ima ${car.prijenos} prijenos.`;
  console.log(recenica);

  //json

  const json = JSON.stringify(car, null, 2);

  //zadatak

  const brojevi = [12, 96, 43, 56, 23, 73, 55];
  let max = 0;

  const maxBroj = () => {
    for (let i = 0; i < brojevi.length; i++) {
      if (brojevi[i] > max) {
        max = brojevi[i];
      }
    }
    console.log(max);
    return max;
  };

  //ispiši najdužu i najkraću riječ iz niza
  const rijeci = [
    "balance",
    "biscuit",
    "side",
    "grind",
    "refund",
    "cast",
    "circulate",
    "accumulation",
    "fold",
    "cut",
    "entertainment",
  ];

  const nađiMaxRijec = () => {
    let najvecaRijec = "";
    let max = 0;

    for (let i = 0; i < rijeci.length; i++) {
      if (rijeci[i].length > max) {
        max = rijeci[i].length;
        najvecaRijec = rijeci[i];
      }
    }
    return najvecaRijec;
  };

  const nađiMinRijec = () => {
    let najmanjaRijec = "";
    let min = Infinity;

    for (let i = 0; i < rijeci.length; i++) {
      if (rijeci[i].length < min) {
        min = rijeci[i].length;
        najmanjaRijec = rijeci[i];
      }
    }
    return najmanjaRijec;
  };

  return (
    <>
      <div className="container">
        <div className="var-container">
          <h1>Funkcije</h1>
          <hr></hr>
          <div>Ispiši riječ baka: {bringBaka()}</div>
          <div>Ispiši ime: {printText("Katharina")}</div>
          <hr></hr>
          <div> Ispiši JSON: {json}</div>
          <div>Ispiši marku vozila: {printValue("marka")}</div>
          <hr></hr>
          <div>Ispiši max broj u nizu: {maxBroj()}</div>
          <div>
            <h4>Najduža riječ u nizu: {nađiMaxRijec()}</h4>
          </div>
          <div>
            <h4>Najkraća riječ u nizu: {nađiMinRijec()}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vjezba2604;
