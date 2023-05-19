import { useEffect, useState } from "react";

type DataType = {
  trackName: string;
  artistName: string;
  trackId: number;
};

const IspitJS = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const getData = () => {
    fetch(`https://itunes.apple.com/search?term=rock&entity=song`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.results);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAdd = () => {
    fetch(`https://itunes.apple.com/search?term=${inputValue}&entity=song`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <div>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="input"
            type="text"
          />
          <button onClick={() => handleAdd()} className="btn">
            Dodaj
          </button>
        </div>
        <div>
          <table className="table-container">
            <thead>
              <tr className="table__content">
                <th className="table__content">Artist</th>
                <th className="table__content">Name of the song</th>
              </tr>
            </thead>
            <tbody>
              {!loading ? (
                "Loading..."
              ) : (
                <>
                  {data.length > 0 ? (
                    data.map((result: DataType) => {
                      return (
                        <tr className="table__content" key={result.trackId}>
                          <td className="table__content">
                            {result.artistName}
                          </td>
                          <td className="table__content">{result.trackName}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td>Couldn't find what you're looking for. Try again!</td>
                    </tr>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default IspitJS;
