import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./Contact.module.css";

const Contact: FunctionComponent = () => {
  return (
    <div className={styles.contact}>
      <section className={styles.contactInner}>
        <FrameComponent2 />
      </section>
    </div>
  );
};

export default Contact;
