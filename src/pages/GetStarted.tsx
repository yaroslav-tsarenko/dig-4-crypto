import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import Footer1 from "../components/Footer1";
import styles from "./GetStarted.module.css";

const GetStarted: FunctionComponent = () => {
  return (
    <div className={styles.getStarted}>
      <section className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.titleParent}>
            <div className={styles.title}>You Ask, We Answer</div>
            <h1 className={styles.title1}>Frequently Asked Questions</h1>
          </div>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/rectangle-60@2x.png"
          />
        </div>
        <FrameComponent />
      </section>
      <Footer1 />
    </div>
  );
};

export default GetStarted;
