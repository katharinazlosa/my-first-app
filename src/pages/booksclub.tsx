import { useEffect, useState } from "react";
import ModalWindow from "../components/modalwindow";
import bookcover from "./../assets/Book-cover.png";

type DataType = {
  id: string;
  volumeInfo: VolumeInfoType;
};

type VolumeInfoType = {
  title: string;
  authors: string;
  averageRating: number;
  imageLinks: ImageLinksType;
  description: string;
};

type ImageLinksType = {
  thumbnail: string;
};
const BooksClub = () => {
  const [data, setData] = useState<DataType[]>([]);

  const getData = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=harry+potter`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.items);
        setData(data.items);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");
  };

  return (
    <>
      {data.map((book: DataType) => {
        return (
          <div className="book-bck" key={book.id}>
            <div className="book-container" onClick={handleClick}>
              {book.volumeInfo.imageLinks ? (
                <img
                  className="book-container__img"
                  src={book.volumeInfo.imageLinks.thumbnail}
                ></img>
              ) : (
                <img src={bookcover} className="book-container__img"></img>
              )}
              <div className="book-container__data">
                <h1>{book.volumeInfo.title} </h1>
                <h3>{book.volumeInfo.authors + " "}</h3>
                <h4>{book.volumeInfo.averageRating}</h4>
                <ModalWindow
                  title={book.volumeInfo.title}
                  paragraph={book.volumeInfo.description}
                  btnInfo={"More information"}
                />
                ;
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BooksClub;

//
