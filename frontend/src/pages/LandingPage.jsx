import Header from "../features/landing_page/Header";
import Hero from "../features/landing_page/Hero";
function LandingPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-md border-b border-white/30 z-50">
        <Header />
      </nav>
      <main className="mt-20">
        <Hero />
      </main>
    </>
  );
}

export default LandingPage;
