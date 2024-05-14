import { FunctionComponent } from "react";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent8 from "../components/FrameComponent8";
import styles from "./Cart.module.css";

const Cart: FunctionComponent = () => {
  return (
    <div className={styles.cart}>
      <FrameComponent10 />
      <FrameComponent8 />
    </div>
  );
};

export default Cart;
