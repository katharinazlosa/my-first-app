import Section from "../components/section";
import Grid3 from "../components/grid3";
import StretchCard from "../components/stretchcard";
import Calendar from "../components/calendar";
import HowToBox from "../components/how-to-box";
import QuestionBox from "../components/questionbox";
import Footer from "../components/footer";
import elipse from "./../assets/Ellipse4.png";
import elipse1 from "./../assets/Ellipse5.png";

const Teorem = () => {
  return (
    <>
      <div className="container--light">
        <div className="main">
          <div className="img-box img-box--left">
            <img src={elipse}></img>
          </div>
          <div className="img-box img-box--right">
            <img src={elipse1}></img>
          </div>
          <div className="text-box">
            <h1 className="text-box__title">
              Start tutoring<br></br> online
            </h1>
            <p className="text-box__content">
              Give lessons whenever you want,<br></br>from the comfort of your
              home.
            </p>
          </div>
        </div>
        <Calendar />
        <Section
          title="Teorem's online tutoring makes your life easier."
          content="We'll provide you with everything you need to teach online. We help you find students and manage lessons."
        />
        <Grid3 />
        <StretchCard />
        <br></br>
        <Section
          title="Set your own price and availability!"
          content="See our tools to track how much you’re making and increase
          your client base!"
        />
        <Calendar />
        <Section title="We are here to help you grow!" content="" />
        <StretchCard />
        <HowToBox />
        <QuestionBox />
        <Footer />
      </div>
    </>
  );
};

export default Teorem;
