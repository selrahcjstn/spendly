import SectionLayout from "../../components/LandingPageLayout/SectionLayout";
import { FiMessageSquare } from "react-icons/fi";
import DevelopersImageContainer from "../../components/LandingPageLayout/DevelopersImageContainer";

function Message() {
  return (
    <SectionLayout color={"white"}>
      <div className="flex flex-col items-center mb-8 text-center">
        <FiMessageSquare className="text-4xl italic mb-4 text-[#3D6957]" />
        <h3 className="italic max-w-4xl mx-auto text-lg leading-relaxed">
          "I created this app to make expense tracking simple and stress-free.
          Whether you’re budgeting as a student, running a household, or
          managing a small business, this app is designed to keep things clear
          and easy. Thank you for supporting this project, it’s built with you
          in mind."
        </h3>
      </div>
      <DevelopersImageContainer />
    </SectionLayout>
  );
}

export default Message;
