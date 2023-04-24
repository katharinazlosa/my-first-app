import { inputAdornmentClasses } from "@mui/material";

const Petlje = () => {
  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;

    const inputValue = Number(input.value);
    // console.log(inputValue);

    //Zadatci
    //1. ispisati u konzolu jeli zadani broj neparan

    if (inputValue % 2) {
      console.log("Broj je neparan!");
    } else if (inputValue == 0) {
      console.log("Broj je nula!");
    } else {
      console.log("Broj je paran");
    }

    //2. ispisati u konzolu brojeve od 0 do zadanog broja
    for (let i = 0; i <= inputValue; i++) {
      console.log(i);
    }
    //3. izračunaj opseg kruga gdje je zadani broj polumjer (pi*r*2)
    const opseg = inputValue * Math.PI * 2;
    console.log(opseg);

    //4.
    let s = "";
    for (let i = 0; i <= inputValue; i++) {
      s += i + ",";
      console.log(s);
    }
  };

  return (
    <div className="container">
      <h1>Petlje</h1>
      <hr />
      <div>
        <input className="input" type="number" />
        <button onClick={() => handleValue()}>Submit</button>
      </div>
    </div>
  );
};

export default Petlje;
