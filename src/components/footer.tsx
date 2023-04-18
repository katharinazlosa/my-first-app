import teoremlogo from "./../assets/teoremlogo.png";
import footerimg from "./../assets/footerimg.png";
import stripe from "./../assets/stripe.png";
import diners from "./../assets/diners-club.png";
import maestro from "./../assets/maestro.png";
import mastercard from "./../assets/mastercard.png";
import visa from "./../assets/visa.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__left">
          <div className="footer__left__title">
            <h3>
              <img src={teoremlogo}></img>Teorem
            </h3>
            <p>
              If you have additional questions, feel free to contact us{" "}
              <br></br>
              via email info@teorem.hr
            </p>
          </div>
          <div className="footer__left__column">
            <div className="footer__left__columns">
              <h6>Teorem d.o.o.</h6>
              <p>Address 69, Zagreb</p>
              <p>+385 1 3434 620</p>
              <p>info@teorem.hr</p>
            </div>
            <div className="footer__left__columns">
              <h6>About Teorem</h6>
              <p>Legal notice</p>
              <p>Privacy policy</p>
              <p>Become a tutor</p>
            </div>
            <div className="footer__left__columns">
              <h6>Payment methods</h6>
              <p>Lorem ipsum dolor</p>
              <p>sit amet</p>
              <p>
                <img src={stripe}></img>
                <img src={visa}></img>
                <img src={maestro}></img>
                <img src={diners}></img>
                <img src={mastercard}></img>
              </p>
            </div>
          </div>

          <p className="copyright">&#169; Teorem 2021</p>
        </div>
        <div className="footer__right">
          <img src={footerimg} alt="tablet-photo"></img>
        </div>
      </div>
    </>
  );
};
export default Footer;
