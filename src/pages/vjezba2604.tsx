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

  const recenica = `Ja imam predobar ${car.marka} ${car.model} auto koji je ${car.motor} te ima ${car.prijenos} prijenos.`;
  console.log(recenica);

  //json

  const json = JSON.stringify(car, null, 2);

  //zadatak

  const brojevi = [12, 96, 43, 56, 23, 73, 55];

  let max = 0;
  const maxBroj = () => {
    for (let i = 0; i < brojevi.length; i++) {
      if (brojevi[i] > max) {
        // let najveci = [];
        // console.log(najveci);
      }
    }
    return;
  };

  return (
    <>
      <div className="container">
        <h1>Funkcije</h1>
        <div>{bringBaka()}</div>
        <div>{printText("Katharina")}</div>
        <h5>JSON:</h5>
        <div>{json}</div>
        <div>{printValue("marka")}</div>
        <div>{maxBroj()}</div>
      </div>
    </>
  );
};

export default Vjezba2604;
