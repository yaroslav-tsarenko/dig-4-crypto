import { FunctionComponent } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "./TermsConditions.module.css";

const TermsConditions: FunctionComponent = () => {
  return (
    <div className={styles.termsConditions}>
      <Nav />
      <main className={styles.frameParent}>
        <section className={styles.legalPoliciesParent}>
          <div className={styles.legalPolicies}>Legal Policies</div>
          <h1 className={styles.termsConditions1}>{`Terms & Conditions`}</h1>
        </section>
        <img className={styles.frameChild} alt="" src="/rectangle-56@2x.png" />
        <section className={styles.pleaseReadTheseContainer}>
          <p className={styles.pleaseReadThese}>
            Please read these Terms and Conditions carefully before using
            Dig4Crypto Service. By accessing or using the Service, you agree to
            be bound by these Terms and Conditions. If you do not agree to all
            of the terms and conditions, please do not use the Service.
          </p>
          <p className={styles.acceptanceOfTerms}>{`
1. Acceptance of Terms`}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.byUsingOur}>
            By using our Service, you agree to comply with and be bound by these
            Terms and Conditions, our Privacy Policy, and any additional terms
            and conditions that may apply to specific sections of the Service.
          </p>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p className={styles.descriptionOfService}>{`2. Description of Service
`}</p>
          <p className={styles.ourServiceOffers}>
            Our Service offers crypto hosting services, which include, but are
            not limited to, the hosting of blockchain nodes, mining pool
            management, and related services.
          </p>
          <p className={styles.blankLine2}>&nbsp;</p>
          <p
            className={styles.registrationAndAccount}
          >{`3. Registration and Account
`}</p>
          <p className={styles.aToUse}>
            a. To use certain features of the Service, you may be required to
            register for an account. You agree to provide accurate and complete
            information during the registration process and to update such
            information to keep it accurate and current.
          </p>
          <p className={styles.blankLine3}>&nbsp;</p>
          <p className={styles.bYouAre}>
            b. You are responsible for maintaining the confidentiality of your
            account login information and for all activities that occur under
            your account. You agree to notify us immediately of any unauthorized
            use of your account.
          </p>
          <p className={styles.blankLine4}>&nbsp;</p>
          <p className={styles.paymentAndFees}>{`4. Payment and Fees
`}</p>
          <p className={styles.aYouAgree}>
            a. You agree to pay all fees and charges associated with your use of
            our Service. Pricing information is available on our website, and
            you agree to pay the fees specified at the time of your purchase.
          </p>
          <p className={styles.blankLine5}>&nbsp;</p>
          <p className={styles.bPaymentsAre}>
            b. Payments are non-refundable unless otherwise stated in our refund
            policy.
          </p>
          <p className={styles.blankLine6}>&nbsp;</p>
          <p className={styles.prohibitedActivities}>{`5. Prohibited Activities
`}</p>
          <p className={styles.youMayNot}>
            You may not use our Service for any unlawful or prohibited purpose,
            including but not limited to:
          </p>
          <p className={styles.blankLine7}>&nbsp;</p>
          <p className={styles.aViolatingAny}>
            a. Violating any applicable laws and regulations.
          </p>
          <p className={styles.blankLine8}>&nbsp;</p>
          <p className={styles.bEngagingIn}>
            b. Engaging in any activity that disrupts, damages, or impairs our
            Service or network.
          </p>
          <p className={styles.blankLine9}>&nbsp;</p>
          <p className={styles.cUnauthorizedAccess}>
            c. Unauthorized access to or use of data, systems, or networks.
          </p>
          <p className={styles.blankLine10}>&nbsp;</p>
          <p className={styles.dAnyForm}>
            d. Any form of fraud, including but not limited to unauthorized
            transactions, payment disputes, or chargebacks.
          </p>
          <p className={styles.blankLine11}>&nbsp;</p>
          <p className={styles.privacy}>{`6. Privacy
`}</p>
          <p className={styles.yourUseOf}>
            Your use of the Service is also governed by our Privacy Policy.
            Please review our Privacy Policy to understand our practices
            concerning your personal information.
          </p>
          <p className={styles.blankLine12}>&nbsp;</p>
          <p className={styles.intellectualProperty}>
            7. Intellectual Property
          </p>
          <p className={styles.blankLine13}>&nbsp;</p>
          <p className={styles.allContentTrademarks}>
            All content, trademarks, logos, and other intellectual property used
            or displayed on the Service are the property of their respective
            owners. You may not reproduce, distribute, modify, or otherwise use
            any intellectual property without the owner's prior written consent.
          </p>
          <p className={styles.blankLine14}>&nbsp;</p>
          <p className={styles.termination}>{`8. Termination
`}</p>
          <p className={styles.weReserveThe}>
            We reserve the right to terminate or suspend your account and access
            to the Service, with or without cause, at our discretion.
          </p>
          <p className={styles.blankLine15}>&nbsp;</p>
          <p
            className={styles.disclaimerOfWarranties}
          >{`9. Disclaimer of Warranties
`}</p>
          <p className={styles.aYourUse}>
            a. Your use of the Service is at your sole risk. The Service is
            provided on an "as-is" and "as available" basis, without warranties
            of any kind, either express or implied, including, but not limited
            to, implied warranties of merchantability, fitness for a particular
            purpose, or non-infringement.
          </p>
          <p className={styles.blankLine16}>&nbsp;</p>
          <p className={styles.bWeDo}>
            b. We do not warrant that the Service will be uninterrupted,
            error-free, or secure.
          </p>
          <p className={styles.blankLine17}>&nbsp;</p>
          <p
            className={styles.limitationOfLiability}
          >{`10. Limitation of Liability
`}</p>
          <p className={styles.inNoEvent}>
            In no event shall we be liable for any indirect, incidental,
            special, consequential, or punitive damages, or any loss of profits
            or revenues, whether incurred directly or indirectly, or any loss of
            data, use, goodwill, or other intangible losses, arising out of or
            in connection with your use of the Service.
          </p>
          <p className={styles.blankLine18}>&nbsp;</p>
          <p
            className={styles.changesToTerms}
          >{`11. Changes to Terms and Conditions
`}</p>
          <p className={styles.weReserveThe1}>
            We reserve the right to modify these Terms and Conditions at any
            time. Any changes will be effective immediately upon posting on the
            Service. Your continued use of the Service after the posting of
            changes constitutes your acceptance of such changes.
          </p>
          <p className={styles.blankLine19}>&nbsp;</p>
          <p className={styles.governingLaw}>{`12. Governing Law
`}</p>
          <p className={styles.theseTermsAnd}>
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of [Your Jurisdiction].
          </p>
          <p className={styles.blankLine20}>&nbsp;</p>
          <p className={styles.contactInformation}>{`13. Contact Information
`}</p>
          <p className={styles.ifYouHave}>
            If you have any questions or concerns about these Terms and
            Conditions, please contact us.
          </p>
          <p className={styles.blankLine21}>&nbsp;</p>
          <p className={styles.byUsingOur1}>
            By using our Crypto Hosting Services website, you agree to these
            Terms and Conditions. Please review them carefully before using our
            services.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
