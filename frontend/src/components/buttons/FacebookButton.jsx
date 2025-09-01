import { FaFacebook } from "react-icons/fa";

function FacebookButton() {
  return (
    <button
      onClick={() => (window.location.href = "/auth/facebook")} // backend handles OAuth
      className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300"
    >
      <FaFacebook className="text-blue-600 text-2xl" />
      <span className="font-medium text-gray-700">Continue with Facebook</span>
    </button>
  );
}

export default FacebookButton;
