import styles from "./styles.module.scss";
import { Button } from "@mui/material";
import Link from "next/link";
import { phoneNumber } from "@/const";
import wa_icon from "@/assets/waicon.png";
import Image from "next/image";
import { useEffect } from "react";
import useIsMounted from "@/hooks";

const CoreButton = ({ text }) => {
  const isMounted = useIsMounted();

  return (
    <>
      {isMounted && (
        <Link
          href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hello tehere, is this package ${text} available?`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button variant="contained">
            <Image src={wa_icon} width={15} height={15} alt="wa-icon" />
            Book Now
          </Button>
        </Link>
      )}
    </>
  );
};

export default CoreButton;
