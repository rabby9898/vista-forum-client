const Announcement = ({ item }) => {
  const { photo, name, title, description } = item;
  return (
    <div className="">
      <div className="relative flex w-full md:lg-[500px] lg:w-[700px] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
        <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
          <img
            src={photo}
            alt="Tania Andrew"
            className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <h5 className="font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                {name}
              </h5>
            </div>
          </div>
        </div>
        <div className="p-0 mb-6">
          <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mb-5">
            {title}
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
