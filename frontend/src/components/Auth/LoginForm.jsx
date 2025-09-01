import InputWithIcon from "../Inputs/InputWithIcon";
import { Link } from "react-router";
import Button from "../Buttons/Button";
import GoogleButton from "../Buttons/GoogleButton";
import FacebookButton from "../Buttons/FacebookButton";

function LoginForm() {
  return (
    <form action="" className=" space-y-4 ">
      <div className="flex flex-col gap-4">
        <InputWithIcon
          type={"email"}
          placeholder={"Enter your email"}
          isRequired={true}
        />
        <InputWithIcon
          type={"password"}
          placeholder={"Enter your password"}
          isRequired={true}
        />
        <Link className="text-[#477471] self-end hover:text-[#2f4f4c] transition-colors duration-300">
          Forgot password?
        </Link>
      </div>
      <div className="flex flex-col w-full gap-2">
        <Button variant="primary" text="Sign in" className="w-full" />
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-400">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <div className="space-y-4">
          <GoogleButton />
          <FacebookButton />
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
