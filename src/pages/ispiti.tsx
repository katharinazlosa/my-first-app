import bckimg2 from "./../assets/bckimg2.png";

const Ispiti = () => {
  return (
    <>
      <div
        className="main-bck-img"
        style={{ backgroundImage: `url(${bckimg2})` }}
      >
        <div className="main-links-container">
          <a className="main-page-links" href="/ispit">
            <img
              className="main-page-icons"
              src="https://img.icons8.com/wired/64/null/css3.png"
            />
            Ispit CSS
          </a>
          <a className="main-page-links" href="/">
            <img
              className="main-page-icons"
              src="https://img.icons8.com/wired/64/null/javascript.png"
            />
            Ispit JS
          </a>
        </div>
      </div>
    </>
  );
};

export default Ispiti;
