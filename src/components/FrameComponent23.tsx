import { FunctionComponent } from "react";
import styles from "./FrameComponent23.module.css";

export type FrameComponent23Type = {
  rectangle55?: string;
  title?: string;
};

const FrameComponent23: FunctionComponent<FrameComponent23Type> = ({
  rectangle55,
  title,
}) => {
  return (
    <div className={styles.rectangleParent}>
      <img
        className={styles.instanceChild}
        loading="lazy"
        alt=""
        src={rectangle55}
      />
      <div className={styles.frameParent}>
        <div className={styles.titleParent}>
          <div className={styles.title}>{title}</div>
          <div className={styles.title1}>
            They are not just machines but catalysts for progress, orchestrating
            reliability, performance, and security in unison. With their
            scalability and centralized data storage capabilities, servers are
            the linchpin of our technological advancements.
          </div>
        </div>
        <div className={styles.title2}>Read More</div>
      </div>
    </div>
  );
};

export default FrameComponent23;
