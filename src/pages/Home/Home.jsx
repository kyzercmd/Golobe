import { Header } from "../../components/header/Header";
import { Hero } from "./Hero";
import { FindDestinationSearch } from "./FindDestinationSearch";
import { RecentSearches } from "./RecentSearches";
import { TravelDestinations } from "./TravelDestinations";

export const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="z-50 relative -mt-18">
        <FindDestinationSearch />
      </div>
      <RecentSearches />
      <TravelDestinations />
    </div>
  );
};
