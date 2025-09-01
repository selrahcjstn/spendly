import dev from "../../assets/profile/dev.jpg";

function DevelopersImageContainer() {
  return (
    <div className="flex justify-center items-center flex-col text-center">
      <div className="bg-gray-200 w-12 h-12 border-1 overflow-hidden rounded-full">
        <img src={dev} alt="dev-image" className="object-cover" />
      </div>
      <div>
        <h3 className="font-semibold">Charles Justine Mantes</h3>
        <p>Developer & Owner</p>
      </div>
    </div>
  );
}

export default DevelopersImageContainer;
