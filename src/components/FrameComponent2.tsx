import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  whatSecurityMeasuresAreIn?: string;

};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  whatSecurityMeasuresAreIn,
}) => {
  return (
    <div className={styles.vectorParent}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src="/vector-2.svg"
      />
      <div className={styles.frameParent}>
        <div className={styles.whatSecurityMeasuresAreInWrapper}>
          <div className={styles.whatSecurityMeasures}>
            {whatSecurityMeasuresAreIn}
          </div>
        </div>
        <img className={styles.frameItem} alt="" src="/group-66-1@2x.png" />
      </div>
    </div>
  );
};

export default FrameComponent2;
