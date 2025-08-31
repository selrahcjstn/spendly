import SectinLayout from "../../components/LandingPageLayout/SectionLayout";
import Tag from "../../components/LandingPageLayout/Tag";
import FeatureItems from "./FeatureItems";

function Features() {
  return (
    <SectinLayout>
      <div className="flex flex-col items-center justify-center gap-6 text-center ">
        <Tag text={"FEATURES"} variant={"secondary"} />
        <h2 className="max-w-4xl text-center font-semibold">
          Track Your Spending Smarter With a Simple and Reliable Platform Built
          for Everyday Use
        </h2>
        <p className="max-w-2xl">
          From managing multiple accounts to keeping every expense organized,
          our platform makes tracking simple, accurate, and effortless.
        </p>
      </div>
      <>
        <FeatureItems />
      </>
    </SectinLayout>
  );
}

export default Features;
