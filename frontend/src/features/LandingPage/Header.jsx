import { useState, useEffect } from "react";
import { Link } from "react-router";
import Button from "../../components/Buttons/Button";

function Header() {
  const headerLinks = ["Home", "Features", "Pricing", "About", "Contact"];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-2xs"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-16">
          <h3 className="text-[24px] text-[#3D6957] font-semibold">Spendify</h3>
          <ul className="flex items-end gap-5 text-[14px] text-[#3D6957] font-semibold">
            {headerLinks.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer hover:bg-[#EAF3EF] px-3 py-1 rounded-xl transition-colors"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="space-x-3">
          <Link to={"/login"}>
            <Button text="Login" variant={"secondary"} />
          </Link>
          <Button text="Sign up" variant={"primary"} />
        </div>
      </div>
    </header>
  );
}

export default Header;
