export const DestinationCard = ({ data: destination }) => {
  return (
    <>
      <div className="relative h-105 w-74 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="object-cover h-full rounded-xl w-full"
        ></img>

        <div className="w-62 h-27.5 inset-x-0 mx-auto bottom-8 absolute flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <h1 className="text-white font-semibold text-[24px]">
                {destination.name}
              </h1>
              <p className="text-white text-[14px]">
                {destination.description}
              </p>
            </div>
            <div>
              <h1 className="text-white font-semibold text-[24px]">
                $ {destination.price}
              </h1>
            </div>
          </div>
          <div className="bg-[#8DD3BB] rounded-sm px-4 py-3 text-center">
            <button className="text-[#112211] text-[14px] font-medium">
              Book a Hotel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
