import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import styles from "./FrameComponent20.module.css";

const FrameComponent20: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <img className={styles.frameItem} alt="" src="/rectangle-16@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.bitmainAntminerS19Parent}>
          <h1 className={styles.bitmainAntminerS19}>Bitmain Antminer S19</h1>
          <div className={styles.sha256AlgorithmMining}>
            SHA-256 Algorithm Mining Server95 TH/s | 3250 W | 34.2 J/TH
          </div>
        </div>
        <div className={styles.thePinnacleOf}>
          The pinnacle of crypto hosting solutions designed to cater to the
          needs of serious investors, traders, and blockchain enthusiasts. With
          Dedicated Hosting, you're in complete control of your crypto
          environment. Enjoy exclusive access to powerful hardware, ensuring
          lightning-fast speeds and optimal performance for your digital assets.
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.monthlyParent}>
                <div className={styles.monthly}>Monthly</div>
                <div className={styles.frameDiv}>
                  <input
                    className={styles.frameInner}
                    placeholder="Hourly"
                    type="text"
                  />
                  <div className={styles.rectangleDiv} />
                </div>
              </div>
            </div>
            <img className={styles.vectorIcon} alt="" src="/vector-25.svg" />
          </div>
          <div className={styles.frameChild1} />
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent1}>
              <div className={styles.durationWrapper}>
                <div className={styles.duration}>Duration:</div>
              </div>
              <FormControl
                className={styles.parent}
                variant="standard"
                sx={{
                  borderColor: "#fff",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "66.66666666666666%",
                  height: "41px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "41px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "41px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "41px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "41px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "Medium",
                    fontFamily: "Montserrat",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "13px",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="22px"
                      height="11px"
                      src="/frame-198.png"
                      style={{ marginRight: "9px" }}
                    />
                  )}
                >
                  <MenuItem>7 Hours</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
          </div>
        </div>
        <div className={styles.quantityParent}>
          <div className={styles.quantity}>Quantity:</div>
          <div className={styles.frameParent2}>
            <div className={styles.wrapper}>
              <div className={styles.div}>-</div>
            </div>
            <div className={styles.container}>
              <div className={styles.div1}>1</div>
            </div>
            <div className={styles.frame}>
              <div className={styles.div2}>+</div>
            </div>
          </div>
        </div>
        <Button
          className={styles.frameButton}
          disableElevation={true}
          variant="contained"
          sx={{
            color: "#fff",
            fontSize: "16",
            background: "#0027f9",
            borderRadius: "100px",
            "&:hover": { background: "#0027f9" },
            height: 52,
          }}
        >
          Begin Your Journey
        </Button>
      </div>
    </div>
  );
};

export default FrameComponent20;
