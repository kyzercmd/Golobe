import demo1 from "../../assets/DestinationImages/demo1.jpg";
import demo2 from "../../assets/DestinationImages/demo2.jpg";
import demo3 from "../../assets/DestinationImages/demo3.jpg";
import demo4 from "../../assets/DestinationImages/demo4.jpg";

export const TravelDemo = () => {
  return (
    <>
      <div className="xl:max-w-308 max-w-11/12 mx-auto gap-6 flex flex-col mt-20 mb-30">
        {/* Headline texts and button */}
        <div className="flex justify-between items-center gap-4 ">
          <div className="max-w-282 flex flex-col md:gap-4 gap-1">
            <h1 className="font-semibold md:text-[32px] text-2xl text-black">
              Fall into travel
            </h1>
            <p className="md:text-[16px] text-sm text-black">
              Going somewhere to celebrate this season? Whether you’re going
              home or somewhere to roam, we’ve got the travel tools to get you
              to your destination.
            </p>
          </div>
          <div className="border border-[#8DD3BB] rounded-sm flex w-20 h-10 justify-center shrink-0">
            <button className="text-[#112211] text-sm font-medium">
              See All
            </button>
          </div>
        </div>
        {/* Cards */}
        <div className="flex gap-6 flex-col lg:flex-row">
          <div className="lg:max-w-138 max-w-full h-106 p-6 gap-6 flex flex-col bg-[#8DD3BB] rounded-[20px]">
            <div className="flex justify-between">
              <h1 className="font-bold md:text-[40px] text-2xl  text-[#112211] max-w-90.75">
                Backpacking Sri Lanka
              </h1>
              <div className="w-17 h-15.5 flex flex-col p-2 bg-white rounded-lg">
                <p className="text-[14px] text-[#112211] text-center">From</p>
                <p className="font-semibold text-[#112211] md:text-[20px] text-base text-center">
                  $700
                </p>
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-between">
              <div>
                <p className="text-[14px] text-[#112211]">
                  Traveling is a unique experience as it's the best way to
                  unplug from the pushes and pulls of daily life. It helps us to
                  forget about our problems, frustrations, and fears at home.
                  During our journey, we experience life in different ways. We
                  explore new places, cultures, cuisines, traditions, and ways
                  of living.
                </p>
              </div>
              <div className="w-full bg-white rounded-sm py-3 px-4 flex justify-center">
                <button className="font-medium text-sm text-[#112211]">
                  Book Flight
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 justify-items-center">
            <div className="w-full max-w-79.5 max-h-50 overflow-hidden rounded-xl">
              <img
                src={demo1}
                className="object-cover object-center w-full h-full text-[0px]"
                alt="Travel to Sri Lanka"
              ></img>
            </div>
            <div className="w-full max-w-79.5 max-h-50 overflow-hidden rounded-xl">
              <img
                src={demo2}
                className="object-cover object-center w-full h-full text-[0px]"
                alt="Travel to Sri Lanka"
              ></img>
            </div>
            <div className="w-full max-w-79.5 max-h-50 overflow-hidden rounded-xl">
              <img
                src={demo3}
                className="object-cover object-center w-full h-full text-[0px]"
                alt="Travel to Sri Lanka"
              ></img>
            </div>
            <div className="w-full max-w-79.5 max-h-50 overflow-hidden rounded-xl">
              <img
                src={demo4}
                className="object-cover object-center w-full h-full text-[0px]"
                alt="Travel to Sri Lanka"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
