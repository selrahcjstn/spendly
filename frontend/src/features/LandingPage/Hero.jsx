import SectinLayout from "../../components/LandingPageLayout/SectionLayout";
import Tag from "../../components/LandingPageLayout/Tag";
import Button from "../../components/Buttons/Button";
import ContainerLayout from "../../components/LandingPageLayout/ContainerLayout";
import HeroInfo from "./HeroInfo";

function Hero() {
  return (
    <SectinLayout color={"#F0F0F0"}>
      <Tag text={"SMART EXPENSES TRACKING"} variant={"secondary"} />
      <div className="leading-tight text-center flex flex-col items-center gap-6 max-w-4xl">
        <h1 className="light-h1 text-5xl font-semibold ">
          Take Full Control of Your Expenses and Make Smarter Financial
          Decisions Every Day
        </h1>
        <p className="light-p hero-size-p max-w-2xl">
          Easily manage your money with smart expense tracking, clear reports,
          and powerful tools to stay organized and make confident financial
          decisions.
        </p>
      </div>
      <div className="space-x-6 mt-2">
        <Button text={"Start Tracking Today"} variant={"primary"} />
        <Button text={"Discover Features"} variant={"secondary"} />
      </div>
      <ContainerLayout>
        <HeroInfo />
      </ContainerLayout>
    </SectinLayout>
  );
}

export default Hero;
