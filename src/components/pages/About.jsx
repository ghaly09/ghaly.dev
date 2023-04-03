import { Footer } from "../templates/Footer";

export const About = (props) => {
  return (
    <>
      {/* About Me */}
      <header id="about">
        <div className="flex flex-col-reverse md:flex-row gap-5 justify-around items-center px-5 lg:px-0 pb-8 pt-20 md:pt-40">
          <div>
            <h2 className="text-xl lg:text-3xl text-white font-bold">About</h2>
            <h2 className="text-2xl lg:text-4xl font-bold pb-3 text-transparent bg-clip-text bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)]">
              Rachmat Ghaly
            </h2>
            <p className="font-ghaly text-base pb-3 text-[#d3d4d6] ">
              Hello, I'm Ghaly. I am a final-semester physics student
              enthusiastic about research, teaching, programming, and design
              activities to build visually attractive applications with
              user-friendly interactions.{" "}
            </p>
            <p className="font-ghaly text-base pb-4 text-[#d3d4d6] ">
              I started learning web development in January 2022, I've been
              fascinated by how software works and how it can be used to solve
              complex problems and make a positive impact on people's lives. So,
              I decided to make software engineering to be my professional
              field.
              <br />
              Initially, I had no prior experience in web development, but I was
              determined to learn and hone my skills. To achieve this, I turned
              to various learning resources such as YouTube, Coursera, and the
              Ruangguru Bootcamp especially{" "}
              <span className="border-dotted border-b-2 border-[rgb(61,224,102)]">
                frontend development.
              </span>
            </p>

            <p className="font-ghaly text-base pb-4 text-[#d3d4d6] ">
              {" "}
              There are a lot of things and technologies to learn in frontend
              development and that motivated me to explore more challenges. I
              enjoy learning something new and doing research as well as
              collaborating with small teams and big teams by getting feedback
              to improve myself better.
            </p>
            <p className="font-ghaly text-base pb-4 text-[#d3d4d6] ">
              In this website I will be writing some blogs and showcase my
              projects. I believe that writing what I have learned is the best
              way to remember things, and I can share my knowledge along the
              way. So do contact me and I will be very happy to help!
            </p>
          </div>
          <div>
            <img
              className="rounded-md w-60 md:w-[1000px]"
              src="https://user-images.githubusercontent.com/60167960/229328176-17019b6d-0c50-4058-8f23-6a66f2a8119a.png"
              alt="foto-profil-ghaly"
            />
          </div>
        </div>
      </header>
      {/* Current favorite tech stack/tools */}
      <section className="px-5 lg:px-0">
        <h2 className="text-xl lg:text-2xl text-white font-bold">
          Current favorite tech stack/tools
        </h2>
        <div className="flex flex-wrap items-center gap-2 mt-1">
          <span className="flex">
            <div className="w-10 md:w-auto">
              {" "}
              <img
                src="https://img.icons8.com/fluency/48/000000/node-js.png"
                width="50"
                height="57"
                alt="nodejs"
                title="nodejs"
              />
            </div>
            <div className="w-10 md:w-auto">
              {" "}
              <img
                src="https://img.icons8.com/color/48/null/git.png"
                width="55"
                height="57"
                alt="git"
                title="git"
              />
            </div>
            <div className="w-10 md:w-auto">
              {" "}
              <img
                src="https://img.icons8.com/color/48/null/python--v1.png"
                width="55"
                height="57"
                alt="python"
                title="python"
              />
            </div>
            <div className="w-10 md:w-auto">
              {" "}
              <img
                src="https://img.icons8.com/color/48/null/javascript--v1.png"
                width="55"
                height="57"
                alt="javascript"
                title="javascript"
              />
            </div>
          </span>

          <div className="w-8 md:w-auto">
            {" "}
            <img
              src="https://raw.githubusercontent.com/ghaly09/ghaly09/main/assets/typeScript.svg"
              width="42"
              height="52"
              alt="typescript"
              title="typescript"
            />
          </div>
          <div className="w-8 md:w-auto">
            {" "}
            <img
              src="https://raw.githubusercontent.com/ghaly09/ghaly09/main/assets/react.svg"
              width="47"
              height="45"
              alt="reactjs"
              title="reactjs"
            />
          </div>
          <div className="w-10 md:w-auto">
            {" "}
            <img
              src="https://raw.githubusercontent.com/ghaly09/ghaly09/main/assets/tailwind.svg"
              width="50"
              height="50"
              alt="tailwindcss"
              title="tailwindcss"
            />
          </div>
          <div className="w-8 md:w-auto">
            {" "}
            <img
              src="https://raw.githubusercontent.com/ghaly09/ghaly09/main/assets/framer.svg"
              width="40"
              height="40"
              alt="framer"
              title="framer"
            />
          </div>
          <div className="w-8 md:w-auto">
            {" "}
            <img
              src="https://user-images.githubusercontent.com/60167960/226171904-03fca69e-dd4b-4e05-8276-dd4396f62907.svg"
              width="45"
              height="45"
              alt="nextjs"
              title="nextjs"
            />
          </div>
          <div>
            {" "}
            <img
              src="https://user-images.githubusercontent.com/60167960/226206827-2b005282-0b89-4bf0-9e68-f48ad671db96.svg"
              width="20"
              height="45"
              alt="verticalLine"
            />
          </div>
          <div className="w-8 md:w-auto">
            {" "}
            <img
              src="https://raw.githubusercontent.com/ghaly09/ghaly09/main/assets/vsc.svg"
              width="45"
              height="45"
              alt="VSCode"
              title="VSCode"
            />
          </div>
          <div className="w-8 md:w-auto">
            {" "}
            <img
              src="https://raw.githubusercontent.com/ghaly09/ghaly09/main/assets/figma.svg"
              width="45"
              height="45"
              alt="figma"
              title="figma"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
