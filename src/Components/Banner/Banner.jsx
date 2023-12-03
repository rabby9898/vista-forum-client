const Banner = () => {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: "url(https://i.ibb.co/KG5QjqY/banner-2.jpg)",
          width: "100%",
          height: "800px",
        }}
      >
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="join">
            <div>
              <div>
                <input
                  className="input input-bordered join-item"
                  placeholder="Search"
                />
              </div>
            </div>
            <select className="select select-bordered join-item">
              <option disabled selected>
                Filter
              </option>
              <option>Sci-fi</option>
              <option>Drama</option>
              <option>Action</option>
            </select>
            <div className="indicator">
              <button className="btn join-item">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
