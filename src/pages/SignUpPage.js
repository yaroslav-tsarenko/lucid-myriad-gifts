import Header1 from "../components/Header1";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signuppage">
      <Header1
        logoAlignSelf="stretch"
        logoOverflow="hidden"
        logoWidth="unset"
        logoOverflowX="unset"
      />
      <main className="content">
        <SignUp />
        <Footer frameDivOverflowX="unset" />
      </main>
    </div>
  );
};

export default SignUpPage;
