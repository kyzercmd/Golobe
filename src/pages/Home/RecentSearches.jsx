import turkey from "../../assets/DestinationImages/turkey.jpg";
import australia from "../../assets/DestinationImages/australia.jpg";
import azerbaijan from "../../assets/DestinationImages/azerbaijan.jpg";
import maldives from "../../assets/DestinationImages/maldives.jpg";

export const RecentSearches = () => {
  return (
    <section className="xl:max-w-308 max-w-11/12 mx-auto flex flex-col gap-8 my-20 ">
      <div>
        <h1 className="font-bold md:text-[32px] text-2xl text-black">
          Your recent searches
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[auto_auto_auto_auto] justify-between gap-4">
        <div className="flex gap-2 items-center">
          <img
            src={turkey}
            className="w-22.5 h-22.5 rounded-lg text-[0px]"
            alt="Istanbul, Turkey"
          ></img>
          <div className="flex flex-col">
            <h1 className="text-[#112211] font-semibold">Istanbul, Turkey</h1>
            <p className="text-[#112211]/75 text-[12px]">325 places</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <img
            src={australia}
            className="w-22.5 h-22.5 rounded-lg text-[0px]"
            alt="Sydney, Australia"
          ></img>
          <div className="flex flex-col">
            <h1 className="text-[#112211] font-semibold">Sydney, Australia</h1>
            <p className="text-[#112211]/75 text-[12px]">325 places</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <img
            src={azerbaijan}
            className="w-22.5 h-22.5 rounded-lg text-[0px]"
            alt="Baku, Azerbaijan"
          ></img>
          <div className="flex flex-col">
            <h1 className="text-[#112211] font-semibold">Baku, Azerbaijan</h1>
            <p className="text-[#112211]/75 text-[12px]">325 places</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <img
            src={maldives}
            className="w-22.5 h-22.5 rounded-lg text-[0px]"
            alt="Malé, Maldives"
          ></img>
          <div className="flex flex-col">
            <h1 className="text-[#112211] font-semibold">Malé, Maldives</h1>
            <p className="text-[#112211]/75 text-[12px]">325 places</p>
          </div>
        </div>
      </div>
    </section>
  );
};
