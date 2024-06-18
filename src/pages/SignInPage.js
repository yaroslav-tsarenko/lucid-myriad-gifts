import Header1 from "../components/Header1";
import SignInContainer from "../components/SignInContainer";
import Footer from "../components/Footer";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="signinpage">
      <Header1
        logoAlignSelf="unset"
        logoOverflow="unset"
        logoWidth="1920px"
        logoOverflowX="auto"
      />
      <main className="content1">
        <SignInContainer />
        <Footer frameDivOverflowX="auto" />
      </main>
    </div>
  );
};

export default SignInPage;
