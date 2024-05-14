import { FunctionComponent } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "./RefundPolicy.module.css";

const RefundPolicy: FunctionComponent = () => {
  return (
    <div className={styles.refundPolicy}>
      <Nav />
      <section className={styles.content}>
        <div className={styles.policies}>
          <div className={styles.legalPolicies}>Legal Policies</div>
          <h1 className={styles.refundPolicy1}>Refund Policy</h1>
        </div>
        <img
          className={styles.illustrationIcon}
          loading="lazy"
          alt=""
          src="/rectangle-562@2x.png"
        />
        <div className={styles.thankYouForContainer}>
          <p className={styles.thankYouFor}>
            Thank you for choosingDig4Crypto. We strive to provide the best
            hosting solutions and support to our customers. However, we
            understand that there may be instances where you may need to request
            a refund. This Refund Policy outlines our guidelines for refund
            requests.
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.eligibilityForRefund}>{`1. Eligibility for Refund
`}</p>
          <p className={styles.aCancellationWithin}>
            a. Cancellation within the Trial Period: If you are not satisfied
            with our services, you may cancel your subscription within the trial
            period (if applicable), and we will issue a full refund.
          </p>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p className={styles.bCancellationWithin}>
            b. Cancellation within the Refund Period: For paid subscriptions, if
            you decide to cancel your subscription within the refund period
            (usually 30 days from the date of purchase), you may be eligible for
            a refund.
          </p>
          <p className={styles.blankLine2}>&nbsp;</p>
          <p className={styles.refundProcess}>{`2. Refund Process
`}</p>
          <p className={styles.toRequestA}>
            To request a refund, please follow these steps:
          </p>
          <p className={styles.blankLine3}>&nbsp;</p>
          <p className={styles.aContactSupport}>
            a. Contact Support: Reach out to our customer support team via
            [Contact Information], providing details of your request and reasons
            for the refund.
          </p>
          <p className={styles.blankLine4}>&nbsp;</p>
          <p className={styles.bVerificationOur}>
            b. Verification: Our team will review your request and may contact
            you for additional information if necessary.
          </p>
          <p className={styles.blankLine5}>&nbsp;</p>
          <p className={styles.cRefundProcessing}>
            c. Refund Processing: If your request is approved, we will initiate
            the refund to the original payment method used for the purchase.
            Please note that it may take some time for the refund to appear in
            your account, depending on your payment provider.
          </p>
          <p className={styles.blankLine6}>&nbsp;</p>
          <p className={styles.nonRefundableItems}>{`3. Non-Refundable Items
`}</p>
          <p className={styles.aDomainNames}>
            a. Domain Names: We do not offer refunds for domain name
            registrations or renewals once they have been processed.
          </p>
          <p className={styles.blankLine7}>&nbsp;</p>
          <p className={styles.bAdditionalServices}>
            b. Additional Services: Any additional services or add-ons purchased
            separately from your hosting subscription are non-refundable.
          </p>
          <p className={styles.blankLine8}>&nbsp;</p>
          <p className={styles.discretionaryRefunds}>{`4. Discretionary Refunds
`}</p>
          <p className={styles.inCertainCases}>
            In certain cases, we may offer discretionary refunds outside the
            standard refund period. These cases will be evaluated on an
            individual basis, and eligibility for a refund will be determined at
            our sole discretion.
          </p>
          <p className={styles.blankLine9}>&nbsp;</p>
          <p className={styles.chargebacksAndDisputes}>
            5. Chargebacks and Disputes
          </p>
          <p className={styles.blankLine10}>&nbsp;</p>
          <p className={styles.ifYouInitiate}>
            If you initiate a chargeback or payment dispute without first
            contacting our customer support, your account may be subject to
            suspension or termination. We encourage you to reach out to us to
            resolve any issues or concerns before disputing a payment.
          </p>
          <p className={styles.blankLine11}>&nbsp;</p>
          <p className={styles.changesToThe}>{`6. Changes to the Refund Policy
`}</p>
          <p className={styles.weReserveThe}>
            We reserve the right to update or modify this Refund Policy at any
            time. Any changes will be effective immediately upon posting on our
            website. Your continued use of our services after the posting of
            changes constitutes your acceptance of the modified policy.
          </p>
          <p className={styles.blankLine12}>&nbsp;</p>
          <p className={styles.contactUs}>{`7. Contact Us
`}</p>
          <p className={styles.ifYouHave}>
            If you have any questions or concerns about our Refund Policy or
            need assistance with a refund request, please contact our customer
            support team at [Contact Information].
          </p>
          <p className={styles.blankLine13}>&nbsp;</p>
          <p className={styles.byUsingOur}>
            By using our services, you agree to the terms of this Refund Policy.
            Please review this policy regularly for updates.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
