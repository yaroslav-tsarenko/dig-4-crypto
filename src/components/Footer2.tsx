import { FunctionComponent } from "react";
import styles from "./Footer2.module.css";

const Footer2: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.dig4cryptoParent}>
        <h1 className={styles.dig4crypto}>Dig4Crypto</h1>
        <div className={styles.thankYouFor}>
          Thank you for joining us on this exploration of blockchain anonymity
          and the fascinating world of cryptocurrencies. As we continue our
          journey to unravel the mysteries of the crypto universe, we invite you
          to stay connected with HashServe.
        </div>
        <div className={styles.copyright2023}>
          Copyright © 2023 HashServe. All Rights Reserved.
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.quickLinksParent}>
          <div className={styles.quickLinks}>Quick Links</div>
          <div className={styles.home}>Home</div>
          <div className={styles.ourStory}>Our Story</div>
          <div className={styles.services}>Services</div>
          <div className={styles.buyCredits}>Buy Credits</div>
          <div className={styles.articles}>Articles</div>
          <div className={styles.contact}>Contact</div>
        </div>
        <div className={styles.legalParent}>
          <div className={styles.legal}>Legal</div>
          <div className={styles.termsConditions}>{`Terms & Conditions`}</div>
          <div className={styles.refundPolicy}>Refund Policy</div>
          <div className={styles.cancellation}>Cancellation</div>
          <div className={styles.privacyPolicy}>Privacy Policy</div>
        </div>
        <div className={styles.followUsOnParent}>
          <div className={styles.followUsOn}>Follow Us On</div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/ellipse-6@2x.png"
            />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/ellipse-7@2x.png"
            />
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/ellipse-8@2x.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
