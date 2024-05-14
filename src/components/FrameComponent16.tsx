import { FunctionComponent } from "react";
import styles from "./FrameComponent16.module.css";

const FrameComponent16: FunctionComponent = () => {
  return (
    <section className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.dig4cryptoParent}>
          <h1 className={styles.dig4crypto}>Dig4Crypto</h1>
          <div className={styles.thankYouFor}>
            Explore our services, discover financial possibilities, and stay
            updated on the latest in the cryptocurrency world. Join our thriving
            community of miners, innovators, and investors as we shape the
            future together. For inquiries, support, or to learn more about
            Dig4Crypto, contact us at [Your Contact Information].
          </div>
          <div className={styles.copyright2023}>
            Copyright © 2023 Dig4Crypto. All Rights Reserved.
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
    </section>
  );
};

export default FrameComponent16;
