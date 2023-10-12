import React from "react";

const Footer = () => {
    return (
        <>
            <div
                className="footer py-4 d-flex flex-lg-column "
                id="kt_footer"
            >
                <div className=" container-fluid  d-flex flex-column flex-md-row flex-stack">
                    <div className="text-dark order-2 order-md-1">
                        <span className="text-muted fw-semibold me-2">
                            2023&copy;
                        </span>
                        <a
                            href="https://keenthemes.com/"
                            target="_blank"
                            className="text-gray-800 text-hover-primary"
                        >
                            Keenthemes
                        </a>
                    </div>

                    <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                        <li className="menu-item">
                            <a
                                href="https://keenthemes.com/"
                                target="_blank"
                                className="menu-link px-2"
                            >
                                About
                            </a>
                        </li>
                        <li className="menu-item">
                            <a
                                href="https://devs.keenthemes.com/"
                                target="_blank"
                                className="menu-link px-2"
                            >
                                Support
                            </a>
                        </li>
                        <li className="menu-item">
                            <a
                                href="https://themes.getbootstrap.com/product/craft-bootstrap-5-admin-dashboard-theme"
                                target="_blank"
                                className="menu-link px-2"
                            >
                                Purchase
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Footer;
