import { useRouter } from "next/router";
import { packages } from "@/const/packages";
import useIsMounted from "@/hooks";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Button } from "@mui/material";
import CoreButton from "@/components/CoreButton";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ExploreIcon from "@mui/icons-material/Explore";

export default function Packages() {
  const router = useRouter();
  const mounted = useIsMounted();
  return (
    <>
      <Header setHeader={true} />
      {mounted && (
        <div className={styles.packages}>
          {packages.map((item, idx) => {
            if (item.slug === router.query.slug) {
              return (
                <div className={styles.package} key={idx}>
                  <div className={styles[`image-flexer`]}>
                    <div className={styles[`image-container`]}>
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
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
                      <div className={styles[`image-text-container`]}>
                        <div className={styles[`image-text`]}>
                          <p>{item.name}</p>
                        </div>
                      </div>
                    </div>
                    <CoreButton text={item.name} />
                  </div>
                  <h1>{item.name}</h1>
                  <p>
                    <LocalOfferIcon />
                    Price:{" "}
                    {item.price.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </p>
                  <p>
                    Destination:{" "}
                    {item.destination.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </p>
                  <p>Include: {item.include}</p>
                  <p>{item.addition}</p>
                  <p>{item.titleDesc}</p>
                  <div className={styles.description}>
                    {item.desc.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  <p>Extra: {item.extra}</p>
                  <p>Note: {item.note}</p>
                  <CoreButton text={item.name} />
                </div>
              );
            }
          })}
        </div>
      )}
      <Footer />
    </>
  );
}
