import Card3 from "./card3";
import chart from "./../assets/chart-dynamic-gradient.png";
import chat from "./../assets/chat-bubble-dynamic-gradient.png";
import computer from "./../assets/computer-dynamic-gradient.png";
import dollar from "./../assets/dollar-dollar-gradient.png";
import money from "./../assets/money-dynamic-gradient.png";
import videocamera from "./../assets/video-camera-dynamic-gradient.png";

const Grid3 = () => {
  return (
    <>
      <div className="grid3">
        <Card3
          img={computer}
          title="Fully remote"
          content="All you need is a laptop and wifi."
        />
        <Card3
          img={videocamera}
          title="Tools you need"
          content="Booking system, chat, video calls & more."
        />
        <Card3
          img={money}
          title="Secure Income"
          content="We make sure you get paid."
        />
        <Card3
          img={dollar}
          title="Set Your Price"
          content="No limitations on what you can earn."
        />
        <Card3
          img={chat}
          title="24/7 Support"
          content="We make sure all your issues are solved."
        />
        <Card3
          img={chart}
          title="Improve your teaching"
          content="We take care of administration, you just focus on the lessons."
        />
      </div>
    </>
  );
};

export default Grid3;
