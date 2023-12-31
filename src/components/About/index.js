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
import CoreButton from "../CoreButton";

const About = () => {
  const mounted = useIsMounted();
  const [imageIndex, setImageIndex] = useState(0);
  const [destText, setDesText] = useState(
    `Hello I want to ask about this package ${imageSlider[imageIndex].name}?`
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

  useEffect(() => {
    const text = `Hello I want to ask about this package ${imageSlider[imageIndex].name}?`;
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
            <div className={styles[`about-button`]}>
              <CoreButton text={`services`} />
            </div>
          </Box>
          <Box className={styles[`image-slider`]}>
            <Image
              src={imageSlider[imageIndex].imgUrl}
              alt={imageSlider[imageIndex].name}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 33vw"
              style={{
                objectFit: "cover",
                alignContent: "center",
              }}
              fill
              quality={80}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM02Xq+HgAFFgI5MkEGswAAAABJRU5ErkJggg=="
            />

            <Box className={styles[`slider-box`]}>
              <div className={styles[`slider-title`]} id="destination">
                <p>More Destination</p>
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
              <div className={styles[`slider-button`]}>
                <CoreButton text={imageSlider[imageIndex].name} />
              </div>
            </Box>
          </Box>
        </>
      )}
    </div>
  );
};

export default About;
