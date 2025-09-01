import { FcGoogle } from "react-icons/fc";

function GoogleButton() {
  return (
    <button
      onClick={() => (window.location.href = "/auth/google")} // redirect to backend
      className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300"
    >
      <FcGoogle className="text-2xl" />
      <span className="font-medium text-gray-700">Continue with Google</span>
    </button>
  );
}

export default GoogleButton;
