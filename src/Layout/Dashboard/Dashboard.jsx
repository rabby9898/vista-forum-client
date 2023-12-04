import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineProfile } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BsFileEarmarkPost } from "react-icons/bs";
import useAllPosts from "../../Hook/useAllPosts/useAllPosts";
import { FaHome, FaUser, FaUsers } from "react-icons/fa";
import { MdOutlineReport } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import useIsAdmin from "../../Hook/useIsAdmin/useIsAdmin";
const Dashboard = () => {
  const [allPost] = useAllPosts();
  const [isAdmin] = useIsAdmin();
  return (
    <div className="flex">
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
            Dashboard
          </h5>
        </div>
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          <ul>
            {isAdmin ? (
              <>
                <li
                  role="button"
                  tabIndex="0"
                  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div className="grid place-items-center mr-4">
                    <FaUser></FaUser>
                  </div>

                  <NavLink to="/dashboard/adminHome">Admin Profile</NavLink>
                </li>
                <li
                  role="button"
                  tabIndex="0"
                  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div className="grid place-items-center mr-4">
                    <FaUsers></FaUsers>
                  </div>

                  <NavLink to="/dashboard/manageUsers">Manage Users</NavLink>
                </li>
                <li
                  role="button"
                  tabIndex="0"
                  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div className="grid place-items-center mr-4">
                    <MdOutlineReport />
                  </div>

                  <NavLink to="/dashboard/report">
                    Reported Comments/Activities
                  </NavLink>
                </li>
                <li
                  role="button"
                  tabIndex="0"
                  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div className="grid place-items-center mr-4">
                    <GrAnnounce></GrAnnounce>
                  </div>

                  <NavLink to="/dashboard/makeAnnounce">
                    Make Announcement
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li
                  role="button"
                  tabIndex="0"
                  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div className="grid place-items-center mr-4">
                    <AiOutlineProfile></AiOutlineProfile>
                  </div>

                  <NavLink to="/dashboard/userHome">My Profile</NavLink>
                </li>
                <li
                  role="button"
                  tabIndex="0"
                  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div className="grid place-items-center mr-4">
                    <IoMdAddCircleOutline></IoMdAddCircleOutline>
                  </div>

                  <NavLink to="/dashboard/addPost">Add Post</NavLink>
                </li>
                <li
                  role="button"
                  tabIndex="0"
                  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div className="grid place-items-center mr-4">
                    <BsFileEarmarkPost></BsFileEarmarkPost>
                  </div>

                  <NavLink to="/dashboard/myPost">
                    My Post({allPost.length})
                  </NavLink>
                </li>
              </>
            )}
            {/* --------------------------------------------------------------------------------- */}
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            <li
              role="button"
              tabIndex="0"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="grid place-items-center mr-4">
                <FaHome></FaHome>
              </div>

              <NavLink to="/">Home</NavLink>
            </li>
            <li
              role="button"
              tabIndex="0"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="grid place-items-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              Log Out
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
