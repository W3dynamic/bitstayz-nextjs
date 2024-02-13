/* eslint-disable */
import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";

const TermsAndConditionsArea = ({ className, space }) => (
    <div
        className={clsx(
            "terms-condition-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row">
                <div className="offset-lg-2 col-lg-8 ">
                    <div className="condition-wrapper">
                        <h2>BitStayz</h2>
                        <p>
                            <h2>Terms and Conditions</h2>
                            Welcome to BitStayz! These Terms and Conditions
                            ("Terms") govern your use of our platform, services,
                            and website. By accessing or using our platform, you
                            agree to abide by these Terms. Please read them
                            carefully.
                        </p>
                        <p>
                            <h4>Acceptance of Terms:</h4> By accessing or using
                            our platform, you agree to be bound by these Terms
                            and all applicable laws and regulations. If you do
                            not agree with any of these Terms, you may not use
                            our platform.
                        </p>
                        <p>
                            <h4>Platform Use:</h4> Our platform allows users to
                            browse, purchase, and trade fractional ownership of
                            short-term rental properties represented as
                            Non-Fungible Tokens (NFTs). Users must be at least
                            18 years old and have legal capacity to enter into
                            contracts. Only for non US residents.
                        </p>
                        <p>
                            <h4>Property Ownership:</h4>Ownership of NFTs
                            represents fractional ownership of the underlying
                            short-term rental properties listed on our platform
                            - that means you are able to collect your share of
                            rent in your crypto wallet. Rent will be distributed
                            weekly. Distributed amount = net income - legal
                            taxes - cleaning,repair costs. The more NFTs you own
                            for a property, the larger your share of rental
                            income from that property.
                        </p>
                        <p>
                            <h4>Investment Risks:</h4> Investing in real estate
                            involves inherent risks, including but not limited
                            to market fluctuations, property devaluation, and
                            economic downturns. Users should conduct their own
                            research and seek professional advice before making
                            investment decisions.
                        </p>
                        <p>
                            <h4>Financial Advice:</h4> BitStayz does not provide
                            financial, investment, or legal advice. Information
                            provided on our platform is for informational
                            purposes only and should not be construed as
                            financial or investment advice.
                        </p>
                        <p>
                            <h4>Privacy Policy:</h4> By using our platform, you
                            agree to our Privacy Policy, which outlines how we
                            collect, use, and protect your personal information.
                            Please review our Privacy Policy for more details.
                        </p>
                        <p>
                            <h4>Intellectual Property:</h4> All content,
                            trademarks, logos, and intellectual property
                            displayed on our platform are owned by BitStayz or
                            its licensors. Users may not use, reproduce, or
                            distribute any content without prior written
                            permission. permission.
                        </p>

                        <p>
                            <h4>Governing Law:</h4> These Terms are governed by
                            and construed in accordance with the laws of
                            European Union. Any disputes arising under these
                            Terms shall be resolved exclusively by the courts of
                            EU.
                        </p>
                        <p>
                            {" "}
                            <h4>Updates to terms:</h4> BitStayz reserves the
                            right to update or modify these Terms at any time
                            without prior notice. Continued use of our platform
                            constitutes acceptance of the revised Terms.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mt--50">
                <div className="offset-lg-2 col-lg-8">
                    <Button path="#" size="medium" className="mr--15">
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

TermsAndConditionsArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};
TermsAndConditionsArea.defaultProps = {
    space: 1,
};

export default TermsAndConditionsArea;
