import { FunctionComponent } from "react";
import FrameComponent21 from "../components/FrameComponent21";
import FrameComponent20 from "../components/FrameComponent20";
import FrameComponent18 from "../components/FrameComponent18";
import FrameComponent17 from "../components/FrameComponent17";
import FrameComponent16 from "../components/FrameComponent16";
import styles from "./PDP.module.css";

const PDP: FunctionComponent = () => {
  return (
    <div className={styles.pdp}>
      <FrameComponent21 />
      <div className={styles.pdpInner}>
        <FrameComponent20 />
      </div>
      <FrameComponent18 />
      <section className={styles.pdpChild}>
        <div className={styles.frameParent}>
          <div className={styles.unlockHighSpeedCryptocurrenParent}>
            <h1 className={styles.unlockHighSpeedCryptocurrenContainer}>
              <p className={styles.unlockHighSpeed}>Unlock High-Speed</p>
              <p className={styles.cryptocurrencyMining}>
                Cryptocurrency Mining
              </p>
            </h1>
            <div className={styles.atDig4cryptoWeUnderstandTWrapper}>
              <div className={styles.atDig4cryptoWeContainer}>
                <p className={styles.atDig4cryptoWe}>
                  At Dig4Crypto, we understand that speed and efficiency are
                  paramount in the world of cryptocurrency mining. That's why
                  we're committed to providing high-speed solutions that set you
                  on the fast track to success. Our mining rigs are engineered
                  with the latest advancements in technology, ensuring top-tier
                  performance and speed. We invest in state-of-the-art hardware
                  to deliver the fastest mining experience, so you can stay
                  ahead in the competitive cryptocurrency market.
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.efficiencyIsAt}>
                  Efficiency is at the heart of what we do. We offer optimized
                  solutions that not only enhance mining speed but also maximize
                  profitability. From streamlined processes to energy-efficient
                  setups, our commitment to efficiency is your key to rapid
                  success. Speed is nothing without reliability. Our 24/7
                  monitoring and support ensure that your mining operations run
                  smoothly at all times. In case of any issues or questions, our
                  team of experts is just a call or message away to provide
                  rapid assistance.
                </p>
              </div>
            </div>
          </div>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/rectangle-72@2x.png"
          />
        </div>
      </section>
      <FrameComponent17 />
      <section className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/group-17@2x.png"
          />
          <img className={styles.frameInner} alt="" src="/vector-1.svg" />
        </div>
        <div className={styles.instanceParent}>
          <div className={styles.frameDiv}>
            <div className={styles.answersToYourQueriesParent}>
              <div className={styles.answersToYour}>
                Answers to Your Queries
              </div>
              <h1 className={styles.frequentlyAskedQuestions}>
                Frequently Asked Questions (FAQs)
              </h1>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent2}>
                  <div className={styles.howDoIGetStartedWithCrypParent}>
                    <div className={styles.howDoI}>
                      How do I get started with crypto mining using Dig4Crypto?
                    </div>
                    <div className={styles.gettingStartedIs}>
                      Getting started is easy. Simply sign up, choose a mining
                      plan, and follow our step-by-step setup guides. If you
                      have any questions, our 24/7 customer support is here to
                      assist you.
                    </div>
                  </div>
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group-66@2x.png"
                  />
                </div>
              </div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-2.svg"
                />
                <div className={styles.frameParent3}>
                  <div className={styles.whatSecurityMeasuresAreInWrapper}>
                    <div className={styles.whatSecurityMeasures}>
                      What security measures are in place to protect my digital
                      assets?
                    </div>
                  </div>
                  <img
                    className={styles.frameChild1}
                    loading="lazy"
                    alt=""
                    src="/group-66-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.vectorGroup}>
                <img
                  className={styles.frameChild2}
                  alt=""
                  src="/vector-2.svg"
                />
                <div className={styles.frameParent4}>
                  <div className={styles.canIUpgradeOrDowngradeMyWrapper}>
                    <div className={styles.canIUpgrade}>
                      Can I upgrade or downgrade my mining plan at any time?
                    </div>
                  </div>
                  <img
                    className={styles.frameChild3}
                    loading="lazy"
                    alt=""
                    src="/group-66-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.vectorContainer}>
                <img
                  className={styles.frameChild4}
                  alt=""
                  src="/vector-2.svg"
                />
                <div className={styles.frameParent5}>
                  <div className={styles.areThereAnyHiddenFeesOrAWrapper}>
                    <div className={styles.areThereAny}>
                      Are there any hidden fees or additional costs I should be
                      aware of?
                    </div>
                  </div>
                  <img
                    className={styles.frameChild5}
                    loading="lazy"
                    alt=""
                    src="/group-66-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.joinDig4cryptoTodayParent}>
            <div className={styles.joinDig4cryptoToday}>
              Join Dig4Crypto Today!
            </div>
            <h1 className={styles.readyToDive}>
              Ready to Dive into the World of Crypto Mining?
            </h1>
            <div className={styles.atDig4cryptoWere}>
              At Dig4Crypto, we're not just a service; we're your gateway to a
              world of cryptocurrency opportunities. With cutting-edge
              technology, unwavering security, and a commitment to your success,
              we're here to support your crypto mining journey.
            </div>
          </div>
        </div>
      </section>
      <FrameComponent16 />
    </div>
  );
};

export default PDP;
