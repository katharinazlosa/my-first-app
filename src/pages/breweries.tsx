import { useEffect, useState } from "react";
import Pagination from "../components/paginationAPI";

type BreweryType = {
  name: string;
  city: string;
  id: string;
  country: string;
};

const Breweries = () => {
  const [data, setData] = useState<BreweryType[]>([]);

  const [dataByCity, setDataByCity] = useState<BreweryType[]>([]);

  const pageNumberLimit = 5;
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [minPageLimit, setMinPageLimit] = useState(0);

  //getting data with await
  async function getBreweries() {
    const response = await fetch("https://api.openbrewerydb.org/v1/breweries");
    const jsonData = await response.json();
    console.log(jsonData);
    setData(jsonData);
  }

  //getting data and catching err (more modern way)
  const getBreweryByCity = (city: string, perPage: number, page: number) => {
    fetch(
      `https://api.openbrewerydb.org/v1/breweries?by_city=${city}&page=${page}&per_page=${perPage}`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setDataByCity(jsonData);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    //želimo da se odvrti samo jednom zato zovemo u useEffectu
    getBreweries();
    getBreweryByCity("san_diego", 12, 4);
  }, []);

  //PAGINATION

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const onPrevClick = () => {
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit);
      setMinPageLimit(minPageLimit - pageNumberLimit);
    }
    setCurrentPage((prev) => prev - 1);
  };

  const onNextClick = () => {
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit);
      setMinPageLimit(minPageLimit + pageNumberLimit);
    }
    setCurrentPage((prev) => prev + 1);
  };

  const paginationAttributes = {
    currentPage,
    maxPageLimit,
    minPageLimit,
    response: dataByCity,
  };

  return (
    <>
      <div className="container">
        <h1>Breweries</h1>
        <div>
          {data.length > 0 ? (
            data.map((brewery: BreweryType) => {
              return <div key={brewery.id}>{brewery.name}</div>;
            })
          ) : (
            <div>Nema niti jedna pivovara za zadani parametar.</div>
          )}
        </div>
        <h1>By City</h1>
        <div>
          {dataByCity.map((breweryCity: BreweryType) => {
            return <div key={breweryCity.id}>{breweryCity.name}</div>;
          })}
          {!loading ? (
            <Pagination
              {...paginationAttributes}
              onPrevClick={onPrevClick}
              onNextClick={onNextClick}
              onPageChange={onPageChange}
            />
          ) : (
            <div> Loading... </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Breweries;
