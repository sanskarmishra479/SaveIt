const NewSearch = () => {
  return (
    <div className="flex items-center justify-center w-full">
            <div className="flex flex-col max-w-170 w-full">
      {/* Container Chat Options */}
      <div className="relative flex rounded-[16px] p-[1.5px] overflow-hidden bg-gradient-to-br from-[#7e7e7e] to-[#363636]">
        {/* Glow Effect */}
        <div className="absolute top-[-10px] left-[-10px] w-[50px] h-[35px] bg-[radial-gradient(ellipse_at_center,_#ffffff,_rgba(255,255,255,0.3),_rgba(255,255,255,0.1),_transparent)] blur-md pointer-events-none" />

        <div className="flex flex-col w-full bg-black/50 rounded-[15px] overflow-hidden">
          {/* Textarea */}
          <div className="relative flex">
            <textarea
              id="chat_bot"
              name="chat_bot"
              placeholder="search something✦˚"
              className="bg-transparent rounded-[16px] border-none w-full h-[50px] text-white font-sans text-[12px] font-normal p-[10px] resize-none outline-none placeholder:text-[#f3f6fd] focus:placeholder:text-[#363636] scrollbar-thin scrollbar-thumb-[#888] scrollbar-thumb-rounded-md hover:scrollbar-thumb-[#555]"
            />
          </div>

          {/* Options */}
          <div className="flex justify-between items-end p-[10px]">
            {/* Add Buttons */}
            <div className="flex gap-2">
              {[...Array(3)].map((_, index) => (
                <button
                  key={index}
                  className="flex text-white/40 hover:text-white transition-all hover:-translate-y-1"
                >
                  {index === 0 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      viewBox="0 0 24 24"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm0 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0-8h6m-3-3v6" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg
                      viewBox="0 0 24 24"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.01 8.01 0 0 0 5.648 6.667M10.03 13c.151 2.439.848 4.73 1.97 6.752A15.9 15.9 0 0 0 13.97 13zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.01 8.01 0 0 0 19.938 13M4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333A8.01 8.01 0 0 0 4.062 11m5.969 0h3.938A15.9 15.9 0 0 0 12 4.248A15.9 15.9 0 0 0 10.03 11m4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.01 8.01 0 0 0-5.648-6.667" />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* Submit Button */}
            <button className="flex p-[2px] bg-gradient-to-t from-[#292929] via-[#555555] to-[#292929] rounded-[10px] shadow-inner border-none outline-none transition-all active:scale-95 group">
              <i className="w-[30px] h-[30px] p-[6px] bg-black/10 rounded-[10px] backdrop-blur text-[#8b8b8b] flex items-center justify-center">
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-full hover:text-[#f3f6fd] h-full transition-all group-hover:drop-shadow-[0_0_5px_white] group-focus:scale-125 group-focus:rotate-[45deg] group-focus:translate-x-[-2px] group-focus:translate-y-[1px]">
                  <path d="M473 39.05a24 24 0 0 0-25.5-5.46L47.47 185h-.08a24 24 0 0 0 1 45.16l.41.13l137.3 58.63a16 16 0 0 0 15.54-3.59L422 80a7.07 7.07 0 0 1 10 10L226.66 310.26a16 16 0 0 0-3.59 15.54l58.65 137.38c.06.2.12.38.19.57c3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0 0 23-15.46L478.39 64.62A24 24 0 0 0 473 39.05" />
                </svg>
              </i>
            </button>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="pt-[14px] flex text-white text-[10px] gap-[4px]">
        {["Find my first saveIT", "Analyse Data", "More"].map((tag, index) => (
          <span
            key={index}
            className="px-[8px] py-[4px] bg-[#1b1b1b] border border-[#363636] rounded-[10px] cursor-pointer select-none"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default NewSearch;
