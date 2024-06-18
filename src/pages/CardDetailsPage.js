import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import Footer from "../components/Footer";
import "./CardDetailsPage.css";
import Header from "../components/custom-header/Header";
import FrameComponent from "../components/FrameComponent";

const CardDetailsPage = () => {
  return (
      <>
          <Header/>
          <div className="carddetailspage">
              <FrameComponent1 checkout="Your Cart"/>
              <FrameComponent2/>
              <Footer/>
          </div>
          <Footer/>
      </>

  );
};

export default CardDetailsPage;
