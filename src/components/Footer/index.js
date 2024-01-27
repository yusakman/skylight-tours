import styles from "./styles.module.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import Image from "next/image";
import { phoneNumber, email } from "@/const";
import { useState } from "react";
import { Alert } from "@mui/material";
import wa_icon from "@/assets/waicon.png";
import trip_advisor from "@/assets/TripAdvisor_Logo.png";
import instagram_icon from "@/assets/instagram_icon.png";
import fb_icon from "@/assets/fbicon.png";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    const _email = email;
    navigator.clipboard.writeText(_email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className={styles.footer}>
      <h1>Contact</h1>
      {copied && <Alert severity="info">Email copied to clipboard</Alert>}
      <p className={styles[`footer-email`]} onClick={copyCode}>
        Contact us at{" "}
        <span style={{ color: "rgb(120 119 247)" }}>
          skylighttour.office at gmail.com
        </span>
      </p>
      <div className={styles.logos}>
        <div className={styles[`logos-top`]}>
          <Link
            href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Halo Skylight Tours, which packages are available?`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image src={wa_icon} width={50} height={50} alt="wa-icon" />
          </Link>
          <Link
            href={`https://www.instagram.com/skylighttours.office/`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={instagram_icon}
              width={40}
              height={40}
              alt="instagram-icon"
            />
          </Link>
          <Link
            href={`https://www.facebook.com/profile.php?id=61555743041383&sfnsn=wiwspwa&mibextid=RUbZ1f`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image src={fb_icon} width={50} height={50} alt="facebook-icon" />
          </Link>
        </div>

        <Link
          href={`https://www.tripadvisor.co.id/Attraction_Review-g297694-d26846560-Reviews-Skylight_tours_bali-Denpasar_Bali.html`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src={trip_advisor}
            width={211}
            height={45}
            alt="trip-advisor-icon"
          />
        </Link>
      </div>

      <p>© 2023 by Skylight Tours</p>
    </div>
  );
};

export default Footer;
