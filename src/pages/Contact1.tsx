import { FunctionComponent } from "react";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./Contact1.module.css";

const Contact1: FunctionComponent = () => {
  return (
    <div className={styles.contact}>
      <FrameComponent7 />
      <main className={styles.frameParent}>
        <FrameComponent6 />
        <FrameComponent4 />
      </main>
    </div>
  );
};

export default Contact1;
