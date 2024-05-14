import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./Checkout.module.css";

const Checkout: FunctionComponent = () => {
  return (
    <div className={styles.checkout}>
      <FrameComponent2  />
      <section className={styles.checkoutInner}>
        <form className={styles.frameParent}>
          <FrameComponent1 />
          <FrameComponent />
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Checkout;
