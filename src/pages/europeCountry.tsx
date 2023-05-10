import { useParams } from "react-router-dom";
import { CountryType } from "./europe";
import { useEffect, useState } from "react";

const EuropeCountry = () => {
  let { capitalId } = useParams();
  const [countryData, setCountryData] = useState<CountryType>();
  const [loading, setLoading] = useState(true);

  const getCountry = (capitalId: string) => {
    fetch(`https://restcountries.com/v3.1/capital/${capitalId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountryData(data[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log(capitalId);
    if (capitalId) {
      getCountry(capitalId);
    }
  }, []);
  return (
    <>
      <div>
        {loading ? (
          "Loading..."
        ) : countryData ? (
          <div>{countryData.flags.png}</div>
        ) : (
          <div>The state with {capitalId} doesn't exist.</div>
        )}
      </div>
    </>
  );
};

export default EuropeCountry;

//preko ida dohvatiti route
