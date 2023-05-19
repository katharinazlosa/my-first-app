import { useEffect } from "react";
const Vjezba1505 = () => {
  //1. Funkcija koja zbraja dva broja iz parametara
  const add = (a: string, b: number) => {
    return a + b;
  };

  //2. Funkcija koja spaja dva array-a stringova
  const concatArrays = () => {
    let arr1 = ["a", "b", "c"];
    let arr2 = ["d", "e", "f"];
    return [...arr1, ...arr2];
  };

  //3. Funkcija koja treba u konzolu ispisati brojeve od 1 do 10
  const countToTen = () => {
    let num = [];
    for (let i = 0; i <= 11; i++) {
      num.push(<span>{i + ", "}</span>);
    }
    return num;
  };

  //4. Funkcija koja zbraja sve broojeve iz array-a
  const sumArray = () => {
    let sum = 0;
    let arrNum = [1, 12];

    for (let i = 0; i < arrNum.length; i++) {
      sum += arrNum[i];
    }
    return sum;
  };
  sumArray();

  //5. Funkcija koja će vratiti puno ime iz objekta user
  type UserType = {
    firstName: string;
    latName: string;
  };
  const user: UserType = {
    firstName: "Ivan",
    lasName: "Sakoman",
  };

  const getFullName = (person: UserType) => {
    return (
      <div>
        {user.firstName} {user.latName}
      </div>
    );
  };

  getFullName(user);

  //6. Funkcija koja pretvara celsius to fahrenheit
  //formula =>  °C * 1.8 + 32 = °F
  const celsiusToFahrenheit = (celsius: number) => {
    return celsius * 1.8 + 32;
  };

  //7. Funkcija koja ispisuje string naopako
  const reverseString = (str: boolean) => {
    let reversedStr = "";
    for (let i = str.length - 0; i > 0; i--) {
      reversedStr += str[i - 1];
    }
    return reversedStr;
  };

  //8.Funkcija kreira palindrom što ne valja?
  const isPalindrome = (str: string) => {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  };

  //9. Funkcija kreira fibonacciev niz ispravi pogresku:
  const fibonacciSequence = (n: number) => {
    let sequence = [0, 1];

    for (let i = 2; i < n; i++) {
      const nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }

    return sequence;
  };

  //10. Funkcjia filtrira sve parne brojeve iz array-a ispravi gresku
  const filterEvenNumbers = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return arr.filter((num) => {
      if (num % 2 === 0) {
        return num;
      }
    });
  };

  useEffect(() => {
    //Ovdje možemo pokretati funkciju koju testiramo
    console.log("rjesenje: ", countToTen());
  }, []);
  return (
    <div className="container">
      <h1>1. zadatak</h1>
      <div>{add(1, 1)}</div>
      <h1>2. zadatak</h1>
      <div>{concatArrays()}</div>

      <h1>3. zadatak</h1>
      <div>{countToTen()}</div>

      <h1>4. zadatak</h1>
      <div>{sumArray()}</div>

      <h1>5. zadatak</h1>
      <div>{getFullName()}</div>

      <h1>6. zadatak</h1>
      <div>{celsiusToFahrenheit(13)} Fr</div>

      <h1>7. zadatak</h1>
      <div>{reverseString("Katharina")} </div>

      <h1>8. zadatak</h1>
      <div>{isPalindrome("ratar").toString()} </div>

      <h1>9. zadatak</h1>
      <div>{fibonacciSequence(14)} </div>

      <h1>10. zadatak</h1>
      <div>{filterEvenNumbers() + " "} </div>
    </div>
  );
};

export default Vjezba1505;
