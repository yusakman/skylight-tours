import Link from "next/link";
import { packages } from "@/const/packages";
import styles from "./styles.module.scss";

const Packages = () => {
  return (
    <div>
      <h1>Tour Packages</h1>
      {packages.map((item) => (
        <li key={item.name}>
          <Link href={`/packages/${encodeURIComponent(item.slug)}`}>
            {item.name}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Packages;
