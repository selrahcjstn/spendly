function Button({ text, variant, onClick, className }) {
  const baseClasses =
    "rounded-lg px-6 py-3 font-medium text-base cursor-pointer transition-transform duration-300 ease-in-out hover:scale-103 whitespace-nowrap";

  const variantClasses = {
    primary: "primary-button",
    secondary: "secondary-button",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
