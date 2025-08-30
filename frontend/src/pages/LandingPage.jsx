import Header from "../features/LandingPage/Header";
import Hero from "../features/LandingPage/Hero";
function LandingPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/0 backdrop-blur-md  z-50">
        <Header />
      </nav>
      <main className="mt-20">
        <Hero />
      </main>
    </>
  );
}

export default LandingPage;
