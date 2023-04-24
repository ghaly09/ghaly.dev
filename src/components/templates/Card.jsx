export const Card = (props) => {
  return (
    <section
      id="box"
      className="container line-effect font-ghaly max-w-[21rem] hover:scale-[1.02] active:scale-[0.97] animate-shadow"
    >
      <div className="border-[1px] border-slate-600 bg-[#0e1111] md:shadow-xl rounded-md my-1.5">
        <a target="_blank" rel="noreferrer noopener" href={props.readMoreLink}>
          <div className="md:flex-shrink-0 ">
            <img
              src={props.imgSrc}
              alt={props.title}
              className="object-cover h-[200px] w-full rounded-lg rounded-b-none"
            />
          </div>
        </a>

        <div className="py-1">
          <div className="p-4">
            <h2 className="truncate font-bold mb-2 md:mt-1 text-xl text-slate-200 tracking-normal">
              {props.title}
            </h2>

            <p className="paragraph-overflow break-words text-sm text-[#d3d4d6] px-1">
              {props.description}
            </p>
          </div>

          <div className="flex items-center justify-between py-4 mx-4">
            {/* <a
              target="_blank"
              rel="noreferrer noopener"
              href={props.readMoreLink}
            >
              <div className="flex items-center">
                <div className="text-sm ml-2">
                  <p className="text-[#d3d4d6] leading-none">
                    {props.propjectTeam}
                  </p>

                  <p className="text-slate-400">{props.date}</p>
                </div>
              </div>
            </a> */}
            <a
              id="readMore"
              target="_blank"
              rel="noreferrer noopener"
              href={props.readMoreLink}
              className="text-white text-sm hover-underline-animation"
            >
              Read More{" "}
              <span>
                <i
                  className="fa fa-long-arrow-right text-[11px]"
                  aria-hidden="true"
                ></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
