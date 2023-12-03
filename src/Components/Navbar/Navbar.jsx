import { NavLink } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import logo from "../../assets/logo.png";
import useAnnounce from "../../Hook/useAnnounce/useAnnounce";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [announcement] = useAnnounce();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const links = (
    <>
      <li className="mr-8">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-purple-500" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="mr-8">
        <NavLink
          to="/membership"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-purple-500" : ""
          }
        >
          Membership
        </NavLink>
      </li>
      <li className="mr-8 mt-1">
        <NavLink
          to=""
          // className={({ isActive, isPending }) =>
          //   isPending ? "pending" : isActive ? "text-purple-500" : ""
          // }
        >
          <button className="flex">
            <IoNotificationsSharp className="text-2xl" />
            <div className="-mt-3 -ml-2 bg-transparent border-0 text-white">
              {" "}
              +{announcement.length}
            </div>
          </button>
        </NavLink>
      </li>
      {!user && (
        <li className="mr-8">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-purple-500" : ""
            }
          >
            join Us
          </NavLink>
        </li>
      )}
      {user && (
        <li className="mr-8">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" ">
              {user ? (
                <>
                  <div className="avatar">
                    <div className="w-[50px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 h-[50px]">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </>
              ) : (
                <FaUserCircle className="text-2xl"></FaUserCircle>
              )}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black text-lg font-semibold"
            >
              <li>
                <a>{user?.displayName ? user?.displayName : "Anonymous"}</a>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        </li>
      )}

      {/* <li className="mr-8">
        <NavLink
          to="/dashboard/adminHome"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange-400" : ""
          }
        >
          Dashboard
        </NavLink>
      </li> */}

      {/* {user ? (
        <li className="mr-8">
          <NavLink
            onClick={handleLogOut}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-orange-400" : ""
            }
          >
            Logout
          </NavLink>
        </li>
      ) : (
        <li className="mr-8">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-orange-400" : ""
            }
          >
            Login
          </NavLink>
        </li>
      )}
      {user && <li>{user.displayName}</li>}
      {user && (
        <>
          <Link to="/dashboard/cart">
            <button className=" text-white flex items-center">
              <FaShoppingCart className="text-2xl" />
              <div className="badge badge-secondary text-white">
                {cart.length}
              </div>
            </button>
          </Link>
        </>
      )} */}
    </>
  );
  return (
    <div className="">
      <div className="navbar  fixed z-10 bg-opacity-30 bg-black px-5 md:px-8 lg:px-32 py-5">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  p-2 rounded-box w-52 text-white"
            >
              {links}
            </ul>
          </div>

          <img className="w-[200px]" src={logo} alt="logo" />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu-horizontal px-1 text-white text-lg font-semibold items-center">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
