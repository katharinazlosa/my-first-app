type SectionProps = {
  title: string;
  content: string;
};

const Section = ({ title, content }: SectionProps) => {
  return (
    <>
      <div className="section">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </>
  );
};

export default Section;
