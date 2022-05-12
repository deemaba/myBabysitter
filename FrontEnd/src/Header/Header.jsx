import React, { useEffect, useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import { Link } from "react-router-dom";
import { navArr } from "./nav_items";



setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? 'active' : 'non-active',
      };
    }}
  />
);

const navItems = navArr.map((item, index) => {
  return (
    <div className='navbar-item' key={index}>
      <NavLink to={`/${item.url}`}>
        <div className="d-flex align-items-center">
          <span className="mx-2 my-0 py-0">{item.Icon}</span>
          {item.title}
        </div>
      </NavLink>
    </div>
  )
})



const Header = function () {

  const [openMenu, setOpenMenu] = React.useState(false);
  const closeMenu = () => {
    setOpenMenu(false);
  };


  const [showmenu, btn_icon] = useState(false);

  useEffect(() => {
    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      btn_icon(false);
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");

      } else {
        header.classList.remove("sticky");
      } if (window.pageYOffset > sticky) {
        closeMenu();
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return (
    <header className={`navbar bav-bg `} id="myHeader">
      <div className='container container-bs'>
        <div className='row w-100-nav'>
          <div className='logo px-0'>
            <div className='navbar-title navbar-item'>
              <NavLink to="/">
                <img
                  src="./logo235.png"
                  className="img-fluid d-block"
                  alt="#"
                />
              </NavLink>
            </div>
          </div>

          <BreakpointProvider>
            <Breakpoint l down>
              {showmenu && navItems}
            </Breakpoint>

            <Breakpoint xl>
              <div className='menu'>
                {navItems}
              </div>
            </Breakpoint>
          </BreakpointProvider>
        </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>

      </div>
    </header>
  );
}
export default Header;