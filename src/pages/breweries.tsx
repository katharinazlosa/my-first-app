import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

type BreweryType = {
  name: string;
  city: string;
  id: string;
  country: string;
};

//NAPRAVITI PAGINACIJU I SEARCH!!!

const Breweries = () => {
  const [data, setData] = useState<BreweryType[]>([]);
  const [dataByCity, setDataByCity] = useState<BreweryType[]>([]);

  async function getBreweries() {
    const response = await fetch("https://api.openbrewerydb.org/v1/breweries");
    const jsonData = await response.json();
    console.log(jsonData);
    setData(jsonData);
  }
  const getBreweryByCity = (city: string, perPage: number, page: number) => {
    fetch(
      `https://api.openbrewerydb.org/v1/breweries?by_city=${city}&page=${page}&per_page=${perPage}`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setDataByCity(jsonData);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    //želimo da se odvrti samo jednom zato zovemo u useEffectu
    getBreweries();
    getBreweryByCity("san_diego", 12, 4);
  }, []);

  //PAGINATION
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <h3>Item #{item}</h3>
            </div>
          ))}
      </>
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
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
        </div>
        <div>
          <Items currentItems={currentItems} />
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
            />
        </div>
      </div>
    </>
  );
};

export default Breweries;
// function getBreweries() {
//   throw new Error("Function not implemented.");
// }

// function getBreweryByCity() {
//   throw new Error("Function not implemented.");
// }
