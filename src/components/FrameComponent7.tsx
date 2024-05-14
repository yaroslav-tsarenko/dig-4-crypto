import { FunctionComponent } from "react";
import FrameComponent9 from "./FrameComponent9";
import FrameComponent8 from "./FrameComponent8";
import styles from "./FrameComponent7.module.css";

const FrameComponent7: FunctionComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <img className={styles.frameChild} alt="" src="/group-1@2x.png" />
          <img className={styles.frameItem} alt="" src="/group-15.svg" />
        </div>
        <FrameComponent9 />
        <div className={styles.frameWrapper}>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.transformingDreamsIntoDigitParent}>
                <div className={styles.transformingDreamsInto}>
                  Transforming Dreams into Digital Dollars
                </div>
                <h1 className={styles.forgeYourProsperous}>
                  Forge Your Prosperous Tomorrow with Dig4Crypto
                </h1>
              </div>
              <FrameComponent8 frame2="Begin Your Journey" />
            </div>
            <div className={styles.discoverTheStrengthOfOurNParent}>
              <div className={styles.discoverTheStrength}>
                {" "}
                discover the strength of our network in the crypto world
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.rectangleParent}>
                    <img
                      className={styles.frameInner}
                      loading="lazy"
                      alt=""
                      src="/rectangle-3@2x.png"
                    />
                    <img
                      className={styles.rectangleIcon}
                      loading="lazy"
                      alt=""
                      src="/rectangle-4@2x.png"
                    />
                    <img
                      className={styles.frameChild1}
                      loading="lazy"
                      alt=""
                      src="/rectangle-5@2x.png"
                    />
                    <img
                      className={styles.frameChild2}
                      alt=""
                      src="/rectangle-6@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.rectangleGroup}>
                    <img
                      className={styles.frameChild3}
                      alt=""
                      src="/rectangle-5@2x.png"
                    />
                    <img
                      className={styles.frameChild4}
                      alt=""
                      src="/rectangle-4@2x.png"
                    />
                    <img
                      className={styles.frameChild5}
                      alt=""
                      src="/rectangle-3@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.frameChild6} alt="" src="/rectangle-13@2x.png" />
    </section>
  );
};

export default FrameComponent7;
