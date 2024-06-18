import { Button } from "@mui/material";
import Header from "../components/Header";
import GiftOptions from "../components/GiftOptions";
import FrameComponent3 from "../components/FrameComponent3";
import "./ProductPage.css";
import Footer from "../components/Footer";

const ProductPage = () => {
  return (
      <>
        <Header/>
        <div className="productpage">
          <Header/>
          <section className="productpage-inner">
            <div className="frame-parent">
              <div className="card-design2-parent">
                <div className="card-design2">
                  <div className="card-design2-child"/>
                  <div className="card-design2-inner">
                    <div className="wishdeck-giftcards-parent">
                      <h2 className="wishdeck-giftcards">
                        <p className="wishdeck">WishDeck</p>
                        <p className="giftcards">GiftCards</p>
                      </h2>
                      <div className="usd-100-1000">USD $100 -$1000</div>
                    </div>
                  </div>
                  <img
                      className="pngwing-1-icon"
                      loading="lazy"
                      alt=""
                      src="/pngwing-11@2x.png"
                  />
                </div>
                <div className="helixa-clean-and-modern-parent">
                  <h1 className="helixa-clean-and">Helixa- Clean and modern</h1>
                  <div className="description">
                    <h3 className="description1">Description:</h3>
                    <div className="give-the-gift">
                      Give the gift of choice with our Digital Gift Card, available
                      in denominations of $10, $25, $50, and $100. Perfect for any
                      occasion, our eGift cards are delivered instantly to your
                      recipient's email and can be used both online and in-store.
                      Whether it's for a birthday, anniversary, or just to say thank
                      you, our eGift cards are the perfect solution.
                    </div>
                  </div>
                  <h3 className="valid-for-3">Valid for 3 years</h3>
                  <div className="personalize-buttons">
                    <Button
                        className="icon-buttons"
                        startIcon={
                          <img width="24px" height="24px" src="/icons.svg"/>
                        }
                        disableElevation
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#fff",
                          fontSize: "16",
                          background: "#ea7700",
                          borderRadius: "100px",
                          "&:hover": {background: "#ea7700"},
                          width: 268,
                          height: 48,
                        }}
                    >
                      Personalize your Gift
                    </Button>
                    <Button
                        className="icon-buttons1"
                        startIcon={
                          <img width="24px" height="24px" src="/icons-1.svg"/>
                        }
                        disableElevation
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#fff",
                          fontSize: "16",
                          background: "#ea7700",
                          borderRadius: "100px",
                          "&:hover": {background: "#ea7700"},
                          width: 163,
                          height: 48,
                        }}
                    >
                      Photo
                    </Button>
                    <Button
                        className="icon-buttons2"
                        startIcon={
                          <img width="24px" height="24px" src="/icons-2.svg"/>
                        }
                        disableElevation
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#fff",
                          fontSize: "16",
                          background: "#ea7700",
                          borderRadius: "100px",
                          "&:hover": {background: "#ea7700"},
                          width: 169,
                          height: 48,
                        }}
                    >
                      Videos
                    </Button>
                    <Button
                        className="icon-buttons3"
                        startIcon={
                          <img width="24px" height="24px" src="/icons-3.svg"/>
                        }
                        disableElevation
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#fff",
                          fontSize: "16",
                          background: "#ea7700",
                          borderRadius: "100px",
                          "&:hover": {background: "#ea7700"},
                          width: 186,
                          height: 48,
                        }}
                    >
                      Message
                    </Button>
                  </div>
                </div>
              </div>
              <GiftOptions/>
            </div>
          </section>
          <section className="frame-group">
            <FrameComponent3/>
            <FooterDesktop/>
          </section>
        </div>
        <Footer/>
      </>

  );
};

export default ProductPage;
