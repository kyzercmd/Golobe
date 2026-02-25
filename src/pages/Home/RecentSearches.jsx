import turkey from "../../assets/DestinationImages/turkey.jpg";
import australia from "../../assets/DestinationImages/australia.jpg";
import azerbaijan from "../../assets/DestinationImages/azerbaijan.jpg";
import maldives from "../../assets/DestinationImages/maldives.jpg";

export const RecentSearches = () => {
  return (
    <>
      <div className="max-w-308 mx-auto flex flex-col gap-8 my-16 px-5 xl:px-0">
        <div>
          <h1 className="font-bold text-[32px] text-black">
            Your recent searches
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex gap-2 items-center ">
            <img src={turkey} className="w-22.5 h-22.5 rounded-lg"></img>
            <div className="flex flex-col">
              <h1 className="text-[#112211] font-semibold">Istanbul, Turkey</h1>
              <p className="text-[#112211]/75 text-[12px]">325 places</p>
            </div>
          </div>
          <div className="flex gap-2 items-center ">
            <img src={australia} className="w-22.5 h-22.5 rounded-lg"></img>
            <div className="flex flex-col">
              <h1 className="text-[#112211] font-semibold">
                Sydney, Australia
              </h1>
              <p className="text-[#112211]/75 text-[12px]">325 places</p>
            </div>
          </div>
          <div className="flex gap-2 items-center ">
            <img src={azerbaijan} className="w-22.5 h-22.5 rounded-lg"></img>
            <div className="flex flex-col">
              <h1 className="text-[#112211] font-semibold">Baku, Azerbaijan</h1>
              <p className="text-[#112211]/75 text-[12px]">325 places</p>
            </div>
          </div>
          <div className="flex gap-2 items-center ">
            <img src={maldives} className="w-22.5 h-22.5 rounded-lg"></img>
            <div className="flex flex-col">
              <h1 className="text-[#112211] font-semibold">Malé, Maldives</h1>
              <p className="text-[#112211]/75 text-[12px]">325 places</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
