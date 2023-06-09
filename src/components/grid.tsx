import Card from "./card";

const Grid = () => {
  return (
    <>
      <div className="grid">
        <Card
          title="Prvi naslov"
          text=" the original words and form of a written or printed work. (2) : an edited or emended copy of an original work."
          src="https://source.unsplash.com/random/250x250/?nature"
        />
        <Card
          title="Drugi naslov"
          text="a work containing such text. : the main body of printed or written matter on a page."
          src="https://source.unsplash.com/random/250x250/?book"
        />
        <Card
          title="Treći naslov"
          text="When you read something, you are looking at text and using your language skills to get meaning out of it. Something that doesn't contain any text is textless."
          src="https://source.unsplash.com/random/250x250/?bike"
        />
        <Card
          title="Četvrti naslov"
          text="Text refers to the actual words written in a book, newspaper, blog post, or any other written work. Pictures, charts, and other images are not text. "
          src="https://source.unsplash.com/random/250x250/?gardening"
        />
      </div>
    </>
  );
};

export default Grid;
