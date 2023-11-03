import { sriracha } from "@/fonts/fonts";
import Link from "next/link";
import style from "./style.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const menu = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Services",
      url: "/#services",
    },
    {
      label: "About",
      url: "/#about",
    },
    {
      label: "Contact",
      url: "/#contact",
    },
  ];

  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={`${sriracha.className} ${style.logo}`}>
          <h1>Skylight</h1>
        </div>
        <nav className={showNav ? style.show : ""}>
          <CloseIcon
            className={style.close}
            onClick={() => setShowNav(!showNav)}
          />
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              onClick={() => setShowNav(!showNav)}
              scroll={false}
            >
              <p>{item.label}</p>
            </Link>
          ))}
        </nav>
        <div className={style["nav-mobile"]}>
          <MenuIcon
            className={style.hamburger}
            onClick={() => setShowNav(!showNav)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
