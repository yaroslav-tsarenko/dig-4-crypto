import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import Footer from "../components/Footer";
import styles from "./BuyCredits.module.css";

const BuyCredits: FunctionComponent = () => {
  return (
    <div className={styles.buyCredits}>
      <FrameComponent2
      />
      <FrameComponent3 />
      <Footer />
    </div>
  );
};

export default BuyCredits;
