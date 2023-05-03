type GenderType = "male" | "female";

type StudentType = {
  name: string;
  lastName: string;
  age: number;
  gender: GenderType;
  height: number;
  hobby: string;
  employed: boolean;
  favoriteColor: string;
};

const Vjezba2804 = () => {
  const frontendRazred: StudentType[] = [
    {
      name: "Ivan",
      lastName: "Sakoman",
      age: 29,
      gender: "male",
      height: 183,
      hobby: "Cycling",
      employed: true,
      favoriteColor: "red",
    },
    {
      name: "Goran",
      lastName: "Viljanac",
      age: 19,
      gender: "male",
      height: 185,
      hobby: "Musician",
      employed: true,
      favoriteColor: "green",
    },
    {
      name: "Katharina",
      lastName: "Zlosa",
      age: 27,
      gender: "female",
      height: 180,
      hobby: "reading",
      employed: true,
      favoriteColor: "green",
    },
    {
      name: "Antun",
      lastName: "Glumac",
      age: 22,
      gender: "male",
      height: 185,
      hobby: "Football",
      employed: false,
      favoriteColor: "red",
    },
    {
      name: "Nikolina",
      lastName: "Kirčanski",
      age: 40,
      gender: "female",
      height: 164,
      hobby: "Martial arts",
      employed: true,
      favoriteColor: "black",
    },
    {
      name: "Robert",
      lastName: "Đujić",
      age: 24,
      gender: "male",
      height: 182,
      hobby: "Books, movies, games",
      employed: false,
      favoriteColor: "silver",
    },
    {
      name: "Monika",
      lastName: "Ivankovic",
      age: 23,
      gender: "female",
      height: 164,
      hobby: "roller skating",
      employed: true,
      favoriteColor: "grey",
    },
    {
      name: "Maja",
      lastName: "Juratovac",
      age: 32,
      gender: "female",
      height: 169,
      hobby: "dancing",
      employed: true,
      favoriteColor: "blue",
    },
    {
      name: "Ivan",
      lastName: "Puljić",
      age: 25,
      gender: "male",
      height: 175,
      hobby: "running",
      employed: false,
      favoriteColor: "blue",
    },
    {
      name: "Sara",
      lastName: "Cindric",
      age: 24,
      gender: "female",
      height: 161,
      hobby: "writing",
      employed: false,
      favoriteColor: "black",
    },
    {
      name: "Kristian",
      lastName: "Radoš",
      age: 30,
      gender: "male",
      height: 188,
      hobby: "Netflix",
      employed: true,
      favoriteColor: "blue",
    },
    {
      name: "Ivana",
      lastName: "Arbutina",
      age: 42,
      gender: "female",
      height: 166,
      hobby: "slikanje",
      employed: false,
      favoriteColor: "red",
    },
  ];

  const findYoungest = () => {
    let min = frontendRazred[0].age;

    for (let i = 0; i < frontendRazred.length; i++) {
      if (frontendRazred[i].age < min) {
        min = frontendRazred[i].age;
      }
    }
    return min;
  };

  //1. Zadatak
  //pronađi sve osobe kojima ime počinje na slovo "M"
  const findMNamed = () => {
    let count = 0;
    for (let i = 0; i < frontendRazred.length; i++) {
      let letter = frontendRazred[i].name[0];
      if (letter === "M") {
        count++;
      }
    }

    console.log(`There are ${count} people named with letter M.`);
  };
  findMNamed();

  //pronađi sve osobe koje su višlje od 160, a niže od 180
  const findHeight = () => {
    let names = "";
    // let finalNames = "";
    for (let i = 0; i < frontendRazred.length; i++) {
      let height = frontendRazred[i].height;
      // finalNames = names.split(" ").join(" ");
      if (height > 160 && height < 180) {
        names += frontendRazred[i].name + " ";
      }
    }

    console.log(`${names} are tall between 160 and 180.`);
  };

  findHeight();

  //pronađi sve osobe kojima je najdraža boja "red"
  const findRed = () => {
    let namesColor = " ";
    for (let i = 0; i < frontendRazred.length; i++) {
      let color = frontendRazred[i].favoriteColor;
      if (color == "red") {
        namesColor += frontendRazred[i].name + " ";
      }
    }

    console.log(`To these people: ${namesColor} favorite color is red.`);
  };

  findRed();

  //pronađi sve osobe kojima prezime završava na "c" ili "ć"
  const findLastNameLetter = () => {
    let namesLastLetter = "";
    for (let i = 0; i < frontendRazred.length; i++) {
      let letter = frontendRazred[i].lastName.slice(-1);
      if (letter == "c" || letter == "ć") {
        namesLastLetter += frontendRazred[i].name + " ";
      }
    }
    console.log(
      `${namesLastLetter} are people with last name ending in c or ć.`
    );
  };
  findLastNameLetter();

  //2. zadatak
  //ispiši u tablicu sve članove razreda

  //3. zadatak
  //obojaj tekst "favoriteColor" u boju koja je napisana, npr. ako je favoriteColor red, taj tekst treba biti true

  return (
    <>
      <div className="container">
        <h1>Vjezba2804</h1>
        <div>
          <p>Najmlađa osoba je: {findYoungest()}</p>
        </div>
        <div>
          <p></p>
        </div>
        <div>
          <table>
            <thead>
              <td>Name</td>
              <td>Hobby</td>
              <td>Favorite Color</td>
            </thead>
            <tbody>
              {frontendRazred.map((student) => {
                let favColor = student.favoriteColor;
                let color = "";
                const showFavColor = (favColor: string) => {
                  switch (color) {
                    case "red":
                      color = "red";

                    case "green":
                      color = "green";

                    case "blue":
                      color = "blue";

                    case "black":
                      color = "black";

                    case "silver":
                      color = "silver";

                    case "grey":
                      color = "grey";
                  }
                };

                return (
                  <tr>
                    <td>{student.name}</td>
                    <td>{student.hobby}</td>
                    <td
                      style={{
                        color: `${showFavColor(favColor)}`,
                      }}
                    >
                      {favColor}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <h4>Druga tablica</h4>
        <div>
          <table>
            <thead>
              <td>Ime</td>
              <td>Prezime</td>
              <td>Godina</td>
            </thead>
            {frontendRazred.map((student) => {
              return (
                <tr>
                  <td>{student.name}</td>
                  <td>{student.lastName}</td>
                  <td>{student.age}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Vjezba2804;
