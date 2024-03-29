import PropTypes from "prop-types";
import Image from "next/image";
import Anchor from "@ui/anchor";

const UserDropdown = ({ onDisconnect, ethBalance }) => (
    <div className="icon-box">
        <Anchor path="/">
            <Image
                src="/images/icons/nftt.png"
                alt="Images"
                width={38}
                height={38}
            />
        </Anchor>
        <div className="rn-dropdown">
            <div className="rn-inner-top">
                <h4 className="title">
                    <Anchor path="/">Investor #5643</Anchor>
                </h4>
                <span>
                    <Anchor path="/">Wallet</Anchor>
                </span>
            </div>
            <div className="rn-product-inner">
                <ul className="product-list">
                    <li className="single-product-list">
                        <div className="thumbnail">
                            <Anchor path="/">
                                <Image
                                    src="/images/portfolio/portfolio-07.jpg"
                                    alt="Nft Product Images"
                                    width={50}
                                    height={50}
                                />
                            </Anchor>
                        </div>
                        <div className="content">
                            <h6 className="title">
                                <Anchor path="/">Balance</Anchor>
                            </h6>
                            <span className="price">{ethBalance} ETH</span>
                        </div>
                        <div className="button" />
                    </li>
                    <li className="single-product-list">
                        <div className="thumbnail">
                            <Anchor path="/">
                                <Image
                                    src="/images/portfolio/portfolio-01.jpg"
                                    alt="Nft Product Images"
                                    width={50}
                                    height={50}
                                />
                            </Anchor>
                        </div>
                        <div className="content">
                            <h6 className="title">
                                <Anchor path="/">Balance</Anchor>
                            </h6>
                            <span className="price">{ethBalance} ETH</span>
                        </div>
                        <div className="button" />
                    </li>
                </ul>
            </div>
            <div className="add-fund-button mt--20 pb--20">
                <Anchor className="btn btn-primary-alta w-100" path="/">
                    Add Your More Funds
                </Anchor>
            </div>
            <ul className="list-inner">
                <li>
                    <Anchor path="/">My Profile</Anchor>
                </li>
                <li>
                    <Anchor path="/">Edit Profile</Anchor>
                </li>
                <li>
                    <Anchor path="/">Manage funds</Anchor>
                </li>
                <li>
                    <button type="button" onClick={onDisconnect}>
                        Sign Out
                    </button>
                </li>
            </ul>
        </div>
    </div>
);

UserDropdown.propTypes = {
    onDisconnect: PropTypes.func.isRequired,
    ethBalance: PropTypes.string,
};

export default UserDropdown;
