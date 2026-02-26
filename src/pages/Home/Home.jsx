import { Header } from "../../components/header/Header";
import { Hero } from "./Hero";
import { FindDestinationSearch } from "./FindDestinationSearch";
import { RecentSearches } from "./RecentSearches";
import { TravelDestinations } from "./TravelDestinations";
import { TravelDemo } from "./TravelDemo";
import { Newsletter } from "../../components/newsletter/Newsletter";
import { Footer } from "../../components/footer/Footer";

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
      <TravelDemo />
      <div className="z-50 relative -mb-37.75">
        <Newsletter />
      </div>

      <Footer />
    </div>
  );
};
