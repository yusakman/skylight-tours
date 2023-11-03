import { sriracha } from "@/fonts/fonts";
import style from "./style.module.scss";
import Image from "next/image";
import heroImage from "../../assets/Hero_Banner.svg";
import heroImage2 from "../../assets/Hero_Banner_2.svg";
import arrow from "../../assets/Arrow.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  return (
    <div
      className={style.hero}
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
    >
      {/* <Image alt={`banner-image`} src={heroImage} fill={true} objectFit="cover"/> */}

      <div className={`${sriracha.className} ${style[`hero-text`]}`}>
        <h1>Skylight Tours</h1>
        <p>“Experience Bali, Create Memories”</p>
        <div className={style[`hero-icon-container`]}>
          <Link href={`/#services`}>
            <Image src={arrow} width={50} height={50} alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
