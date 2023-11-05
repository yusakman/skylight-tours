import styles from "./styles.module.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";
import { phoneNumber } from "@/const";
import { useState } from "react";
import { Alert } from "@mui/material";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    const email = `skylight@gmail.com`;
    navigator.clipboard.writeText(email);
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
        Contact us at skylight at gmail.com
      </p>
      <Link
        href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Halo Skylight Tours, apakah masih available?`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <WhatsAppIcon
          sx={{ color: "#34b5cf", fontSize: "50px" }}
          className={styles[`footer-icon`]}
        />
      </Link>

      <p>© 2023 by Skylight Tours</p>
    </div>
  );
};

export default Footer;
