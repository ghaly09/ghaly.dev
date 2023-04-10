export const Home = () => {
  return (
    <header id="home">
      <div className="flex flex-col-reverse sm:flex-row px-5 lg:px-0 justify-between items-center pb-10 pt-40">
        <div>
          <h2 className="text-2xl md:text-5xl text-white font-bold">Hi!</h2>
          <h2 className="text-3xl md:text-6xl text-white font-bold pb-3">
            You can call me{" "}
            <span className="font-ghaly ghaly-effect text-transparent focus:text-transparent bg-clip-text bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)]">
              Ghaly
            </span>
          </h2>
          <p className="flex flex-col lg:flex-row md:gap-2 text-sm md:text-xl pb-5 text-white font-base font-sans">
            A Longlife Learner who wants to be a{" "}
            <span className=" font-semibold">Software Engineer</span>
          </p>
        </div>
        <div>
          <img
            className="rounded-full w-40 md:w-60"
            src="https://user-images.githubusercontent.com/60167960/229064336-e6364277-1604-437d-9300-a9453692f7b3.jpg"
            alt="foto-profil-ghaly"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          className="h-8 w-8 animate-bounce md:h-10 md:w-10 text-slate-200"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="M112 268l144 144 144-144M256 392V100"
          ></path>
        </svg>
      </div>
    </header>
  );
};
