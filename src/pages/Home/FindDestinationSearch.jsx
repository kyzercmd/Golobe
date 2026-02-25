import Bed from "../../assets/ion_bed.svg";
import Calendar from "../../assets/calendar.svg";
import Person from "../../assets/User.svg";
import Plus from "../../assets/plus.svg";
import Extend from "../../assets/extend.svg";
import Building from "../../assets/building.svg";

export const FindDestinationSearch = () => {
  return (
    <>
      <div className="max-w-308 mx-auto flex flex-col gap-6 py-8 px-6 rounded-2xl shadow-[0px_4px_16px_0px_rgba(17,34,17,0.05)] bg-white">
        <div>
          <h1 className="font-semibold sm:text-[20px] text-base text-[#112211]">
            Where are you flying?
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr] gap-4">
          <div className=" relative border border-[#79747E] rounded-sm p-2 flex items-center">
            <label className="absolute -top-3 left-3 px-1 bg-white text-[14px] font-medium text-[#1C1B1F]">
              Enter Destination
            </label>
            <img src={Bed} className="w-6 h-6 m-2"></img>
            <p className="text-[#1C1B1F] mr-2">Istanbul, Turkey</p>
          </div>
          <div className="relative border border-[#79747E] rounded-sm p-2 flex items-center justify-between">
            <label className="absolute -top-3 left-3 px-1 bg-white text-[14px] font-medium text-[#1C1B1F]">
              Check In
            </label>
            <p className="text-[#1C1B1F] ml-2">Fri 12/2</p>
            <img src={Calendar} className="w-6 h-6 mr-2 my-2"></img>
          </div>
          <div className=" relative border border-[#79747E] rounded-sm p-2 flex items-center justify-between">
            <label className="absolute -top-3 left-3 px-1 bg-white text-[14px] font-medium text-[#1C1B1F]">
              Check Out
            </label>
            <p className="text-[#1C1B1F] ml-2">Sun 12/4</p>
            <img src={Calendar} className="w-6 h-6 mr-2 my-2"></img>
          </div>
          <div className="relative border border-[#79747E] rounded-sm p-2 flex items-center justify-between">
            <label className="absolute -top-3 left-3 px-1 bg-white text-[14px] font-medium text-[#1C1B1F]">
              Rooms & Guests
            </label>
            <div className="flex items-center">
              <img src={Person} className="w-6 h-6 m-2"></img>
              <p className="text-[#1C1B1F] truncate">1 room, 2 guests</p>
            </div>

            <img src={Extend} className="w-6 h-6 m-2"></img>
          </div>
        </div>
        <div className="flex justify-end sm:gap-6 flex-col sm:flex-row">
          <div className="flex gap-1 py-3 items-center rounded-sm justify-center">
            <img src={Plus} className="w-6 h-6"></img>
            <p className="text-[14px] text-[#112211] font-medium">
              Add Promo Code
            </p>
          </div>
          <div className="flex gap-1 items-center px-4 py-3 bg-[#8DD3BB] rounded-sm justify-center">
            <img src={Building} className="w-6 h-6"></img>
            <p className="text-[14px] text-[#112211] font-medium">
              Show Places
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
