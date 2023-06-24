import { useState } from "react";
import { UserAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <form
      className="flex flex-col gap-2 bg-white p-8 rounded-3xl"
      onSubmit={handleSubmit}
    >
      <label htmlFor="">Email address</label>
      <input
        type="email"
        placeholder="johndoe@gmail.com"
        className="px-3 py-2 mb-2 bg-[#EAEAEA] rounded-[10px]"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="" className="font-normal">
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        className="px-3 py-2 bg-[#EAEAEA] rounded-[10px]"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="font-montserrat font-bold bg-black text-white px-3 py-2 mt-3 rounded-[10px]"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
