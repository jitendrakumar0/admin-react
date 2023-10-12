import { useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LeftSidebar from "./components/leftSidebar/LeftSidebar";
import RouteComponent from "./routes/Routes";
import Activities from "./components/popups/activities/Activities";
import Chat from "./components/popups/chat/Chat";
function App() {
    const [asideMinimize, setAsideMinimize] = useState(false);
    const [activitiesPopup, setActivitiesPopup] = useState(false);
    const [chatPopup, setChatPopup] = useState(false);

    return (
        <>
            <div className="d-flex flex-column flex-root">
                <div className="page d-flex flex-row flex-column-fluid">
                    <LeftSidebar/>
                    <div
                        className="wrapper d-flex flex-column flex-row-fluid"
                        id="kt_wrapper"
                    >
                        <Header
                            asideMinimize={asideMinimize}
                            setAsideMinimize={setAsideMinimize}
                            activitiesPopup={activitiesPopup}
                            setActivitiesPopup={setActivitiesPopup}
                            chatPopup={chatPopup}
                            setChatPopup={setChatPopup}
                        />
                        <RouteComponent />
                        <Footer />
                    </div>
                </div>
            </div>
            <Activities
                activitiesPopup={activitiesPopup}
                setActivitiesPopup={setActivitiesPopup}
            />
            <Chat
                chatPopup={chatPopup}
                setChatPopup={setChatPopup}
            />
            <div
                id="kt_shopping_cart"
                className="bg-body"
                data-kt-drawer="true"
                data-kt-drawer-name="cart"
                data-kt-drawer-activate="true"
                data-kt-drawer-overlay="true"
                data-kt-drawer-width="{default:'300px', 'md': '500px'}"
                data-kt-drawer-direction="end"
                data-kt-drawer-toggle="#kt_drawer_shopping_cart_toggle"
                data-kt-drawer-close="#kt_drawer_shopping_cart_close"
            >
                <div className="card card-flush w-100 rounded-0">
                    <div className="card-header">
                        <h3 className="card-title text-gray-900 fw-bold">
                            Shopping Cart
                        </h3>
                        <div className="card-toolbar">
                            <div
                                className="btn btn-sm btn-icon btn-active-light-primary"
                                id="kt_drawer_shopping_cart_close"
                            >
                                <i className="ki-duotone ki-cross fs-2">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </div>
                        </div>
                    </div>
                    <div className="card-body hover-scroll-overlay-y h-400px pt-5">
                        <div className="d-flex flex-stack">
                            <div className="d-flex flex-column me-3">
                                <div className="mb-3">
                                    <a
                                        href="apps/ecommerce/sales/details.html"
                                        className="text-gray-800 text-hover-primary fs-4 fw-bold"
                                    >
                                        Iblender
                                    </a>
                                    <span className="text-gray-400 fw-semibold d-block">
                                        The best kitchen gadget in 2022
                                    </span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">
                                        $ 350
                                    </span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">
                                        5
                                    </span>
                                    <a
                                        href="#"
                                        className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                                    >
                                        <i className="ki-duotone ki-minus fs-4"></i>{" "}
                                    </a>
                                    <a
                                        href="#"
                                        className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                                    >
                                        <i className="ki-duotone ki-plus fs-4"></i>{" "}
                                    </a>
                                </div>
                            </div>
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img
                                    src="assets/media/stock/600x400/img-1.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="separator separator-dashed my-6"></div>
                        <div className="d-flex flex-stack">
                            <div className="d-flex flex-column me-3">
                                <div className="mb-3">
                                    <a
                                        href="apps/ecommerce/sales/details.html"
                                        className="text-gray-800 text-hover-primary fs-4 fw-bold"
                                    >
                                        SmartCleaner
                                    </a>
                                    <span className="text-gray-400 fw-semibold d-block">
                                        Smart tool for cooking
                                    </span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">
                                        $ 650
                                    </span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">
                                        4
                                    </span>
                                    <a
                                        href="#"
                                        className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                                    >
                                        <i className="ki-duotone ki-minus fs-4"></i>{" "}
                                    </a>
                                    <a
                                        href="#"
                                        className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                                    >
                                        <i className="ki-duotone ki-plus fs-4"></i>{" "}
                                    </a>
                                </div>
                            </div>
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img
                                    src="assets/media/stock/600x400/img-3.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="separator separator-dashed my-6"></div>
                        <div className="d-flex flex-stack">
                            <div className="d-flex flex-column me-3">
                                <div className="mb-3">
                                    <a
                                        href="apps/ecommerce/sales/details.html"
                                        className="text-gray-800 text-hover-primary fs-4 fw-bold"
                                    >
                                        CameraMaxr
                                    </a>
                                    <span className="text-gray-400 fw-semibold d-block">
                                        Professional camera for edge
                                    </span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">
                                        $ 150
                                    </span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">
                                        3
                                    </span>
                                    <a
                                        href="#"
                                        className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                                    >
                                        <i className="ki-duotone ki-minus fs-4"></i>{" "}
                                    </a>
                                    <a
                                        href="#"
                                        className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                                    >
                                        <i className="ki-duotone ki-plus fs-4"></i>{" "}
                                    </a>
                                </div>
                            </div>
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img
                                    src="assets/media/stock/600x400/img-8.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="separator separator-dashed my-6"></div>
                        <div className="d-flex flex-stack">
                            <div className="d-flex flex-column me-3">
                                <div className="mb-3">
                                    <a
                                        href="apps/ecommerce/sales/details.html"
                                        className="text-gray-800 text-hover-primary fs-4 fw-bold"
                                    >
                                        $D Printer
                                    </a>
                                    <span className="text-gray-400 fw-semibold d-block">
                                        Manfactoring unique objekts
                                    </span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">
                                        $ 1450
                                    </span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">
                                        7
                                    </span>
                                    <a
                                        href="#"
                                        className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                                    >
                                        <i className="ki-duotone ki-minus fs-4"></i>{" "}
                                    </a>
                                    <a
                                        href="#"
                                        className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                                    >
                                        <i className="ki-duotone ki-plus fs-4"></i>{" "}
                                    </a>
                                </div>
                            </div>
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img
                                    src="assets/media/stock/600x400/img-26.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="separator separator-dashed my-6"></div>
                        <div className="d-flex flex-stack">
                            <div className="d-flex flex-column me-3">
                                <div className="mb-3">
                                    <a
                                        href="apps/ecommerce/sales/details.html"
                                        className="text-gray-800 text-hover-primary fs-4 fw-bold"
                                    >
                                        MotionWire
                                    </a>
                                    <span className="text-gray-400 fw-semibold d-block">
                                        Perfect animation tool
                                    </span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">
                                        $ 650
                                    </span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">
                                        7
                                    </span>
                                    <a
                                        href="#"
                                        className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                                    >
                                        <i className="ki-duotone ki-minus fs-4"></i>{" "}
                                    </a>
                                    <a
                                        href="#"
                                        className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                                    >
                                        <i className="ki-duotone ki-plus fs-4"></i>{" "}
                                    </a>
                                </div>
                            </div>
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img
                                    src="assets/media/stock/600x400/img-21.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="separator separator-dashed my-6"></div>
                        <div className="d-flex flex-stack">
                            <div className="d-flex flex-column me-3">
                                <div className="mb-3">
                                    <a
                                        href="apps/ecommerce/sales/details.html"
                                        className="text-gray-800 text-hover-primary fs-4 fw-bold"
                                    >
                                        Samsung
                                    </a>
                                    <span className="text-gray-400 fw-semibold d-block">
                                        Profile info,Timeline etc
                                    </span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">
                                        $ 720
                                    </span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">
                                        6
                                    </span>
                                    <a
                                        href="#"
                                        className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                                    >
                                        <i className="ki-duotone ki-minus fs-4"></i>{" "}
                                    </a>
                                    <a
                                        href="#"
                                        className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                                    >
                                        <i className="ki-duotone ki-plus fs-4"></i>{" "}
                                    </a>
                                </div>
                            </div>
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img
                                    src="assets/media/stock/600x400/img-34.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="separator separator-dashed my-6"></div>
                        <div className="d-flex flex-stack">
                            <div className="d-flex flex-column me-3">
                                <div className="mb-3">
                                    <a
                                        href="apps/ecommerce/sales/details.html"
                                        className="text-gray-800 text-hover-primary fs-4 fw-bold"
                                    >
                                        $D Printer
                                    </a>
                                    <span className="text-gray-400 fw-semibold d-block">
                                        Manfactoring unique objekts
                                    </span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">
                                        $ 430
                                    </span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">
                                        8
                                    </span>
                                    <a
                                        href="#"
                                        className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                                    >
                                        <i className="ki-duotone ki-minus fs-4"></i>{" "}
                                    </a>
                                    <a
                                        href="#"
                                        className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                                    >
                                        <i className="ki-duotone ki-plus fs-4"></i>{" "}
                                    </a>
                                </div>
                            </div>
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img
                                    src="assets/media/stock/600x400/img-27.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex flex-stack">
                            <span className="fw-bold text-gray-600">Total</span>
                            <span className="text-gray-800 fw-bolder fs-5">
                                $ 1840.00
                            </span>
                        </div>
                        <div className="d-flex flex-stack">
                            <span className="fw-bold text-gray-600">
                                Sub total
                            </span>
                            <span className="text-primary fw-bolder fs-5">
                                $ 246.35
                            </span>
                        </div>
                        <div className="d-flex justify-content-end mt-9">
                            <a
                                href="#"
                                className="btn btn-primary d-flex justify-content-end"
                            >
                                Pleace Order
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="kt_help"
                className="bg-body"
                data-kt-drawer="true"
                data-kt-drawer-name="help"
                data-kt-drawer-activate="true"
                data-kt-drawer-overlay="true"
                data-kt-drawer-width="{default:'350px', 'md': '525px'}"
                data-kt-drawer-direction="end"
                data-kt-drawer-toggle="#kt_help_toggle"
                data-kt-drawer-close="#kt_help_close"
            >
                <div className="card shadow-none rounded-0 w-100">
                    <div
                        className="card-header"
                        id="kt_help_header"
                    >
                        <h5 className="card-title fw-semibold text-gray-600">
                            Learn & Get Inspired
                        </h5>
                        <div className="card-toolbar">
                            <button
                                type="button"
                                className="btn btn-sm btn-icon explore-btn-dismiss me-n5"
                                id="kt_help_close"
                            >
                                <i className="ki-duotone ki-cross fs-2">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>{" "}
                            </button>
                        </div>
                    </div>
                    <div
                        className="card-body"
                        id="kt_help_body"
                    >
                        <div
                            id="kt_help_scroll"
                            className="hover-scroll-overlay-y"
                            data-kt-scroll="true"
                            data-kt-scroll-height="auto"
                            data-kt-scroll-wrappers="#kt_help_body"
                            data-kt-scroll-dependencies="#kt_help_header"
                            data-kt-scroll-offset="5px"
                        >
                            <div className="rounded border border-dashed border-gray-300 p-6 p-lg-8 mb-10">
                                <h2 className="fw-bold mb-5">
                                    Support at{" "}
                                    <a
                                        href="https://devs.keenthemes.com/"
                                        className=""
                                    >
                                        devs.keenthemes.com
                                    </a>
                                </h2>
                                <div className="fs-5 fw-semibold mb-5">
                                    <span className="text-gray-500">
                                        Join our developers community to find
                                        answer to your question and help others.
                                    </span>
                                    <a
                                        className="explore-link d-none"
                                        href="https://keenthemes.com/licensing"
                                    >
                                        FAQs
                                    </a>
                                </div>
                                <a
                                    href="https://devs.keenthemes.com/"
                                    className="btn btn-lg explore-btn-primary w-100"
                                >
                                    Get Support
                                </a>
                            </div>
                            <a
                                href="https://preview.keenthemes.com/html/craft/docs"
                                className="parent-hover d-flex align-items-center mb-7"
                            >
                                <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-warning">
                                    <i className="ki-duotone ki-abstract-26 text-warning fs-2x fs-lg-3x">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </div>
                                <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
                                    <div className="d-flex flex-column me-2 me-lg-5">
                                        <div className="text-dark parent-hover-primary fw-bold fs-6 fs-lg-4 mb-1">
                                            Documentation
                                        </div>
                                        <div className="text-muted fw-semibold fs-7 fs-lg-6">
                                            From guides and how-tos, to live
                                            demos and code examples to get
                                            started right away.
                                        </div>
                                    </div>
                                    <i className="ki-duotone ki-arrow-right text-gray-400 fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </div>
                            </a>
                            <a
                                href="https://preview.keenthemes.com/html/craft/docs/base/utilities"
                                className="parent-hover d-flex align-items-center mb-7"
                            >
                                <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-primary">
                                    <i className="ki-duotone ki-wallet text-primary fs-2x fs-lg-3x">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                        <span className="path4"></span>
                                    </i>
                                </div>
                                <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
                                    <div className="d-flex flex-column me-2 me-lg-5">
                                        <div className="text-dark parent-hover-primary fw-bold fs-6 fs-lg-4 mb-1">
                                            Plugins & Components
                                        </div>
                                        <div className="text-muted fw-semibold fs-7 fs-lg-6">
                                            Check out our 300+ in-house
                                            components and customized 3rd-party
                                            plugins.
                                        </div>
                                    </div>
                                    <i className="ki-duotone ki-arrow-right text-gray-400 fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </div>
                            </a>
                            <a
                                href="layout-builder.html"
                                className="parent-hover d-flex align-items-center mb-7"
                            >
                                <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-info">
                                    <i className="ki-duotone ki-design text-info fs-2x fs-lg-3x">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </div>
                                <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
                                    <div className="d-flex flex-column me-2 me-lg-5">
                                        <div className="text-dark parent-hover-primary fw-bold fs-6 fs-lg-4 mb-1">
                                            Layout Builder
                                        </div>
                                        <div className="text-muted fw-semibold fs-7 fs-lg-6">
                                            Build your layout, preview it and
                                            export the HTML for server side
                                            integration.
                                        </div>
                                    </div>
                                    <i className="ki-duotone ki-arrow-right text-gray-400 fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </div>
                            </a>
                            <a
                                href="https://preview.keenthemes.com/html/craft/docs/getting-started/changelog"
                                className="parent-hover d-flex align-items-center mb-7"
                            >
                                <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-danger">
                                    <i className="ki-duotone ki-keyboard text-danger fs-2x fs-lg-3x">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </div>
                                <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
                                    <div className="d-flex flex-column me-2 me-lg-5">
                                        <div className="text-dark parent-hover-primary fw-bold fs-6 fs-lg-4 mb-1">
                                            What's New ?
                                        </div>
                                        <div className="text-muted fw-semibold fs-7 fs-lg-6">
                                            Latest features and improvements
                                            added with our users feedback in
                                            mind.
                                        </div>
                                    </div>
                                    <i className="ki-duotone ki-arrow-right text-gray-400 fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div
                id="kt_scrolltop"
                className="scrolltop"
                data-kt-scrolltop="true"
            >
                <i className="ki-duotone ki-arrow-up">
                    <span className="path1"></span>
                    <span className="path2"></span>
                </i>
            </div>

            <div
                className="modal fade"
                id="kt_modal_upgrade_plan"
                tabindex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl">
                    <div className="modal-content rounded">
                        <div className="modal-header justify-content-end border-0 pb-0">
                            <div
                                className="btn btn-sm btn-icon btn-active-color-primary"
                                data-bs-dismiss="modal"
                            >
                                <i className="ki-duotone ki-cross fs-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </div>
                        </div>

                        <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            <div className="mb-13 text-center">
                                <h1 className="mb-3">Upgrade a Plan</h1>
                                <div className="text-muted fw-semibold fs-5">
                                    If you need more info, please check{" "}
                                    <a
                                        href="#"
                                        className="link-primary fw-bold"
                                    >
                                        Pricing Guidelines
                                    </a>
                                    .
                                </div>
                            </div>

                            <div className="d-flex flex-column">
                                <div
                                    className="nav-group nav-group-outline mx-auto"
                                    data-kt-buttons="true"
                                >
                                    <button
                                        className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2 active"
                                        data-kt-plan="month"
                                    >
                                        Monthly
                                    </button>
                                    <button
                                        className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3"
                                        data-kt-plan="annual"
                                    >
                                        Annual
                                    </button>
                                </div>

                                <div className="row mt-10">
                                    <div className="col-lg-6 mb-10 mb-lg-0">
                                        <div className="nav flex-column">
                                            <label
                                                className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 active mb-6"
                                                data-bs-toggle="tab"
                                                data-bs-target="#kt_upgrade_plan_startup"
                                            >
                                                <div className="d-flex align-items-center me-2">
                                                    <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="plan"
                                                            checked="checked"
                                                            value="startup"
                                                        />
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">
                                                            Startup
                                                        </div>
                                                        <div className="fw-semibold opacity-75">
                                                            Best for startups
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="ms-5">
                                                    <span className="mb-2">
                                                        $
                                                    </span>
                                                    <span
                                                        className="fs-3x fw-bold"
                                                        data-kt-plan-price-month="39"
                                                        data-kt-plan-price-annual="399"
                                                    >
                                                        39{" "}
                                                    </span>
                                                    <span className="fs-7 opacity-50">
                                                        /
                                                        <span data-kt-element="period">
                                                            Mon
                                                        </span>
                                                    </span>
                                                </div>
                                            </label>

                                            <label
                                                className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6  mb-6"
                                                data-bs-toggle="tab"
                                                data-bs-target="#kt_upgrade_plan_advanced"
                                            >
                                                <div className="d-flex align-items-center me-2">
                                                    <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="plan"
                                                            value="advanced"
                                                        />
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">
                                                            Advanced
                                                        </div>
                                                        <div className="fw-semibold opacity-75">
                                                            Best for 100+ team
                                                            size
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="ms-5">
                                                    <span className="mb-2">
                                                        $
                                                    </span>
                                                    <span
                                                        className="fs-3x fw-bold"
                                                        data-kt-plan-price-month="339"
                                                        data-kt-plan-price-annual="3399"
                                                    >
                                                        339{" "}
                                                    </span>
                                                    <span className="fs-7 opacity-50">
                                                        /
                                                        <span data-kt-element="period">
                                                            Mon
                                                        </span>
                                                    </span>
                                                </div>
                                            </label>

                                            <label
                                                className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6  mb-6"
                                                data-bs-toggle="tab"
                                                data-bs-target="#kt_upgrade_plan_enterprise"
                                            >
                                                <div className="d-flex align-items-center me-2">
                                                    <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="plan"
                                                            value="enterprise"
                                                        />
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">
                                                            Enterprise
                                                            <span className="badge badge-light-success ms-2 py-2 px-3 fs-7">
                                                                Popular
                                                            </span>
                                                        </div>
                                                        <div className="fw-semibold opacity-75">
                                                            Best value for 1000+
                                                            team
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="ms-5">
                                                    <span className="mb-2">
                                                        $
                                                    </span>
                                                    <span
                                                        className="fs-3x fw-bold"
                                                        data-kt-plan-price-month="999"
                                                        data-kt-plan-price-annual="9999"
                                                    >
                                                        999{" "}
                                                    </span>
                                                    <span className="fs-7 opacity-50">
                                                        /
                                                        <span data-kt-element="period">
                                                            Mon
                                                        </span>
                                                    </span>
                                                </div>
                                            </label>

                                            <label
                                                className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                                                data-bs-toggle="tab"
                                                data-bs-target="#kt_upgrade_plan_custom"
                                            >
                                                <div className="d-flex align-items-center me-2">
                                                    <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="plan"
                                                            value="custom"
                                                        />
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">
                                                            Custom
                                                        </div>
                                                        <div className="fw-semibold opacity-75">
                                                            Requet a custom
                                                            license
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="ms-5">
                                                    <a
                                                        href="#"
                                                        className="btn btn-sm btn-success"
                                                    >
                                                        Contact Us
                                                    </a>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="tab-content rounded h-100 bg-light p-10">
                                            <div
                                                className="tab-pane fade show active"
                                                id="kt_upgrade_plan_startup"
                                            >
                                                <div className="pb-5">
                                                    <h2 className="fw-bold text-dark">
                                                        What’s in Startup Plan?
                                                    </h2>
                                                    <div className="text-muted fw-semibold">
                                                        Optimal for 10+ team
                                                        size and new startup
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Up to 10 Active
                                                            Users{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Up to 30 Project
                                                            Integrations{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Analytics Module{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                                            Finance Module{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-cross-circle fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                                            Accounting Module{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-cross-circle fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                                            Network Platform{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-cross-circle fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center ">
                                                        <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                                            Unlimited Cloud
                                                            Space{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-cross-circle fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="tab-pane fade "
                                                id="kt_upgrade_plan_advanced"
                                            >
                                                <div className="pb-5">
                                                    <h2 className="fw-bold text-dark">
                                                        What’s in Startup Plan?
                                                    </h2>
                                                    <div className="text-muted fw-semibold">
                                                        Optimal for 100+ team
                                                        size and grown company
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Up to 10 Active
                                                            Users{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Up to 30 Project
                                                            Integrations{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Analytics Module{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Finance Module{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Accounting Module{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                                            Network Platform{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-cross-circle fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center ">
                                                        <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                                            Unlimited Cloud
                                                            Space{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-cross-circle fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="tab-pane fade "
                                                id="kt_upgrade_plan_enterprise"
                                            >
                                                <div className="pb-5">
                                                    <h2 className="fw-bold text-dark">
                                                        What’s in Startup Plan?
                                                    </h2>
                                                    <div className="text-muted fw-semibold">
                                                        Optimal for 1000+ team
                                                        and enterpise
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Up to 10 Active
                                                            Users{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Up to 30 Project
                                                            Integrations{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Analytics Module{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Finance Module{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Accounting Module{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Network Platform{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center ">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Unlimited Cloud
                                                            Space{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="tab-pane fade "
                                                id="kt_upgrade_plan_custom"
                                            >
                                                <div className="pb-5">
                                                    <h2 className="fw-bold text-dark">
                                                        What’s in Startup Plan?
                                                    </h2>
                                                    <div className="text-muted fw-semibold">
                                                        Optimal for corporations
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Unlimited Users{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Unlimited Project
                                                            Integrations{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Analytics Module{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Finance Module{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Accounting Module{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Network Platform{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center ">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                                            Unlimited Cloud
                                                            Space{" "}
                                                        </span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-center flex-row-fluid pt-12">
                                <button
                                    type="reset"
                                    className="btn btn-light me-3"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    id="kt_modal_upgrade_plan_btn"
                                >
                                    <span className="indicator-label">
                                        Upgrade Plan
                                    </span>

                                    <span className="indicator-progress">
                                        Please wait...{" "}
                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="kt_modal_invite_friends"
                tabindex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog mw-650px">
                    <div className="modal-content">
                        <div className="modal-header pb-0 border-0 justify-content-end">
                            <div
                                className="btn btn-sm btn-icon btn-active-color-primary"
                                data-bs-dismiss="modal"
                            >
                                <i className="ki-duotone ki-cross fs-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </div>
                        </div>

                        <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                            <div className="text-center mb-13">
                                <h1 className="mb-3">Invite a Friend</h1>
                                <div className="text-muted fw-semibold fs-5">
                                    If you need more info, please check out
                                    <a
                                        href="#"
                                        className="link-primary fw-bold"
                                    >
                                        FAQ Page
                                    </a>
                                    .
                                </div>
                            </div>

                            <div className="btn btn-light-primary fw-bold w-100 mb-8">
                                <img
                                    alt="Logo"
                                    src="assets/media/svg/brand-logos/google-icon.svg"
                                    className="h-20px me-3"
                                />
                                Invite Gmail Contacts
                            </div>

                            <div className="separator d-flex flex-center mb-8">
                                <span className="text-uppercase bg-body fs-7 fw-semibold text-muted px-3">
                                    or
                                </span>
                            </div>

                            <textarea
                                className="form-control form-control-solid mb-8"
                                rows="3"
                                placeholder="Type or paste emails here"
                            ></textarea>

                            <div className="mb-10">
                                <div className="fs-6 fw-semibold mb-2">
                                    Your Invitations
                                </div>

                                <div className="mh-300px scroll-y me-n7 pe-7">
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img
                                                    alt="Pic"
                                                    src="assets/media/avatars/300-6.jpg"
                                                />
                                            </div>
                                            <div className="ms-5">
                                                <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                >
                                                    Emma Smith
                                                </a>
                                                <div className="fw-semibold text-muted">
                                                    smith@kpmg.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select
                                                className="form-select form-select-solid form-select-sm"
                                                data-control="select2"
                                                data-dropdown-parent="#kt_modal_invite_friends"
                                                data-hide-search="true"
                                            >
                                                <option value="1">Guest</option>
                                                <option
                                                    value="2"
                                                    selected
                                                >
                                                    Owner
                                                </option>
                                                <option value="3">
                                                    Can Edit
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                                    M{" "}
                                                </span>
                                            </div>
                                            <div className="ms-5">
                                                <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                >
                                                    Melody Macy
                                                </a>
                                                <div className="fw-semibold text-muted">
                                                    melody@altbox.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select
                                                className="form-select form-select-solid form-select-sm"
                                                data-control="select2"
                                                data-dropdown-parent="#kt_modal_invite_friends"
                                                data-hide-search="true"
                                            >
                                                <option
                                                    value="1"
                                                    selected
                                                >
                                                    Guest
                                                </option>
                                                <option value="2">Owner</option>
                                                <option value="3">
                                                    Can Edit
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img
                                                    alt="Pic"
                                                    src="assets/media/avatars/300-1.jpg"
                                                />
                                            </div>
                                            <div className="ms-5">
                                                <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                >
                                                    Max Smith
                                                </a>
                                                <div className="fw-semibold text-muted">
                                                    max@kt.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select
                                                className="form-select form-select-solid form-select-sm"
                                                data-control="select2"
                                                data-dropdown-parent="#kt_modal_invite_friends"
                                                data-hide-search="true"
                                            >
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option
                                                    value="3"
                                                    selected
                                                >
                                                    Can Edit
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img
                                                    alt="Pic"
                                                    src="assets/media/avatars/300-5.jpg"
                                                />
                                            </div>
                                            <div className="ms-5">
                                                <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                >
                                                    Sean Bean
                                                </a>
                                                <div className="fw-semibold text-muted">
                                                    sean@dellito.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select
                                                className="form-select form-select-solid form-select-sm"
                                                data-control="select2"
                                                data-dropdown-parent="#kt_modal_invite_friends"
                                                data-hide-search="true"
                                            >
                                                <option value="1">Guest</option>
                                                <option
                                                    value="2"
                                                    selected
                                                >
                                                    Owner
                                                </option>
                                                <option value="3">
                                                    Can Edit
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img
                                                    alt="Pic"
                                                    src="assets/media/avatars/300-25.jpg"
                                                />
                                            </div>
                                            <div className="ms-5">
                                                <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                >
                                                    Brian Cox
                                                </a>
                                                <div className="fw-semibold text-muted">
                                                    brian@exchange.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select
                                                className="form-select form-select-solid form-select-sm"
                                                data-control="select2"
                                                data-dropdown-parent="#kt_modal_invite_friends"
                                                data-hide-search="true"
                                            >
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option
                                                    value="3"
                                                    selected
                                                >
                                                    Can Edit
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-warning text-warning fw-semibold">
                                                    C{" "}
                                                </span>
                                            </div>
                                            <div className="ms-5">
                                                <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                >
                                                    Mikaela Collins
                                                </a>
                                                <div className="fw-semibold text-muted">
                                                    mik@pex.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select
                                                className="form-select form-select-solid form-select-sm"
                                                data-control="select2"
                                                data-dropdown-parent="#kt_modal_invite_friends"
                                                data-hide-search="true"
                                            >
                                                <option value="1">Guest</option>
                                                <option
                                                    value="2"
                                                    selected
                                                >
                                                    Owner
                                                </option>
                                                <option value="3">
                                                    Can Edit
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img
                                                    alt="Pic"
                                                    src="assets/media/avatars/300-9.jpg"
                                                />
                                            </div>
                                            <div className="ms-5">
                                                <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                >
                                                    Francis Mitcham
                                                </a>
                                                <div className="fw-semibold text-muted">
                                                    f.mit@kpmg.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select
                                                className="form-select form-select-solid form-select-sm"
                                                data-control="select2"
                                                data-dropdown-parent="#kt_modal_invite_friends"
                                                data-hide-search="true"
                                            >
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option
                                                    value="3"
                                                    selected
                                                >
                                                    Can Edit
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                                    O{" "}
                                                </span>
                                            </div>
                                            <div className="ms-5">
                                                <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                >
                                                    Olivia Wild
                                                </a>
                                                <div className="fw-semibold text-muted">
                                                    olivia@corpmail.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select
                                                className="form-select form-select-solid form-select-sm"
                                                data-control="select2"
                                                data-dropdown-parent="#kt_modal_invite_friends"
                                                data-hide-search="true"
                                            >
                                                <option value="1">Guest</option>
                                                <option
                                                    value="2"
                                                    selected
                                                >
                                                    Owner
                                                </option>
                                                <option value="3">
                                                    Can Edit
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-primary text-primary fw-semibold">
                                                    N{" "}
                                                </span>
                                            </div>
                                            <div className="ms-5">
                                                <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                >
                                                    Neil Owen
                                                </a>
                                                <div className="fw-semibold text-muted">
                                                    owen.neil@gmail.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select
                                                className="form-select form-select-solid form-select-sm"
                                                data-control="select2"
                                                data-dropdown-parent="#kt_modal_invite_friends"
                                                data-hide-search="true"
                                            >
                                                <option
                                                    value="1"
                                                    selected
                                                >
                                                    Guest
                                                </option>
                                                <option value="2">Owner</option>
                                                <option value="3">
                                                    Can Edit
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img
                                                    alt="Pic"
                                                    src="assets/media/avatars/300-23.jpg"
                                                />
                                            </div>
                                            <div className="ms-5">
                                                <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                >
                                                    Dan Wilson
                                                </a>
                                                <div className="fw-semibold text-muted">
                                                    dam@consilting.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select
                                                className="form-select form-select-solid form-select-sm"
                                                data-control="select2"
                                                data-dropdown-parent="#kt_modal_invite_friends"
                                                data-hide-search="true"
                                            >
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option
                                                    value="3"
                                                    selected
                                                >
                                                    Can Edit
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                                    E{" "}
                                                </span>
                                            </div>
                                            <div className="ms-5">
                                                <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                >
                                                    Emma Bold
                                                </a>
                                                <div className="fw-semibold text-muted">
                                                    emma@intenso.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select
                                                className="form-select form-select-solid form-select-sm"
                                                data-control="select2"
                                                data-dropdown-parent="#kt_modal_invite_friends"
                                                data-hide-search="true"
                                            >
                                                <option value="1">Guest</option>
                                                <option
                                                    value="2"
                                                    selected
                                                >
                                                    Owner
                                                </option>
                                                <option value="3">
                                                    Can Edit
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img
                                                    alt="Pic"
                                                    src="assets/media/avatars/300-12.jpg"
                                                />
                                            </div>
                                            <div className="ms-5">
                                                <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                >
                                                    Ana Crown
                                                </a>
                                                <div className="fw-semibold text-muted">
                                                    ana.cf@limtel.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select
                                                className="form-select form-select-solid form-select-sm"
                                                data-control="select2"
                                                data-dropdown-parent="#kt_modal_invite_friends"
                                                data-hide-search="true"
                                            >
                                                <option
                                                    value="1"
                                                    selected
                                                >
                                                    Guest
                                                </option>
                                                <option value="2">Owner</option>
                                                <option value="3">
                                                    Can Edit
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-info text-info fw-semibold">
                                                    A{" "}
                                                </span>
                                            </div>
                                            <div className="ms-5">
                                                <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                >
                                                    Robert Doe
                                                </a>
                                                <div className="fw-semibold text-muted">
                                                    robert@benko.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select
                                                className="form-select form-select-solid form-select-sm"
                                                data-control="select2"
                                                data-dropdown-parent="#kt_modal_invite_friends"
                                                data-hide-search="true"
                                            >
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option
                                                    value="3"
                                                    selected
                                                >
                                                    Can Edit
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img
                                                    alt="Pic"
                                                    src="assets/media/avatars/300-13.jpg"
                                                />
                                            </div>
                                            <div className="ms-5">
                                                <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                >
                                                    John Miller
                                                </a>
                                                <div className="fw-semibold text-muted">
                                                    miller@mapple.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select
                                                className="form-select form-select-solid form-select-sm"
                                                data-control="select2"
                                                data-dropdown-parent="#kt_modal_invite_friends"
                                                data-hide-search="true"
                                            >
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option
                                                    value="3"
                                                    selected
                                                >
                                                    Can Edit
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-success text-success fw-semibold">
                                                    L{" "}
                                                </span>
                                            </div>
                                            <div className="ms-5">
                                                <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                >
                                                    Lucy Kunic
                                                </a>
                                                <div className="fw-semibold text-muted">
                                                    lucy.m@fentech.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select
                                                className="form-select form-select-solid form-select-sm"
                                                data-control="select2"
                                                data-dropdown-parent="#kt_modal_invite_friends"
                                                data-hide-search="true"
                                            >
                                                <option value="1">Guest</option>
                                                <option
                                                    value="2"
                                                    selected
                                                >
                                                    Owner
                                                </option>
                                                <option value="3">
                                                    Can Edit
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img
                                                    alt="Pic"
                                                    src="assets/media/avatars/300-21.jpg"
                                                />
                                            </div>
                                            <div className="ms-5">
                                                <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                >
                                                    Ethan Wilder
                                                </a>
                                                <div className="fw-semibold text-muted">
                                                    ethan@loop.com.au
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select
                                                className="form-select form-select-solid form-select-sm"
                                                data-control="select2"
                                                data-dropdown-parent="#kt_modal_invite_friends"
                                                data-hide-search="true"
                                            >
                                                <option
                                                    value="1"
                                                    selected
                                                >
                                                    Guest
                                                </option>
                                                <option value="2">Owner</option>
                                                <option value="3">
                                                    Can Edit
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 ">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img
                                                    alt="Pic"
                                                    src="assets/media/avatars/300-13.jpg"
                                                />
                                            </div>
                                            <div className="ms-5">
                                                <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                >
                                                    John Miller
                                                </a>
                                                <div className="fw-semibold text-muted">
                                                    miller@mapple.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select
                                                className="form-select form-select-solid form-select-sm"
                                                data-control="select2"
                                                data-dropdown-parent="#kt_modal_invite_friends"
                                                data-hide-search="true"
                                            >
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option
                                                    value="3"
                                                    selected
                                                >
                                                    Can Edit
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-stack">
                                <div className="me-5 fw-semibold">
                                    <label className="fs-6">
                                        Adding Users by Team Members
                                    </label>
                                    <div className="fs-7 text-muted">
                                        If you need more info, please check
                                        budget planning
                                    </div>
                                </div>

                                <label className="form-check form-switch form-check-custom form-check-solid">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value="1"
                                        checked="checked"
                                    />
                                    <span className="form-check-label fw-semibold text-muted">
                                        Allowed
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="kt_modal_create_project"
                tabindex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-fullscreen p-9">
                    <div className="modal-content modal-rounded">
                        <div className="modal-header">
                            <h2>Create Project</h2>

                            <div
                                className="btn btn-sm btn-icon btn-active-color-primary"
                                data-bs-dismiss="modal"
                            >
                                <i className="ki-duotone ki-cross fs-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </div>
                        </div>

                        <div className="modal-body scroll-y m-5">
                            <div
                                className="stepper stepper-links d-flex flex-column"
                                id="kt_modal_create_project_stepper"
                            >
                                <div className="container">
                                    <div className="stepper-nav justify-content-center py-2">
                                        <div
                                            className="stepper-item me-5 me-md-15 current"
                                            data-kt-stepper-element="nav"
                                        >
                                            <h3 className="stepper-title">
                                                Project Type
                                            </h3>
                                        </div>

                                        <div
                                            className="stepper-item me-5 me-md-15"
                                            data-kt-stepper-element="nav"
                                        >
                                            <h3 className="stepper-title">
                                                Project Settings
                                            </h3>
                                        </div>

                                        <div
                                            className="stepper-item me-5 me-md-15"
                                            data-kt-stepper-element="nav"
                                        >
                                            <h3 className="stepper-title">
                                                Budget
                                            </h3>
                                        </div>

                                        <div
                                            className="stepper-item me-5 me-md-15"
                                            data-kt-stepper-element="nav"
                                        >
                                            <h3 className="stepper-title">
                                                Build A Team
                                            </h3>
                                        </div>

                                        <div
                                            className="stepper-item me-5 me-md-15"
                                            data-kt-stepper-element="nav"
                                        >
                                            <h3 className="stepper-title">
                                                Set First Target
                                            </h3>
                                        </div>

                                        <div
                                            className="stepper-item me-5 me-md-15"
                                            data-kt-stepper-element="nav"
                                        >
                                            <h3 className="stepper-title">
                                                Upload Files
                                            </h3>
                                        </div>

                                        <div
                                            className="stepper-item"
                                            data-kt-stepper-element="nav"
                                        >
                                            <h3 className="stepper-title">
                                                Completed
                                            </h3>
                                        </div>
                                    </div>

                                    <form
                                        className="mx-auto w-100 mw-600px pt-15 pb-10"
                                        novalidate="novalidate"
                                        id="kt_modal_create_project_form"
                                        method="post"
                                    >
                                        <div
                                            className="current"
                                            data-kt-stepper-element="content"
                                        >
                                            <div className="w-100">
                                                <div className="pb-7 pb-lg-12">
                                                    <h1 className="fw-bold text-dark">
                                                        Project Type
                                                    </h1>
                                                    <div className="text-muted fw-semibold fs-4">
                                                        If you need more info,
                                                        please check out
                                                        <a
                                                            href="#"
                                                            className="link-primary fw-bold"
                                                        >
                                                            FAQ Page
                                                        </a>
                                                    </div>
                                                </div>

                                                <div
                                                    className="fv-row mb-15"
                                                    data-kt-buttons="true"
                                                >
                                                    <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6 mb-6 active">
                                                        <input
                                                            className="btn-check"
                                                            type="radio"
                                                            checked="checked"
                                                            name="project_type"
                                                            value="1"
                                                        />

                                                        <span className="d-flex">
                                                            <i className="ki-duotone ki-profile-circle fs-3hx">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>
                                                            <span className="ms-4">
                                                                <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">
                                                                    Personal
                                                                    Project
                                                                </span>
                                                                <span className="fw-semibold fs-4 text-muted">
                                                                    If you need
                                                                    more info,
                                                                    please check
                                                                    it out
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>

                                                    <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6">
                                                        <input
                                                            className="btn-check"
                                                            type="radio"
                                                            name="project_type"
                                                            value="2"
                                                        />

                                                        <span className="d-flex">
                                                            <i className="ki-duotone ki-rocket fs-3hx">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                            <span className="ms-4">
                                                                <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">
                                                                    Team Project
                                                                </span>
                                                                <span className="fw-semibold fs-4 text-muted">
                                                                    Create
                                                                    corporate
                                                                    account to
                                                                    manage users
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="d-flex justify-content-end">
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-primary"
                                                        data-kt-element="type-next"
                                                    >
                                                        <span className="indicator-label">
                                                            Project Settings
                                                        </span>
                                                        <span className="indicator-progress">
                                                            Please wait...{" "}
                                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div data-kt-stepper-element="content">
                                            <div className="w-100">
                                                <div className="pb-12">
                                                    <h1 className="fw-bold text-dark">
                                                        Project Settings
                                                    </h1>
                                                    <div className="text-muted fw-semibold fs-4">
                                                        If you need more info,
                                                        please check
                                                        <a
                                                            href="#"
                                                            className="link-primary"
                                                        >
                                                            Project Guidelines
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="fv-row mb-8">
                                                    <div
                                                        className="dropzone"
                                                        id="kt_modal_create_project_settings_logo"
                                                    >
                                                        <div className="dz-message needsclick">
                                                            <i className="ki-duotone ki-file-up fs-3hx text-primary">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                            <div className="ms-4">
                                                                <h3 className="dfs-3 fw-bold text-gray-900 mb-1">
                                                                    Drop files
                                                                    here or
                                                                    click to
                                                                    upload.
                                                                </h3>
                                                                <span className="fw-semibold fs-4 text-muted">
                                                                    Upload up to
                                                                    10 files
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="fv-row mb-8">
                                                    <label className="required fs-6 fw-semibold mb-2">
                                                        Customer
                                                    </label>

                                                    <select
                                                        className="form-select form-select-solid"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                        data-placeholder="Select..."
                                                        name="settings_customer"
                                                    >
                                                        <option></option>
                                                        <option value="1">
                                                            Keenthemes
                                                        </option>
                                                        <option value="2">
                                                            CRM App
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="fv-row mb-8">
                                                    <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                                                        <span className="required">
                                                            Project Name
                                                        </span>
                                                        <span
                                                            className="ms-1"
                                                            data-bs-toggle="tooltip"
                                                            title="Specify project name"
                                                        >
                                                            <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>
                                                        </span>{" "}
                                                    </label>

                                                    <input
                                                        type="text"
                                                        className="form-control form-control-solid"
                                                        placeholder="Enter Project Name"
                                                        value="StockPro Mobile App"
                                                        name="settings_name"
                                                    />
                                                </div>

                                                <div className="fv-row mb-8">
                                                    <label className="required fs-6 fw-semibold mb-2">
                                                        Project Description
                                                    </label>

                                                    <textarea
                                                        className="form-control form-control-solid"
                                                        rows="3"
                                                        placeholder="Enter Project Description"
                                                        name="settings_description"
                                                    >
                                                        Experience share market
                                                        at your fingertips with
                                                        TICK PRO stock
                                                        investment mobile
                                                        trading app
                                                    </textarea>
                                                </div>

                                                <div className="fv-row mb-8">
                                                    <label className="required fs-6 fw-semibold mb-2">
                                                        Release Date
                                                    </label>

                                                    <div className="position-relative d-flex align-items-center">
                                                        <i className="ki-duotone ki-calendar-8 fs-2 position-absolute mx-4">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                            <span className="path3"></span>
                                                            <span className="path4"></span>
                                                            <span className="path5"></span>
                                                            <span className="path6"></span>
                                                        </i>
                                                        <input
                                                            className="form-control form-control-solid ps-12"
                                                            placeholder="Pick date range"
                                                            name="settings_release_date"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="fv-row mb-15">
                                                    <div className="d-flex flex-stack">
                                                        <div className="me-5">
                                                            <label className="required fs-6 fw-semibold">
                                                                Notifications
                                                            </label>
                                                            <div className="fs-7 fw-semibold text-muted">
                                                                Allow
                                                                Notifications by
                                                                Phone or Email
                                                            </div>
                                                        </div>

                                                        <div className="d-flex">
                                                            <label className="form-check form-check-custom form-check-solid me-10">
                                                                <input
                                                                    className="form-check-input h-20px w-20px"
                                                                    type="checkbox"
                                                                    value="email"
                                                                    name="settings_notifications[]"
                                                                />

                                                                <span className="form-check-label fw-semibold">
                                                                    Email
                                                                </span>
                                                            </label>
                                                            <label className="form-check form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input h-20px w-20px"
                                                                    type="checkbox"
                                                                    value="phone"
                                                                    checked
                                                                    name="settings_notifications[]"
                                                                />

                                                                <span className="form-check-label fw-semibold">
                                                                    Phone
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-stack">
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-light me-3"
                                                        data-kt-element="settings-previous"
                                                    >
                                                        Project Type
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-primary"
                                                        data-kt-element="settings-next"
                                                    >
                                                        <span className="indicator-label">
                                                            Budget
                                                        </span>
                                                        <span className="indicator-progress">
                                                            Please wait...{" "}
                                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div data-kt-stepper-element="content">
                                            <div className="w-100">
                                                <div className="pb-10 pb-lg-12">
                                                    <h1 className="fw-bold text-dark">
                                                        Budget
                                                    </h1>
                                                    <div className="text-muted fw-semibold fs-4">
                                                        If you need more info,
                                                        please check
                                                        <a
                                                            href="#"
                                                            className="link-primary"
                                                        >
                                                            Project Guidelines
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="fv-row mb-8">
                                                    <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                                                        <span className="required">
                                                            Setup Budget
                                                        </span>
                                                        <span
                                                            className="lh-1 ms-1"
                                                            data-bs-toggle="popover"
                                                            data-bs-trigger="hover"
                                                            data-bs-html="true"
                                                            data-bs-content='
                      &lt;div class=&#039;p-4 rounded bg-light&#039;&gt;
                      &lt;div class=&#039;d-flex flex-stack text-muted mb-4&#039;&gt;
                      &lt;i class="ki-duotone ki-bank fs-3 me-3"&gt;&lt;span class="path1"&gt;&lt;/span&gt;&lt;span class="path2"&gt;&lt;/span&gt;&lt;/i&gt;
                      &lt;div class=&#039;fw-bold&#039;&gt;INCBANK **** 1245 STATEMENT&lt;/div&gt;
                      &lt;/div&gt;
                      &lt;div class=&#039;d-flex flex-stack fw-semibold text-gray-600&#039;&gt;
                      &lt;div&gt;Amount&lt;/div&gt;
                      &lt;div&gt;Transaction&lt;/div&gt;
                      &lt;/div&gt;
                      &lt;div class=&#039;separator separator-dashed my-2&#039;&gt;&lt;/div&gt;
                      &lt;div class=&#039;d-flex flex-stack text-dark fw-bold mb-2&#039;&gt;
                      &lt;div&gt;USD345.00&lt;/div&gt;
                      &lt;div&gt;KEENTHEMES*&lt;/div&gt;
                      &lt;/div&gt;
                      &lt;div class=&#039;d-flex flex-stack text-muted mb-2&#039;&gt;
                      &lt;div&gt;USD75.00&lt;/div&gt;
                      &lt;div&gt;Hosting fee&lt;/div&gt;
                      &lt;/div&gt;
                      &lt;div class=&#039;d-flex flex-stack text-muted&#039;&gt;
                      &lt;div&gt;USD3,950.00&lt;/div&gt;
                      &lt;div&gt;Payrol&lt;/div&gt;
                      &lt;/div&gt;
                      &lt;/div&gt;
                      '
                                                        >
                                                            <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>
                                                        </span>{" "}
                                                    </label>

                                                    <div
                                                        className="position-relative w-lg-250px"
                                                        id="kt_modal_create_project_budget_setup"
                                                        data-kt-dialer="true"
                                                        data-kt-dialer-min="50"
                                                        data-kt-dialer-max="50000"
                                                        data-kt-dialer-step="100"
                                                        data-kt-dialer-prefix="$"
                                                        data-kt-dialer-decimals="2"
                                                    >
                                                        <button
                                                            type="button"
                                                            className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0"
                                                            data-kt-dialer-control="decrease"
                                                        >
                                                            <i className="ki-duotone ki-minus-circle fs-1">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>{" "}
                                                        </button>

                                                        <input
                                                            type="text"
                                                            className="form-control form-control-solid border-0 ps-12"
                                                            data-kt-dialer-control="input"
                                                            placeholder="Amount"
                                                            name="budget_setup"
                                                            readonly
                                                            value="$50"
                                                        />

                                                        <button
                                                            type="button"
                                                            className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0"
                                                            data-kt-dialer-control="increase"
                                                        >
                                                            <i className="ki-duotone ki-plus-circle fs-1">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>{" "}
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="fv-row mb-8">
                                                    <label className="fs-6 fw-semibold mb-2">
                                                        Budget Usage
                                                    </label>

                                                    <div
                                                        className="row g-9"
                                                        data-kt-buttons="true"
                                                        data-kt-buttons-target="[data-kt-button='true']"
                                                    >
                                                        <div className="col-md-6 col-lg-12 col-xxl-6">
                                                            <label
                                                                className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6"
                                                                data-kt-button="true"
                                                            >
                                                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="budget_usage"
                                                                        value="1"
                                                                        checked="checked"
                                                                    />
                                                                </span>

                                                                <span className="ms-5">
                                                                    <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">
                                                                        Precise
                                                                        Usage
                                                                    </span>
                                                                    <span className="fw-semibold fs-7 text-gray-600">
                                                                        Withdraw
                                                                        money to
                                                                        your
                                                                        bank
                                                                        account
                                                                        per
                                                                        transaction
                                                                        under
                                                                        $50,000
                                                                        budget
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </div>

                                                        <div className="col-md-6 col-lg-12 col-xxl-6">
                                                            <label
                                                                className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                                                                data-kt-button="true"
                                                            >
                                                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="budget_usage"
                                                                        value="2"
                                                                    />
                                                                </span>

                                                                <span className="ms-5">
                                                                    <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">
                                                                        Extreme
                                                                        Usage
                                                                    </span>
                                                                    <span className="fw-semibold fs-7 text-gray-600">
                                                                        Withdraw
                                                                        money to
                                                                        your
                                                                        bank
                                                                        account
                                                                        per
                                                                        transaction
                                                                        under
                                                                        $50,000
                                                                        budget
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="fv-row mb-15">
                                                    <div className="d-flex flex-stack">
                                                        <div className="me-5">
                                                            <label className="fs-6 fw-semibold">
                                                                Allow Changes in
                                                                Budget
                                                            </label>
                                                            <div className="fs-7 fw-semibold text-muted">
                                                                If you need more
                                                                info, please
                                                                check budget
                                                                planning
                                                            </div>
                                                        </div>

                                                        <label className="form-check form-switch form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                value="1"
                                                                name="budget_allow"
                                                                checked="checked"
                                                            />
                                                            <span className="form-check-label fw-semibold text-muted">
                                                                Allowed
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-stack">
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-light me-3"
                                                        data-kt-element="budget-previous"
                                                    >
                                                        Project Settings
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-primary"
                                                        data-kt-element="budget-next"
                                                    >
                                                        <span className="indicator-label">
                                                            Build Team
                                                        </span>
                                                        <span className="indicator-progress">
                                                            Please wait...{" "}
                                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div data-kt-stepper-element="content">
                                            <div className="w-100">
                                                <div className="pb-12">
                                                    <h1 className="fw-bold text-dark">
                                                        Build a Team
                                                    </h1>
                                                    <div className="text-muted fw-semibold fs-4">
                                                        If you need more info,
                                                        please check
                                                        <a
                                                            href="#"
                                                            className="link-primary"
                                                        >
                                                            Project Guidelines
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="mb-8">
                                                    <label className="fs-6 fw-semibold mb-2">
                                                        Invite Teammates
                                                    </label>

                                                    <input
                                                        type="text"
                                                        className="form-control form-control-solid"
                                                        placeholder="Add project memnbers by name or email.."
                                                        name="invite_teammates"
                                                    />
                                                </div>

                                                <div className="mb-8">
                                                    <div className="fs-6 fw-semibold mb-2">
                                                        Team Members
                                                    </div>

                                                    <div className="mh-300px scroll-y me-n7 pe-7">
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="assets/media/avatars/300-6.jpg"
                                                                    />
                                                                </div>
                                                                <div className="ms-5">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Emma
                                                                        Smith
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        smith@kpmg.com
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value="1">
                                                                        Guest
                                                                    </option>
                                                                    <option
                                                                        value="2"
                                                                        selected
                                                                    >
                                                                        Owner
                                                                    </option>
                                                                    <option value="3">
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                                                        M{" "}
                                                                    </span>
                                                                </div>
                                                                <div className="ms-5">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Melody
                                                                        Macy
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        melody@altbox.com
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option
                                                                        value="1"
                                                                        selected
                                                                    >
                                                                        Guest
                                                                    </option>
                                                                    <option value="2">
                                                                        Owner
                                                                    </option>
                                                                    <option value="3">
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="assets/media/avatars/300-1.jpg"
                                                                    />
                                                                </div>
                                                                <div className="ms-5">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Max
                                                                        Smith
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        max@kt.com
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value="1">
                                                                        Guest
                                                                    </option>
                                                                    <option value="2">
                                                                        Owner
                                                                    </option>
                                                                    <option
                                                                        value="3"
                                                                        selected
                                                                    >
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="assets/media/avatars/300-5.jpg"
                                                                    />
                                                                </div>
                                                                <div className="ms-5">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Sean
                                                                        Bean
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        sean@dellito.com
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value="1">
                                                                        Guest
                                                                    </option>
                                                                    <option
                                                                        value="2"
                                                                        selected
                                                                    >
                                                                        Owner
                                                                    </option>
                                                                    <option value="3">
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="assets/media/avatars/300-25.jpg"
                                                                    />
                                                                </div>
                                                                <div className="ms-5">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Brian
                                                                        Cox
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        brian@exchange.com
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value="1">
                                                                        Guest
                                                                    </option>
                                                                    <option value="2">
                                                                        Owner
                                                                    </option>
                                                                    <option
                                                                        value="3"
                                                                        selected
                                                                    >
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <span className="symbol-label bg-light-warning text-warning fw-semibold">
                                                                        C{" "}
                                                                    </span>
                                                                </div>
                                                                <div className="ms-5">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Mikaela
                                                                        Collins
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        mik@pex.com
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value="1">
                                                                        Guest
                                                                    </option>
                                                                    <option
                                                                        value="2"
                                                                        selected
                                                                    >
                                                                        Owner
                                                                    </option>
                                                                    <option value="3">
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="assets/media/avatars/300-9.jpg"
                                                                    />
                                                                </div>
                                                                <div className="ms-5">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Francis
                                                                        Mitcham
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        f.mit@kpmg.com
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value="1">
                                                                        Guest
                                                                    </option>
                                                                    <option value="2">
                                                                        Owner
                                                                    </option>
                                                                    <option
                                                                        value="3"
                                                                        selected
                                                                    >
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                                                        O{" "}
                                                                    </span>
                                                                </div>
                                                                <div className="ms-5">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Olivia
                                                                        Wild
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        olivia@corpmail.com
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value="1">
                                                                        Guest
                                                                    </option>
                                                                    <option
                                                                        value="2"
                                                                        selected
                                                                    >
                                                                        Owner
                                                                    </option>
                                                                    <option value="3">
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <span className="symbol-label bg-light-primary text-primary fw-semibold">
                                                                        N{" "}
                                                                    </span>
                                                                </div>
                                                                <div className="ms-5">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Neil
                                                                        Owen
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        owen.neil@gmail.com
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option
                                                                        value="1"
                                                                        selected
                                                                    >
                                                                        Guest
                                                                    </option>
                                                                    <option value="2">
                                                                        Owner
                                                                    </option>
                                                                    <option value="3">
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="assets/media/avatars/300-23.jpg"
                                                                    />
                                                                </div>
                                                                <div className="ms-5">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Dan
                                                                        Wilson
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        dam@consilting.com
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value="1">
                                                                        Guest
                                                                    </option>
                                                                    <option value="2">
                                                                        Owner
                                                                    </option>
                                                                    <option
                                                                        value="3"
                                                                        selected
                                                                    >
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                                                        E{" "}
                                                                    </span>
                                                                </div>
                                                                <div className="ms-5">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Emma
                                                                        Bold
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        emma@intenso.com
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value="1">
                                                                        Guest
                                                                    </option>
                                                                    <option
                                                                        value="2"
                                                                        selected
                                                                    >
                                                                        Owner
                                                                    </option>
                                                                    <option value="3">
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="assets/media/avatars/300-12.jpg"
                                                                    />
                                                                </div>
                                                                <div className="ms-5">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Ana
                                                                        Crown
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        ana.cf@limtel.com
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option
                                                                        value="1"
                                                                        selected
                                                                    >
                                                                        Guest
                                                                    </option>
                                                                    <option value="2">
                                                                        Owner
                                                                    </option>
                                                                    <option value="3">
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <span className="symbol-label bg-light-info text-info fw-semibold">
                                                                        A{" "}
                                                                    </span>
                                                                </div>
                                                                <div className="ms-5">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Robert
                                                                        Doe
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        robert@benko.com
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value="1">
                                                                        Guest
                                                                    </option>
                                                                    <option value="2">
                                                                        Owner
                                                                    </option>
                                                                    <option
                                                                        value="3"
                                                                        selected
                                                                    >
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="assets/media/avatars/300-13.jpg"
                                                                    />
                                                                </div>
                                                                <div className="ms-5">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        John
                                                                        Miller
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        miller@mapple.com
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value="1">
                                                                        Guest
                                                                    </option>
                                                                    <option value="2">
                                                                        Owner
                                                                    </option>
                                                                    <option
                                                                        value="3"
                                                                        selected
                                                                    >
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <span className="symbol-label bg-light-success text-success fw-semibold">
                                                                        L{" "}
                                                                    </span>
                                                                </div>
                                                                <div className="ms-5">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Lucy
                                                                        Kunic
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        lucy.m@fentech.com
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value="1">
                                                                        Guest
                                                                    </option>
                                                                    <option
                                                                        value="2"
                                                                        selected
                                                                    >
                                                                        Owner
                                                                    </option>
                                                                    <option value="3">
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="assets/media/avatars/300-21.jpg"
                                                                    />
                                                                </div>
                                                                <div className="ms-5">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Ethan
                                                                        Wilder
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        ethan@loop.com.au
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option
                                                                        value="1"
                                                                        selected
                                                                    >
                                                                        Guest
                                                                    </option>
                                                                    <option value="2">
                                                                        Owner
                                                                    </option>
                                                                    <option value="3">
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-stack py-4 ">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <img
                                                                        alt="Pic"
                                                                        src="assets/media/avatars/300-21.jpg"
                                                                    />
                                                                </div>
                                                                <div className="ms-5">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Ethan
                                                                        Wilder
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        ethan@loop.com.au
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ms-2 w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                >
                                                                    <option value="1">
                                                                        Guest
                                                                    </option>
                                                                    <option value="2">
                                                                        Owner
                                                                    </option>
                                                                    <option
                                                                        value="3"
                                                                        selected
                                                                    >
                                                                        Can Edit
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-stack mb-15">
                                                    <div className="me-5 fw-semibold">
                                                        <label className="fs-6">
                                                            Adding Users by Team
                                                            Members
                                                        </label>
                                                        <div className="fs-7 text-muted">
                                                            If you need more
                                                            info, please check
                                                            budget planning
                                                        </div>
                                                    </div>

                                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            checked="checked"
                                                        />
                                                    </label>
                                                </div>

                                                <div className="d-flex flex-stack">
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-light me-3"
                                                        data-kt-element="team-previous"
                                                    >
                                                        Budget
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-primary"
                                                        data-kt-element="team-next"
                                                    >
                                                        <span className="indicator-label">
                                                            Set Target
                                                        </span>
                                                        <span className="indicator-progress">
                                                            Please wait...{" "}
                                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div data-kt-stepper-element="content">
                                            <div className="w-100">
                                                <div className="pb-12">
                                                    <h1 className="fw-bold text-dark">
                                                        Set First Target
                                                    </h1>
                                                    <div className="text-muted fw-semibold fs-4">
                                                        If you need more info,
                                                        please check
                                                        <a
                                                            href="#"
                                                            className="link-primary"
                                                        >
                                                            Project Guidelines
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="fv-row mb-8">
                                                    <label className="fs-6 fw-semibold mb-2">
                                                        Target Title
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-solid"
                                                        placeholder="Enter Target Title"
                                                        name="target_title"
                                                    />
                                                </div>

                                                <div className="row g-9 mb-8">
                                                    <div className="col-md-6 fv-row">
                                                        <label className="required fs-6 fw-semibold mb-2">
                                                            Assign
                                                        </label>
                                                        <select
                                                            className="form-select form-select-solid"
                                                            data-control="select2"
                                                            data-hide-search="true"
                                                            data-placeholder="Select a Team Member"
                                                            name="target_assign"
                                                        >
                                                            <option></option>
                                                            <option value="1">
                                                                Karina Clark
                                                            </option>
                                                            <option
                                                                value="2"
                                                                selected
                                                            >
                                                                Robert Doe
                                                            </option>
                                                            <option value="3">
                                                                Niel Owen
                                                            </option>
                                                            <option value="4">
                                                                Olivia Wild
                                                            </option>
                                                            <option value="5">
                                                                Sean Bean
                                                            </option>
                                                        </select>
                                                    </div>

                                                    <div className="col-md-6 fv-row">
                                                        <label className="required fs-6 fw-semibold mb-2">
                                                            Due Date
                                                        </label>
                                                        <div className="position-relative d-flex align-items-center">
                                                            <i className="ki-duotone ki-calendar-8 fs-2 position-absolute mx-4">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                                <span className="path4"></span>
                                                                <span className="path5"></span>
                                                                <span className="path6"></span>
                                                            </i>

                                                            <input
                                                                className="form-control form-control-solid ps-12"
                                                                placeholder="Pick date range"
                                                                name="target_due_date"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="fv-row mb-8">
                                                    <label className="fs-6 fw-semibold mb-2">
                                                        Target Details
                                                    </label>
                                                    <textarea
                                                        className="form-control form-control-solid"
                                                        rows="2"
                                                        name="target_details"
                                                        placeholder="Type Target Details"
                                                    >
                                                        Experience share market
                                                        at your fingertips with
                                                        TICK PRO stock
                                                        investment mobile
                                                        trading app
                                                    </textarea>
                                                </div>

                                                <div className="fv-row mb-8">
                                                    <label className="required fs-6 fw-semibold mb-2">
                                                        Tags
                                                    </label>
                                                    <input
                                                        className="form-control form-control-solid"
                                                        value="Important, Urgent"
                                                        name="target_tags"
                                                    />
                                                </div>

                                                <div className="fv-row mb-8">
                                                    <div className="d-flex flex-stack">
                                                        <div className="me-5">
                                                            <label className="fs-6 fw-semibold">
                                                                Allow Changes in
                                                                Budget
                                                            </label>
                                                            <div className="fs-7 fw-semibold text-muted">
                                                                If you need more
                                                                info, please
                                                                check budget
                                                                planning
                                                            </div>
                                                        </div>

                                                        <label className="form-check form-switch form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                value="1"
                                                                name="target_allow"
                                                                checked="checked"
                                                            />
                                                            <span className="form-check-label fw-semibold text-muted">
                                                                Allowed
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="fv-row mb-15">
                                                    <div className="d-flex flex-stack">
                                                        <div className="me-5">
                                                            <label className="fs-6 fw-semibold">
                                                                Notifications
                                                            </label>
                                                            <div className="fs-7 fw-semibold text-muted">
                                                                Allow
                                                                Notifications by
                                                                Phone or Email
                                                            </div>
                                                        </div>

                                                        <div className="d-flex">
                                                            <label className="form-check form-check-custom form-check-solid me-10">
                                                                <input
                                                                    className="form-check-input h-20px w-20px"
                                                                    type="checkbox"
                                                                    value="email"
                                                                    name="target_notifications[]"
                                                                />

                                                                <span className="form-check-label fw-semibold">
                                                                    Email
                                                                </span>
                                                            </label>
                                                            <label className="form-check form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input h-20px w-20px"
                                                                    type="checkbox"
                                                                    value="phone"
                                                                    checked
                                                                    name="target_notifications[]"
                                                                />

                                                                <span className="form-check-label fw-semibold">
                                                                    Phone
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-stack">
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-light me-3"
                                                        data-kt-element="targets-previous"
                                                    >
                                                        Build a Team
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-primary"
                                                        data-kt-element="targets-next"
                                                    >
                                                        <span className="indicator-label">
                                                            Upload Files
                                                        </span>
                                                        <span className="indicator-progress">
                                                            Please wait...{" "}
                                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div data-kt-stepper-element="content">
                                            <div className="w-100">
                                                <div className="pb-10 pb-lg-12">
                                                    <h1 className="fw-bold text-dark">
                                                        Upload Files
                                                    </h1>
                                                    <div className="text-muted fw-semibold fs-4">
                                                        If you need more info,
                                                        please check
                                                        <a
                                                            href="#"
                                                            className="link-primary"
                                                        >
                                                            Project Guidelines
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="fv-row mb-8">
                                                    <div
                                                        className="dropzone"
                                                        id="kt_modal_create_project_files_upload"
                                                    >
                                                        <div className="dz-message needsclick">
                                                            <i className="ki-duotone ki-file-up fs-3hx text-primary">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                            <div className="ms-4">
                                                                <h3 className="dfs-3 fw-bold text-gray-900 mb-1">
                                                                    Drop files
                                                                    here or
                                                                    click to
                                                                    upload.
                                                                </h3>
                                                                <span className="fw-semibold fs-4 text-muted">
                                                                    Upload up to
                                                                    10 files
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mb-8">
                                                    <label className="fs-6 fw-semibold mb-2">
                                                        Uploaded File
                                                    </label>

                                                    <div className="mh-300px scroll-y me-n7 pe-7">
                                                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px">
                                                                    <img
                                                                        src="assets/media/svg/files/pdf.svg"
                                                                        alt="icon"
                                                                    />
                                                                </div>
                                                                <div className="ms-6">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Avionica
                                                                        Technical
                                                                        Requirements
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        230kb
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                    data-placeholder="Edit"
                                                                >
                                                                    <option></option>
                                                                    <option value="1">
                                                                        Remove
                                                                    </option>
                                                                    <option value="2">
                                                                        Modify
                                                                    </option>
                                                                    <option value="3">
                                                                        Select
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px">
                                                                    <img
                                                                        src="assets/media/svg/files/doc.svg"
                                                                        alt="icon"
                                                                    />
                                                                </div>
                                                                <div className="ms-6">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        9 Degree
                                                                        CURD
                                                                        draftplan
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        3.6mb
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                    data-placeholder="Edit"
                                                                >
                                                                    <option></option>
                                                                    <option value="1">
                                                                        Remove
                                                                    </option>
                                                                    <option value="2">
                                                                        Modify
                                                                    </option>
                                                                    <option value="3">
                                                                        Select
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px">
                                                                    <img
                                                                        src="assets/media/svg/files/css.svg"
                                                                        alt="icon"
                                                                    />
                                                                </div>
                                                                <div className="ms-6">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        User
                                                                        CRUD
                                                                        Styles
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        85kb
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                    data-placeholder="Edit"
                                                                >
                                                                    <option></option>
                                                                    <option value="1">
                                                                        Remove
                                                                    </option>
                                                                    <option value="2">
                                                                        Modify
                                                                    </option>
                                                                    <option value="3">
                                                                        Select
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px">
                                                                    <img
                                                                        src="assets/media/svg/files/ai.svg"
                                                                        alt="icon"
                                                                    />
                                                                </div>
                                                                <div className="ms-6">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Design
                                                                        Initial
                                                                        Logo
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        40kb
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                    data-placeholder="Edit"
                                                                >
                                                                    <option></option>
                                                                    <option value="1">
                                                                        Remove
                                                                    </option>
                                                                    <option value="2">
                                                                        Modify
                                                                    </option>
                                                                    <option value="3">
                                                                        Select
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex flex-stack py-4 ">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-35px">
                                                                    <img
                                                                        src="assets/media/svg/files/tif.svg"
                                                                        alt="icon"
                                                                    />
                                                                </div>
                                                                <div className="ms-6">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                                    >
                                                                        Tower
                                                                        Hill
                                                                        Bilboard
                                                                    </a>
                                                                    <div className="fw-semibold text-muted">
                                                                        27mb
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-100px">
                                                                <select
                                                                    className="form-select form-select-solid form-select-sm"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                    data-placeholder="Edit"
                                                                >
                                                                    <option></option>
                                                                    <option value="1">
                                                                        Remove
                                                                    </option>
                                                                    <option value="2">
                                                                        Modify
                                                                    </option>
                                                                    <option value="3">
                                                                        Select
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="fv-row mb-8">
                                                    <div className="d-flex flex-stack">
                                                        <div className="me-5">
                                                            <label className="fs-6 fw-semibold">
                                                                Allow Changes in
                                                                Budget
                                                            </label>
                                                            <div className="fs-7 fw-semibold text-muted">
                                                                If you need more
                                                                info, please
                                                                check budget
                                                                planning
                                                            </div>
                                                        </div>

                                                        <label className="form-check form-switch form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                value="1"
                                                                name="target_allow"
                                                                checked="checked"
                                                            />
                                                            <span className="form-check-label fw-semibold text-muted">
                                                                Allowed
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-stack">
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-light me-3"
                                                        data-kt-element="files-previous"
                                                    >
                                                        Set First Target
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-primary"
                                                        data-kt-element="files-next"
                                                    >
                                                        <span className="indicator-label">
                                                            Complete
                                                        </span>
                                                        <span className="indicator-progress">
                                                            Please wait...{" "}
                                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div data-kt-stepper-element="content">
                                            <div className="w-100">
                                                <div className="pb-12 text-center">
                                                    <h1 className="fw-bold text-dark">
                                                        Project Created!
                                                    </h1>
                                                    <div className="text-muted fw-semibold fs-4">
                                                        If you need more info,
                                                        please check how to
                                                        create project
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-center pb-20">
                                                    <button
                                                        type="button"
                                                        className="btn btn-lg btn-light me-3"
                                                        data-kt-element="complete-start"
                                                    >
                                                        Create New Project
                                                    </button>
                                                    <a
                                                        href="#"
                                                        className="btn btn-lg btn-primary"
                                                        data-bs-toggle="tooltip"
                                                        title="Coming Soon"
                                                    >
                                                        View Project
                                                    </a>
                                                </div>

                                                <div className="text-center px-4">
                                                    <img
                                                        src="assets/media/illustrations/sigma-1/9.png"
                                                        alt=""
                                                        className="mww-100 mh-350px"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="kt_modal_select_location"
                tabindex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog mw-1000px">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Select Location</h2>
                            <div
                                className="btn btn-sm btn-icon btn-active-color-primary"
                                data-bs-dismiss="modal"
                            >
                                <i className="ki-duotone ki-cross fs-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </div>
                        </div>

                        <div className="modal-body">
                            <div
                                id="kt_modal_select_location_map"
                                className="w-100 rounded"
                                style={{ height: "450px" }}
                            ></div>
                        </div>

                        <div className="modal-footer d-flex justify-content-end">
                            <a
                                href="#"
                                className="btn btn-active-light me-5"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </a>
                            <button
                                type="button"
                                id="kt_modal_select_location_button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="kt_modal_create_app"
                tabindex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered mw-900px">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Create App</h2>

                            <div
                                className="btn btn-sm btn-icon btn-active-color-primary"
                                data-bs-dismiss="modal"
                            >
                                <i className="ki-duotone ki-cross fs-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </div>
                        </div>

                        <div className="modal-body py-lg-10 px-lg-10">
                            <div
                                className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
                                id="kt_modal_create_app_stepper"
                            >
                                <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
                                    <div className="stepper-nav ps-lg-10">
                                        <div
                                            className="stepper-item current"
                                            data-kt-stepper-element="nav"
                                        >
                                            <div className="stepper-wrapper">
                                                <div className="stepper-icon w-40px h-40px">
                                                    <i className="ki-duotone ki-check stepper-check fs-2"></i>{" "}
                                                    <span className="stepper-number">
                                                        1
                                                    </span>
                                                </div>

                                                <div className="stepper-label">
                                                    <h3 className="stepper-title">
                                                        Details
                                                    </h3>
                                                    <div className="stepper-desc">
                                                        Name your App
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="stepper-line h-40px"></div>
                                        </div>

                                        <div
                                            className="stepper-item"
                                            data-kt-stepper-element="nav"
                                        >
                                            <div className="stepper-wrapper">
                                                <div className="stepper-icon w-40px h-40px">
                                                    <i className="ki-duotone ki-check stepper-check fs-2"></i>{" "}
                                                    <span className="stepper-number">
                                                        2
                                                    </span>
                                                </div>

                                                <div className="stepper-label">
                                                    <h3 className="stepper-title">
                                                        Frameworks
                                                    </h3>
                                                    <div className="stepper-desc">
                                                        Define your app
                                                        framework
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="stepper-line h-40px"></div>
                                        </div>

                                        <div
                                            className="stepper-item"
                                            data-kt-stepper-element="nav"
                                        >
                                            <div className="stepper-wrapper">
                                                <div className="stepper-icon w-40px h-40px">
                                                    <i className="ki-duotone ki-check stepper-check fs-2"></i>{" "}
                                                    <span className="stepper-number">
                                                        3
                                                    </span>
                                                </div>

                                                <div className="stepper-label">
                                                    <h3 className="stepper-title">
                                                        Database
                                                    </h3>
                                                    <div className="stepper-desc">
                                                        Select the app database
                                                        type
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="stepper-line h-40px"></div>
                                        </div>

                                        <div
                                            className="stepper-item"
                                            data-kt-stepper-element="nav"
                                        >
                                            <div className="stepper-wrapper">
                                                <div className="stepper-icon w-40px h-40px">
                                                    <i className="ki-duotone ki-check stepper-check fs-2"></i>{" "}
                                                    <span className="stepper-number">
                                                        4
                                                    </span>
                                                </div>

                                                <div className="stepper-label">
                                                    <h3 className="stepper-title">
                                                        Billing
                                                    </h3>
                                                    <div className="stepper-desc">
                                                        Provide payment details
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="stepper-line h-40px"></div>
                                        </div>

                                        <div
                                            className="stepper-item mark-completed"
                                            data-kt-stepper-element="nav"
                                        >
                                            <div className="stepper-wrapper">
                                                <div className="stepper-icon w-40px h-40px">
                                                    <i className="ki-duotone ki-check stepper-check fs-2"></i>{" "}
                                                    <span className="stepper-number">
                                                        5
                                                    </span>
                                                </div>

                                                <div className="stepper-label">
                                                    <h3 className="stepper-title">
                                                        Completed
                                                    </h3>
                                                    <div className="stepper-desc">
                                                        Review and Submit
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-row-fluid py-lg-5 px-lg-15">
                                    <form
                                        className="form"
                                        novalidate="novalidate"
                                        id="kt_modal_create_app_form"
                                    >
                                        <div
                                            className="current"
                                            data-kt-stepper-element="content"
                                        >
                                            <div className="w-100">
                                                <div className="fv-row mb-10">
                                                    <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
                                                        <span className="required">
                                                            App Name
                                                        </span>
                                                        <span
                                                            className="ms-1"
                                                            data-bs-toggle="tooltip"
                                                            title="Specify your unique app name"
                                                        >
                                                            <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>
                                                        </span>{" "}
                                                    </label>

                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg form-control-solid"
                                                        name="name"
                                                        placeholder=""
                                                    />
                                                </div>

                                                <div className="fv-row">
                                                    <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                                                        <span className="required">
                                                            Category
                                                        </span>
                                                        <span
                                                            className="ms-1"
                                                            data-bs-toggle="tooltip"
                                                            title="Select your app category"
                                                        >
                                                            <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>
                                                        </span>{" "}
                                                    </label>

                                                    <div className="fv-row">
                                                        <label className="d-flex flex-stack mb-5 cursor-pointer">
                                                            <span className="d-flex align-items-center me-2">
                                                                <span className="symbol symbol-50px me-6">
                                                                    <span className="symbol-label bg-light-primary">
                                                                        <i className="ki-duotone ki-compass fs-1 text-primary">
                                                                            <span className="path1"></span>
                                                                            <span className="path2"></span>
                                                                        </i>{" "}
                                                                    </span>
                                                                </span>

                                                                <span className="d-flex flex-column">
                                                                    <span className="fw-bold fs-6">
                                                                        Quick
                                                                        Online
                                                                        Courses
                                                                    </span>
                                                                    <span className="fs-7 text-muted">
                                                                        Creating
                                                                        a clear
                                                                        text
                                                                        structure
                                                                        is just
                                                                        one SEO
                                                                    </span>
                                                                </span>
                                                            </span>

                                                            <span className="form-check form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="category"
                                                                    value="1"
                                                                />
                                                            </span>
                                                        </label>

                                                        <label className="d-flex flex-stack mb-5 cursor-pointer">
                                                            <span className="d-flex align-items-center me-2">
                                                                <span className="symbol symbol-50px me-6">
                                                                    <span className="symbol-label bg-light-danger  ">
                                                                        <i className="ki-duotone ki-element-11 fs-1 text-danger">
                                                                            <span className="path1"></span>
                                                                            <span className="path2"></span>
                                                                            <span className="path3"></span>
                                                                            <span className="path4"></span>
                                                                        </i>{" "}
                                                                    </span>
                                                                </span>

                                                                <span className="d-flex flex-column">
                                                                    <span className="fw-bold fs-6">
                                                                        Face to
                                                                        Face
                                                                        Discussions
                                                                    </span>
                                                                    <span className="fs-7 text-muted">
                                                                        Creating
                                                                        a clear
                                                                        text
                                                                        structure
                                                                        is just
                                                                        one
                                                                        aspect
                                                                    </span>
                                                                </span>
                                                            </span>

                                                            <span className="form-check form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="category"
                                                                    value="2"
                                                                />
                                                            </span>
                                                        </label>

                                                        <label className="d-flex flex-stack cursor-pointer">
                                                            <span className="d-flex align-items-center me-2">
                                                                <span className="symbol symbol-50px me-6">
                                                                    <span className="symbol-label bg-light-success">
                                                                        <i className="ki-duotone ki-timer fs-1 text-success">
                                                                            <span className="path1"></span>
                                                                            <span className="path2"></span>
                                                                            <span className="path3"></span>
                                                                        </i>{" "}
                                                                    </span>
                                                                </span>

                                                                <span className="d-flex flex-column">
                                                                    <span className="fw-bold fs-6">
                                                                        Full
                                                                        Intro
                                                                        Training
                                                                    </span>
                                                                    <span className="fs-7 text-muted">
                                                                        Creating
                                                                        a clear
                                                                        text
                                                                        structure
                                                                        copywriting
                                                                    </span>
                                                                </span>
                                                            </span>

                                                            <span className="form-check form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="category"
                                                                    value="3"
                                                                />
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div data-kt-stepper-element="content">
                                            <div className="w-100">
                                                <div className="fv-row">
                                                    <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                                                        <span className="required">
                                                            Select Framework
                                                        </span>
                                                        <span
                                                            className="ms-1"
                                                            data-bs-toggle="tooltip"
                                                            title="Specify your apps framework"
                                                        >
                                                            <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>
                                                        </span>{" "}
                                                    </label>

                                                    <label className="d-flex flex-stack cursor-pointer mb-5">
                                                        <span className="d-flex align-items-center me-2">
                                                            <span className="symbol symbol-50px me-6">
                                                                <span className="symbol-label bg-light-warning">
                                                                    <i className="ki-duotone ki-html fs-2x text-warning">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                            </span>

                                                            <span className="d-flex flex-column">
                                                                <span className="fw-bold fs-6">
                                                                    HTML5
                                                                </span>
                                                                <span className="fs-7 text-muted">
                                                                    Base Web
                                                                    Projec
                                                                </span>
                                                            </span>
                                                        </span>

                                                        <span className="form-check form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                checked
                                                                name="framework"
                                                                value="1"
                                                            />
                                                        </span>
                                                    </label>

                                                    <label className="d-flex flex-stack cursor-pointer mb-5">
                                                        <span className="d-flex align-items-center me-2">
                                                            <span className="symbol symbol-50px me-6">
                                                                <span className="symbol-label bg-light-success">
                                                                    <i className="ki-duotone ki-react fs-2x text-success">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                            </span>

                                                            <span className="d-flex flex-column">
                                                                <span className="fw-bold fs-6">
                                                                    ReactJS
                                                                </span>
                                                                <span className="fs-7 text-muted">
                                                                    Robust and
                                                                    flexible app
                                                                    framework
                                                                </span>
                                                            </span>
                                                        </span>

                                                        <span className="form-check form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="framework"
                                                                value="2"
                                                            />
                                                        </span>
                                                    </label>

                                                    <label className="d-flex flex-stack cursor-pointer mb-5">
                                                        <span className="d-flex align-items-center me-2">
                                                            <span className="symbol symbol-50px me-6">
                                                                <span className="symbol-label bg-light-danger">
                                                                    <i className="ki-duotone ki-angular fs-2x text-danger">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                        <span className="path3"></span>
                                                                    </i>{" "}
                                                                </span>
                                                            </span>

                                                            <span className="d-flex flex-column">
                                                                <span className="fw-bold fs-6">
                                                                    Angular
                                                                </span>
                                                                <span className="fs-7 text-muted">
                                                                    Powerful
                                                                    data
                                                                    mangement
                                                                </span>
                                                            </span>
                                                        </span>

                                                        <span className="form-check form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="framework"
                                                                value="3"
                                                            />
                                                        </span>
                                                    </label>

                                                    <label className="d-flex flex-stack cursor-pointer">
                                                        <span className="d-flex align-items-center me-2">
                                                            <span className="symbol symbol-50px me-6">
                                                                <span className="symbol-label bg-light-primary">
                                                                    <i className="ki-duotone ki-vue fs-2x text-primary">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>{" "}
                                                                </span>
                                                            </span>

                                                            <span className="d-flex flex-column">
                                                                <span className="fw-bold fs-6">
                                                                    Vue
                                                                </span>
                                                                <span className="fs-7 text-muted">
                                                                    Lightweight
                                                                    and
                                                                    responsive
                                                                    framework
                                                                </span>
                                                            </span>
                                                        </span>

                                                        <span className="form-check form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="framework"
                                                                value="4"
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div data-kt-stepper-element="content">
                                            <div className="w-100">
                                                <div className="fv-row mb-10">
                                                    <label className="required fs-5 fw-semibold mb-2">
                                                        Database Name
                                                    </label>

                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg form-control-solid"
                                                        name="dbname"
                                                        placeholder=""
                                                        value="master_db"
                                                    />
                                                </div>

                                                <div className="fv-row">
                                                    <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                                                        <span className="required">
                                                            Select Database
                                                            Engine
                                                        </span>
                                                        <span
                                                            className="ms-1"
                                                            data-bs-toggle="tooltip"
                                                            title="Select your app database engine"
                                                        >
                                                            <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>
                                                        </span>{" "}
                                                    </label>

                                                    <label className="d-flex flex-stack cursor-pointer mb-5">
                                                        <span className="d-flex align-items-center me-2">
                                                            <span className="symbol symbol-50px me-6">
                                                                <span className="symbol-label bg-light-success">
                                                                    <i className="ki-duotone ki-note text-success fs-2x">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                            </span>
                                                            <span className="d-flex flex-column">
                                                                <span className="fw-bold fs-6">
                                                                    MySQL
                                                                </span>
                                                                <span className="fs-7 text-muted">
                                                                    Basic MySQL
                                                                    database
                                                                </span>
                                                            </span>
                                                        </span>

                                                        <span className="form-check form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="dbengine"
                                                                checked
                                                                value="1"
                                                            />
                                                        </span>
                                                    </label>

                                                    <label className="d-flex flex-stack cursor-pointer mb-5">
                                                        <span className="d-flex align-items-center me-2">
                                                            <span className="symbol symbol-50px me-6">
                                                                <span className="symbol-label bg-light-danger">
                                                                    <i className="ki-duotone ki-google text-danger fs-2x">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                            </span>
                                                            <span className="d-flex flex-column">
                                                                <span className="fw-bold fs-6">
                                                                    Firebase
                                                                </span>
                                                                <span className="fs-7 text-muted">
                                                                    Google based
                                                                    app data
                                                                    management
                                                                </span>
                                                            </span>
                                                        </span>

                                                        <span className="form-check form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="dbengine"
                                                                value="2"
                                                            />
                                                        </span>
                                                    </label>

                                                    <label className="d-flex flex-stack cursor-pointer">
                                                        <span className="d-flex align-items-center me-2">
                                                            <span className="symbol symbol-50px me-6">
                                                                <span className="symbol-label bg-light-warning">
                                                                    <i className="ki-duotone ki-microsoft text-warning fs-2x">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                        <span className="path3"></span>
                                                                        <span className="path4"></span>
                                                                    </i>
                                                                </span>
                                                            </span>
                                                            <span className="d-flex flex-column">
                                                                <span className="fw-bold fs-6">
                                                                    DynamoDB
                                                                </span>
                                                                <span className="fs-7 text-muted">
                                                                    Microsoft
                                                                    Fast NoSQL
                                                                    Database
                                                                </span>
                                                            </span>
                                                        </span>

                                                        <span className="form-check form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="dbengine"
                                                                value="3"
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div data-kt-stepper-element="content">
                                            <div className="w-100">
                                                <div className="d-flex flex-column mb-7 fv-row">
                                                    <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                                                        <span className="required">
                                                            Name On Card
                                                        </span>
                                                        <span
                                                            className="ms-1"
                                                            data-bs-toggle="tooltip"
                                                            title="Specify a card holder's name"
                                                        >
                                                            <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>
                                                        </span>{" "}
                                                    </label>

                                                    <input
                                                        type="text"
                                                        className="form-control form-control-solid"
                                                        placeholder=""
                                                        name="card_name"
                                                        value="Max Doe"
                                                    />
                                                </div>

                                                <div className="d-flex flex-column mb-7 fv-row">
                                                    <label className="required fs-6 fw-semibold form-label mb-2">
                                                        Card Number
                                                    </label>

                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-solid"
                                                            placeholder="Enter card number"
                                                            name="card_number"
                                                            value="4111 1111 1111 1111"
                                                        />

                                                        <div className="position-absolute translate-middle-y top-50 end-0 me-5">
                                                            <img
                                                                src="assets/media/svg/card-logos/visa.svg"
                                                                alt=""
                                                                className="h-25px"
                                                            />
                                                            <img
                                                                src="assets/media/svg/card-logos/mastercard.svg"
                                                                alt=""
                                                                className="h-25px"
                                                            />
                                                            <img
                                                                src="assets/media/svg/card-logos/american-express.svg"
                                                                alt=""
                                                                className="h-25px"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mb-10">
                                                    <div className="col-md-8 fv-row">
                                                        <label className="required fs-6 fw-semibold form-label mb-2">
                                                            Expiration Date
                                                        </label>

                                                        <div className="row fv-row">
                                                            <div className="col-6">
                                                                <select
                                                                    name="card_expiry_month"
                                                                    className="form-select form-select-solid"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                    data-placeholder="Month"
                                                                >
                                                                    <option></option>
                                                                    <option value="1">
                                                                        1
                                                                    </option>
                                                                    <option value="2">
                                                                        2
                                                                    </option>
                                                                    <option value="3">
                                                                        3
                                                                    </option>
                                                                    <option value="4">
                                                                        4
                                                                    </option>
                                                                    <option value="5">
                                                                        5
                                                                    </option>
                                                                    <option value="6">
                                                                        6
                                                                    </option>
                                                                    <option value="7">
                                                                        7
                                                                    </option>
                                                                    <option value="8">
                                                                        8
                                                                    </option>
                                                                    <option value="9">
                                                                        9
                                                                    </option>
                                                                    <option value="10">
                                                                        10
                                                                    </option>
                                                                    <option value="11">
                                                                        11
                                                                    </option>
                                                                    <option value="12">
                                                                        12
                                                                    </option>
                                                                </select>
                                                            </div>

                                                            <div className="col-6">
                                                                <select
                                                                    name="card_expiry_year"
                                                                    className="form-select form-select-solid"
                                                                    data-control="select2"
                                                                    data-hide-search="true"
                                                                    data-placeholder="Year"
                                                                >
                                                                    <option></option>
                                                                    <option value="2023">
                                                                        2023
                                                                    </option>
                                                                    <option value="2024">
                                                                        2024
                                                                    </option>
                                                                    <option value="2025">
                                                                        2025
                                                                    </option>
                                                                    <option value="2026">
                                                                        2026
                                                                    </option>
                                                                    <option value="2027">
                                                                        2027
                                                                    </option>
                                                                    <option value="2028">
                                                                        2028
                                                                    </option>
                                                                    <option value="2029">
                                                                        2029
                                                                    </option>
                                                                    <option value="2030">
                                                                        2030
                                                                    </option>
                                                                    <option value="2031">
                                                                        2031
                                                                    </option>
                                                                    <option value="2032">
                                                                        2032
                                                                    </option>
                                                                    <option value="2033">
                                                                        2033
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4 fv-row">
                                                        <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                                                            <span className="required">
                                                                CVV
                                                            </span>
                                                            <span
                                                                className="ms-1"
                                                                data-bs-toggle="tooltip"
                                                                title="Enter a card CVV code"
                                                            >
                                                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                </i>
                                                            </span>{" "}
                                                        </label>

                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-solid"
                                                                minLength="3"
                                                                maxLength="4"
                                                                placeholder="CVV"
                                                                name="card_cvv"
                                                            />

                                                            <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                                                                <i className="ki-duotone ki-credit-cart fs-2hx">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-stack">
                                                    <div className="me-5">
                                                        <label className="fs-6 fw-semibold form-label">
                                                            Save Card for
                                                            further billing?
                                                        </label>
                                                        <div className="fs-7 fw-semibold text-muted">
                                                            If you need more
                                                            info, please check
                                                            budget planning
                                                        </div>
                                                    </div>

                                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value="1"
                                                            checked="checked"
                                                        />
                                                        <span className="form-check-label fw-semibold text-muted">
                                                            Save Card
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div data-kt-stepper-element="content">
                                            <div className="w-100 text-center">
                                                <h1 className="fw-bold text-dark mb-3">
                                                    Release!
                                                </h1>
                                                <div className="text-muted fw-semibold fs-3">
                                                    Submit your app to kickstart
                                                    your project.
                                                </div>

                                                <div className="text-center px-4 py-15">
                                                    <img
                                                        src="assets/media/illustrations/sigma-1/9.png"
                                                        alt=""
                                                        className="mw-100 mh-300px"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-stack pt-10">
                                            <div className="me-2">
                                                <button
                                                    type="button"
                                                    className="btn btn-lg btn-light-primary me-3"
                                                    data-kt-stepper-action="previous"
                                                >
                                                    <i className="ki-duotone ki-arrow-left fs-3 me-1">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>{" "}
                                                    Back
                                                </button>
                                            </div>
                                            <div>
                                                <button
                                                    type="button"
                                                    className="btn btn-lg btn-primary"
                                                    data-kt-stepper-action="submit"
                                                >
                                                    <span className="indicator-label">
                                                        Submit
                                                        <i className="ki-duotone ki-arrow-right fs-3 ms-2 me-0">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>{" "}
                                                    </span>
                                                    <span className="indicator-progress">
                                                        Please wait...{" "}
                                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                    </span>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-lg btn-primary"
                                                    data-kt-stepper-action="next"
                                                >
                                                    Continue
                                                    <i className="ki-duotone ki-arrow-right fs-3 ms-1 me-0">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>{" "}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="kt_modal_users_search"
                tabindex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered mw-650px">
                    <div className="modal-content">
                        <div className="modal-header pb-0 border-0 justify-content-end">
                            <div
                                className="btn btn-sm btn-icon btn-active-color-primary"
                                data-bs-dismiss="modal"
                            >
                                <i className="ki-duotone ki-cross fs-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </div>
                        </div>

                        <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                            <div className="text-center mb-13">
                                <h1 className="mb-3">Search Users</h1>
                                <div className="text-muted fw-semibold fs-5">
                                    Invite Collaborators To Your Project
                                </div>
                            </div>
                            <div
                                id="kt_modal_users_search_handler"
                                data-kt-search-keypress="true"
                                data-kt-search-min-length="2"
                                data-kt-search-enter="enter"
                                data-kt-search-layout="inline"
                            >
                                <form
                                    className="w-100 position-relative mb-5"
                                    autoComplete="off"
                                >
                                    <input type="hidden" />
                                    <i className="ki-duotone ki-magnifier fs-2 fs-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg form-control-solid px-15"
                                        name="search"
                                        placeholder="Search by username, full name or email..."
                                        data-kt-search-element="input"
                                    />
                                    <span
                                        className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                                        data-kt-search-element="spinner"
                                    >
                                        <span className="spinner-border h-15px w-15px align-middle text-muted"></span>
                                    </span>
                                    <span
                                        className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none"
                                        data-kt-search-element="clear"
                                    >
                                        <i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>{" "}
                                    </span>
                                </form>
                                <div className="py-5">
                                    <div data-kt-search-element="suggestions">
                                        <h3 className="fw-semibold mb-5">
                                            Recently searched:
                                        </h3>

                                        <div className="mh-375px scroll-y me-n7 pe-7">
                                            <a
                                                href="#"
                                                className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                                            >
                                                <div className="symbol symbol-35px symbol-circle me-5">
                                                    <img
                                                        alt="Pic"
                                                        src="assets/media/avatars/300-6.jpg"
                                                    />
                                                </div>
                                                <div className="fw-semibold">
                                                    <span className="fs-6 text-gray-800 me-2">
                                                        Emma Smith
                                                    </span>
                                                    <span className="badge badge-light">
                                                        Art Director
                                                    </span>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                                            >
                                                <div className="symbol symbol-35px symbol-circle me-5">
                                                    <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                                        M{" "}
                                                    </span>
                                                </div>
                                                <div className="fw-semibold">
                                                    <span className="fs-6 text-gray-800 me-2">
                                                        Melody Macy
                                                    </span>
                                                    <span className="badge badge-light">
                                                        Marketing Analytic
                                                    </span>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                                            >
                                                <div className="symbol symbol-35px symbol-circle me-5">
                                                    <img
                                                        alt="Pic"
                                                        src="assets/media/avatars/300-1.jpg"
                                                    />
                                                </div>
                                                <div className="fw-semibold">
                                                    <span className="fs-6 text-gray-800 me-2">
                                                        Max Smith
                                                    </span>
                                                    <span className="badge badge-light">
                                                        Software Enginer
                                                    </span>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                                            >
                                                <div className="symbol symbol-35px symbol-circle me-5">
                                                    <img
                                                        alt="Pic"
                                                        src="assets/media/avatars/300-5.jpg"
                                                    />
                                                </div>
                                                <div className="fw-semibold">
                                                    <span className="fs-6 text-gray-800 me-2">
                                                        Sean Bean
                                                    </span>
                                                    <span className="badge badge-light">
                                                        Web Developer
                                                    </span>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                                            >
                                                <div className="symbol symbol-35px symbol-circle me-5">
                                                    <img
                                                        alt="Pic"
                                                        src="assets/media/avatars/300-25.jpg"
                                                    />
                                                </div>
                                                <div className="fw-semibold">
                                                    <span className="fs-6 text-gray-800 me-2">
                                                        Brian Cox
                                                    </span>
                                                    <span className="badge badge-light">
                                                        UI/UX Designer
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="d-none">
                                        <div className="mh-375px scroll-y me-n7 pe-7">
                                            <div
                                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                data-user-id="0"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="users"
                                                            data-kt-check="true"
                                                            data-kt-check-target="[data-user-id='0']"
                                                            value="0"
                                                        />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img
                                                            alt="Pic"
                                                            src="assets/media/avatars/300-6.jpg"
                                                        />
                                                    </div>
                                                    <div className="ms-5">
                                                        <a
                                                            href="#"
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                        >
                                                            Emma Smith
                                                        </a>
                                                        <div className="fw-semibold text-muted">
                                                            smith@kpmg.com
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select
                                                        className="form-select form-select-solid form-select-sm"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                    >
                                                        <option value="1">
                                                            Guest
                                                        </option>
                                                        <option
                                                            value="2"
                                                            selected
                                                        >
                                                            Owner
                                                        </option>
                                                        <option value="3">
                                                            Can Edit
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div
                                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                data-user-id="1"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="users"
                                                            data-kt-check="true"
                                                            data-kt-check-target="[data-user-id='1']"
                                                            value="1"
                                                        />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                                            M{" "}
                                                        </span>
                                                    </div>
                                                    <div className="ms-5">
                                                        <a
                                                            href="#"
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                        >
                                                            Melody Macy
                                                        </a>
                                                        <div className="fw-semibold text-muted">
                                                            melody@altbox.com
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select
                                                        className="form-select form-select-solid form-select-sm"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                    >
                                                        <option
                                                            value="1"
                                                            selected
                                                        >
                                                            Guest
                                                        </option>
                                                        <option value="2">
                                                            Owner
                                                        </option>
                                                        <option value="3">
                                                            Can Edit
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div
                                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                data-user-id="2"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="users"
                                                            data-kt-check="true"
                                                            data-kt-check-target="[data-user-id='2']"
                                                            value="2"
                                                        />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img
                                                            alt="Pic"
                                                            src="assets/media/avatars/300-1.jpg"
                                                        />
                                                    </div>
                                                    <div className="ms-5">
                                                        <a
                                                            href="#"
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                        >
                                                            Max Smith
                                                        </a>
                                                        <div className="fw-semibold text-muted">
                                                            max@kt.com
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select
                                                        className="form-select form-select-solid form-select-sm"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                    >
                                                        <option value="1">
                                                            Guest
                                                        </option>
                                                        <option value="2">
                                                            Owner
                                                        </option>
                                                        <option
                                                            value="3"
                                                            selected
                                                        >
                                                            Can Edit
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div
                                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                data-user-id="3"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="users"
                                                            data-kt-check="true"
                                                            data-kt-check-target="[data-user-id='3']"
                                                            value="3"
                                                        />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img
                                                            alt="Pic"
                                                            src="assets/media/avatars/300-5.jpg"
                                                        />
                                                    </div>
                                                    <div className="ms-5">
                                                        <a
                                                            href="#"
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                        >
                                                            Sean Bean
                                                        </a>
                                                        <div className="fw-semibold text-muted">
                                                            sean@dellito.com
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select
                                                        className="form-select form-select-solid form-select-sm"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                    >
                                                        <option value="1">
                                                            Guest
                                                        </option>
                                                        <option
                                                            value="2"
                                                            selected
                                                        >
                                                            Owner
                                                        </option>
                                                        <option value="3">
                                                            Can Edit
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div
                                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                data-user-id="4"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="users"
                                                            data-kt-check="true"
                                                            data-kt-check-target="[data-user-id='4']"
                                                            value="4"
                                                        />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img
                                                            alt="Pic"
                                                            src="assets/media/avatars/300-25.jpg"
                                                        />
                                                    </div>
                                                    <div className="ms-5">
                                                        <a
                                                            href="#"
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                        >
                                                            Brian Cox
                                                        </a>
                                                        <div className="fw-semibold text-muted">
                                                            brian@exchange.com
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select
                                                        className="form-select form-select-solid form-select-sm"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                    >
                                                        <option value="1">
                                                            Guest
                                                        </option>
                                                        <option value="2">
                                                            Owner
                                                        </option>
                                                        <option
                                                            value="3"
                                                            selected
                                                        >
                                                            Can Edit
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div
                                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                data-user-id="5"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="users"
                                                            data-kt-check="true"
                                                            data-kt-check-target="[data-user-id='5']"
                                                            value="5"
                                                        />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-warning text-warning fw-semibold">
                                                            C{" "}
                                                        </span>
                                                    </div>
                                                    <div className="ms-5">
                                                        <a
                                                            href="#"
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                        >
                                                            Mikaela Collins
                                                        </a>
                                                        <div className="fw-semibold text-muted">
                                                            mik@pex.com
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select
                                                        className="form-select form-select-solid form-select-sm"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                    >
                                                        <option value="1">
                                                            Guest
                                                        </option>
                                                        <option
                                                            value="2"
                                                            selected
                                                        >
                                                            Owner
                                                        </option>
                                                        <option value="3">
                                                            Can Edit
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div
                                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                data-user-id="6"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="users"
                                                            data-kt-check="true"
                                                            data-kt-check-target="[data-user-id='6']"
                                                            value="6"
                                                        />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img
                                                            alt="Pic"
                                                            src="assets/media/avatars/300-9.jpg"
                                                        />
                                                    </div>
                                                    <div className="ms-5">
                                                        <a
                                                            href="#"
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                        >
                                                            Francis Mitcham
                                                        </a>
                                                        <div className="fw-semibold text-muted">
                                                            f.mit@kpmg.com
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select
                                                        className="form-select form-select-solid form-select-sm"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                    >
                                                        <option value="1">
                                                            Guest
                                                        </option>
                                                        <option value="2">
                                                            Owner
                                                        </option>
                                                        <option
                                                            value="3"
                                                            selected
                                                        >
                                                            Can Edit
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div
                                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                data-user-id="7"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="users"
                                                            data-kt-check="true"
                                                            data-kt-check-target="[data-user-id='7']"
                                                            value="7"
                                                        />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                                            O{" "}
                                                        </span>
                                                    </div>
                                                    <div className="ms-5">
                                                        <a
                                                            href="#"
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                        >
                                                            Olivia Wild
                                                        </a>
                                                        <div className="fw-semibold text-muted">
                                                            olivia@corpmail.com
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select
                                                        className="form-select form-select-solid form-select-sm"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                    >
                                                        <option value="1">
                                                            Guest
                                                        </option>
                                                        <option
                                                            value="2"
                                                            selected
                                                        >
                                                            Owner
                                                        </option>
                                                        <option value="3">
                                                            Can Edit
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div
                                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                data-user-id="8"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="users"
                                                            data-kt-check="true"
                                                            data-kt-check-target="[data-user-id='8']"
                                                            value="8"
                                                        />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-primary text-primary fw-semibold">
                                                            N{" "}
                                                        </span>
                                                    </div>
                                                    <div className="ms-5">
                                                        <a
                                                            href="#"
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                        >
                                                            Neil Owen
                                                        </a>
                                                        <div className="fw-semibold text-muted">
                                                            owen.neil@gmail.com
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select
                                                        className="form-select form-select-solid form-select-sm"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                    >
                                                        <option
                                                            value="1"
                                                            selected
                                                        >
                                                            Guest
                                                        </option>
                                                        <option value="2">
                                                            Owner
                                                        </option>
                                                        <option value="3">
                                                            Can Edit
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div
                                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                data-user-id="9"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="users"
                                                            data-kt-check="true"
                                                            data-kt-check-target="[data-user-id='9']"
                                                            value="9"
                                                        />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img
                                                            alt="Pic"
                                                            src="assets/media/avatars/300-23.jpg"
                                                        />
                                                    </div>
                                                    <div className="ms-5">
                                                        <a
                                                            href="#"
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                        >
                                                            Dan Wilson
                                                        </a>
                                                        <div className="fw-semibold text-muted">
                                                            dam@consilting.com
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select
                                                        className="form-select form-select-solid form-select-sm"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                    >
                                                        <option value="1">
                                                            Guest
                                                        </option>
                                                        <option value="2">
                                                            Owner
                                                        </option>
                                                        <option
                                                            value="3"
                                                            selected
                                                        >
                                                            Can Edit
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div
                                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                data-user-id="10"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="users"
                                                            data-kt-check="true"
                                                            data-kt-check-target="[data-user-id='10']"
                                                            value="10"
                                                        />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                                            E{" "}
                                                        </span>
                                                    </div>
                                                    <div className="ms-5">
                                                        <a
                                                            href="#"
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                        >
                                                            Emma Bold
                                                        </a>
                                                        <div className="fw-semibold text-muted">
                                                            emma@intenso.com
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select
                                                        className="form-select form-select-solid form-select-sm"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                    >
                                                        <option value="1">
                                                            Guest
                                                        </option>
                                                        <option
                                                            value="2"
                                                            selected
                                                        >
                                                            Owner
                                                        </option>
                                                        <option value="3">
                                                            Can Edit
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div
                                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                data-user-id="11"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="users"
                                                            data-kt-check="true"
                                                            data-kt-check-target="[data-user-id='11']"
                                                            value="11"
                                                        />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img
                                                            alt="Pic"
                                                            src="assets/media/avatars/300-12.jpg"
                                                        />
                                                    </div>
                                                    <div className="ms-5">
                                                        <a
                                                            href="#"
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                        >
                                                            Ana Crown
                                                        </a>
                                                        <div className="fw-semibold text-muted">
                                                            ana.cf@limtel.com
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select
                                                        className="form-select form-select-solid form-select-sm"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                    >
                                                        <option
                                                            value="1"
                                                            selected
                                                        >
                                                            Guest
                                                        </option>
                                                        <option value="2">
                                                            Owner
                                                        </option>
                                                        <option value="3">
                                                            Can Edit
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div
                                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                data-user-id="12"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="users"
                                                            data-kt-check="true"
                                                            data-kt-check-target="[data-user-id='12']"
                                                            value="12"
                                                        />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-info text-info fw-semibold">
                                                            A{" "}
                                                        </span>
                                                    </div>
                                                    <div className="ms-5">
                                                        <a
                                                            href="#"
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                        >
                                                            Robert Doe
                                                        </a>
                                                        <div className="fw-semibold text-muted">
                                                            robert@benko.com
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select
                                                        className="form-select form-select-solid form-select-sm"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                    >
                                                        <option value="1">
                                                            Guest
                                                        </option>
                                                        <option value="2">
                                                            Owner
                                                        </option>
                                                        <option
                                                            value="3"
                                                            selected
                                                        >
                                                            Can Edit
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div
                                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                data-user-id="13"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="users"
                                                            data-kt-check="true"
                                                            data-kt-check-target="[data-user-id='13']"
                                                            value="13"
                                                        />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img
                                                            alt="Pic"
                                                            src="assets/media/avatars/300-13.jpg"
                                                        />
                                                    </div>
                                                    <div className="ms-5">
                                                        <a
                                                            href="#"
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                        >
                                                            John Miller
                                                        </a>
                                                        <div className="fw-semibold text-muted">
                                                            miller@mapple.com
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select
                                                        className="form-select form-select-solid form-select-sm"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                    >
                                                        <option value="1">
                                                            Guest
                                                        </option>
                                                        <option value="2">
                                                            Owner
                                                        </option>
                                                        <option
                                                            value="3"
                                                            selected
                                                        >
                                                            Can Edit
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div
                                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                data-user-id="14"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="users"
                                                            data-kt-check="true"
                                                            data-kt-check-target="[data-user-id='14']"
                                                            value="14"
                                                        />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-success text-success fw-semibold">
                                                            L{" "}
                                                        </span>
                                                    </div>
                                                    <div className="ms-5">
                                                        <a
                                                            href="#"
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                        >
                                                            Lucy Kunic
                                                        </a>
                                                        <div className="fw-semibold text-muted">
                                                            lucy.m@fentech.com
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select
                                                        className="form-select form-select-solid form-select-sm"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                    >
                                                        <option value="1">
                                                            Guest
                                                        </option>
                                                        <option
                                                            value="2"
                                                            selected
                                                        >
                                                            Owner
                                                        </option>
                                                        <option value="3">
                                                            Can Edit
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div
                                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                data-user-id="15"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="users"
                                                            data-kt-check="true"
                                                            data-kt-check-target="[data-user-id='15']"
                                                            value="15"
                                                        />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img
                                                            alt="Pic"
                                                            src="assets/media/avatars/300-21.jpg"
                                                        />
                                                    </div>
                                                    <div className="ms-5">
                                                        <a
                                                            href="#"
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                        >
                                                            Ethan Wilder
                                                        </a>
                                                        <div className="fw-semibold text-muted">
                                                            ethan@loop.com.au
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select
                                                        className="form-select form-select-solid form-select-sm"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                    >
                                                        <option
                                                            value="1"
                                                            selected
                                                        >
                                                            Guest
                                                        </option>
                                                        <option value="2">
                                                            Owner
                                                        </option>
                                                        <option value="3">
                                                            Can Edit
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div
                                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                                data-user-id="16"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="users"
                                                            data-kt-check="true"
                                                            data-kt-check-target="[data-user-id='16']"
                                                            value="16"
                                                        />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img
                                                            alt="Pic"
                                                            src="assets/media/avatars/300-1.jpg"
                                                        />
                                                    </div>
                                                    <div className="ms-5">
                                                        <a
                                                            href="#"
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                        >
                                                            Max Smith
                                                        </a>
                                                        <div className="fw-semibold text-muted">
                                                            max@kt.com
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select
                                                        className="form-select form-select-solid form-select-sm"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                    >
                                                        <option value="1">
                                                            Guest
                                                        </option>
                                                        <option value="2">
                                                            Owner
                                                        </option>
                                                        <option
                                                            value="3"
                                                            selected
                                                        >
                                                            Can Edit
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-center mt-15">
                                            <button
                                                type="reset"
                                                id="kt_modal_users_search_reset"
                                                data-bs-dismiss="modal"
                                                className="btn btn-active-light me-3"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                id="kt_modal_users_search_submit"
                                                className="btn btn-primary"
                                            >
                                                Add Selected Users
                                            </button>
                                        </div>
                                    </div>

                                    <div
                                        data-kt-search-element="empty"
                                        className="text-center d-none"
                                    >
                                        <div className="fw-semibold py-10">
                                            <div className="text-gray-600 fs-3 mb-2">
                                                No users found
                                            </div>
                                            <div className="text-muted fs-6">
                                                Try to search by username, full
                                                name or email...
                                            </div>
                                        </div>

                                        <div className="text-center px-5">
                                            <img
                                                src="assets/media/illustrations/sigma-1/1.png"
                                                alt=""
                                                className="w-100 h-200px h-sm-325px"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
