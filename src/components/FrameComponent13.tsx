import { FunctionComponent } from "react";
import Products1 from "./Products1";
import styles from "./FrameComponent13.module.css";

const FrameComponent13: FunctionComponent = () => {
  return (
    <section className={styles.productListingInner}>
      <div className={styles.productsParent}>
        <Products1 rectangle12="/rectangle-121@2x.png" />
        <Products1
          rectangle12="/rectangle-12-11@2x.png"
          propBackground="linear-gradient(180deg, #152160, #0c012b)"
        />
        <Products1
          rectangle12="/rectangle-12-21@2x.png"
          propBackground="linear-gradient(180deg, #500078, #0c012b)"
        />
        <Products1
          rectangle12="/rectangle-12-3@2x.png"
          propBackground="linear-gradient(180deg, #152160, #0c012b)"
        />
        <Products1
          rectangle12="/rectangle-12-4@2x.png"
          propBackground="linear-gradient(180deg, #152160, #0c012b)"
        />
        <Products1
          rectangle12="/rectangle-12-5@2x.png"
          propBackground="linear-gradient(180deg, #500078, #0c012b)"
        />
        <Products1
          rectangle12="/rectangle-12-6@2x.png"
          propBackground="linear-gradient(180deg, #152160, #0c012b)"
        />
        <Products1
          rectangle12="/rectangle-121@2x.png"
          propBackground="linear-gradient(180deg, #500078, #0c012b)"
        />
      </div>
    </section>
  );
};

export default FrameComponent13;
