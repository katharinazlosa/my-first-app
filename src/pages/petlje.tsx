import { inputAdornmentClasses } from "@mui/material";

const Petlje = () => {
  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;

    const inputValue = Number(input.value);
    // console.log(inputValue);

    //Zadatci
    //1. ispisati u konzolu je li zadani broj neparan

    // if (inputValue % 2) {
    //   console.log("Broj je neparan!");
    // } else if (inputValue == 0) {
    //   console.log("Broj je nula!");
    // } else {
    //   console.log("Broj je paran");
    // }

    //2. ispisati u konzolu brojeve od 0 do zadanog broja
    // for (let i = 0; i <= inputValue; i++) {
    //   console.log(i);
    // }
    //3. izračunaj opseg kruga gdje je zadani broj polumjer (pi*r*2)
    // const opseg = inputValue * Math.PI * 2;
    // console.log(opseg);

    //4.
    // let arr = [];
    // for (let i = 0; i <= inputValue; i++) {
    //   arr.push(i);
    // }
    // console.log(arr);
    //5.
    // let str = "";
    // for (let i = 0; i <= inputValue; i++) {
    //   str += i + ",";
    // }
    // str = str.slice(0, -1);
    // console.log(str);

    //6. sum of two arrays
    // let array1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
    // let array2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
    // let sum = "";
    // const sum1 = array1.reduce((partialSum, a) => partialSum + a, 0);
    // const sum2 = array2.reduce((partialSum, a) => partialSum + a, 0);

    // sum = sum1 + sum2;
    // console.log(sum);

    //7. output elements of array in reverse
    // let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
    // for (let i = 0; i < arr.length; i++) {
    //   arr.reverse();
    // }
    // console.log(arr);
    //8. add up each element in array in the same position and create new array
    // let arr_3 = [4, 5, 6];
    // let arr_4 = [8, 1, 9];
    // let sum = [];

    // for (let i = 0; i < arr_3.length; i++) {
    //   sum.push(arr_3[i] + arr_4[i]);
    // }
    // console.log(sum);

    //9. change every second letter to an uppercase Z
    // let str1 = "javascript";
    // for (let i = 0; i < str1.length; i++) {
    //   const newArr = str1.split("");
    //   newArr.splice()
    //   const index = newArr.indexOf("a");

    //   if (index !== -1) {
    //     newArr[index] = "z";
    //   }
    //   console.log(index);
    // }
    // console.log(str1);
  };

  return (
    <div className="container">
      <div className="var-container">
        <h1>Petlje</h1>
        <hr />
        <div>
          <input className="input" type="number" />
          <button onClick={() => handleValue()}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Petlje;
