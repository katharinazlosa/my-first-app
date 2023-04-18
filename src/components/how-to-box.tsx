import Button from "./button";

const HowToBox = () => {
  return (
    <>
      <div className="how-to-box">
        <h1 className="how-to-box__title">
          How to become an online<br></br> tutor on Teorem
        </h1>
        <div className="how-to-box__line"></div>
        <ol>
          <li>Create your account and fill in the information.</li>
          <li>Upload a short video to prove your identity.</li>
          <li>Complete your profile and start tutoring.</li>
        </ol>
        <Button animate color="purple" value="Get started" />
      </div>
    </>
  );
};

export default HowToBox;
