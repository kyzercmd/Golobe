import Logo from "../../assets/Logo.svg";
import Airplane from "../../assets/airplane.svg";
import Bed from "../../assets/ion_bed.svg";
import Heart from "../../assets/heart.svg";
import Profile from "../../assets/Ellipse.png";

export const Header = () => {
  return (
    <>
      <div className="shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)]">
        <div className="max-w-360 lg:px-26 flex mx-auto justify-between h-19.25 border-t-[5px] border-transparent ">
          <div className="flex gap-8">
            <div className="flex gap-1 items-center">
              <img className="w-6 h-6" src={Airplane}></img>
              <h1 className="font-semibold text-[14px]">Find Flight</h1>
            </div>
            <div className="flex gap-1 items-center border-b-[5px] border-[#8DD3BB]">
              <img className="w-6 h-6" src={Bed}></img>
              <h1 className="font-semibold text-[14px]">Find Stays</h1>
            </div>
          </div>
          <div className="items-center flex">
            <img src={Logo}></img>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-1">
              <img className="w-6 h-6" src={Heart}></img>
              <h1 className="font-semibold text-[14px]">Favourites</h1>
            </div>
            <div>|</div>
            <div className="gap-1 flex items-center">
              <div className="relative">
                <img
                  className="w-11.5 h-11.5 object-cover rounded-full"
                  src={Profile}
                ></img>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  className="absolute inset-8"
                >
                  <circle cx="7" cy="7" r="5.6" fill="#112211" />
                  <path
                    fill="#ff8682"
                    d="M1.313 7a5.688 5.688 0 1 0 11.375 0A5.688 5.688 0 0 0 1.313 7m8.003-.966a.438.438 0 1 1 .618.619L7.31 9.278a.44.44 0 0 1-.618 0L4.066 6.653a.438.438 0 0 1 .618-.619L7 8.35z"
                  />
                </svg>
              </div>

              <h1 className="text-[14px] font-semibold">John D.</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
