import Image from "next/image";
import styles from "./Logo.module.css";
import logo_white from "../../../../public/logo_white.png";
import logo_black from "../../../../public/logo_black.png";

type LogoProps = {
  tint_color: "black" | "white";
};

export default function Logo({ tint_color }: LogoProps) {
  return (
    <div className={styles.logo}>
      <Image
        src={tint_color === "white" ? logo_white : logo_black}
        alt="logo"
        width={50}
        height={50}
      />
      <p className={styles.logoText} style={{ color: tint_color }}>
        MADRIGAL
      </p>
    </div>
  );
}
