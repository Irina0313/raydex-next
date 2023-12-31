import Image from "next/image";
import Link from "next/link";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <Link href={"/"} className={styles.logoLink}>
      <Image src="/Raydex_logo.png" alt="Logo image" width="256" height="97" />
    </Link>
  );
};

export default Logo;
