import { useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
    const [isActive, setIsActive] = useState("Dashboards");
    const [isSubActive, setIsSubActive] = useState("");
    return (
        <>
            <div
                id="kt_aside"
                className="aside aside-default  aside-hoverable "
                data-kt-drawer="true"
                data-kt-drawer-name="aside"
                data-kt-drawer-activate="{default: true, lg: false}"
                data-kt-drawer-overlay="true"
                data-kt-drawer-width="{default:'200px', '300px': '250px'}"
                data-kt-drawer-direction="start"
                data-kt-drawer-toggle="#kt_aside_toggle"
            >
                <div
                    className="aside-logo flex-column-auto px-10 pt-9 pb-5"
                    id="kt_aside_logo"
                >
                    <div>
                        <img
                            alt="Logo"
                            src="assets/media/logos/logo-default.svg"
                            className="max-h-50px logo-default theme-light-show"
                        />
                        <img
                            alt="Logo"
                            src="assets/media/logos/logo-default-dark.svg"
                            className="max-h-50px logo-default theme-dark-show"
                        />
                        <img
                            alt="Logo"
                            src="assets/media/logos/logo-minimize.svg"
                            className="max-h-50px logo-minimize"
                        />
                    </div>
                </div>
                <div className="aside-menu flex-column-fluid ps-3 pe-1 flex-fill overflow-hidden">
                    <div
                        className="menu menu-sub-indention menu-column menu-rounded menu-title-gray-600 menu-icon-gray-400 menu-active-bg menu-state-primary menu-arrow-gray-500 fw-semibold fs-6 my-5 mt-lg-2 mb-lg-0 h-100"
                        id="kt_aside_menu"
                        data-kt-menu="true"
                    >
                        <div
                            className="hover-scroll-y mx-4 h-100 pb-5"
                            id="kt_aside_menu_wrapper"
                            data-kt-scroll="true"
                            data-kt-scroll-activate="{default: false, lg: true}"
                            data-kt-scroll-height="auto"
                            data-kt-scroll-wrappers="#kt_aside_menu"
                            data-kt-scroll-offset="20px"
                            data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
                        >
                            <div
                                data-kt-menu-trigger="click"
                                className={`menu-item menu-accordion ${
                                    isActive === "Dashboards"
                                        ? "hover show here"
                                        : ""
                                }`}
                            >
                                <span
                                    className="menu-link"
                                    onClick={() => {
                                        isActive !== "Dashboards"
                                            ? setIsActive("Dashboards")
                                            : setIsActive("");
                                    }}
                                >
                                    <span className="menu-icon">
                                        <i className="ki-duotone ki-element-11 fs-2">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">
                                        Dashboards
                                    </span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {isActive === "Dashboards" && (
                                    <div className="menu-sub menu-sub-accordion show">
                                        <div className="menu-item">
                                            <NavLink to="/" exact className="menu-link">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                    Dashboard One
                                                </span>
                                            </NavLink>
                                        </div>
                                        <div className="menu-item">
                                            <NavLink to="/list" className="menu-link">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                    List
                                                </span>
                                            </NavLink>
                                        </div>
                                        <div className="menu-item">
                                            <NavLink to="/view" className="menu-link">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                    View
                                                </span>
                                            </NavLink>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-link">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                    Projects
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="menu-item pt-5">
                                <div className="menu-content">
                                    <span className="fw-bold text-muted text-uppercase fs-7">
                                        Crafted
                                    </span>
                                </div>
                            </div>
                            <div
                                data-kt-menu-trigger="click"
                                className={`menu-item menu-accordion ${
                                    isActive === "Pages"
                                        ? "hover show here"
                                        : ""
                                }`}
                            >
                                <span
                                    className="menu-link"
                                    onClick={() => {
                                        isActive !== "Pages"
                                            ? setIsActive("Pages")
                                            : setIsActive("");
                                    }}
                                >
                                    <span className="menu-icon">
                                        <i className="ki-duotone ki-gift fs-2">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">Pages</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {isActive === "Pages" && (
                                    <div className="menu-sub menu-sub-accordion">
                                        <div
                                            data-kt-menu-trigger="click"
                                            className={`menu-item menu-accordion ${
                                                isSubActive === "UserProfile"
                                                    ? "hover show here"
                                                    : ""
                                            }`}
                                        >
                                            <span
                                                className="menu-link"
                                                onClick={() => {
                                                    isSubActive !==
                                                    "UserProfile"
                                                        ? setIsSubActive(
                                                              "UserProfile"
                                                          )
                                                        : setIsSubActive("");
                                                }}
                                            >
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                    User Profile
                                                </span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            {isSubActive === "UserProfile" && (
                                                <div className="menu-sub menu-sub-accordion">
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Overview
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Projects
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Campaigns
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Documents
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Followers
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Activity
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Dashboard
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            <span className="menu-link">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                    Social
                                                </span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div className="menu-item">
                                                    <div className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">
                                                            Feeds
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="menu-item">
                                                    <div className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">
                                                            Activty
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="menu-item">
                                                    <div className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">
                                                            Followers
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="menu-item">
                                                    <div className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">
                                                            Settings
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-link">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                    About
                                                </span>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-link">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                    FAQ
                                                </span>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-link">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                    Contact Us
                                                </span>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-link">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                    Pricing
                                                </span>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-link">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                    Licenses
                                                </span>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-link">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                    Sitemap
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                            >
                                <span className="menu-link">
                                    <span className="menu-icon">
                                        <i className="ki-duotone ki-user fs-2">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">Account</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-accordion">
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Overview
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Settings
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Security
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Activity
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Billing
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Statements
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Referrals
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                API Keys
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Logs
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        data-kt-menu-trigger="click"
                                        className="menu-item menu-accordion"
                                    >
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Orders
                                            </span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-accordion">
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Classic
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Details
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Sidebar
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Tracking
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Invoice
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Review
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                            >
                                <span className="menu-link">
                                    <span className="menu-icon">
                                        <i className="ki-duotone ki-fingerprint-scanning fs-2">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                            <span className="path5"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">
                                        Authentication
                                    </span>
                                    <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-accordion">
                                    <div
                                        data-kt-menu-trigger="click"
                                        className="menu-item menu-accordion"
                                    >
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Sign In
                                            </span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Basic
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Password Reset
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        New Password
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-kt-menu-trigger="click"
                                        className="menu-item menu-accordion"
                                    >
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Sign Up
                                            </span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Basic
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Multi-steps
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Free Trial
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Coming Soon
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Welcome Message
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Verify Email
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Password Confirmation
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Account Deactivation
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Error 404
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Error 500
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        data-kt-menu-trigger="click"
                                        className="menu-item menu-accordion"
                                    >
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Email Templates
                                            </span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                            <div className="menu-item">
                                                <div
                                                    className="menu-link"
                                                    target="_blank"
                                                >
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Verify Email
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div
                                                    className="menu-link"
                                                    target="_blank"
                                                >
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Account Invitation
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div
                                                    className="menu-link"
                                                    target="_blank"
                                                >
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Password Reset
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div
                                                    className="menu-link"
                                                    target="_blank"
                                                >
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Password Changed
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                            >
                                <span className="menu-link">
                                    <span className="menu-icon">
                                        <i className="ki-duotone ki-design fs-2">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">
                                        Utilities
                                    </span>
                                    <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-accordion">
                                    <div
                                        data-kt-menu-trigger="click"
                                        className="menu-item menu-accordion"
                                    >
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Modals
                                            </span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-accordion">
                                            <div
                                                data-kt-menu-trigger="click"
                                                className="menu-item menu-accordion"
                                            >
                                                <span className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        General
                                                    </span>
                                                    <span className="menu-arrow"></span>
                                                </span>
                                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Invite Friends
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                View Users
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Select Users
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Upgrade Plan
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Share & Earn
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-kt-menu-trigger="click"
                                                className="menu-item menu-accordion"
                                            >
                                                <span className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Forms
                                                    </span>
                                                    <span className="menu-arrow"></span>
                                                </span>
                                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                New Target
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                New Card
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                New Address
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Create API Key
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Bidding
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-kt-menu-trigger="click"
                                                className="menu-item menu-accordion"
                                            >
                                                <span className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Wizards
                                                    </span>
                                                    <span className="menu-arrow"></span>
                                                </span>
                                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Create App
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Create Campaign
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Create Business
                                                                Acc
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Create Project
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Top Up Wallet
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Offer a Deal
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Two Factor Auth
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-kt-menu-trigger="click"
                                                className="menu-item menu-accordion"
                                            >
                                                <span className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Search
                                                    </span>
                                                    <span className="menu-arrow"></span>
                                                </span>
                                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Users
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-item">
                                                        <div className="menu-link">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">
                                                                Select Location
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-kt-menu-trigger="click"
                                        className="menu-item menu-accordion"
                                    >
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Search
                                            </span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-accordion">
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Horizontal
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Vertical
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Users
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Location
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Fancy
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-kt-menu-trigger="click"
                                        className="menu-item menu-accordion"
                                    >
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Wizards
                                            </span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-accordion">
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Horizontal
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Vertical
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Two Factor Auth
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Create App
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Create Campaign
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Create Account
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Create Project
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Top Up Wallet
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Offer a Deal
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                            >
                                <span className="menu-link">
                                    <span className="menu-icon">
                                        <i className="ki-duotone ki-setting-2 fs-2">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">Layouts</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-accordion">
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Extended Aside
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Compact Aside
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Minimized Aside
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Tabbed Content
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Layout Builder
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item pt-5">
                                <div className="menu-content">
                                    <span className="fw-bold text-muted text-uppercase fs-7">
                                        Apps
                                    </span>
                                </div>
                            </div>
                            <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                            >
                                <span className="menu-link">
                                    <span className="menu-icon">
                                        <i className="ki-duotone ki-rocket fs-2">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">Projects</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-accordion">
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                My Projects
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                View Project
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Targets
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Budget
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Users
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Files
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Activity
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Settings
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                            >
                                <span className="menu-link">
                                    <span className="menu-icon">
                                        <i className="ki-duotone ki-handcart fs-2"></i>
                                    </span>
                                    <span className="menu-title">
                                        eCommerce
                                    </span>
                                    <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-accordion">
                                    <div
                                        data-kt-menu-trigger="click"
                                        className="menu-item menu-accordion"
                                    >
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Catalog
                                            </span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-accordion">
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Products
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Categories
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Add Product
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Edit Product
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Add Category
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Edit Category
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-kt-menu-trigger="click"
                                        className="menu-item menu-accordion"
                                    >
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Sales
                                            </span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-accordion">
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Orders Listing
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Order Details
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Add Order
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Edit Order
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-kt-menu-trigger="click"
                                        className="menu-item menu-accordion"
                                    >
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Customers
                                            </span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-accordion">
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Customer Listing
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Customer Details
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-kt-menu-trigger="click"
                                        className="menu-item menu-accordion"
                                    >
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Reports
                                            </span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-accordion">
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Products Viewed
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Sales
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Returns
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Customer Orders
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Shipping
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Settings
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                            >
                                <span className="menu-link">
                                    <span className="menu-icon">
                                        <i className="ki-duotone ki-phone fs-2">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">Contacts</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-accordion">
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Getting Started
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Add Contact
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Edit Contact
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                View Contact
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                            >
                                <span className="menu-link">
                                    <span className="menu-icon">
                                        <i className="ki-duotone ki-chart fs-2">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">
                                        Support Center
                                    </span>
                                    <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-accordion">
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Overview
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        data-kt-menu-trigger="click"
                                        className="menu-item menu-accordion mb-1"
                                    >
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Tickets
                                            </span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-accordion">
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Tickets List
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        View Ticket
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-kt-menu-trigger="click"
                                        className="menu-item menu-accordion mb-1"
                                    >
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Tutorials
                                            </span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-accordion">
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Tutorials List
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Tutorial Post
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                FAQ
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Licenses
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Contact Us
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                            >
                                <span className="menu-link">
                                    <span className="menu-icon">
                                        <i className="ki-duotone ki-shield-tick fs-2">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">
                                        User Management
                                    </span>
                                    <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-accordion">
                                    <div
                                        data-kt-menu-trigger="click"
                                        className="menu-item menu-accordion mb-1"
                                    >
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Users
                                            </span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-accordion">
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Users List
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        View User
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-kt-menu-trigger="click"
                                        className="menu-item menu-accordion"
                                    >
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Roles
                                            </span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-accordion">
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        Roles List
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-link">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        View Role
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Permissions
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                            >
                                <span className="menu-link">
                                    <span className="menu-icon">
                                        <i className="ki-duotone ki-briefcase fs-2">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">
                                        Customers
                                    </span>
                                    <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-accordion">
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Getting Started
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Customer Listing
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Customer Details
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                            >
                                <span className="menu-link">
                                    <span className="menu-icon">
                                        <i className="ki-duotone ki-file-added fs-2">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">
                                        File Manager
                                    </span>
                                    <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-accordion">
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Folders
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Files
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Blank Directory
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Settings
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                            >
                                <span className="menu-link">
                                    <span className="menu-icon">
                                        <i className="ki-duotone ki-sms fs-2">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">Inbox</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-accordion">
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Messages
                                            </span>
                                            <span className="menu-badge">
                                                <span className="badge badge-success">
                                                    3
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Compose
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                View & Reply
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                            >
                                <span className="menu-link">
                                    <span className="menu-icon">
                                        <i className="ki-duotone ki-message-text-2 fs-2">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">Chat</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-accordion">
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Private Chat
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Group Chat
                                            </span>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                                Drawer Chat
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item">
                                <div className="menu-link">
                                    <span className="menu-icon">
                                        <i className="ki-duotone ki-calendar-8 fs-2">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                            <span className="path5"></span>
                                            <span className="path6"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">Calendar</span>
                                </div>
                            </div>
                            <div className="menu-item">
                                <div className="menu-content">
                                    <div className="separator mx-1 my-4"></div>
                                </div>
                            </div>
                            <div className="menu-item">
                                <div
                                    className="menu-link"
                                    href="https://preview.keenthemes.com/html/craft/docs/base/utilities"
                                    target="_blank"
                                >
                                    <span className="menu-icon">
                                        <i className="ki-duotone ki-row-vertical fs-2">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">
                                        Components
                                    </span>
                                </div>
                            </div>
                            <div className="menu-item">
                                <div
                                    className="menu-link"
                                    href="https://preview.keenthemes.com/html/craft/docs"
                                    target="_blank"
                                >
                                    <span className="menu-icon">
                                        <i className="ki-duotone ki-abstract-41 fs-2">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">
                                        Documentation
                                    </span>
                                </div>
                            </div>
                            <div className="menu-item">
                                <div className="menu-link">
                                    <span className="menu-icon">
                                        <i className="ki-duotone ki-abstract-13 fs-2">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">
                                        Layout Builder
                                    </span>
                                </div>
                            </div>
                            <div className="menu-item">
                                <div
                                    className="menu-link"
                                    href="https://preview.keenthemes.com/html/craft/docs/getting-started/changelog"
                                    target="_blank"
                                >
                                    <span className="menu-icon">
                                        <i className="ki-duotone ki-code fs-2">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">
                                        Changelog{" "}
                                        <span className="badge badge-changelog badge-light-success bg-hover-danger text-hover-white fw-bold fs-9 px-2 ms-2">
                                            v1.1.3
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="aside-footer flex-column-auto pb-5 d-none"
                    id="kt_aside_footer"
                >
                    <div className="btn btn-light-primary w-100">Button</div>
                </div>
            </div>
        </>
    );
};
export default LeftSidebar;
