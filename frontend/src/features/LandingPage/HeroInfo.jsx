import BoxCardLayout from "../../components/LandingPageLayout/BoxCardLayout";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa6";

function HeroInfo() {
  return (
    <>
      <h4 className="light-h4 font-semibold">WHY TRACK WITH US</h4>
      <div className="grid grid-cols-2 ">
        <h2 className="light-h2 font-semibold">
          Securely Manage Multiple Accounts with Confidence
        </h2>
        <p className="light-p">
          Securely manage multiple accounts and record expenses with ease our
          platform keeps everything organized, reliable, and always within
          reach.
        </p>
      </div>
      <div className="flex w-full gap-14 mt-15">
        <BoxCardLayout
          icon={FaUserFriends}
          title="Multiple Accounts"
          desc="Manage personal, business, or shared accounts without switching tools so everything stays in one place."
        />
        <BoxCardLayout
          icon={FaLayerGroup}
          title="Organized Categories"
          desc="Classify expenses into clear categories to understand your spending better and review it at a glance."
        />
        <BoxCardLayout
          icon={IoShieldCheckmark}
          title="Secure & Reliable"
          desc="Your data is always protected with modern security, ensuring your records remain private and available only to you."
        />
      </div>
    </>
  );
}

export default HeroInfo;
