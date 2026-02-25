import mailbox from "../../assets/mailbox.svg";

export const Newsletter = () => {
  return (
    <>
      <div className="max-w-308 mx-auto flex justify-between bg-[#CDEAE1] px-6 rounded-[20px]">
        <div className="flex flex-col gap-4 justify-center">
          <div className="max-w-91">
            <h1 className="text-[#112211] text-[44px] font-bold leading-13.5">
              Subscribe Newsletter
            </h1>
          </div>
          <div className="gap-2 flex flex-col">
            <h1 className="text-[20px], font-bold text-[#112211]/80">
              The Travel
            </h1>
            <p className="font-medium text-base text-[#112211]/70">
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Your email address"
                autoComplete="off"
                className="min-w-118.25 rounded-sm bg-white p-4 text-base placeholder-[#1C1B1F]"
              ></input>
              <button className="bg-[#112211] py-4 px-5 rounded-sm font-semibold text-sm text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <img src={mailbox} className="h-76.25 w-100"></img>
        </div>
      </div>
    </>
  );
};
