import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent8.module.css";

export type FrameComponent8Type = {
  frame2?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  frame2,
  propWidth,
}) => {
  const frameButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <Button
      className={styles.frameChild}
      disableElevation={true}
      variant="contained"
      sx={{
        color: "#fff",
        fontSize: "16",
        background: "#0027f9",
        borderRadius: "100px",
        "&:hover": { background: "#0027f9" },
        width: 257,
        height: 52,
      }}
      style={frameButtonStyle}
    >
      {frame2}
    </Button>
  );
};

export default FrameComponent8;
