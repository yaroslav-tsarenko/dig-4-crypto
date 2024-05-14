import { FunctionComponent } from "react";
import styles from "./FrameComponent24.module.css";

const FrameComponent24: FunctionComponent = () => {
  return (
    <section className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.rectangleGroup}>
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/rectangle-163@2x.png"
        />
        <div className={styles.rectangleContainer}>
          <div className={styles.frameInner} />
          <h1 className={styles.discoverAWealth}>
            Discover a Wealth of Knowledge in Our Blog
          </h1>
          <div className={styles.welcomeToOur}>
            Welcome to our blog listing, a treasure trove of insights, trends,
            and in-depth knowledge in the world of cryptocurrency and mining.
            Dive into a wealth of articles, guides, and analysis written by our
            experts to keep you informed and empowered. Whether you're a
            seasoned professional or just starting your cryptocurrency journey,
            our blog is your go-to resource for staying at the forefront of this
            dynamic industry. Unlock valuable information, strategic tips, and
            industry updates by
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent24;
