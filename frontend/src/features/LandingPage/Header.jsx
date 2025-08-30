import Button from "../../components/Buttons/Button";

function Header() {
  const headerLinks = ["Home", "Features", "Pricing", "About", "Contact"];

  return (
    <>
      <div className="max-w-7xl mx-auto flex items-center justify-between  py-4">
        <div className="flex items-center gap-16">
          <h3 className="text-[24px] text-[#3D6957] font-semibold">Spendify</h3>
          <div>
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
        </div>

        {/* Button */}
        <div className="space-x-2">
          <Button text="Login" variant={"secondary"} />
          <Button text="Sign up" variant={"primary"} />
        </div>
      </div>
    </>
  );
}

export default Header;
