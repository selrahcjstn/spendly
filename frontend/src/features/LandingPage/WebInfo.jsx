import ContainerLayout from "../../components/LandingPageLayout/ContainerLayout";
import SectionLayout from "../../components/LandingPageLayout/SectionLayout";
import WebInfoCard from "../../components/LandingPageLayout/WebInfoCard";

function WebInfo() {
  return (
    <SectionLayout color={"white"}>
      <ContainerLayout color={"#F0F0F0"}>
        <WebInfoCard />
      </ContainerLayout>
    </SectionLayout>
  );
}

export default WebInfo;
