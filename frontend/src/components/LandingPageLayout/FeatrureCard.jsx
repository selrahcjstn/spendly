function FeatrureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-[#EAF3EF] space-y-2 px-6 py-6 rounded-lg max-w-sm overflow-hidden">
      <div className="flex items-center gap-4">
        <Icon className="text-[#3D6957] text-4xl" />
        <h3 className="font-medium ">{title}</h3>
      </div>
      <div>
        <p className="subtitle">{description}</p>
      </div>
      <div>
        <button className="text-[#3D6957] font-medium cursor-pointer">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default FeatrureCard;
