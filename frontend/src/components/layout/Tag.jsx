function Tag({ text, variant }) {
  const baseClasses = "rounded-full px-4 py-1 capitalize font-medium text-xs";

  const variantClasses = {
    primary: "bg-[#3D6957] text-[#EAF3EF]",
    secondary: "bg-[#FFFFFF] text-[#3D6957] border-[#D1D5DB] border-1",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>{text}</div>
  );
}

export default Tag;
