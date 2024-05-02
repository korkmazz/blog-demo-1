import styles from "./Footer.module.css";
import { IoChevronForwardSharp } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import logo from "../../../../public/logo_white.png";
import Image from "next/image";
import Logo from "../logo/Logo";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.formRow}>
        <p className={styles.title}>Sign up for a discount now.</p>
        <form className={styles.form}>
          <input
            type="text"
            className={styles.emailInput}
            placeholder="Your email address"
          />
          <button className={styles.emailSubmit}>
            <IoChevronForwardSharp />
          </button>
        </form>
      </div>
      <div className={styles.linkRow}>
        <div className={styles.footerBlock}>
          <Logo tint_color="white" />
        </div>
        <div className={styles.footerBlock}>
          <h5 className={styles.footerBlockTitle}>Quick Links</h5>
          <div className={styles.footerLinkBlocks}>
            <a href="#" className={styles.footerLink}>
              Return Policy
            </a>
            <a href="#" className={styles.footerLink}>
              Track your order
            </a>
            <a href="#" className={styles.footerLink}>
              Shipping & Delivery
            </a>
            <a href="#" className={styles.footerLink}>
              Help Center
            </a>
          </div>
        </div>
        <div className={styles.footerBlock}>
          <h5 className={styles.footerBlockTitle}>Quick Links</h5>
          <div className={styles.footerLinkBlocks}>
            <a href="#" className={styles.footerLink}>
              Shop
            </a>
            <a href="#" className={styles.footerLink}>
              How it works
            </a>
            <a href="#" className={styles.footerLink}>
              FAQ
            </a>
            <a
              href="#"
              className={styles.footerLink}
              style={{ color: "#f4c979" }}
            >
              Contact
            </a>
          </div>
        </div>
        <div className={styles.footerBlock}>
          <div className={styles.socialMedia}>
            <BsFacebook color="white" />
            <FaInstagram color="white" />
            <FaTwitter color="white" />
          </div>
        </div>
      </div>
      <div className={styles.copyRightRow}>© 2024, Madrigal</div>
    </footer>
  );
}
