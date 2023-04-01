export const About = (props) => {
  return (
    <header id="about">
      <div className="flex flex-col-reverse sm:flex-row justify-around items-center pb-10 pt-40">
        <div className="mx-4">
          <h2 className="text-3xl text-white font-bold">About</h2>
          <h2 className="text-4xl font-bold pb-3 text-transparent bg-clip-text bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)]">
            Rachmat Ghaly
          </h2>
          <p className="text-lg pb-5 text-slate-300 font-base font-sans">
            I am a final-semester physics student enthusiastic about research,
            teaching, programming, and design activities to build visually
            attractive applications with user-friendly interactions.
            <br />
            <br />
            During my Studies, I had some experience working on graphic design,
            user interface design, and frontend development projects. I also had
            experience working for three years as a physics and mathematics
            tutor for Junior and Senior High schools
            <span className=" font-semibold">Software Engineer</span>
          </p>
        </div>
        <div>
          <img
            className="rounded-full w-40 sm:w-60"
            src="https://user-images.githubusercontent.com/60167960/229064336-e6364277-1604-437d-9300-a9453692f7b3.jpg"
            alt="foto-profil-ghaly"
          />
        </div>
      </div>
    </header>
  );
};
