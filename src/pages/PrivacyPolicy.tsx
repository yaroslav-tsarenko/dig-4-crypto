import { FunctionComponent } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy: FunctionComponent = () => {
  return (
    <div className={styles.privacyPolicy}>
      <Nav />
      <section className={styles.content}>
        <div className={styles.policy}>
          <div className={styles.legalPolicies}>Legal Policies</div>
          <h1 className={styles.privacyPolicy1}>Privacy policy</h1>
        </div>
        <img
          className={styles.contentChild}
          loading="lazy"
          alt=""
          src="/rectangle-561@2x.png"
        />
        <div className={styles.introductionThisPrivacyContainer}>
          <p className={styles.introduction}>{`1. Introduction
`}</p>
          <p className={styles.thisPrivacyPolicy}>
            This Privacy Policy explains how Dig4Crypto ("we," "our," or "us")
            collects, uses, discloses, and protects your personal information
            when you use our website and services. We are committed to
            safeguarding your privacy, and this policy outlines our practices
            regarding the collection and handling of your personal data.
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.informationWeCollect}>{`2. Information We Collect
`}</p>
          <p className={styles.aPersonalInformation}>
            a. Personal Information: When you use our services, we may collect
            personal information such as your name, email address, contact
            information, payment details, and other information necessary to
            provide our services.
          </p>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p className={styles.bUsageInformation}>
            b. Usage Information: We may collect information about your
            interactions with our website, including your IP address, device
            information, browser type, and pages visited. This information is
            collected using cookies and similar technologies.
          </p>
          <p className={styles.blankLine2}>&nbsp;</p>
          <p className={styles.cBlockchainTransaction}>
            c. Blockchain Transaction Data: If you use our services for
            blockchain-related activities, we may collect transaction data
            associated with your blockchain address, but we do not collect
            private keys or sensitive information.
          </p>
          <p className={styles.blankLine3}>&nbsp;</p>
          <p className={styles.howWeUse}>{`3. How We Use Your Information
`}</p>
          <p className={styles.weMayUse}>
            We may use your personal information for the following purposes:
          </p>
          <p className={styles.blankLine4}>&nbsp;</p>
          <p className={styles.aToProvide}>
            a. To provide and maintain our services.
          </p>
          <p className={styles.blankLine5}>&nbsp;</p>
          <p className={styles.bToProcess}>
            b. To process payments and transactions.
          </p>
          <p className={styles.blankLine6}>&nbsp;</p>
          <p className={styles.cToRespond}>
            c. To respond to your inquiries, requests, or customer support
            needs.
          </p>
          <p className={styles.blankLine7}>&nbsp;</p>
          <p className={styles.dToImprove}>
            d. To improve our website and services.
          </p>
          <p className={styles.blankLine8}>&nbsp;</p>
          <p className={styles.eToSend}>
            e. To send you updates, newsletters, or promotional materials if you
            have opted to receive them.
          </p>
          <p className={styles.blankLine9}>&nbsp;</p>
          <p className={styles.fToDetect}>
            f. To detect and prevent fraud, security breaches, or other illegal
            activities.
          </p>
          <p className={styles.blankLine10}>&nbsp;</p>
          <p className={styles.dataSharing}>{`4. Data Sharing
`}</p>
          <p className={styles.weMayShare}>
            We may share your personal information with:
          </p>
          <p className={styles.blankLine11}>&nbsp;</p>
          <p className={styles.aThirdPartyService}>
            a. Third-party service providers who assist us in providing our
            services, including payment processors and hosting providers.
          </p>
          <p className={styles.blankLine12}>&nbsp;</p>
          <p className={styles.bLegalAuthorities}>
            b. Legal authorities or regulatory bodies when required by law or to
            protect our rights, privacy, safety, or property, or that of others.
          </p>
          <p className={styles.blankLine13}>&nbsp;</p>
          <p className={styles.dataSecurity}>{`5. Data Security
`}</p>
          <p className={styles.weTakeReasonable}>
            We take reasonable steps to protect your personal information from
            unauthorized access, use, or disclosure. However, please note that
            no method of data transmission over the internet is 100% secure, and
            we cannot guarantee the absolute security of your data.
          </p>
          <p className={styles.blankLine14}>&nbsp;</p>
          <p className={styles.yourChoice}>6. Your Choice</p>
          <p className={styles.blankLine15}>&nbsp;</p>
          <p className={styles.youHaveThe}>
            You have the following rights regarding your personal information:
          </p>
          <p className={styles.blankLine16}>&nbsp;</p>
          <p className={styles.aAccessYou}>
            a. Access: You can request access to the personal information we
            hold about you.
          </p>
          <p className={styles.blankLine17}>&nbsp;</p>
          <p className={styles.bCorrectionYou}>
            b. Correction: You can request corrections to any inaccuracies in
            your personal information.
          </p>
          <p className={styles.blankLine18}>&nbsp;</p>
          <p className={styles.cDeletionYou}>
            c. Deletion: You can request the deletion of your personal
            information, subject to applicable legal obligations.
          </p>
          <p className={styles.blankLine19}>&nbsp;</p>
          <p className={styles.dMarketingCommunications}>
            d. Marketing Communications: You can opt-out of receiving marketing
            communications from us by following the unsubscribe instructions in
            our emails.
          </p>
          <p className={styles.blankLine20}>&nbsp;</p>
          <p
            className={styles.changesToThis}
          >{`7. Changes to this Privacy Policy
`}</p>
          <p className={styles.weMayUpdate}>
            We may update this Privacy Policy from time to time. The most
            current version will be posted on our website with the effective
            date. Your continued use of our services after any changes to this
            Privacy Policy will constitute your acceptance of those changes.
          </p>
          <p className={styles.blankLine21}>&nbsp;</p>
          <p className={styles.contactUs}>{`8. Contact Us
`}</p>
          <p className={styles.ifYouHave}>
            If you have any questions or concerns about this Privacy Policy or
            how we handle your personal information, please contact us at
            [Contact Information].
          </p>
          <p className={styles.blankLine22}>&nbsp;</p>
          <p className={styles.byUsingOur}>
            By using our services, you agree to the terms of this Privacy
            Policy. Please review this policy regularly for updates.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
