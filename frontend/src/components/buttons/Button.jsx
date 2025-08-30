function Button({ text, variant, onClick }) {
  const baseClasses =
    "rounded-lg px-5 py-2 font-medium text-base cursor-pointer transition-transform duration-300 ease-in-out hover:scale-103";

  const variantClasses = {
    primary: "primary-button",
    secondary: "secondary-button",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
