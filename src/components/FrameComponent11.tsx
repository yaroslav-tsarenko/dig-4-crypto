import { FunctionComponent } from "react";
import styles from "./FrameComponent11.module.css";

const FrameComponent11: FunctionComponent = () => {
  return (
    <section className={styles.testimonialContentWrapper}>
      <div className={styles.testimonialContent}>
        <div className={styles.testimonialContentChild} />
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/rectangle-161@2x.png"
          />
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.dig4cryptoHasBeen}>
              "Dig4Crypto has been my trusted companion on my cryptocurrency
              journey. Their cutting-edge technology, unwavering support, and
              commitment to my success have been instrumental in my
              achievements. With Dig4Crypto, I've turned digital dreams into
              tangible financial realities. Joining hands with them has been a
              strategic move that continues to pay dividends."
            </div>
            <div className={styles.louiseCrowellFounder}>
              Louise Crowell (Founder)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent11;
