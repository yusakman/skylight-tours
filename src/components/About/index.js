import styles from "./styles.module.scss";
import { aboutText, imageSlider } from "@/const/about";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import iconLeft from "@/assets/PaperPlaneLeft.svg";
import iconRight from "@/assets/PaperPlaneRight.svg";
import KayakingIcon from "@mui/icons-material/Kayaking";
import { useEffect, useState } from "react";
import useIsMounted from "@/hooks";
import { phoneNumber } from "@/const";

const About = () => {
  const mounted = useIsMounted();
  const [imageIndex, setImageIndex] = useState(0);
  const [destText, setDesText] = useState(
    `Halo saya mau pesan paket ${imageSlider[imageIndex].name}, apakah bisa?`
  );

  const nextImg = () => {
    if (imageIndex === imageSlider.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  const prevImg = () => {
    if (imageIndex === 0) {
      setImageIndex(imageSlider.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  const imageLoader = ({ src, width, quality }) => {
    console.log("calling image loader", src, width, quality);
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  useEffect(() => {
    const text = `Halo saya mau pesan paket ${imageSlider[imageIndex].name}, apakah bisa?`;
    setDesText(text);
  }, [imageIndex]);

  return (
    <div className={styles.about} id="about">
      {mounted && (
        <>
          <Box className={styles[`about-text`]}>
            <KayakingIcon sx={{ fontSize: 80 }} />
            <h1>About</h1>
            <div className={styles[`text-box`]}>
              {aboutText.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>

            <Button variant="contained" className={styles[`about-button`]}>
              <Link
                href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Halo Skylight Tours, apakah masih available?`}
                rel="noopener noreferrer"
                target="_blank"
              >
                Book Now
              </Link>
            </Button>
          </Box>
          <Box className={styles[`image-slider`]}>
            <Image
              // loader={imageLoader}
              src={imageSlider[imageIndex].imgUrl}
              alt={imageSlider[imageIndex].name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 33vw"
              style={{
                objectFit: "cover",
              }}
              quality={80}
            />

            <Box className={styles[`slider-box`]}>
              <div className={styles[`slider-title`]} id="destination">
                <p>Choose Your Destination</p>
              </div>
              <div className={styles[`slider-content`]}>
                <Image
                  className={styles[`slider-icon`]}
                  src={iconLeft}
                  alt="left"
                  width={50}
                  height={50}
                  quality={100}
                  onClick={prevImg}
                />
                <p className={styles[`bg-icon-text`]}>
                  {imageSlider[imageIndex].name}
                </p>
                <Image
                  className={styles[`slider-icon`]}
                  src={iconRight}
                  alt="right"
                  width={50}
                  height={50}
                  quality={100}
                  onClick={nextImg}
                />
              </div>
              <Button variant="contained" className={styles[`slider-button`]}>
                <Link
                  href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${destText}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Book Now
                </Link>
              </Button>
            </Box>
          </Box>
        </>
      )}
    </div>
  );
};

export default About;
