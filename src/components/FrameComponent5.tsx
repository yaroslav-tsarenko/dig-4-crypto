import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import FrameComponent8 from "./FrameComponent8";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <section className={styles.homepageInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.loremIpsumDolorSitAmetConWrapper}>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet consectetur
              </div>
            </div>
            <div className={styles.unlockProsperityWithOurSubWrapper}>
              <h1 className={styles.unlockProsperityWithContainer}>
                <span>{`Unlock Prosperity with Our Subscribe and Save: `}</span>
                <span className={styles.enjoy20Off}>Enjoy 20% Off</span>
              </h1>
            </div>
            <div className={styles.dig4cryptoIsThrilled}>
              Dig4Crypto is thrilled to introduce our exclusive Subscribe and
              Save program, where we offer you the key to unlocking unparalleled
              savings on your crypto mining journey. By subscribing to our
              services, you not only ensure a seamless and uninterrupted mining
              experience but also enjoy a generous 20% discount on your chosen
              plan. It's not just about saving money; it's about securing your
              financial future with confidence. Subscribe today and start your
              journey to prosperity with Dig4Crypto.
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <TextField
                  className={styles.frameChild}
                  placeholder="Type Your Email..."
                  variant="outlined"
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "69px",
                      backgroundColor: "#d9d9d9",
                      borderRadius: "0px 0px 16px 0px",
                    },
                    "& .MuiInputBase-input": { color: "#1f1f1f" },
                  }}
                />
                <div className={styles.instanceWrapper}>
                  <FrameComponent8 frame2="Subscribe" propWidth="177px" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.embraceTheFutureOfMiningParent}>
            <h1 className={styles.embraceTheFuture}>
              Embrace the Future of Mining
            </h1>
            <div className={styles.stepIntoTheFutureOfCryptoParent}>
              <div className={styles.stepIntoTheContainer}>
                <p className={styles.stepIntoThe}>
                  Step into the future of cryptocurrency mining with Dig4Crypto.
                  Our state-of-the-art solutions open the gates to a realm of
                  boundless opportunities. From high-performance mining rigs to
                  secure hosting services, we provide the tools and expertise
                  you need to thrive in the ever-evolving world of blockchain.
                  Join us as we redefine the digital frontier and shape the path
                  to financial success.
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.atDig4cryptoYour}>
                  At Dig4Crypto, your success is our mission. We offer more than
                  just products; we provide unwavering support. Our team of
                  experts is here to guide you through the intricacies of crypto
                  mining, ensuring you achieve the best results. With a
                  commitment to innovation and excellence, we're with you at
                  every step of your mining journey. In the fast-paced world of
                  cryptocurrencies, security is paramount. Dig4Crypto's
                  dedication to safeguarding your assets is unmatched. Our
                  advanced security solutions and robust protocols ensure that
                  your investments remain shielded from potential threats. Trust
                  in our commitment to protecting your digital wealth as you
                  mine with confidence and peace of mind.
                </p>
              </div>
              <div className={styles.learnMoreAboutContainer}>
                <span>{`Learn More `}</span>
                <span className={styles.aboutUs}> About Us</span>
              </div>
            </div>
          </div>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/rectangle-7@2x.png"
          />
        </div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameInner}
            alt=""
            src="/rectangle-7-1@2x.png"
          />
          <div className={styles.discoverTheDig4cryptoAdvantParent}>
            <h1 className={styles.discoverTheDig4crypto}>
              Discover the Dig4Crypto Advantage
            </h1>
            <div className={styles.atDig4cryptoWereYourTrusParent}>
              <div className={styles.atDig4cryptoWere}>
                At Dig4Crypto, we're your trusted partner in the world of
                cryptocurrency. Our commitment to innovation, security, and
                excellence empowers you to thrive. Join us and experience a
                world where your digital dreams become tangible reality.
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent2}>
                  <div className={styles.rectangleGroup}>
                    <img
                      className={styles.rectangleIcon}
                      loading="lazy"
                      alt=""
                      src="/rectangle-17@2x.png"
                    />
                    <div className={styles.cuttingEdgeTechnolog}>
                      Cutting-Edge Technolog
                    </div>
                  </div>
                  <div className={styles.rectangleContainer}>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/rectangle-17@2x.png"
                    />
                    <div className={styles.customerSupport}>
                      24/7 Customer Support
                    </div>
                  </div>
                  <div className={styles.rectangleParent1}>
                    <img
                      className={styles.frameChild2}
                      alt=""
                      src="/rectangle-17@2x.png"
                    />
                    <div className={styles.secureHostingServices}>
                      Secure Hosting Services
                    </div>
                  </div>
                  <div className={styles.rectangleParent2}>
                    <img
                      className={styles.frameChild3}
                      alt=""
                      src="/rectangle-17@2x.png"
                    />
                    <div className={styles.costEffectiveSolutions}>
                      Cost-Effective Solutions
                    </div>
                  </div>
                  <div className={styles.rectangleParent3}>
                    <img
                      className={styles.frameChild4}
                      alt=""
                      src="/rectangle-17@2x.png"
                    />
                    <div className={styles.expertiseYouCan}>
                      Expertise You Can Trus
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
