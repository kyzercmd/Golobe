import socials from "../../assets/socials.svg";

export const Footer = () => {
  return (
    <>
      <div className="max-w-360 mx-auto bg-[#8DD3BB]">
        <div className="xl:max-w-308 max-w-11/12 md:grid-cols-3 grid-cols-2 grid xl:grid-cols-6 gap-6 mx-auto pt-54.5 pb-16">
          <div className="">
            <img src={socials}></img>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-[#112211] font-bold">Our Destinations</h1>
            </div>
            <div className="flex flex-col gap-3 text-[#112211]/70 font-medium text-sm">
              <p>Canada</p>
              <p>Alaska</p>
              <p>France</p>
              <p>Ireland</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-[#112211] font-bold">Our Activities</h1>
            </div>
            <div className="flex flex-col gap-3 text-[#112211]/70 font-medium text-sm">
              <p>Northern Lights</p>
              <p>Cruising & Sailing</p>
              <p>Multi-activities</p>
              <p>Kayaing</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-[#112211] font-bold">Travel Blogs</h1>
            </div>
            <div className="flex flex-col gap-3 text-[#112211]/70 font-medium text-sm">
              <p>Bali Travel Guide</p>
              <p>Sri Lanks Travel Guide</p>
              <p>Peru Travel Guide</p>
              <p>Bali Travel Guide</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-[#112211] font-bold">About Us</h1>
            </div>
            <div className="flex flex-col gap-3 text-[#112211]/70 font-medium text-sm">
              <p>Our Story</p>
              <p>Work with us</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-[#112211] font-bold">Contact Us</h1>
            </div>
            <div className="flex flex-col gap-3 text-[#112211]/70 font-medium text-sm">
              <p>Our Story</p>
              <p>Work with us</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
