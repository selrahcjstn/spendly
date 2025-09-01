import InputWithIcon from "../Inputs/InputWithIcon";
import { Link } from "react-router";
import Button from "../Buttons/Button";
import GoogleButton from "../Buttons/GoogleButton";
import FacebookButton from "../Buttons/FacebookButton";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.message || "Invalid email or password");
        setPassword("");
        return;
      }

      const data = await res.json();
      setMessage(data.message);
      setEmail("");
      setPassword("");
      setError(""); // clear errors
    } catch (err) {
      setError("Something went wrong. Try again.");
      setPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Error block */}
      {error && (
        <div className="w-full bg-red-100 border border-red-500 text-red-600 text-sm px-3 py-2 rounded-md">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-4">
        <InputWithIcon
          type="email"
          placeholder="Enter your email"
          isRequired={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={error ? "border-red-500 bg-red-50" : ""}
        />

        <InputWithIcon
          type="password"
          placeholder="Enter your password"
          isRequired={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={error ? "border-red-500 bg-red-50" : ""}
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
