import ContainerLayout from "../../components/LandingPageLayout/ContainerLayout";
import Tag from "../../components/LandingPageLayout/Tag";
import FeatureCard from "../../components/LandingPageLayout/FeatureCard";
import SectionLayout from "../../components/LandingPageLayout/SectionLayout";

import { FiEdit3, FiUserCheck, FiPieChart } from "react-icons/fi";

const steps = [
  {
    icon: FiEdit3,
    title: "Record Expenses",
    description:
      "Quickly add, edit, or delete expenses with amount, description, and date — everything updates instantly.",
    button: false,
  },
  {
    icon: FiUserCheck,
    title: "Manage Accounts",
    description:
      "Track spending across personal or shared accounts and keep everything organized in one place.",
    button: false,
  },
  {
    icon: FiPieChart,
    title: "Analyze & Improve",
    description:
      "Get totals, categories, and insights with simple charts — helping you make smarter financial decisions.",
    button: false,
  },
];

function Steps() {
  return (
    <SectionLayout color={"white"}>
      <ContainerLayout color={"#263D3C"}>
        <Tag text={"HOW IT WORKS"} variant={"secondary"} />

        <div className="flex justify-center mb-8">
          <h2 className="dark-h2 text-center font-semibold">
            Smarter Expense Tracking in 3 Easy Steps
          </h2>
        </div>

        <div className="flex gap-4">
          {steps.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              button={item.button}
            />
          ))}
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}

export default Steps;
