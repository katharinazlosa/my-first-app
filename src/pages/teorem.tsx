// import Button from "../components/button";
import elipse from "./../assets/Ellipse4.png";
import elipse1 from "./../assets/Ellipse5.png";
import calendar from "./../assets/Image.png";
import chart from "./../assets/chart-dynamic-gradient.png";
import chat from "./../assets/chat-bubble-dynamic-gradient.png";
import computer from "./../assets/computer-dynamic-gradient.png";
import dollar from "./../assets/dollar-dollar-gradient.png";
import money from "./../assets/money-dynamic-gradient.png";
import videocamera from "./../assets/video-camera-dynamic-gradient.png";

const Teorem = () => {
  return (
    <>
      <div className="container--light">
        <div className="header">
          <div className="img-box left">
            <img src={elipse}></img>
          </div>
          <div className="img-box right">
            <img src={elipse1}></img>
          </div>
          <h1>
            Start tutoring<br></br> online
          </h1>
          <p>
            Give lessons whenever you want,<br></br>from the comfort of your
            home.
          </p>
        </div>
        {/* <div className="calendar">
          <div className="calendar__grid">
            <div className="calendar__grid--upper-left">
              <img src="" alt="logo"></img>
    
              <span>Dashboard</span>
              <span>My Bookings</span>
              <span>Chat</span>
              <span>My Reviews</span>
            </div>
            <div className="calendar__grid--down-left">
              <img src=""></img>
              <div>
                <h2>Ivana Nash</h2>
                <p>Tutor</p>
              </div>
              
            </div>
          </div>
          <div className="calendar__grid"></div>
          <div className="calendar__grid">
            <div className="calendar__grid--upper-right">
              <p>Calendar</p>
              <div className="small-calendar"></div>
              <div className="lessons-grid">
                <p>Upcoming lessons</p>
                <div className="lesson">
                  <div className="lesson--left">
                    <p>8:30-9:30</p>
                    <p>Jonathan Doe</p>
                  </div>
                  <div className="lesson--right">
                    <p>12/Sept/2021</p>
                    <p>Biology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="calender__grid--down-right"></div>
          </div>
        </div>
        <div className="description">
          <h1>Teorem's online tutoring makes your life easier</h1>
          <p>
            We'll provide you with everything you need to teach online. We help
            you find students and manage lessons.
          </p>
        </div> */}
        <div className="calendar">
          <img src={calendar} alt="calendar"></img>
        </div>
        <div className="section">
          <h1>
            Teorem's online tutoring makes <br></br> your life easier
          </h1>
          <p>
            We'll provide you with everything you need<br></br> to teach online.
            We help you find students<br></br> and manage lessons.
          </p>
        </div>
        <div className="grid3">
          {/*tu bih trebala napraviti posebnu komponentu card i proslijediti propse*/}
          <div className="card-teorem">
            <img src={computer} alt="computer-icon"></img>
            <h3>Fully remote</h3>
            <p>All you need is a laptop and wifi.</p>
          </div>
          <div className="card-teorem">
            <img src={videocamera} alt="photo-icon"></img>
            <h3>Tools you need</h3>
            <p>Booking system, chat, video calls & more.</p>
          </div>
          <div className="card-teorem">
            <img src={money} alt="money-icon"></img>
            <h3>Secure Income</h3>
            <p>We make sure you get paid.</p>
          </div>
          <div className="card-teorem">
            <img src={dollar} alt="coin-icon"></img>
            <h3>Set Your Price</h3>
            <p>No limitations on what you can earn.</p>
          </div>
          <div className="card-teorem">
            <img src={chat} alt="conversation-icon"></img>
            <h3>24/7 Support</h3>
            <p>We make sure all your issues are solved.</p>
          </div>
          <div className="card-teorem">
            <img src={chart} alt="pie-icon"></img>
            <h3>Improve your teaching</h3>
            <p>
              We take care of administration, you just focus on the lessons.
            </p>
          </div>
        </div>
        <div className="stretch-card">
          <p className="stretch-card--left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            maxime nulla odit! Dolores non molestias minus optio distinctio
            voluptatum eos veritatis inventore ut eligendi, aliquam quos amet
            odio qui? Dignissimos?
          </p>
          <div className="stretch-card--right">
            <img src={elipse1} alt="person"></img>
            <h3>John Doe</h3>
            <span>Tutor</span>
            {/*provjeriti p i span da jedno bude za jedan font i boju*/}
          </div>
        </div>
        <div className="section2">
          <h1>Set your own price and availability!</h1>
          <p>
            se our tools to track how much you’re<br></br> making and increase
            your client base!
          </p>
        </div>
        <div className="calendar">
          <img src={calendar} alt="calendar"></img>
        </div>
        <div className="section2">
          <h1>We are here to help you grow!</h1>
        </div>
        <div className="stretch-card">
          <p className="stretch-card--left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            maxime nulla odit! Dolores non molestias minus optio distinctio
            voluptatum eos veritatis inventore ut eligendi, aliquam quos amet
            odio qui? Dignissimos?
          </p>
          <div className="stretch-card--right">
            <img src={elipse1} alt="person"></img>
            <h3>John Doe</h3>
            <span>Tutor</span>
            {/*provjeriti p i span da jedno bude za jedan font i boju*/}
          </div>
        </div>
        <div className="how-to-box">
          <h1>
            How to become an online<br></br> tutor on Teorem
          </h1>
          <div className="line"></div>
          <ol>
            <li>Create your account and fill in the information.</li>
            <li>Upload a short video to prove your identity.</li>
            <li>Complete your profile and start tutoring.</li>
          </ol>
          {/* <Button animate /> */}
          {/*proslijediti propse za ljubičastu boju i bijela slova */}
        </div>
        <div className="question-box">
          <h1>Frequently asked questions</h1>
          <div className="question-box__dropdown">
            <div className="question-box__dropdown--btn" onclick="">
              <span>What are requirements for tutors?</span>
              <img src="https://img.icons8.com/sf-ultralight-filled/25/000000/down.png" />
            </div>
            <p className="question-box__dropdown--content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              rem maiores repellat totam nostrum consectetur deleniti dolore ab
              dolorum consequuntur. Totam corporis earum voluptate! Vero
              deserunt expedita alias rerum velit.
            </p>
          </div>
          <div className="question-box__dropdown">
            <div className="question-box__dropdown--btn" onclick="">
              <span>How long does it take before I can start teaching?</span>
              <img src="https://img.icons8.com/sf-ultralight-filled/25/000000/down.png" />
            </div>
            <p className="question-box__dropdown--content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              rem maiores repellat totam nostrum consectetur deleniti dolore ab
              dolorum consequuntur. Totam corporis earum voluptate! Vero
              deserunt expedita alias rerum velit.
            </p>
          </div>
          <div className="question-box__dropdown">
            <div className="question-box__dropdown--btn" onclick="">
              <span>How does the subscription work?</span>
              <img src="https://img.icons8.com/sf-ultralight-filled/25/000000/down.png" />
            </div>
            <p className="question-box__dropdown--content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              rem maiores repellat totam nostrum consectetur deleniti dolore ab
              dolorum consequuntur. Totam corporis earum voluptate! Vero
              deserunt expedita alias rerum velit.
            </p>
          </div>
          <div className="question-box__dropdown">
            <div className="question-box__dropdown--btn" onclick="">
              <span>What does the employment relationship look like?</span>
              <img src="https://img.icons8.com/sf-ultralight-filled/25/000000/down.png" />
            </div>
            <p className="question-box__dropdown--content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              rem maiores repellat totam nostrum consectetur deleniti dolore ab
              dolorum consequuntur. Totam corporis earum voluptate! Vero
              deserunt expedita alias rerum velit.
            </p>
          </div>
          <div className="question-box__dropdown">
            <div className="question-box__dropdown--btn" onclick="">
              <span>What makes Teorem different from other platforms?</span>
              <img src="https://img.icons8.com/sf-ultralight-filled/25/000000/down.png" />
            </div>
            <p className="question-box__dropdown--content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              rem maiores repellat totam nostrum consectetur deleniti dolore ab
              dolorum consequuntur. Totam corporis earum voluptate! Vero
              deserunt expedita alias rerum velit.
            </p>
          </div>
        </div>

        <div className="footer">
          <div className="footer__left">
            <h3>Teorem</h3>
            <p>
              If you have additional questions, feel free to contact us{" "}
              <br></br>
              via email info@teorem.hr
            </p>
            <div className="footer__left__columns">
              <h6>Teorem d.o.o.</h6>
              <span>Address 69, Zagreb</span>
              <span>+385 1 3434 620</span>
              <span>info@teorem.hr</span>
            </div>
            <div className="footer__left__columns">
              <h6>About Teorem</h6>
              <span>Legal notice</span>
              <span>Privacy policy</span>
              <span>Become a tutor</span>
            </div>
            <div className="footer__left__columns">
              <h6>Payment methods</h6>
              <span>Lorem ipsum dolor</span>
              <span>sit amet</span>
              <span>K A R T I C EEE</span>
            </div>
          </div>
          <div className="footer__right">
            <img src="" alt="tablet-photo"></img>
          </div>
          <p>Copyright Teorem 2021</p>
        </div>
      </div>
    </>
  );
};

export default Teorem;
