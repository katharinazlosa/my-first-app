import { useEffect, useState } from "react";
import Sound from "react-sound";

type DataType = {
  trackName: string;
  artistName: string;
  trackId: number;
  collectionName: string;
  artworkUrl100: string;
  previewUrl: string;
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
      <div className="container">
        <div>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="ispit-input"
            type="text"
            placeholder="search for songs..."
          />
          <button onClick={() => handleAdd()} className="btn">
            Dodaj
          </button>
        </div>
        <div className="table-container">
          {!loading ? (
            "Loading..."
          ) : (
            <>
              {data.length > 0 ? (
                data.map((result: DataType) => {
                  return (
                    <div key={result.trackId} className="ispit-container">
                      <img src={result.artworkUrl100}></img>
                      <div>
                        <h2>{result.trackName}</h2>
                        <h1>{result.artistName}</h1>
                        <audio controls autoplay>
                          <source
                            src={result.previewUrl}
                            type="audio/ogg"
                          ></source>
                        </audio>
                      </div>
                    </div>

                    // <tr className="table__content" key={result.trackId}>
                    //   <td className="table__content">
                    //     {result.artistName}
                    //   </td>
                    //   <td className="table__content">{result.trackName}</td>
                    //   <td className="table__content">
                    //     {result.collectionName}
                    //   </td>
                    //   <td className="table__content">
                    //     <img src={result.artworkUrl100}></img>
                    //   </td>
                    //   <td className="table__content">
                    //     <audio controls autoplay>
                    //       <source
                    //         src={result.previewUrl}
                    //         type="audio/ogg"
                    //       ></source>
                    //     </audio>
                    //   </td>
                    // </tr>
                  );
                })
              ) : (
                <tr>
                  <td>Couldn't find what you're looking for. Try again!</td>
                </tr>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default IspitJS;
