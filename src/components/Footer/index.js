import styles from "./styles.module.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { phoneNumber, email } from "@/const";
import { useState } from "react";
import { Alert } from "@mui/material";

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
        Contact us at skylighttour.office at gmail.com
      </p>
      <div>
        <Link
          href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Halo Skylight Tours, which packages are available?`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <WhatsAppIcon
            sx={{ color: "#34b5cf", fontSize: "50px" }}
            className={styles[`footer-icon`]}
          />
        </Link>
        <Link
          href={`https://www.instagram.com/skylighttours.office/`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <InstagramIcon
            sx={{ color: "#34b5cf", fontSize: "50px" }}
            className={styles[`footer-icon`]}
          />
        </Link>
      </div>

      <p>© 2023 by Skylight Tours</p>
    </div>
  );
};

export default Footer;
