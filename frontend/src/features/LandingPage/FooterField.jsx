import SectionLayout from "../../components/LandingPageLayout/SectionLayout";
import Button from "../../components/Buttons/Button";

function FooterField() {
  return (
    <SectionLayout color={"#263D3C"}>
      <div className="grid grid-cols-2 gap-6 w-full items-center">
        <h2 className="dark-h2">Tired of messy receipts and expense chaos?</h2>
        <div className="flex justify-between bg-white p-1 rounded-lg">
          <input
            type="text"
            placeholder="Enter your email or phone number"
            className=" px-4 py-4 w-full outline-0 text-[#282828] font-medium"
          />
          <Button text={"Get Started"} variant={"primary"} />
        </div>
      </div>

      <div className="mt-4">
        <p className="dark-p">
          Enter your email or phone number to make managing money fun, simple,
          and stress-free with Spendify’s easy-to-use spend tracker.
        </p>
      </div>
    </SectionLayout>
  );
}

export default FooterField;
