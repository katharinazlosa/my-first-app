// import Accordion from "react-bootstrap/Accordion";
// import "bootstrap/dist/css/bootstrap.min.css";

type questionBoxDataType = {
  question: string;
  answer: string;
};

const QuestionBox = () => {
  const questionBoxData: questionBoxDataType[] = [
    {
      question: "What are requirements for tutors?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem maiores repellat totam nostrum consectetur deleniti dolore ab dolorum consequuntur. Totam corporis earum voluptate! Vero deserunt expedita alias rerum velit.",
    },
    {
      question: "How long does it take before I can start teaching?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem maiores repellat totam nostrum consectetur deleniti dolore ab dolorum consequuntur. Totam corporis earum voluptate! Vero deserunt expedita alias rerum velit.",
    },
    {
      question: "How does the subscription work?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem maiores repellat totam nostrum consectetur deleniti dolore ab dolorum consequuntur. Totam corporis earum voluptate! Vero deserunt expedita alias rerum velit.",
    },
    {
      question: "What does the employment relationship look like?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem maiores repellat totam nostrum consectetur deleniti dolore ab dolorum consequuntur. Totam corporis earum voluptate! Vero deserunt expedita alias rerum velit.",
    },
    {
      question: "What makes Teorem different from other platforms?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem maiores repellat totam nostrum consectetur deleniti dolore ab dolorum consequuntur. Totam corporis earum voluptate! Vero deserunt expedita alias rerum velit.",
    },
  ];
  return (
    <>
      <div className="question-box">
        <h1>Frequently asked questions</h1>
        {questionBoxData.map((item, key) => (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </div>
    </>
  );
};
export default QuestionBox;
