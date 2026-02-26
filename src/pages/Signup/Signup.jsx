import logo from "../../assets/Logo.svg";
import authjpg from "../../assets/authjpg.jpg";
import authwebp from "../../assets/authwebp.webp";
import eyeoff from "../../assets/eye-off.svg";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";

export const Signup = () => {
  return (
    <>
      <div className="min-h-screen overflow-hidden max-w-full mx-auto md:p-26 px-10 py-26 flex justify-between bg-white">
        <div className="h-204 w-121.5 hidden lg:block min-h-screen overflow-hidden rounded-[30px] mr-26.5">
          <picture>
            <source srcSet={authwebp} type="image/webp"></source>
            <img
              className="object-cover h-full w-full"
              src={authjpg}
              alt="Resort"
            ></img>
          </picture>
        </div>
        <div className="lg:w-25/48 w-full mx-auto">
          <img src={logo}></img>
          <div className="mt-16">
            <div className="flex flex-col gap-4">
              <h1 className="text-[40px] font-bold text-black">Sign up</h1>
              <p className="text-base text-[#112211]/75 ">
                Let’s get you all st up so you can access your personal account.
              </p>
            </div>
            <div className="flex flex-col gap-10 mt-12">
              <div className="flex flex-col gap-6 ">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="relative border border-[#79747E] rounded-sm p-2 flex items-center w-full">
                    <label className="absolute -top-4 left-4 p-1 bg-white text-sm font-medium text-[#1C1B1F]">
                      First Name
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      placeholder="john.doe@gmail.com"
                      className="text-[#1C1B1F] placeholder-[#1C1B1F] py-2 pl-3 w-full focus:outline-0"
                    ></input>
                  </div>
                  <div className="relative border border-[#79747E] rounded-sm p-2 flex items-center w-full">
                    <label className="absolute -top-4 left-4 p-1 bg-white text-sm font-medium text-[#1C1B1F]">
                      Last Name
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      placeholder="john.doe@gmail.com"
                      className="text-[#1C1B1F] placeholder-[#1C1B1F] py-2 pl-3 w-full focus:outline-0"
                    ></input>
                  </div>
                </div>
                <div className="flex justify-between flex-col md:flex-row gap-6">
                  <div className="relative border border-[#79747E] rounded-sm p-2 flex items-center w-full">
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
                  <div className="relative border border-[#79747E] rounded-sm p-2 flex items-center w-full">
                    <label className="absolute -top-4 left-4 p-1 bg-white text-sm font-medium text-[#1C1B1F]">
                      Phone Number
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      placeholder="john.doe@gmail.com"
                      className="text-[#1C1B1F] placeholder-[#1C1B1F] py-2 pl-3 w-full focus:outline-0"
                    ></input>
                  </div>
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
                <div className="relative border border-[#79747E] rounded-sm p-2 flex items-center">
                  <label className="absolute -top-4 left-4 p-1 bg-white text-sm font-medium text-[#1C1B1F]">
                    Confirm Password
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
                      className="w-4.5 h-4.5 appearance-none border-2 rounded-sm border-[#112211] shrink-0"
                    ></input>
                    <p className="font-medium text-sm text-[#112211]">
                      I agree to all the{" "}
                      <span className="text-center font-semibold text-[#FF8682]">
                        Terms
                      </span>{" "}
                      and{" "}
                      <span className="text-center font-semibold text-[#FF8682]">
                        Privacy Policies
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <button className="bg-[#8DD3BB] rouned-sm font-semibold text-sm text-[#112211} p-3">
                  Create Account
                </button>
                <p className="text-center text-[#112211] font-medium text-sm">
                  Already have an account?{" "}
                  <span className="text-center font-semibold text-[#FF8682]">
                    Login
                  </span>
                </p>
              </div>
              <div className="flex items-center w-full gap-4">
                <div className="flex-1 border-t border-[#112211]/25"></div>
                <span className="text-[#112211]/50 text-sm">
                  Or Sign up with
                </span>
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
      </div>
    </>
  );
};
