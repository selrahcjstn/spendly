import LoginSection from "../features/Auth/LoginSection";

function Login() {
  return (
    <div className="grid grid-cols-2 h-screen w-full bg-white">
      <div className="flex items-center justify-center">
        <LoginSection />
      </div>

      <div className="bg-[#EAF3EF] flex items-center justify-center">
        <h2 className="text-[#3D6957] font-bold text-2xl">
          Welcome to Spendify
        </h2>
      </div>
    </div>
  );
}

export default Login;
