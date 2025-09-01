import { Link } from "react-router";

import LoginForm from "../../components/Auth/LoginForm";

function LoginSection() {
  return (
    <div className="flex flex-col py-16 h-full max-w-md ">
      <h2 className="font-medium">Spendify</h2>
      <div className="space-y-6 my-auto">
        <div>
          <h2 className="font-semibold">Welcome Back!</h2>
          <p>
            Sign in to access your dashboard and manage your finances with ease.
          </p>
        </div>

        <LoginForm />
        <div className="flex justify-center w-full">
          <p>
            Don't have an account?{" "}
            <Link className="text-[#3D6957] font-semibold">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginSection;
