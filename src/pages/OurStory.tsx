import { FunctionComponent } from "react";
import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent2 from "../components/FrameComponent2";
import Footer from "../components/Footer";
import styles from "./OurStory.module.css";

const OurStory: FunctionComponent = () => {
  return (
    <div className={styles.ourStory}>
      <FrameComponent12 />
      <FrameComponent10 />
      <FrameComponent11 />
      <section className={styles.queriesContentParent}>
        <div className={styles.queriesContent}>
          <img
            className={styles.queriesContentChild}
            loading="lazy"
            alt=""
            src="/group-17@2x.png"
          />
          <img
            className={styles.queriesContentItem}
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <div className={styles.instanceParent}>
          <div className={styles.frameParent}>
            <div className={styles.answersToYourQueriesParent}>
              <div className={styles.answersToYour}>
                Answers to Your Queries
              </div>
              <h1 className={styles.frequentlyAskedQuestions}>
                Frequently Asked Questions (FAQs)
              </h1>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameContainer}>
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
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/group-66@2x.png"
                  />
                </div>
              </div>
              <FrameComponent2 whatSecurityMeasuresAreIn="What security measures are in place to protect my digital assets?" />
              <FrameComponent2 whatSecurityMeasuresAreIn="Can I upgrade or downgrade my mining plan at any time?" />
              <FrameComponent2 whatSecurityMeasuresAreIn="Are there any hidden fees or additional costs I should be aware of?" />
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
      <Footer />
    </div>
  );
};

export default OurStory;
