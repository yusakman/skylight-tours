import style from "./style.module.scss";
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

  useEffect(() => {
    const text = `Halo saya mau pesan paket ${imageSlider[imageIndex].name}, apakah bisa?`;
    setDesText(text);
  }, [imageIndex]);

  return (
    <div className={style.about} id="about">
      {mounted && (
        <>
          <Box className={style[`about-text`]}>
            <KayakingIcon sx={{ fontSize: 80 }} />
            <h1>About</h1>
            <div className={style[`text-box`]}>
              {aboutText.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>

            <Button variant="contained" className={style[`about-button`]}>
              <Link
                href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Halo Skylight Tours, apakah masih available?`}
                rel="noopener noreferrer"
                target="_blank"
              >
                Book Now
              </Link>
            </Button>
          </Box>
          <Box className={style[`image-slider`]}>
            <Image
              src={imageSlider[imageIndex].imgUrl}
              alt={imageSlider[imageIndex].name}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
              quality={100}
            />

            <Box className={style[`slider-box`]}>
              <div className={style[`slider-title`]} id="destination">
                <p>Choose Your Destination</p>
              </div>
              <div className={style[`slider-content`]}>
                <Image
                  className={style[`slider-icon`]}
                  src={iconLeft}
                  alt="left"
                  width={50}
                  height={50}
                  quality={100}
                  onClick={prevImg}
                />
                <p className={style[`bg-icon-text`]}>
                  {imageSlider[imageIndex].name}
                </p>
                <Image
                  className={style[`slider-icon`]}
                  src={iconRight}
                  alt="right"
                  width={50}
                  height={50}
                  quality={100}
                  onClick={nextImg}
                />
              </div>
              <Button variant="contained" className={style[`slider-button`]}>
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
