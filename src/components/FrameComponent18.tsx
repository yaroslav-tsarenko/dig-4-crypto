import { FunctionComponent } from "react";
import FrameComponent19 from "./FrameComponent19";
import styles from "./FrameComponent18.module.css";

const FrameComponent18: FunctionComponent = () => {
  return (
    <section className={styles.pdpInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.specificationParent}>
              <div className={styles.specification}>Specification</div>
              <div className={styles.enquiries}>Enquiries</div>
              <div className={styles.reviews}>Reviews</div>
            </div>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/vector-19.svg"
            />
          </div>
        </div>
        <div className={styles.vectorParent}>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/vector-24.svg"
          />
          <div className={styles.rectangleParent}>
            <div className={styles.frameInner} />
            <FrameComponent19
              exclusiveHardware="Exclusive Hardware"
              yourOwnDedicatedServerWit="Your own dedicated server with top-tier hardware for maximum performance."
            />
            <FrameComponent19
              exclusiveHardware="Customization"
              yourOwnDedicatedServerWit="Tailor your hosting environment to meet your specific crypto requirements."
              propWidth="1060px"
              propDisplay="inline-block"
              propMinWidth="119px"
            />
            <div className={styles.frameContainer}>
              <div className={styles.enhancedSecurityParent}>
                <div className={styles.enhancedSecurity}>Enhanced Security</div>
                <div className={styles.multiLayeredSecurityMeasureWrapper}>
                  <div className={styles.multiLayeredSecurityMeasure}>
                    Multi-layered security measures, including advanced
                    encryption and regular security audits.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.vectorWrapper}>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/vector-19-1.svg"
              />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.monitoringParent}>
                <div className={styles.monitoring}>24/7 Monitoring</div>
                <div className={styles.continuousServerMonitoringTWrapper}>
                  <div className={styles.continuousServerMonitoring}>
                    Continuous server monitoring to ensure uptime and rapid
                    issue resolution.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.vectorContainer}>
              <img
                className={styles.frameChild1}
                alt=""
                src="/vector-19-1.svg"
              />
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.scalabilityParent}>
                <div className={styles.scalability}>Scalability</div>
                <div className={styles.easilyScaleYourResourcesUpWrapper}>
                  <div className={styles.easilyScaleYour}>
                    Easily scale your resources up or down based on your crypto
                    projects and demands.
                  </div>
                </div>
              </div>
            </div>
            <img className={styles.frameChild2} alt="" src="/vector-19-1.svg" />
            <div className={styles.frameWrapper2}>
              <div className={styles.highSpeedConnectivityParent}>
                <div className={styles.highSpeedConnectivity}>
                  High-Speed Connectivity
                </div>
                <div className={styles.lightningFastNetworkConnectWrapper}>
                  <div className={styles.lightningFastNetworkConnect}>
                    Lightning-fast network connectivity for seamless crypto
                    transactions.
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

export default FrameComponent18;
