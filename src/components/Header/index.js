import { sriracha } from "@/fonts/fonts";
import Link from "next/link";
import styles from "./styles.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import useIsMounted from "@/hooks";

const Header = ({ setHeader }) => {
  const isMounted = useIsMounted();
  const [showNav, setShowNav] = useState(false);
  const [newBg, setNewBg] = useState(``);

  const menu = [
    {
      label: "Home",
      url: "/#home",
    },
    {
      label: "Services",
      url: "/#services",
    },
    {
      label: "Destination",
      url: "/#destination",
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

  useEffect(() => {
    const checkScroll = () => {
      const y = window.scrollY;
      if (y >= 600) {
        setNewBg(`header-bg`);
      } else {
        setNewBg(``);
      }
    };

    window.addEventListener("scroll", checkScroll);
  });

  return (
    <div
      className={`${styles.header} ${
        setHeader ? styles[`header-bg`] : styles[newBg]
      }`}
    >
      {isMounted && (
        <div className={styles.container}>
          <div className={`${sriracha.className} ${styles.logo}`}>
            <h1>Skylight</h1>
          </div>
          <nav className={showNav ? styles.show : ""}>
            <CloseIcon
              className={styles.close}
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
          <div className={styles["nav-mobile"]}>
            <MenuIcon
              className={styles.hamburger}
              onClick={() => setShowNav(!showNav)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
