/* eslint-disable */
import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";

const PrivacyPolicyArea = ({ className, space }) => (
    <div
        className={clsx(
            "rn-privacy-policy-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row mb_dec--50">
                <div className="offset-lg-2 col-lg-8 ">
                    <div className="privacy-wrapper">
                        <h4>Privacy Policy</h4>
                        <p>
                            Welcome to BitStayz Privacy Policy. This Privacy
                            Policy describes how we collect, use, and protect
                            your personal information when you use our platform,
                            services, and website.
                        </p>
                        <h4>Information We Collect</h4>
                        <p>
                            We may collect personal information from you when
                            you register an account, browse our platform, make
                            transactions, or communicate with us. This may
                            include your name, email address, contact
                            information, payment details, and other information
                            you provide to us.
                        </p>
                        <h4>How We Use Your Information</h4>
                        <p>
                            We may use the information we collect from you to
                            provide, maintain, and improve our platform and
                            services, process transactions, communicate with
                            you, and personalize your experience. We may also
                            use your information to send you marketing
                            communications and promotional offers, unless you
                            opt out.
                        </p>
                        <h4>Sharing Your Information</h4>
                        <p>
                            We may share your personal information with
                            third-party service providers, business partners,
                            and affiliates who assist us in providing our
                            platform and services. We may also disclose your
                            information as required by law or to protect our
                            rights, property, or safety.
                        </p>
                        <h4>Security Measures</h4>
                        <p>
                            We take the security of your personal information
                            seriously and implement appropriate technical and
                            organizational measures to protect it from
                            unauthorized access, disclosure, alteration, or
                            destruction.
                        </p>
                        <h4>Cookies and Tracking Technologies</h4>
                        <p>
                            We may use cookies and similar tracking technologies
                            to collect information about your browsing behavior
                            and preferences. You can adjust your browser
                            settings to refuse cookies or alert you when cookies
                            are being sent.
                        </p>
                        <h4>Third-Party Links</h4>
                        <p>
                            Our platform may contain links to third-party
                            websites or services that are not owned or
                            controlled by us. We are not responsible for the
                            privacy practices or content of these third-party
                            sites and encourage you to review their privacy
                            policies.
                        </p>
                        <h4>Children's Privacy</h4>
                        <p>
                            Our platform is not intended for use by children
                            under the age of 18. We do not knowingly collect
                            personal information from children, and if we become
                            aware that we have inadvertently collected
                            information from a child, we will take steps to
                            delete it.
                        </p>
                        <h4>Changes to This Privacy Policy</h4>
                        <p>
                            We reserve the right to update or modify this
                            Privacy Policy at any time without prior notice. Any
                            changes will be effective immediately upon posting
                            the updated Privacy Policy on our platform.
                            Continued use of our platform constitutes acceptance
                            of the revised Privacy Policy.
                        </p>
                        <h4>Contact Us</h4>
                        <p>
                            If you have any questions or concerns about this
                            Privacy Policy, please contact us. Thank you for
                            trusting BitStayz with your personal information!
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mt--50">
                <div className="offset-lg-2 col-lg-8">
                    <Button path="#" size="medium" className="mr--15 ml--25">
                        Accept
                    </Button>
                    <Button path="#" color="primary-alta" size="medium">
                        Decline
                    </Button>
                </div>
            </div>
        </div>
    </div>
);

PrivacyPolicyArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};
PrivacyPolicyArea.defaultProps = {
    space: 1,
};

export default PrivacyPolicyArea;
