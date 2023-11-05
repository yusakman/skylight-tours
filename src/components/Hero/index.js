import { sriracha } from "@/fonts/fonts";
import styles from "./styles.module.scss";
import Image from "next/image";
import heroImage from "../../assets/Hero_Banner.svg";
import arrow from "../../assets/Arrow.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: `url(${heroImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      id="home"
    >
      {/* <Image alt={`banner-image`} src={heroImage} fill={true} objectFit="cover"/> */}

      <div className={`${sriracha.className} ${styles[`hero-text`]}`}>
        <h1>Skylight Tours</h1>
        <p>“Experience Bali, Create Memories”</p>
        <div className={styles[`hero-icon-container`]}>
          <Link href={`/#services`}>
            <Image src={arrow} width={50} height={50} alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
