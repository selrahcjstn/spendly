function Tag({ text, variant }) {
  const baseClasses =
    "rounded-full  px-4 py-2 capitalize font-semibold text-xs";

  const variantClasses = {
    primary: "bg-[#3D6957] text-[#EAF3EF]",
    secondary: "bg-[#FFFFFF] text-[#3D6957] border-[#3D6957] border-1",
  };

  return (
    <div className="flex justify-center">
      <div className={`${baseClasses} ${variantClasses[variant]}`}>{text}</div>
    </div>
  );
}

export default Tag;
