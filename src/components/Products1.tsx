import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import styles from "./Products1.module.css";

export type Products1Type = {
  rectangle12?: string;

  /** Style props */
  propBackground?: CSSProperties["background"];
};

const Products1: FunctionComponent<Products1Type> = ({
  rectangle12,
  propBackground,
}) => {
  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  return (
    <div className={styles.products}>
      <div className={styles.productsChild} style={rectangleDiv1Style} />
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={rectangle12}
        />
        <div className={styles.cryptopowerX9MiningRigParent}>
          <div className={styles.cryptopowerX9Mining}>
            CryptoPower X9 Mining Rig
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

export default Products1;
