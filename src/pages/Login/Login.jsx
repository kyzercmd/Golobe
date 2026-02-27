import logo from "../../assets/Logo.svg";
import authjpg from "../../assets/authjpg.jpg";
import authwebp from "../../assets/authwebp.webp";
import eyeoff from "../../assets/eye-off.svg";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import bullets from "../../assets/bullets.svg";

export const Login = () => {
  return (
    <section className="min-h-screen overflow-hidden max-w-full mx-auto py-26 flex justify-between bg-white">
      <div className="lg:w-1/2 w-full md:px-26 px-10 mx-auto">
        <img src={logo}></img>
        <div className="mt-16">
          <div className="flex flex-col gap-4">
            <h1 className="text-[40px] font-bold text-black">Login</h1>
            <p className="text-base text-[#112211]/75 ">
              Login to access your Golobe account
            </p>
          </div>
          <div className="flex flex-col gap-10 mt-12">
            <div className="flex flex-col gap-6 ">
              <div className="relative border border-[#79747E] rounded-sm p-2 flex items-center">
                <label className="absolute -top-4 left-4 p-1 bg-white text-sm font-medium text-[#1C1B1F]">
                  Email
                </label>
                <input
                  type="email"
                  autoComplete="off"
                  placeholder="john.doe@gmail.com"
                  className="text-[#1C1B1F] placeholder-[#1C1B1F] py-2 pl-3 w-full focus:outline-0"
                ></input>
              </div>
              <div className="relative border border-[#79747E] rounded-sm p-2 flex items-center">
                <label className="absolute -top-4 left-4 p-1 bg-white text-sm font-medium text-[#1C1B1F]">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="•••••••••••••••••••••••••"
                  className="text-[#1C1B1F] placeholder-[#1C1B1F] py-2 pl-3 w-full focus:outline-0"
                ></input>
                <img src={eyeoff} className="p-2"></img>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-4.5 h-4.5 appearance-none border-2 rounded-sm border-[#112211]"
                  ></input>
                  <p className="font-medium text-sm text-[#112211]">
                    Remember me
                  </p>
                </div>
                <p className="text-[#FF8682] font-medium text-sm">
                  Forgot Password
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <button className="bg-[#8DD3BB] rounded-sm font-semibold text-sm text-[#112211} p-3">
                Login
              </button>
              <p className="text-center text-[#112211] font-medium text-sm">
                Don't have an account?{" "}
                <span className="text-center font-semibold text-[#FF8682]">
                  Sign up
                </span>
              </p>
            </div>
            <div className="flex items-center w-full gap-4">
              <div className="flex-1 border-t border-[#112211]/25"></div>
              <span className="text-[#112211]/50 text-sm">Or login with</span>
              <div className="flex-1 border-t border-[#112211]/25"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="border py-4 flex justify-center rounded-sm border-[#8DD3BB]">
                <img src={facebook}></img>
              </div>
              <div className="border py-4 flex justify-center rounded-sm border-[#8DD3BB]">
                <img src={google}></img>
              </div>
              <div className="border py-4 flex justify-center rounded-sm border-[#8DD3BB]">
                <img src={apple}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block w-1/2 min-h-screen overflow-hidden rounded-[30px] lg:mr-25.5 mr-5">
        <picture>
          <source srcSet={authwebp} type="image/webp"></source>
          <img
            className="object-cover h-full text-[0px]"
            src={authjpg}
            alt="Luxury Hotels and Resorts"
          ></img>
        </picture>
        <div className="absolute inset-x-0 mx-auto bottom-6 flex justify-center">
          <img src={bullets} className="w-17 h-2.5"></img>
        </div>
      </div>
    </section>
  );
};
