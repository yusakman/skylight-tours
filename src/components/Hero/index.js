import { sriracha } from "@/fonts/fonts";
import styles from "./styles.module.scss";
import Image from "next/image";
import arrow from "../../assets/Arrow.svg";
import Link from "next/link";
import { Box } from "@mui/material";

const Hero = () => {
  // const imageLoader = ({ src, width, quality }) => {
  //   console.log("calling image loader", src, width, quality);
  //   return `${src}?w=${width}&q=${quality || 75}`;
  // };

  return (
    <div className={styles.hero} id="home">
      <Box className={styles[`image-container`]}>
        <Image
          // loader={imageLoader}
          src={`https://ipfs.io/ipfs/QmRVyJoH2r2yRXUHRC585jNacqU1gCU4oyaGok8o4rzg6Y`}
          alt={`Hero Image`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
          }}
          quality={80}
          priority={true}
        />
        <Box className={`${sriracha.className} ${styles[`hero-text`]}`}>
          <h1>Skylight Tours</h1>
          <p>“Experience Bali, Create Memories”</p>
          <div className={styles[`hero-icon-container`]}>
            <Link href={`/#services`}>
              <Image src={arrow} width={50} height={50} alt="arrow" />
            </Link>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
