import Header1 from "../components/Header1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import Footer from "../components/Footer";
import "./PaymentPage.css";

const PaymentPage = () => {
  return (
    <div className="paymentpage">
      <Header1 />
      <section className="footer-container">
        <div className="left-content">
          <FrameComponent2 />
        </div>
        <div className="rectangle-parent">
          <div className="frame-child" />
          <FrameComponent1 />
        </div>
      </section>
      <Footer frameDivOverflowX="unset" />
    </div>
  );
};

export default PaymentPage;
