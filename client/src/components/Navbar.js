import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto text-white flex justify-between items-center">
          <a
            href="/"
            className="text-2xl font-bold py-3 px-4  rounded-md bg-white/30"
          >
            C
          </a>
          <div className={`hidden lg:block`}>
            {user ? (
              <div className="flex gap-4 items-center">
                <a href="/" className="text-lg hover:text-black/70">
                  Home
                </a>
                {user?.user?.role === "admin" ? (
                  <a href="/dashboard" className="text-lg hover:text-black/70">Dashboard</a>
                ) : (
                  <>
                    <a href="/contact" className="text-lg hover:text-black/70">
                      Contact Us
                    </a>
                  </>
                )}
                <button onClick={logout} className="ml-5 bg-white text-blue-500 px-4 py-2 rounded">Logout</button>
              </div>
            ) : (
              <div className="flex gap-4 items-center">
                <a href="/login">
                  <button className="ml-5 bg-white text-blue-500 px-4 py-2 rounded">
                    Login
                  </button>
                </a>
                <a href="/signup">
                  <button className="bg-white text-blue-500 px-4 py-2 rounded">
                    Signup
                  </button>
                </a>
              </div>
            )}
          </div>

          {/* Mobile Nav */}
          <button
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-white"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        className={`block lg:hidden bg-gray-50 shadow-md absolute z-10 w-full`}
      >
        <div className={`container mx-auto ${openNav ? "block" : "hidden"}`}>
          <div className="flex flex-col gap-0">
            <a
              href="/"
              className="text-lg hover:text-black/70 px-4 py-2 hover:bg-blue-gray-50"
            >
              Home
            </a>
            {user ? (
              user?.user?.role === "admin" ? (
                <>
                  <a href="/dashboard" className="px-4 py-2 hover:bg-blue-gray-50">Dashboard</a>
                  <button onClick={logout} className="bg-blue-500 text-white px-4 py-2 rounded w-[90%] mx-auto my-3">Logout</button>
                </>
              ) : (
                <>
                  <a
                    href="/contact"
                    className="text-lg hover:text-black/70 px-4 py-2 hover:bg-blue-gray-50"
                  >
                    Contact Us
                    </a>
                  <button onClick={logout} className="bg-blue-500 text-white px-4 py-2 rounded w-[90%] mx-auto my-3">Logout</button>
                </>
              )
            ) : (
              <div className="flex flex-col gap-0">
                <a
                  href="/login"
                  className="text-lg hover:text-black/70 px-4 py-2 hover:bg-blue-gray-50"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="text-lg hover:text-black/70 px-4 py-2 hover:bg-blue-gray-50"
                >
                  Signup
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
