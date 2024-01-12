import Logo from "../assets/Logo";
import IconMenu from "../assets/Menu";
import { useState } from "react";
import { SidebarData } from "../constant/Sidebar";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className=" w-full z-50  px-3 bg-neutral-white sticky top-0 flex justify-between items-center">
      <div className=" ml-4 md:ml-[100px]  py-3 lg:px-5 lg:pl-3">
        <Logo />
      </div>
      {/*Sidebar Mobile */}
      <div className="flex md:hidden flex-1 justify-end items-end  z-10">
        <button type="button" onClick={() => setOpen((prev) => !prev)}>
          <IconMenu />
        </button>
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-20 right-0 bg-neutral-white w-screen `}
        >
          <ul className="space-y-2 font-medium px-2 pt-2">
            {SidebarData.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className="flex items-center w-screen font-semibold p-2 text-gray-900 hover:text-white hover:bg-orange "
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    {item.title}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
