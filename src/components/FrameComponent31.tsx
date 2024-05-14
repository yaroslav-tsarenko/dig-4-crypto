import { FunctionComponent } from "react";
import styles from "./FrameComponent31.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <section className={styles.buyCreditsInner}>
      <div className={styles.frameParent}>
        <div className={styles.userAccountParent}>
          <h1 className={styles.userAccount}>User Account</h1>
          <div className={styles.header}>
            <div className={styles.yourActiveDownloads}>
              Your Active Downloads
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.productImageParent}>
              <img
                className={styles.productImageIcon}
                loading="lazy"
                alt=""
                src="/product-image@2x.png"
              />
              <div className={styles.hostingPackageForServerParent}>
                <div className={styles.hostingPackageFor}>
                  Hosting Package for Server
                </div>
                <div className={styles.w1500w}>1000W - 1500W</div>
              </div>
              <div className={styles.creditsInfoParent}>
                <div className={styles.creditsInfo}>$120.00</div>
                <div className={styles.credits}>12 Credits</div>
              </div>
            </div>
            <div className={styles.upTimeParent}>
              <div className={styles.upTime}>Up Time</div>
              <div className={styles.hrs}>120 Hrs</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.iconsBlockWrapper}>
                <img
                  className={styles.iconsBlock}
                  loading="lazy"
                  alt=""
                  src="/icons-block.svg"
                />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.frameWrapper}>
                  <div className={styles.nextRenewalParent}>
                    <div className={styles.nextRenewal}>Next Renewal</div>
                    <div className={styles.april2024}>24 April, 2024</div>
                  </div>
                </div>
                <div className={styles.cancelParent}>
                  <div className={styles.cancel}>Cancel</div>
                  <div className={styles.frameParent1}>
                    <div className={styles.iconsBlockContainer}>
                      <img
                        className={styles.iconsBlock1}
                        loading="lazy"
                        alt=""
                        src="/icons-block-1.svg"
                      />
                    </div>
                    <div className={styles.renew}>Renew</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.checkoutDetails}>
          <div className={styles.header1}>
            <div className={styles.userDetails}>User Details</div>
          </div>
          <div className={styles.checkoutDetailsInner}>
            <div className={styles.nameParent}>
              <div className={styles.name}>Name</div>
              <div className={styles.darnellRoob}>Darnell Roob</div>
            </div>
          </div>
          <div className={styles.checkoutDetailsChild}>
            <div className={styles.emailAddressParent}>
              <div className={styles.emailAddress}>Email Address</div>
              <div className={styles.darnellroobhotmailcom}>
                Darnell.Roob@hotmail.com
              </div>
            </div>
          </div>
          <div className={styles.checkoutDetailsInner1}>
            <div className={styles.planParent}>
              <div className={styles.plan}>Plan</div>
              <div className={styles.basic}>Basic</div>
            </div>
          </div>
          <div className={styles.checkoutDetailsInner2}>
            <div className={styles.frameParent2}>
              <div className={styles.expiryDateParent}>
                <div className={styles.expiryDate}>Expiry Date</div>
                <div className={styles.autoRenewal}>Auto Renewal</div>
              </div>
              <div className={styles.april2024Parent}>
                <div className={styles.april20241}>24 April, 2024</div>
                <div className={styles.on}>On</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
