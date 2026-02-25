import HeroBgwebp from "../../assets/herobg.webp";
import HeroBgjpg from "../../assets/herobg.jpg";

export const Hero = () => {
  return (
    <>
      <div className="max-w-360 mx-auto">
        <div className="relative">
          <picture>
            <source srcSet={HeroBgwebp} type="image/webp"></source>
            <img
              className="object-cover md:h-156 sm:h-100 h-90 w-full"
              src={HeroBgjpg}
              alt="Traveling Commodities"
            ></img>
          </picture>
          <div className="absolute inset-0 bg-linear-to-r from-[#00234D]/63 to-[#00234D]/0"></div>
          <div className="absolute inset-0 flex flex-col md:mx-31.5 mx-10 my-20 gap-2 h-50.75 max-w-110">
            <h1 className="font-bold md:text-[45px] text-3xl  text-white">
              Make your travel whishlist, we’ll do the rest
            </h1>
            <p className="text-white font-medium md:text-[20px] text-base">
              Special offers to suit your plan
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
