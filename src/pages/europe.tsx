import { useEffect, useState } from "react";
import EuropeCountry from "./europeCountry";

export type CountryType = {
  name: {
    common: string;
  };
  capital: string;
  flags: FlagType;
  currencies: CurrenciesType;
  languages: string;
};

type CurrenciesType = {
  [currencies: string]: {
    name: string;
    symbol: string;
  };
};

type FlagType = {
  png: string;
};

type CountryNameType = {
  official: string;
};

const Europe = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);

  const getCountries = () => {
    fetch(`https://restcountries.com/v3.1/region/europe`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <h3>Table of countries</h3>
      <div className="table-container">
        <table className="table">
          <tr className="table__content">
            <th className="table__content">Name</th>
            <th className="table__content">Flag</th>
            <th className="table__content">Currency</th>
            <th className="table__content">Capital</th>
            <th className="table__content">Languages</th>
          </tr>

          {countries.map((country: CountryType) => {
            return (
              <>
                <tr className="table__content">
                  <td className="table__content">
                    <a
                      href={`/europe/${country.capital[0].toLocaleLowerCase()}`}
                    >
                      {country.name.common}
                    </a>
                  </td>
                  <td className="table__content">
                    <img src={country.flags.png}></img>
                  </td>
                  <td className="table__content">
                    {Object.keys(country.currencies).map((key) => key)},{" "}
                    {Object.keys(country.currencies).map(
                      (key) => country.currencies[key].symbol
                    )}
                  </td>
                  <td className="table__content">
                    {/* {Object.keys(country.languages).map(
                      (key: string) => country.languages[key]
                    )} */}
                  </td>
                  <td className="table__content">{country.capital}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Europe;
