import { Box } from "@mui/system";
import { useEffect } from "react";

const Vjezba0305 = () => {
  //1. dohvatiti box i promijeniti background color
  const box = document.getElementsByClassName("box")[0] as HTMLDivElement;
  //   console.log(box);

  //   box.style.backgroundColor = "red";

  //2. dodati dodatnu klasu na box koja će povećati njegove dimenzije
  //   const list = box.classList;
  //   list.add("dimension");
  //3. na klik animirati box do 30px i nazad

  //   let position = 0;
  //   let reverse = false;

  //   useEffect(() => {
  //     const box = document.getElementsByClassName("box")[0] as HTMLDivElement;

  //     const frame = () => {
  //       if (reverse) {
  //         position--;
  //       } else {
  //         position++;
  //       }
  //       const currentPosition = position + "px";

  //       if (position == 30) {
  //         reverse = true;
  //       }
  //       if (position == 0) {
  //         reverse = false;
  //       }

  //       box.style.marginLeft = currentPosition;
  //     };
  //     setInterval(frame, 30);
  //   }, []);

  //4. kreirati funkciju koja će imati lokalnu varijablu u kojoj ćemo izračunati sumu dva parametra i rezultat ispisati unutar box-a
  const sum = (num1, num2) => {
    let twoNumSum = num1 + num2;
    return twoNumSum;
  };
  //5. animirati box dijagonalno do (30px, 30px) i nazad do 50px

  //6. smanjiti button

  const handleClick = () => {
    const btn = document.querySelector(".btn");
    btn.classList.add("btn--smaller");
    console.log("btn");
  };
  return (
    <>
      <h1>Vježba 0305</h1>
      <div className="box"></div>
      <p>{sum(2, 2)}</p>
      <button className="btn" onClick={() => handleClick()}>
        Le button
      </button>
    </>
  );
};

export default Vjezba0305;
