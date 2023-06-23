import googleLogo from "../assets/google.svg";
import appleLogo from "../assets/apple.svg";
import LoginCard from "../components/LoginCard";

const Login = () => {
  return (
    <div className="grid grid-cols-3 h-screen">
      <div className="bg-black flex justify-center items-center font-montserrat font-bold text-7xl">
        <div>
          <p className="text-white">Board.</p>
        </div>
      </div>

      <div className="bg-[#F5F5F5] col-span-2 flex items-center justify-center">
        <div className="flex gap-7 flex-col">
          <div>
            <h2 className="text-4xl font-montserrat font-bold">Sign In</h2>
            <p className="font-lato text-base font-normal">
              Sign in to your account
            </p>
          </div>
          <div className="flex gap-6">
            <div className="flex gap-2 bg-white rounded-[10px] px-4 py-2 items-center cursor-pointer" >
              <img src={googleLogo} alt="google icon" />
              <p className="whitespace-nowrap text-xs font-montserrat text-[#858585]">
                Sign in with Google
              </p>
            </div>
            <div className="flex gap-2 bg-white rounded-[10px] px-4 py-2 items-center cursor-pointer">
              <img src={appleLogo} alt="apple logo" />
              <p className="whitespace-nowrap text-xs font-montserrat text-[#858585]">
                Sign in with Apple
              </p>
            </div>
          </div>
          <LoginCard />
          <div>
            <p className="text-center">
              Don’t have an account?{" "}
              <a href="" className="text-[#346BD4]">
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
