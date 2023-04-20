import { red } from "@mui/material/colors";
import { useState } from "react";

type UserType = {
  name: string;
  lastName: string;
  age: number;
  height: string;
  guitars: {
    prva: string;
    druga: string;
    treća: string;
  };
};

const Varijable = () => {
  const [value, setValue] = useState<number>(3.14);

  const fruit = {
    name: "Apple",
    calories: 95,
    color: "Red",
    edible: "Yes",
  };

  const name: string = "Apple";
  const calories: number = 95;
  const color: string = "Red";
  const edible: string = "Yes";

  const pi: number = 3.14;
  // // let color: string = "red";
  const number: number = 4;
  // //dostupne marke automobila
  let car: "bmw" | "audi" | "ferrari";

  const obj: UserType = {
    name: "Katharina",
    lastName: "Zlosa",
    age: 27,
    height: "179cm",
    guitars: {
      prva: "Fender",
      druga: "Seagul",
      treća: "Schecter",
    },
  };

  //obje vrijednosti moraju biti true kako bi program ušao u if statement
  if (pi & number) {
  }
  //samo jedna od treba biti true
  if (pi | number) {
  }

  const addOnOurValue = (ourValue: number, secondNumber: number) => {
    return number + ourValue + secondNumber;
  };

  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;

    setValue(Number(input.value));
  };

  car = "benz"; //undefined
  // color = "blue";
  // color = "asf";
  return (
    <div className="container">
      <h1>Varijable vježba</h1>
      <div>
        <h4>Vrijednost pi varijable je: {pi + "5"}</h4>
        <h4>Vrijednost color varijable je</h4>
      </div>
      <hr />
      <div>
        <h4>Vrijednost našeg statea je: {value}</h4>
        <input className="input" type="number"></input>
        <button onClick={() => handleValue()}>Submit</button>
      </div>
      <hr></hr>
      <div>
        <h4>Rezultat naše funkcije je: {addOnOurValue(7, 4)}</h4>
      </div>
      <div>
        <div>
          Ime i prezime: {obj.name} {obj.lastName}
        </div>
        <div>Godine: {obj.age}</div>
        <div>Visina: {obj.height}</div>
        <div>
          Gitare: {obj.guitars.prva}, {obj.guitars.druga}, {obj.guitars.treća}
        </div>
      </div>
      <hr></hr>
      <div>
        <table className="table">
          <tr className="rows">
            <th>Fruit</th>
            <th>Calories</th>
            <th>Color</th>
            <th>Edible</th>
          </tr>
          <tr className="rows">
            <td>{fruit.name}</td>
            <td>{fruit.calories}</td>
            <td>{fruit.color}</td>
            <td>{fruit.edible ? "Yes" : "No"}</td>
          </tr>
        </table>
      </div>
      <hr></hr>
      <div>
        <table className="table">
          <tr className="rows">
            <th>Fruit</th>
            <th>Calories</th>
            <th>Color</th>
            <th>Edible</th>
          </tr>
          <tr className="rows">
            <td>{name}</td>
            <td>{calories}</td>
            <td>{color}</td>
            <td>{edible ? "Yes" : "No"}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Varijable;
