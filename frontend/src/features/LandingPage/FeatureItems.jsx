import FeatureCard from "../../components/LandingPageLayout/FeatureCard";
import {
  FiEdit3,
  FiPieChart,
  FiLayers,
  FiFolder,
  FiLock,
} from "react-icons/fi";
import { TbCoins } from "react-icons/tb";

const features = [
  {
    title: "Quick Expense Recording",
    description:
      "Add expenses in seconds with a simple and intuitive input flow.",
    icon: FiEdit3,
  },
  {
    title: "Total Spending Overview",
    description: "Get a clear summary of all your expenses in one place.",
    icon: TbCoins,
  },
  {
    title: "Visual Expense Graphs",
    description:
      "See your spending trends with easy-to-read charts and graphs.",
    icon: FiPieChart,
  },
  {
    title: "Multi-Account Tracking",
    description: "Manage personal, business, or shared accounts seamlessly.",
    icon: FiLayers,
  },
  {
    title: "Organized Categories",
    description: "Group expenses by category to stay fully organized.",
    icon: FiFolder,
  },
  {
    title: "Secure & Reliable",
    description:
      "Your data is safe with strong encryption and reliable storage.",
    icon: FiLock,
  },
];

function FeatureItems() {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-10">
      {features.map((item, index) => (
        <FeatureCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          button={true}
        />
      ))}
    </div>
  );
}

export default FeatureItems;
