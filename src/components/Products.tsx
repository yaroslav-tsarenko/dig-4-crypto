import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import styles from "./Products.module.css";

export type ProductsType = {
  rectangle12?: string;
  cryptoPowerX9MiningRig?: string;

  /** Style props */
  propBackground?: CSSProperties["background"];
};

const Products: FunctionComponent<ProductsType> = ({
  rectangle12,
  cryptoPowerX9MiningRig,
  propBackground,
}) => {
  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  return (
    <div className={styles.products}>
      <div className={styles.productsChild} style={rectangleDivStyle} />
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={rectangle12}
        />
        <div className={styles.cryptopowerX9MiningRigParent}>
          <div className={styles.cryptopowerX9Mining}>
            {cryptoPowerX9MiningRig}
          </div>
          <Button
            className={styles.frameItem}
            disableElevation={true}
            variant="outlined"
            sx={{
              color: "#fff",
              fontSize: "16",
              borderColor: "#fff",
              borderRadius: "100px",
              "&:hover": { borderColor: "#fff" },
            }}
          >
            add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
