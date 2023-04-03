export const Footer = () => {
  return (
    <footer className="pt-8 pb-2 px-5 lg:px-0">
      <div className="container mx-auto">
        <hr className="my-6 border-slate-400" />
        <div className="flex flex-wrap justify-center text-slate-200 font-ghaly text-center lg:text-left">
          Let's keep in touch!
        </div>
        <div className="text-center mt-2 mb-10">
          <button
            className="hover:bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)] text-slate-200 hover:text-transparent hover:bg-clip-text shadow-lg text-2xl lg:text-3xl h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none lg:mr-2"
            type="button"
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rachmatghaly09@gmail.com"
              target="_blank"
              rel="noreferrer"
              alt="email"
              title="My Email"
            >
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </a>
          </button>
          <button
            className="hover:bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)] text-slate-200 hover:text-transparent hover:bg-clip-text shadow-lg text-2xl lg:text-3xl h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none lg:mr-2"
            type="button"
          >
            <a
              href="https://github.com/ghaly09"
              target="_blank"
              rel="noreferrer"
              alt="Github"
              title="My Github"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </button>
          <button
            className="hover:bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)] text-slate-200 hover:text-transparent hover:bg-clip-text shadow-lg text-2xl lg:text-3xl h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none lg:mr-2"
            type="button"
          >
            <a
              href="https://www.linkedin.com/in/rachmat-ghaly-9419971a4/"
              target="_blank"
              rel="noreferrer"
              alt="linkedin"
              title="My Linkedin"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </button>
          <button
            className="hover:bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)] text-slate-200 hover:text-transparent hover:bg-clip-text shadow-lg text-2xl lg:text-3xl h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none lg:mr-2"
            type="button"
          >
            <a
              href="https://id.pinterest.com/rachmatghaly/"
              target="_blank"
              rel="noreferrer"
              alt="pinterest"
              title="My Pinterest"
            >
              <i className="fa fa-pinterest"></i>
            </a>
          </button>
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="font-ghaly text-sm text-slate-200 font-semibold">
              Copyright &copy; 2022 by{" "}
              <span className="hover:text-[#00CFC9]">Rachmat Ghaly</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
