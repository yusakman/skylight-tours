import styles from "./styles.module.scss";
import { listCars } from "@/const/listcars";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";
import { phoneNumber } from "@/const";
import { useEffect, useState } from "react";
import iconLeft from "@/assets/PaperPlaneLeftMobile.svg";
import iconRight from "@/assets/PaperPlaneRightMobile.svg";

const Services = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const nextImage = () => {
    setIsAutoplay(false);
    if (imageIndex === listCars.length - 1) {
      setImageIndex(0);
      setIsAutoplay(true);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  const prevImage = () => {
    setIsAutoplay(false);
    if (imageIndex === 0) {
      setImageIndex(listCars.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  const circle = () => {
    const dots = [];

    for (let i = 0; i < listCars.length; i++) {
      if (imageIndex == i) {
        dots.push(
          <div
            className={`${styles[`circle`]} ${styles[`circle-bg`]}`}
            key={i}
          ></div>
        );
      } else {
        dots.push(<div className={styles[`circle`]} key={i}></div>);
      }
    }

    return dots;
  };

  useEffect(() => {
    console.log("imageIndex", imageIndex);
    const autoPlay = () => {
      if (imageIndex === listCars.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    };

    setTimeout(() => {
      isAutoplay && autoPlay();
    }, 5000);

    return () => clearTimeout(autoPlay);
  }, [imageIndex]);

  useEffect(() => {
    circle();
  }, [imageIndex]);

  return (
    <div className={styles.services} id="services">
      <h1>Services</h1>
      <p className={styles[`services-text`]}>Tour With Professional Driver</p>
      <div className={styles.listCars}>
        {listCars.map((item, index) => (
          <div className={styles.cars} key={index}>
            <div className={styles.carImage}>
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={347}
                height={248}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={50}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM02Xq+HgAFFgI5MkEGswAAAABJRU5ErkJggg=="
              />
            </div>
            <div className={styles.carDesc}>
              <p className={styles[`desc-title`]}>{item.name}</p>
              {item.services.map((text, idx) => (
                <p key={idx} className={styles[`desc-text`]}>
                  {text}
                </p>
              ))}
            </div>
            <Button variant="contained" className={styles[`button-car`]}>
              <Link
                href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Halo saya mau pesan ${item.name}, apakah ada?`}
                rel="noopener noreferrer"
                target="_blank"
              >
                Book Now
              </Link>
            </Button>
          </div>
        ))}
      </div>
      <div className={styles[`mobile-slider`]}>
        <Image
          className={styles[`slider-icon`]}
          src={iconLeft}
          alt="icon-left"
          width={35}
          height={35}
          quality={100}
          onClick={prevImage}
        />
        <div className={styles[`mobile-slider-content`]}>
          <div className={styles.cars}>
            <div className={styles.carImage}>
              <Image
                src={listCars[imageIndex].imageUrl}
                alt={listCars[imageIndex].name}
                width={241}
                height={172}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={50}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM02Xq+HgAFFgI5MkEGswAAAABJRU5ErkJggg=="
              />
            </div>
            <div className={styles.carDesc}>
              <p className={styles[`desc-title`]}>
                {listCars[imageIndex].name}
              </p>
              {listCars[imageIndex].services.map((text, idx) => (
                <p key={idx} className={styles[`desc-text`]}>
                  {text}
                </p>
              ))}
            </div>
            <Button variant="contained" className={styles[`button-car`]}>
              <Link
                href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Halo saya mau pesan ${listCars[imageIndex].name}, apakah ada?`}
                rel="noopener noreferrer"
                target="_blank"
              >
                Book Now
              </Link>
            </Button>
            <div className={styles[`circle-container`]}>{circle()}</div>
          </div>
        </div>
        <Image
          className={styles[`slider-icon`]}
          src={iconRight}
          alt="icon-right"
          width={35}
          height={35}
          quality={100}
          onClick={nextImage}
        />
      </div>
    </div>
  );
};

export default Services;
