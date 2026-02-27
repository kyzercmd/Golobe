import { Hero } from "./Hero";
import { FindDestinationSearch } from "./FindDestinationSearch";
import { RecentSearches } from "./RecentSearches";
import { TravelDestinations } from "./TravelDestinations";
import { TravelDemo } from "./TravelDemo";
import { Newsletter } from "../../components/newsletter/Newsletter";

export const Home = () => {
  return (
    <>
      <Hero />
      <div className="z-50 relative -mt-18">
        <FindDestinationSearch />
      </div>
      <RecentSearches />
      <TravelDestinations />
      <TravelDemo />
      <div className="z-50 relative -mb-37.75">
        <Newsletter />
      </div>
    </>
  );
};
