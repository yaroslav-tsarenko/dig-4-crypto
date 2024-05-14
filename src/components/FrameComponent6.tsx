import { FunctionComponent } from "react";
import Products from "./Products";
import styles from "./FrameComponent6.module.css";

const FrameComponent6: FunctionComponent = () => {
  return (
    <section className={styles.homepageInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.ourProductsWrapper}>
              <div className={styles.ourProducts}>Our Products</div>
            </div>
            <div className={styles.unveilTheFutureOfCryptoMiWrapper}>
              <h1 className={styles.unveilTheFuture}>
                Unveil the Future of Crypto Mining with Dig4Crypto
              </h1>
            </div>
            <div className={styles.exploreOurHandpicked}>
              Explore our handpicked selection of cutting-edge products that
              redefine the crypto mining experience. From powerful mining rigs
              to advanced cooling solutions, we have everything you need to
              supercharge your mining operations. With Dig4Crypto, you're not
              just mining; you're innovating. Explore our product range and stay
              ahead of the curve in the cryptocurrency world.
            </div>
          </div>
        </div>
        <div className={styles.productsParent}>
          <Products
            rectangle12="/rectangle-12@2x.png"
            cryptoPowerX9MiningRig="CryptoPower X9 Mining Rig"
          />
          <Products
            rectangle12="/rectangle-12-1@2x.png"
            cryptoPowerX9MiningRig="ThermoCool Pro Cooling System"
            propBackground="linear-gradient(180deg, #152160, #0c012b)"
          />
          <Products
            rectangle12="/rectangle-12-2@2x.png"
            cryptoPowerX9MiningRig="BlockChainSentry Security Suite"
            propBackground="linear-gradient(180deg, #500078, #0c012b)"
          />
          <Products
            rectangle12="/rectangle-12@2x.png"
            cryptoPowerX9MiningRig="BitMineMax Profit  Software"
            propBackground="linear-gradient(180deg, #152160, #0c012b)"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
