import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import Wallet from "@components/wallet";
import Anchor from "@ui/anchor";

const ConnectArea = ({ className, space }) => (
    <div
        className={clsx(
            "rn-connect-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g mb--50 mb_md--30 mb_sm--30 align-items-center">
                <div
                    className="col-lg-6"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="800"
                >
                    <h3 className="connect-title">Spread the word out of early bird rewards</h3>
                    <p className="connect-td">
                    Spread the word about our early bird promotion! If your tweet receives at least 100 bookmarks, you qualify for the influencer reward, which is three times the value of the early bird reward. <h5>What does BitStayz do in short?</h5>  {" "}
                        <Anchor path="/collection"></Anchor>
                    </p>
                </div>
                <div
                    className="col-lg-6"
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-duration="800"
                >
                    <p className="wallet-bootm-disc">
                        Everyrthing you need to know about Airdrop. 
                    </p>
                </div>
            </div>
            <div className="row g-5">
                <div
                    className="col-lg-6"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="500"
                >
                    <div className="connect-thumbnail">
                        <div className="left-image">
                            <Image
                                src="/images/connect/bitstayz.png"
                                alt="Nft_Profile"
                                width={670}
                                height={576}
                                priority
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row g-5">
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <Wallet
                                title="When it will be distributed?"
                                description="Q2 2024"
                                path="/"
                                icon=""
                            />
                        </div>
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <Wallet
                                title="Whats the currency?"
                                description="Native tokens of BitStayz - STZ"
                                path="/"
                                icon=""
                                color="purple"
                            />
                        </div>
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <Wallet
                                title="Raised capital"
                                description="1.3 mil. ( in progress to 2 mil. )"
                                path="/"
                                icon=""
                                color="pink"
                            />
                        </div>
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <Wallet
                                title="How much bookmarks do i need to claim influencer airdop?"
                                description="100"
                                path="/"
                                icon=""
                                color="yellow"
                            />
                        </div>
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <Wallet
                                title="How to get on list for influencer reward?"
                                description="Send us PM on X with tweet URL and Wallet address"
                                path="/"
                                icon=""
                                color="green"
                            />
                        </div>
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            
                        </div>
                        <div
                            className="col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <Wallet
                                title="What actions is needed?"
                                description="For early bird Airdrop only the Zealy quests. There will be other promotions in future."
                                path="/collection"
                                icon=""
                                color="red"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

ConnectArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};
ConnectArea.defaultProps = {
    space: 1,
};

export default ConnectArea;
