const LoginCard = () => {
  return (
    <form className="flex flex-col gap-2 bg-white p-8 rounded-3xl">
      <label htmlFor="">Email address</label>
      <input
        type="email"
        placeholder="johndoe@gmail.com"
        className="px-3 py-2 mb-2 bg-[#EAEAEA] rounded-[10px]"
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
      />
      <a href="" className="my-2 text-[#346BD4]">Forgot password?</a>
      <button type="submit" className="font-montserrat font-bold bg-black text-white px-3 py-2 rounded-[10px]">Sign In</button>
    </form>
  );
};

export default LoginCard;
