import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent19.module.css";

export type FrameComponent19Type = {
  exclusiveHardware?: string;
  yourOwnDedicatedServerWit?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent19: FunctionComponent<FrameComponent19Type> = ({
  exclusiveHardware,
  yourOwnDedicatedServerWit,
  propWidth,
  propDisplay,
  propMinWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const exclusiveHardwareStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper} style={frameDivStyle}>
        <div className={styles.exclusiveHardwareParent}>
          <div
            className={styles.exclusiveHardware}
            style={exclusiveHardwareStyle}
          >
            {exclusiveHardware}
          </div>
          <div className={styles.yourOwnDedicatedServerWithWrapper}>
            <div className={styles.yourOwnDedicated}>
              {yourOwnDedicatedServerWit}
            </div>
          </div>
        </div>
      </div>
      <img className={styles.frameChild} alt="" src="/vector-19-1.svg" />
    </div>
  );
};

export default FrameComponent19;
