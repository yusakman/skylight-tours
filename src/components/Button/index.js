import styles from "./styles.module.scss";
import { Button } from "@mui/material";
import Link from "next/link";
import { phoneNumber } from "@/const";
import wa_icon from "@/assets/waicon.png";
import Image from "next/image";
import { useEffect } from "react";

const CoreButton = ({ text, nav }) => {
  const getStyleButton = () => {
    if (nav == "services") {
      return `${styles[`button-car-services`]}`;
    }

    if (nav == "slider") {
      return `${styles[`button-slider-about`]}`;
    }

    if (nav == "about") {
      return `${styles[`button-text-about`]}`;
    }
  };

  return (
    <Link
      href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hello tehere, is this package ${text} available?`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Button variant="contained" className={getStyleButton()}>
        <Image src={wa_icon} width={15} height={15} alt="wa-icon" />
        Book Now
      </Button>
    </Link>
  );
};

export default CoreButton;
