import { FunctionComponent } from "react";
import FrameComponent9 from "./FrameComponent9";
import styles from "./FrameComponent12.module.css";

const FrameComponent12: FunctionComponent = () => {
  return (
    <section className={styles.ourStoryInner}>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-2@2x.png" />
        <FrameComponent9 />
        <div className={styles.aboutUsContentWrapper}>
          <div className={styles.aboutUsContent}>
            <div className={styles.journeyContent}>
              <div className={styles.aboutUsParent}>
                <div className={styles.aboutUs}>About Us</div>
                <h1 className={styles.chroniclesOfInnovation}>
                  Chronicles of Innovation: Our Journey at Dig4Crypto
                </h1>
                <div className={styles.ourJourneyBeganContainer}>
                  <p className={styles.ourJourneyBegan}>
                    Our journey began with a shared vision - to empower
                    individuals with the tools and knowledge to participate in
                    the cryptocurrency revolution. Starting as a small team of
                    blockchain enthusiasts, we embarked on a quest to demystify
                    the world of digital currencies and make it accessible to
                    all. We understood that cryptocurrency wasn't just about
                    financial potential; it represented a transformative force
                    in the way we perceive and manage wealth. As we ventured
                    deeper into this dynamic space, we encountered challenges,
                    absorbed invaluable lessons, and embraced change. We learned
                    that adaptability and innovation are the cornerstones of
                    success in the ever-evolving cryptocurrency industry. Our
                    journey reflects the broader evolution of the crypto
                    landscape, where we have grown and evolved alongside the
                    technologies and concepts we've championed.
                  </p>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <p className={styles.weBelieveThat}>
                    We believe that cryptocurrency is more than a speculative
                    investment; it's a key to unlocking financial independence
                    and fostering innovation. Our mission is to be your reliable
                    partner in this journey, providing you with the resources to
                    navigate the exciting landscape of digital currency
                    confidently and successfully. Our vision extends beyond the
                    present, offering a glimpse into the future of
                    cryptocurrency and blockchain technology. We envision a
                    world where digital currencies are not just accessible but
                    also secure and influential. Our goal is to be at the
                    forefront of the cryptocurrency revolution, actively
                    contributing to its growth and development. As we work
                    towards this vision, we are dedicated to making
                    cryptocurrency practical and tangible for individuals and
                    businesses. Our objective is to provide the tools, services,
                    and knowledge necessary for you to succeed in this rapidly
                    evolving landscape.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.rectangleGroup}>
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/rectangle-57@2x.png"
                />
                <div className={styles.weAreCommitted}>
                  We are committed to pushing the boundaries of cryptocurrency
                  technology. We embrace innovation to provide our customers
                  with cutting-edge solutions and stay at the forefront of the
                  crypto industry.
                </div>
              </div>
              <div className={styles.rectangleContainer}>
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/rectangle-57-1@2x.png"
                />
                <div className={styles.wePrioritizeOur}>
                  We prioritize our customers' success. From 24/7 support to
                  tailored solutions, our focus is on delivering exceptional
                  value to each individual client.
                </div>
              </div>
              <div className={styles.frameDiv}>
                <img
                  className={styles.rectangleIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle-57-2@2x.png"
                />
                <div className={styles.theSecurityOf}>
                  The security of your digital assets is non-negotiable. We
                  employ the highest standards of security protocols and
                  encryption to ensure your investments are safeguarded at all
                  times.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent12;
