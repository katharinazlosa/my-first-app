import vector from "./../assets/vector.png";

const QuestionBox = () => {
  return (
    <>
      <div className="question-box">
        <h1>Frequently asked questions</h1>
        <div className="question-box__dropdown">
          <div className="question-box__dropdown--btn" onclick="">
            <span>What are requirements for tutors?</span>
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
        </div>
      </div>
    </>
  );
};
export default QuestionBox;
