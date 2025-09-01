import Header from "../features/LandingPage/Header";
import Hero from "../features/LandingPage/Hero";
import Features from "../features/LandingPage/Features";
import Steps from "../features/LandingPage/Steps";
import Message from "../features/LandingPage/Message";
import WebInfo from "../features/LandingPage/WebInfo";
import FooterField from "../features/LandingPage/FooterField";
import FooterLinks from "../features/LandingPage/FooterLinks";

function LandingPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/0 backdrop-blur-md  z-50">
        <Header />
      </nav>
      <main className="mt-18 bg-red">
        <Hero />
        <Features />
        <Steps />
        <Message />
        <WebInfo />
      </main>
      <footer>
        <FooterField />
        <FooterLinks />
      </footer>
    </>
  );
}

export default LandingPage;
