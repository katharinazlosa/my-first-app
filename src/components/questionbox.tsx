import vector from "./../assets/vector.png";
import { Accordion, Button, Card, Jumbotron, Table } from "react-bootstrap";

const QuestionBox = () => {
  const questionBox = [
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
        {/* <div className="question-box__dropdown">
          <div className="question-box__dropdown--btn" onclick="">
            <span>What are requirements for tutors?</span>
            <img src={vector}></img>
          </div>
          <p className="question-box__dropdown--content"></p>
        </div>
        <div className="question-box__dropdown">
          <div className="question-box__dropdown--btn" onclick="">
            <span>How long does it take before I can start teaching?</span>
            <img src={vector}></img>
          </div>
          <p className="question-box__dropdown--content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem
            maiores repellat totam nostrum consectetur deleniti dolore ab
            dolorum consequuntur. Totam corporis earum voluptate! Vero deserunt
            expedita alias rerum velit.
          </p>
        </div>
        <div className="question-box__dropdown">
          <div className="question-box__dropdown--btn" onclick="">
            <span>How does the subscription work?</span>
            <img src={vector}></img>
          </div>
          <p className="question-box__dropdown--content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem
            maiores repellat totam nostrum consectetur deleniti dolore ab
            dolorum consequuntur. Totam corporis earum voluptate! Vero deserunt
            expedita alias rerum velit.
          </p>
        </div>
        <div className="question-box__dropdown">
          <div className="question-box__dropdown--btn" onclick="">
            <span>What does the employment relationship look like?</span>
            <img src={vector}></img>
          </div>
          <p className="question-box__dropdown--content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem
            maiores repellat totam nostrum consectetur deleniti dolore ab
            dolorum consequuntur. Totam corporis earum voluptate! Vero deserunt
            expedita alias rerum velit.
          </p>
        </div>
        <div className="question-box__dropdown">
          <div className="question-box__dropdown--btn" onclick="">
            <span>What makes Teorem different from other platforms?</span>
            <img src={vector}></img>
          </div>
          <p className="question-box__dropdown--content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem
            maiores repellat totam nostrum consectetur deleniti dolore ab
            dolorum consequuntur. Totam corporis earum voluptate! Vero deserunt
            expedita alias rerum velit.
          </p>
        </div> */}
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                {questionBox.question}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {questionBox.answer}{" "}
                <Button variant="light" className="menu-basket-btn">
                  <i class="fas fa-shopping-basket"></i>
                </Button>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </>
  );
};
export default QuestionBox;
