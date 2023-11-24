import Link from "next/link";
import { packages } from "@/const/packages";
import styles from "./styles.module.scss";
import useIsMounted from "@/hooks";
import { Box, Button } from "@mui/material";
import Image from "next/image";

const Packages = () => {
  const mounted = useIsMounted();
  return (
    <div className={styles.packages} id="packages">
      {mounted && (
        <>
          <h1>Tour Packages</h1>
          <p className={styles[`packages-text`]}>
            The best tour packages in town
          </p>
          <div className={styles.listPackages}>
            {packages.map((item, idx) => (
              <Link
                href={`/packages/${encodeURIComponent(item.slug)}`}
                key={idx}
              >
                <Box className={styles.package}>
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
                  </div>
                  <div className={styles[`text-container`]}>
                    <p>{item.name}</p>
                    <Button variant="contained">Details</Button>
                  </div>
                </Box>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Packages;
