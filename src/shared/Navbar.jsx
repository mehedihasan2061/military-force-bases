import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
    const links = <>
     <li><NavLink to="/">Home</NavLink></li>
     
     <li><NavLink to="/achieve">Achieve</NavLink></li>
     {/* <li><NavLink to="/about">About</NavLink></li> */}
     <li><NavLink to="/faq">FAQ</NavLink></li>
     <li><NavLink to="/contact">Contact</NavLink></li>
  </>
  const { user,logOut } = useContext(AuthContext)
  
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch(() => {
        // An error happened.
      });
  }
    return (
      <div>
        <div className="navbar  bg-base-200 w-[90%] mx-auto mb-16 rounded-lg p-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>
            </div>
            <a className="btn btn-ghost text-xl font-bold text-orange-700">
              Military Portal
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user
                        ? user.photoURL
                        : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg "
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[5] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between font-bold">
                    {user && user.displayName}
                  </a>
                </li>
                <li>
                  <a className="justify-between font-bold">
                    <p className="text-green-600 text-[14px] ">
                      {user && user.email}
                    </p>
                  </a>
                </li>
                <li>
                  {" "}
                  {user ? (
                    <button onClick={handleLogout} className="btn ">
                      Log Out
                    </button>
                  ) : (
                    <button className="btn">
                      <Link to="/login">Log in</Link>
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;