import { MdOutlineEmail } from "react-icons/md";

function InputWithIcon({ type, placeholder, isRequired }) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={type}
        className="font-semibold mb-1 capitalize text-[#3D6957]"
      >
        {type}
      </label>

      <div className="flex items-center border-2 border-[#e0e0e0] rounded-lg z-100 focus-within:border-[#3D6957]">
        <span className="px-2">
          <MdOutlineEmail className="text-2xl text-[#3D6957]" />
        </span>

        <input
          type={type}
          name={type}
          placeholder={placeholder}
          required={isRequired}
          className="w-full font-medium py-3 px-2 outline-none text-[#282828] placeholder:text-[#9e9e9e]"
        />
      </div>
    </div>
  );
}

export default InputWithIcon;
