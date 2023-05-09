import { useEffect, useState } from "react";

type PokemonTypeTypeType = {
  name: string;
  url: string;
};

type PokemonTypesType = {
  slot: number;
  type: PokemonTypeTypeType[];
};

type PokemonType = {
  id: number;
  name: string;
  types: PokemonTypesType;
};

type BerryType = {
  name: string;
  url: string;
};

type CityType = {
  capital: string;
};

const Pokemon = () => {
  const [data, setData] = useState<PokemonType>();
  //   const [pokemonColor, setPokemonColor] = useState();
  //   const [searchValue, setSearchValue] = useState();

  //   const [isLoaded, setIsLoaded] = useState(false);
  //   const [error, setError] = useState(null);

  //   //search query set to empty string
  //   const [pokemonName, setPokemonName] = useState("");

  //   //search parameters

  //   const getPokemons = (pokemonName: string) => {
  //     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((jsonData) => {
  //         setData(jsonData);
  //         setIsLoaded(true);
  //       })
  //       .catch((error) => setIsLoaded(true));
  //     setError(error);
  //   };

  //   useEffect(() => {
  //     getPokemons();
  //   }, []);

  //   const getPokemonColor = (id: number) => {
  //     fetch(`https://pokeapi.co/api/v2/pokemon-color/${id}/`)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((jsonData) => {
  //         setPokemonColor(jsonData);
  //       })
  //       .catch((error) => console.error(error));
  //   };

  //   const [berries, setBerries] = useState<BerryType[]>([]);

  //   const getBerries = () => {
  //     fetch(`https://pokeapi.co/api/v2/berry`)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((jsonData) => {
  //         console.log(jsonData.results);
  //         setBerries(jsonData.results);
  //       })
  //       .catch((error) => console.log(error));
  //   };

  const [flag, setFlag] = useState<string>("");

  const getCapitalCity = () => {
    fetch(`https://restcountries.com/v3.1/capital/zagreb`)
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        console.log(jsonData[0].flags.png);
        setFlag(jsonData[0].flags.png);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    // getBerries();
    getCapitalCity();
  }, []);
  return (
    <>
      <div className="input-container">
        <form action="/action_page.php">
          <label for="pokemonsearch">Search Pokemons to get its color:</label>
          <input
            type="search"
            id="pokemonsearch"
            name="pokemonsearch"
            // value={pokemonName}
            // onChange={(e) => setSearchValue(e.target.value)}
          ></input>
          {/* <button onClick={() => getPokemonColor(name)}>Get color</button> */}
        </form>
      </div>

      <div>
        {/* {searchParam.length > 0 ? (
          searchParam.map((pokemon: string) => {
            return <div>{pokemon.name}</div>;
          })
        ) : (
          <div>Couldn't find pokemon color you're looking for.</div>
        )} */}
      </div>
      <div>
        {/* {[data].map((pokemon) => {
          return <div>{pokemon.name}</div>;
        })} */}
      </div>
      {/* <div>
        {berries.map((berry) => {
          return (
            <div>
              <div>{berry.name}</div>
              <a href={berry.url}>Link</a>
            </div>
          );
        })}
      </div> */}
      <div>
        <img src={flag}></img>
      </div>
    </>
  );
};

export default Pokemon;
