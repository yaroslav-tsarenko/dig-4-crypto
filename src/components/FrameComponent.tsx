import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footer}>
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
        <FrameComponent1 />
      </div>
    </footer>
  );
};

export default FrameComponent;
