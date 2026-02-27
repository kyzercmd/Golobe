import destinationData from "../../data/destinationData.json";
import { useState } from "react";
import { DestinationCard } from "../../components/destinationCard/DestinationCard";

export const TravelDestinations = () => {
  const [destinations, setDestinations] = useState([]);

  //import from json and set it to destinations state
  useState(() => {
    setDestinations(destinationData);
  }, []);

  return (
    <section className="xl:max-w-308 max-w-11/12 mx-auto flex flex-col gap-6 ">
      <div className="flex justify-between items-center gap-4">
        <div className="max-w-215 flex flex-col md:gap-4 gap-1">
          <h1 className="md:text-[32px] text-2xl font-bold text-black">
            Fall into travel
          </h1>
          <p className="md:text-base text-sm text-black">
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, we’ve got the travel tools to get you to your
            destination.
          </p>
        </div>
        <div className="border border-[#8DD3BB] w-20 h-10 flex justify-center rounded-sm shrink-0">
          <button className="text-[14px] text-[#112211] font-medium">
            See All
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} data={destination} />
        ))}
      </div>
    </section>
  );
};
