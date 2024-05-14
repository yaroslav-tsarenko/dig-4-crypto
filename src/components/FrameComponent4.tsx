import { FunctionComponent } from "react";
import FrameComponent8 from "./FrameComponent8";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <section className={styles.homepageInner}>
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-16@2x.png"
        />
        <div className={styles.frameItem} />
        <div className={styles.rectangleGroup}>
          <div className={styles.frameInner} />
          <div className={styles.buyCreditsCreditSolutionsParent}>
            <h1 className={styles.buyCreditsCreditContainer}>
              <p className={styles.buyCredits}>Buy Credits:</p>
              <p className={styles.creditSolutionsFor}>
                Credit Solutions for Crypto Success
              </p>
            </h1>
            <div className={styles.readyToDiscover}>
              Ready to discover the financial possibilities of cryptocurrency?
              Explore our credit listing page and find the tailored solutions
              you need to unlock your crypto assets' potential. Whether you're
              seeking liquidity or strategic financing, Dig4Crypto is your
              partner in prosperity. Dive into our credit offerings today and
              take the next step towards your financial goals.
            </div>
          </div>
          <FrameComponent8 frame2="Buy Credit " propWidth="182px" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
