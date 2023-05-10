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
  types: PokemonTypesType[];
};

type PokemonAbility = {
  id: number;
  name: string;
  names: PokemonAbilityNames[];
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
  const [pokemonData, setPokemonData] = useState<PokemonType>();
  const [pokemonAbility, setPokemonAbility] = useState<PokemonAbility>();
  const [searchValue, setSearchValue] = useState<string>("");
  const [berries, setBerries] = useState<BerryType[]>([]);
  const [flag, setFlag] = useState<string>("");

  //

  const getPokemonAbility = (id: number) => {
    fetch(`https://pokeapi.co/api/v2/ability/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonAbility(data);
      })
      .catch((err) => console.log(err));
  };

  const searchPokemon = (pokemonName: string) => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLocaleLowerCase()}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPokemonData(data);
        getPokemonAbility(data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBerries = () => {
    fetch("https://pokeapi.co/api/v2/berry")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data.results);
        setBerries(data.results);
      })
      .catch((err) => console.log(err));
  };

  const getCapitalCity = () => {
    fetch("https://restcountries.com/v3.1/capital/zagreb")
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].flags.png);
        setFlag(data[0].flags.png);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBerries();
    getCapitalCity();
  }, []);

  return (
    <>
      <div className="input-container">
        <label for="pokemonsearch">Search Pokemons to get its color:</label>
        <input
          type="search"
          id="pokemonsearch"
          name="pokemonsearch"
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button
          className="pokemons__btn"
          onClick={() => searchPokemon(searchValue)}
        >
          Get color
        </button>
      </div>

      <div className="pokemons__color-box">
        {pokemonAbility &&
          pokemonAbility.names.map((name) => {
            return <div>{name.name}</div>;
          })}
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
