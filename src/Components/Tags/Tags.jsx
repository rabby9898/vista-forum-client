import { FaTag } from "react-icons/fa";

const Tags = () => {
  return (
    <div className="w-full px-5 md:px-8 lg:px-32 py-5 md:py-10 bg-purple-900">
      <footer className="footer text-neutral-content">
        <nav>
          <header className="footer-title text-xl">Web and code</header>
          <a className="link mt-5 text-white text-lg">
            <div className="flex items-center gap-1">
              <FaTag />
              Tutorial
            </div>
          </a>
          <a className="link mt-5 text-white text-lg">
            <div className="flex items-center gap-1">
              {" "}
              <FaTag /> Courses
            </div>
          </a>
          <a className="link mt-5 text-white text-lg">
            <div className="flex items-center gap-1">
              <FaTag /> Javascript
            </div>
          </a>
          <a className="link mt-5 text-white text-lg">
            <div className="flex items-center gap-1">
              <FaTag /> Ui design
            </div>
          </a>
        </nav>
        <nav>
          <header className="footer-title text-xl">Technology</header>
          <a className="link mt-5 text-white text-lg">
            <div className="flex items-center gap-1">
              <FaTag /> Articles
            </div>
          </a>
          <a className="link mt-5 text-white text-lg">
            <div className="flex items-center gap-1">
              {" "}
              <FaTag /> Space
            </div>
          </a>
          <a className="link mt-5 text-white text-lg">
            <div className="flex items-center gap-1">
              {" "}
              <FaTag /> Ai
            </div>
          </a>
          <a className="link mt-5 text-white text-lg">
            <div className="flex items-center gap-1">
              {" "}
              <FaTag /> Circuit
            </div>
          </a>
        </nav>
        <nav>
          <header className="footer-title text-xl">Movies</header>
          <a className="link mt-5 text-white text-lg">
            <div className="flex items-center gap-1">
              {" "}
              <FaTag /> Hollywood
            </div>
          </a>
          <a className="link mt-5 text-white text-lg">
            <div className="flex items-center gap-1">
              <FaTag /> New released
            </div>
          </a>
          <a className="link mt-5 text-white text-lg">
            <div className="flex items-center gap-1">
              <FaTag /> Production
            </div>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Tags;
