import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import Footer from "../components/Footer";
import "./AccountPage.css";

const AccountPage = () => {
  return (
    <div className="accountpage">
      <FrameComponent3 />
      <FrameComponent4 />
      <Footer frameDivOverflowX="unset" />
    </div>
  );
};

export default AccountPage;
