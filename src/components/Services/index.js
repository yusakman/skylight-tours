import styles from "./styles.module.scss";
import { listCars } from "@/const/listcars";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";
import { phoneNumber } from "@/const";
import { useEffect, useState } from "react";

const Services = () => {
  return (
    <div className={styles.services} id="services">
      <h1>Services</h1>
      <p className={styles[`services-text`]}>Tour With Professional Driver</p>
      <div className={styles.listCars}>
        {listCars.map((item, index) => (
          <div className={styles.cars} key={index}>
            <div className={styles.carImage}>
              <Image src={item.imageUrl} alt={item.name} width={347} />
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
    </div>
  );
};

export default Services;
