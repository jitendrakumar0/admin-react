import React from "react";

const Dashboard = () => {
    return (
        <>
            <div
                className="content fs-6 d-flex flex-column flex-column-fluid"
                id="kt_content"
            >
                <div
                    className="toolbar"
                    id="kt_toolbar"
                >
                    <div className=" container-fluid  d-flex flex-stack flex-wrap flex-sm-nowrap">
                        <div className="d-flex flex-column align-items-start justify-content-center flex-wrap me-2">
                            <h1 className="text-dark fw-bold my-1 fs-2">
                                Dashboard{" "}
                                <small className="text-muted fs-6 fw-normal ms-1"></small>
                            </h1>

                            <ul className="breadcrumb fw-semibold fs-base my-1">
                                <li className="breadcrumb-item text-muted">
                                    <a className="text-muted text-hover-primary">
                                        Home{" "}
                                    </a>
                                </li>
                                <li className="breadcrumb-item text-muted">
                                    Dashboards
                                </li>
                                <li className="breadcrumb-item text-dark">
                                    Multipurpose
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex align-items-center flex-nowrap text-nowrap py-1">
                            <a
                                href="#"
                                className="btn bg-body btn-color-gray-700 btn-active-primary me-4"
                                data-bs-toggle="modal"
                                data-bs-target="#kt_modal_invite_friends"
                            >
                                Invite Friends
                            </a>
                            <a
                                href="#"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#kt_modal_create_project"
                                id="kt_toolbar_primary_button"
                            >
                                New Project{" "}
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    className="post fs-6 d-flex flex-column-fluid"
                    id="kt_post"
                >
                    <div className=" container-xxl ">
                        <div className="row g-xl-8">
                            <div className="col-xxl-8">
                                <div className="row g-xl-8">
                                    <div className="col-xl-6">
                                        <div className="card  card-xl-stretch mb-5 mb-xl-8">
                                            <div className="card-body p-0 d-flex justify-content-between flex-column">
                                                <div className="d-flex flex-stack card-p flex-grow-1">
                                                    <div className="symbol symbol-45px">
                                                        <div className="symbol-label">
                                                            <i className="ki-duotone ki-basket fs-2x">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                                <span className="path4"></span>
                                                            </i>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-column text-end">
                                                        <span className="fw-bolder text-gray-800 fs-2">
                                                            Orders
                                                        </span>
                                                        <span className="text-gray-400 fw-semibold fs-6">
                                                            Sep 1 - Sep 16 2020
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="pt-1">
                                                    <div
                                                        id="kt_chart_widget_1_chart"
                                                        className="card-rounded-bottom h-125px"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6">
                                        <div className="card card-xl-stretch mb-5 mb-xl-8">
                                            <div className="card-body pt-5">
                                                <div
                                                    id="kt_stats_widget_8_carousel"
                                                    className="carousel carousel-custom carousel-stretch slide"
                                                    data-bs-ride="carousel"
                                                    data-bs-interval="8000"
                                                >
                                                    <div className="d-flex flex-stack flex-wrap">
                                                        <span className="fs-4 text-gray-400 fw-bolder pe-2">
                                                            Announcements
                                                        </span>

                                                        <ol className="p-0 m-0 carousel-indicators carousel-indicators-dots">
                                                            <li
                                                                data-bs-target="#kt_stats_widget_8_carousel"
                                                                data-bs-slide-to="0"
                                                                className="ms-1 active"
                                                            ></li>
                                                            <li
                                                                data-bs-target="#kt_stats_widget_8_carousel"
                                                                data-bs-slide-to="1"
                                                                className="ms-1"
                                                            ></li>
                                                            <li
                                                                data-bs-target="#kt_stats_widget_8_carousel"
                                                                data-bs-slide-to="2"
                                                                className="ms-1"
                                                            ></li>
                                                            <li
                                                                data-bs-target="#kt_stats_widget_8_carousel"
                                                                data-bs-slide-to="3"
                                                                className="ms-1"
                                                            ></li>
                                                        </ol>
                                                    </div>

                                                    <div className="carousel-inner pt-6">
                                                        <div className="carousel-item active">
                                                            <div className="carousel-wrapper">
                                                                <div className="d-flex flex-column justify-content-between flex-grow-1">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-2 text-gray-800 text-hover-primary fw-bolder"
                                                                    >
                                                                        Craft
                                                                        Admin
                                                                        Launch
                                                                        Day
                                                                    </a>
                                                                    <p className="text-gray-600 fs-6 fw-semibold pt-4 mb-0">
                                                                        To start
                                                                        a blog,
                                                                        think of
                                                                        a topic
                                                                        about
                                                                        and
                                                                        first
                                                                        brainstorm
                                                                        ways to
                                                                        write
                                                                        details
                                                                    </p>
                                                                </div>
                                                                <div className="d-flex flex-stack pt-8">
                                                                    <span className="badge badge-light-primary fs-7 fw-bolder me-2">
                                                                        OCT 05,
                                                                        10
                                                                    </span>
                                                                    <a
                                                                        href="#"
                                                                        className="btn btn-light btn-sm btn-color-muted fs-7 fw-bolder px-5"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#kt_modal_upgrade_plan"
                                                                    >
                                                                        Upgrade
                                                                        Plan
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <div className="carousel-wrapper">
                                                                <div className="d-flex flex-column justify-content-between  flex-grow-1">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-2 text-gray-800 text-hover-primary fw-bolder"
                                                                    >
                                                                        Craft
                                                                        Dashboard
                                                                        Launch
                                                                    </a>
                                                                    <p className="text-gray-600 fs-6 fw-semibold pt-4 mb-0">
                                                                        To start
                                                                        a blog,
                                                                        think of
                                                                        a topic
                                                                        about
                                                                        and
                                                                        first
                                                                        brainstorm
                                                                        ways to
                                                                        write
                                                                        details
                                                                    </p>
                                                                </div>
                                                                <div className="d-flex flex-stack pt-8">
                                                                    <span className="badge badge-light-primary fs-7 fw-bolder me-2">
                                                                        DEC 03,
                                                                        20
                                                                    </span>
                                                                    <a
                                                                        href="#"
                                                                        className="btn btn-light btn-sm btn-color-muted fs-7 fw-bolder px-5"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#kt_modal_upgrade_plan"
                                                                    >
                                                                        Upgrade
                                                                        Plan
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <div className="carousel-wrapper">
                                                                <div className="d-flex flex-column justify-content-between flex-grow-1">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-2 text-gray-800 text-hover-primary fw-bolder"
                                                                    >
                                                                        Reached
                                                                        50,000
                                                                        Sales
                                                                    </a>
                                                                    <p className="text-gray-600 fs-6 fw-semibold pt-4 mb-0">
                                                                        To start
                                                                        a blog,
                                                                        think of
                                                                        a topic
                                                                        about
                                                                        and
                                                                        first
                                                                        brainstorm
                                                                        ways to
                                                                        write
                                                                        details
                                                                    </p>
                                                                </div>
                                                                <div className="d-flex flex-stack pt-8">
                                                                    <span className="badge badge-light-primary fs-7 fw-bolder me-2">
                                                                        NOV 06,
                                                                        23
                                                                    </span>
                                                                    <a
                                                                        href="#"
                                                                        className="btn btn-light btn-sm btn-color-muted fs-7 fw-bolder px-5"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#kt_modal_upgrade_plan"
                                                                    >
                                                                        Upgrade
                                                                        Plan
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <div className="carousel-wrapper">
                                                                <div className="d-flex flex-column justify-content-between flex-grow-1">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-2 text-gray-800 text-hover-primary fw-bolder"
                                                                    >
                                                                        Reached
                                                                        50,000
                                                                        Sales
                                                                    </a>
                                                                    <p className="text-gray-600 fs-6 fw-semibold pt-4 mb-0">
                                                                        To start
                                                                        a blog,
                                                                        think of
                                                                        a topic
                                                                        about
                                                                        and
                                                                        first
                                                                        brainstorm
                                                                        ways to
                                                                        write
                                                                        details
                                                                    </p>
                                                                </div>
                                                                <div className="d-flex flex-stack pt-8">
                                                                    <span className="badge badge-light-primary fs-7 fw-bolder me-2">
                                                                        AUG 01,
                                                                        13
                                                                    </span>
                                                                    <a
                                                                        href="#"
                                                                        className="btn btn-light btn-sm btn-color-muted fs-7 fw-bolder px-5"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#kt_modal_upgrade_plan"
                                                                    >
                                                                        Upgrade
                                                                        Plan
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row g-xl-8">
                                    <div className="col-xl-6">
                                        <div className="card  card-xl-stretch mb-5 mb-xl-8">
                                            <div className="card-body p-0 d-flex justify-content-between flex-column overflow-hidden">
                                                <div className="d-flex flex-stack flex-grow-1 px-9 pt-9 pb-3">
                                                    <div className="symbol symbol-45px">
                                                        <div className="symbol-label">
                                                            <i className="ki-duotone ki-gift fs-2x">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                                <span className="path4"></span>
                                                            </i>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-column text-end">
                                                        <span className="fw-bolder text-gray-800 fs-2">
                                                            Earnings
                                                        </span>
                                                        <span className="text-gray-400 fw-semibold fs-6">
                                                            Oct 8 - Oct 26 2020
                                                        </span>
                                                    </div>
                                                </div>

                                                <div
                                                    id="kt_charts_widget_2_chart"
                                                    className="mb-n10"
                                                    style={{ height: "165px" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6">
                                        <div className="card  card-xl-stretch mb-5 mb-xl-8">
                                            <div className="card-body pt-5">
                                                <div
                                                    id="kt_stats_widget_9_carousel"
                                                    className="carousel carousel-custom carousel-stretch slide"
                                                    data-bs-ride="carousel"
                                                    data-bs-interval="8000"
                                                >
                                                    <div className="d-flex flex-stack flex-wrap">
                                                        <span className="text-gray-400 fw-bolder fs-4 pe-2">
                                                            Today’s Schedule
                                                        </span>

                                                        <ol className="p-0 m-0 carousel-indicators carousel-indicators-dots">
                                                            <li
                                                                data-bs-target="#kt_stats_widget_9_carousel"
                                                                data-bs-slide-to="0"
                                                                className="ml-1 active"
                                                            ></li>
                                                            <li
                                                                data-bs-target="#kt_stats_widget_9_carousel"
                                                                data-bs-slide-to="1"
                                                                className="ml-1"
                                                            ></li>
                                                            <li
                                                                data-bs-target="#kt_stats_widget_9_carousel"
                                                                data-bs-slide-to="2"
                                                                className="ml-1"
                                                            ></li>
                                                            <li
                                                                data-bs-target="#kt_stats_widget_9_carousel"
                                                                data-bs-slide-to="3"
                                                                className="ml-1"
                                                            ></li>
                                                        </ol>
                                                    </div>

                                                    <div className="carousel-inner pt-8">
                                                        <div className="carousel-item active">
                                                            <div className="carousel-wrapper">
                                                                <div className="flex-grow-1">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-2 text-gray-800 text-hover-primary fw-bolder"
                                                                    >
                                                                        UI/UX
                                                                        Design
                                                                        Updates
                                                                    </a>
                                                                    <p className="text-primary fs-1 fw-bolder pt-5 mb-0">
                                                                        11:15AM
                                                                        -
                                                                        12:30PM
                                                                    </p>
                                                                </div>
                                                                <div className="d-flex flex-stack pt-7">
                                                                    <span className="text-gray-400 fs-6 fw-semibold pe-2">
                                                                        234 E
                                                                        St.
                                                                        Broadwey
                                                                        NY..
                                                                    </span>
                                                                    <a
                                                                        href="#"
                                                                        className="btn btn-light btn-sm fs-7 btn-color-muted fw-bolder px-5"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#kt_modal_select_location"
                                                                    >
                                                                        Map
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <div className="carousel-wrapper">
                                                                <div className="flex-grow-1">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-2 text-gray-800 text-hover-primary fw-bolder"
                                                                    >
                                                                        UI/UX
                                                                        Design
                                                                        Updates
                                                                    </a>
                                                                    <p className="text-primary fs-1 fw-bolder pt-5 mb-0">
                                                                        11:15AM
                                                                        -
                                                                        12:30PM
                                                                    </p>
                                                                </div>
                                                                <div className="d-flex flex-stack pt-7">
                                                                    <span className="text-gray-400 fs-6 fw-semibold pe-2">
                                                                        256 R
                                                                        St.
                                                                        Manhattan
                                                                        NY..
                                                                    </span>
                                                                    <a
                                                                        href="#"
                                                                        className="btn btn-light btn-sm fs-7 btn-color-muted fw-bolder px-5"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#kt_modal_select_location"
                                                                    >
                                                                        Map
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <div className="carousel-wrapper">
                                                                <div className="flex-grow-1">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-2 text-gray-800 text-hover-primary fw-bolder"
                                                                    >
                                                                        UI/UX
                                                                        Design
                                                                        Updates
                                                                    </a>
                                                                    <p className="text-primary fs-1 fw-bolder pt-5 mb-0">
                                                                        16:15AM
                                                                        -
                                                                        11:20PM
                                                                    </p>
                                                                </div>
                                                                <div className="d-flex flex-stack pt-7">
                                                                    <span className="text-gray-400 fs-6 fw-semibold pe-2">
                                                                        745 R
                                                                        St.
                                                                        Romance
                                                                        DR..
                                                                    </span>
                                                                    <a
                                                                        href="#"
                                                                        className="btn btn-light btn-sm fs-7 btn-color-muted fw-bolder px-5"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#kt_modal_select_location"
                                                                    >
                                                                        Map
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <div className="carousel-wrapper">
                                                                <div className="flex-grow-1">
                                                                    <a
                                                                        href="#"
                                                                        className="fs-2 text-gray-800 text-hover-primary fw-bolder"
                                                                    >
                                                                        UI/UX
                                                                        Design
                                                                        Updates
                                                                    </a>
                                                                    <p className="text-primary fs-1 fw-bolder pt-5 mb-0">
                                                                        13:15AM
                                                                        -
                                                                        14:30PM
                                                                    </p>
                                                                </div>
                                                                <div className="d-flex flex-stack pt-7">
                                                                    <span className="text-gray-400 fs-6 fw-semibold pe-2">
                                                                        123 R
                                                                        St.
                                                                        Soulard
                                                                        NY..
                                                                    </span>
                                                                    <a
                                                                        href="#"
                                                                        className="btn btn-light btn-sm fs-7 btn-color-muted fw-bolder px-5"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#kt_modal_select_location"
                                                                    >
                                                                        Map
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-4 gy-0 gy-xxl-8">
                                <div className="card card-xxl-stretch mb-5 mb-xl-8">
                                    <div className="card-body pb-0">
                                        <div className="d-flex flex-column justify-content-between h-100">
                                            <div className="pt-12">
                                                <h3 className="text-dark text-center fs-1 fw-bolder line-height-lg">
                                                    Kickstart
                                                    <br />
                                                    Mobile Application
                                                </h3>
                                                <div className="text-center text-gray-600 fs-5 fw-semibold pt-4 pb-1">
                                                    Outlines keep you honest.
                                                    They stoping you from
                                                    amazing poorly about drive
                                                </div>

                                                <div className="text-center py-7">
                                                    <a
                                                        href="#"
                                                        className="btn btn-primary  fs-6 px-6"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#kt_modal_create_app"
                                                    >
                                                        Create App
                                                    </a>
                                                </div>
                                            </div>

                                            <div
                                                className="flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom card-rounded-bottom max-h-175px min-h-175px"
                                                style={{
                                                    backgroundImage:
                                                        "url('assets/media/illustrations/sigma-1/7.png')",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row g-5 gx-xxl-8 mb-xxl-3">
                            <div className="col-xxl-8">
                                <div className="card  card-xxl-stretch mb-xl-3">
                                    <div className="card-header border-0 pt-5 pb-3">
                                        <h3 className="card-title align-items-start flex-column">
                                            <span className="card-label fw-bolder text-gray-800 fs-2">
                                                Teams Progress
                                            </span>
                                            <span className="text-gray-400 fw-semibold mt-2 fs-6">
                                                890,344 Sales
                                            </span>
                                        </h3>

                                        <div className="card-toolbar">
                                            <div className="pe-6 my-1">
                                                <select
                                                    className="form-select form-select-sm form-select-solid w-125px"
                                                    data-control="select2"
                                                    data-placeholder="All Users"
                                                    data-hide-search="true"
                                                >
                                                    <option
                                                        value="1"
                                                        selected
                                                    >
                                                        All Users
                                                    </option>
                                                    <option value="2">
                                                        Active users
                                                    </option>
                                                    <option value="3">
                                                        Pending users
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="w-125px position-relative my-1">
                                                <i className="ki-duotone ki-magnifier fs-2 text-gray-500 position-absolute top-50 translate-middle ms-6">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>{" "}
                                                <input
                                                    type="text"
                                                    className="form-control form-control-sm form-control-solid ps-10"
                                                    name="search"
                                                    placeholder="Search"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body py-0">
                                        <div className="table-responsive">
                                            <table
                                                className="table align-middle table-row-bordered table-row-dashed gy-5"
                                                id="kt_table_widget_1"
                                            >
                                                <tbody>
                                                    <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase">
                                                        <th className="w-20px ps-0">
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid me-5">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    data-kt-check="true"
                                                                    data-kt-check-target="#kt_table_widget_1 .form-check-input"
                                                                    value="1"
                                                                />
                                                            </div>
                                                        </th>
                                                        <th className="min-w-200px px-0">
                                                            Authors
                                                        </th>
                                                        <th className="min-w-125px">
                                                            Company
                                                        </th>
                                                        <th className="min-w-125px">
                                                            Progress
                                                        </th>
                                                        <th className="text-end pe-2 min-w-70px">
                                                            Action
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-0">
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    value="1"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="p-0">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-50px me-2">
                                                                    <span className="symbol-label">
                                                                        <img
                                                                            alt=""
                                                                            className="w-25px"
                                                                            src="assets/media/svg/brand-logos/aven.svg"
                                                                        />
                                                                    </span>
                                                                </div>
                                                                <div className="ps-3">
                                                                    <a
                                                                        href="#"
                                                                        className="text-gray-800 fw-bolder fs-5 text-hover-primary mb-1"
                                                                    >
                                                                        Brad
                                                                        Simmons
                                                                    </a>
                                                                    <span className="text-gray-400 fw-semibold d-block">
                                                                        HTML,
                                                                        JS,
                                                                        ReactJS
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-gray-800 fw-bolder fs-5 d-block">
                                                                Intertico
                                                            </span>
                                                            <span className="text-gray-400 fw-semibold">
                                                                Web, UI/UX
                                                                Design
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex flex-column w-100 me-2 mt-2">
                                                                <span className="text-gray-400 me-2 fw-bolder mb-2">
                                                                    65%
                                                                </span>
                                                                <div className="progress bg-light-danger w-100 h-5px">
                                                                    <div
                                                                        className="progress-bar bg-danger"
                                                                        role="progressbar"
                                                                        style={{
                                                                            width: "65%",
                                                                        }}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="pe-0 text-end">
                                                            <a
                                                                href="pages/projects/project.html"
                                                                className="btn btn-light text-muted fw-bolder btn-sm px-5"
                                                            >
                                                                View
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-0">
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    value="1"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="p-0">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-50px me-2">
                                                                    <span className="symbol-label">
                                                                        <img
                                                                            alt=""
                                                                            className="w-25px"
                                                                            src="assets/media/svg/brand-logos/leaf.svg"
                                                                        />
                                                                    </span>
                                                                </div>
                                                                <div className="ps-3">
                                                                    <a
                                                                        href="#"
                                                                        className="text-gray-800 fw-bolder fs-5 text-hover-primary mb-1"
                                                                    >
                                                                        Jessie
                                                                        Clarcson
                                                                    </a>
                                                                    <span className="text-gray-400 fw-semibold d-block">
                                                                        C#,
                                                                        ASP.NET,
                                                                        MS SQL
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-gray-800 fw-bolder fs-5 d-block">
                                                                Agoda
                                                            </span>
                                                            <span className="text-gray-400 fw-semibold">
                                                                Houses & Hotels
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex flex-column w-100 me-2">
                                                                <span className="text-gray-400 me-2 fw-bolder mb-2">
                                                                    85%
                                                                </span>
                                                                <div className="progress bg-light-primary w-100 h-5px">
                                                                    <div
                                                                        className="progress-bar bg-primary"
                                                                        role="progressbar"
                                                                        style={{
                                                                            width: "85%",
                                                                        }}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="pe-0 text-end">
                                                            <a
                                                                href="pages/projects/project.html"
                                                                className="btn btn-light text-muted fw-bolder btn-sm px-5"
                                                            >
                                                                View
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-0">
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    value="1"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="p-0">
                                                            <div className="d-flex align-items-center text-start">
                                                                <div className="symbol symbol-50px me-2">
                                                                    <span className="symbol-label">
                                                                        <img
                                                                            className="w-25px"
                                                                            alt=""
                                                                            src="assets/media/svg/brand-logos/atica.svg"
                                                                        />
                                                                    </span>
                                                                </div>
                                                                <div className="ps-3">
                                                                    <a
                                                                        href="#"
                                                                        className="text-gray-800 fw-bolder fs-5 text-hover-primary mb-1"
                                                                    >
                                                                        Lebron
                                                                        Wayde
                                                                    </a>
                                                                    <span className="text-gray-400 fw-semibold d-block">
                                                                        PHP,
                                                                        Laravel,
                                                                        VueJS
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-gray-800 fw-bolder fs-5 d-block">
                                                                RoadGee
                                                            </span>
                                                            <span className="text-gray-400 fw-semibold">
                                                                Transportation
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex flex-column w-100 me-2">
                                                                <span className="text-gray-400 me-2 fw-bolder mb-2">
                                                                    4%
                                                                </span>
                                                                <div className="progress bg-light-success w-100 h-5px">
                                                                    <div
                                                                        className="progress-bar bg-success"
                                                                        role="progressbar"
                                                                        style={{
                                                                            width: "47%",
                                                                        }}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="pe-0 text-end">
                                                            <a
                                                                href="pages/projects/project.html"
                                                                className="btn btn-light text-muted fw-bolder btn-sm px-5"
                                                            >
                                                                View
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-0">
                                                            <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    value="1"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="p-0">
                                                            <div className="d-flex align-items-center text-start">
                                                                <div className="symbol symbol-50px me-2">
                                                                    <span className="symbol-label">
                                                                        <img
                                                                            className="w-25px"
                                                                            alt=""
                                                                            src="assets/media/svg/brand-logos/volicity-9.svg"
                                                                        />
                                                                    </span>
                                                                </div>
                                                                <div className="ps-3">
                                                                    <a
                                                                        href="#"
                                                                        className="text-gray-800 fw-bolder fs-5 text-hover-primary mb-1"
                                                                    >
                                                                        Natali
                                                                        Trump
                                                                    </a>
                                                                    <span className="text-gray-400 fw-semibold d-block">
                                                                        Python,
                                                                        ReactJS
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-gray-800 fw-bolder fs-5 d-block">
                                                                The Hill
                                                            </span>
                                                            <span className="text-gray-400 fw-semibold">
                                                                Insurance
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex flex-column w-100 me-2">
                                                                <span className="text-gray-400 me-2 fw-bolder mb-2">
                                                                    71%
                                                                </span>
                                                                <div className="progress bg-light-info w-100 h-5px">
                                                                    <div
                                                                        className="progress-bar bg-info"
                                                                        role="progressbar"
                                                                        style={{
                                                                            width: "71%",
                                                                        }}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="pe-0 text-end">
                                                            <a
                                                                href="pages/projects/project.html"
                                                                className="btn btn-light text-muted fw-bolder btn-sm px-5"
                                                            >
                                                                View
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-4">
                                <div className="card card-xl-stretch mb-5 mb-xl-8">
                                    <div className="card-header border-0 py-5">
                                        <h3 className="card-title align-items-start flex-column">
                                            <span className="card-label fw-bolder text-dark fs-2">
                                                Achievements
                                            </span>
                                            <span className="text-gray-400 mt-2 fw-semibold fs-6">
                                                100k+ sales templates sales
                                            </span>
                                        </h3>
                                        <div className="card-toolbar">
                                            <button
                                                type="button"
                                                className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3"
                                                data-kt-menu-trigger="click"
                                                data-kt-menu-placement="bottom-end"
                                            >
                                                <i className="ki-duotone ki-category fs-2 text-primary">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                    <span className="path3"></span>
                                                    <span className="path4"></span>
                                                </i>{" "}
                                            </button>

                                            <div
                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                                                data-kt-menu="true"
                                            >
                                                <div className="menu-item px-3">
                                                    <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                                                        Quick Actions
                                                    </div>
                                                </div>

                                                <div className="separator mb-3 opacity-75"></div>

                                                <div className="menu-item px-3">
                                                    <a
                                                        href="#"
                                                        className="menu-link px-3"
                                                    >
                                                        New Ticket
                                                    </a>
                                                </div>

                                                <div className="menu-item px-3">
                                                    <a
                                                        href="#"
                                                        className="menu-link px-3"
                                                    >
                                                        New Customer
                                                    </a>
                                                </div>

                                                <div
                                                    className="menu-item px-3"
                                                    data-kt-menu-trigger="hover"
                                                    data-kt-menu-placement="right-start"
                                                >
                                                    <a
                                                        href="#"
                                                        className="menu-link px-3"
                                                    >
                                                        <span className="menu-title">
                                                            New Group
                                                        </span>
                                                        <span className="menu-arrow"></span>
                                                    </a>

                                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                        <div className="menu-item px-3">
                                                            <a
                                                                href="#"
                                                                className="menu-link px-3"
                                                            >
                                                                Admin Group
                                                            </a>
                                                        </div>

                                                        <div className="menu-item px-3">
                                                            <a
                                                                href="#"
                                                                className="menu-link px-3"
                                                            >
                                                                Staff Group
                                                            </a>
                                                        </div>

                                                        <div className="menu-item px-3">
                                                            <a
                                                                href="#"
                                                                className="menu-link px-3"
                                                            >
                                                                Member Group
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="menu-item px-3">
                                                    <a
                                                        href="#"
                                                        className="menu-link px-3"
                                                    >
                                                        New Contact
                                                    </a>
                                                </div>

                                                <div className="separator mt-3 opacity-75"></div>

                                                <div className="menu-item px-3">
                                                    <div className="menu-content px-3 py-3">
                                                        <a
                                                            className="btn btn-primary  btn-sm px-4"
                                                            href="#"
                                                        >
                                                            Generate Reports
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body d-flex flex-column pt-0">
                                        <div className="d-flex flex-center position-relative">
                                            <div
                                                id="kt_chart_widget_4_chart"
                                                style={{ height: "250px" }}
                                            ></div>
                                        </div>

                                        <div className="mt-n20 pb-5 position-relative zindex-1">
                                            <div className="d-flex flex-stack mb-6">
                                                <div className="d-flex align-items-center me-2">
                                                    <div className="symbol symbol-45px me-5">
                                                        <span className="symbol-label bg-light-success">
                                                            <i className="ki-duotone ki-/compass fs-2 text-success"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <a
                                                            href="#"
                                                            className="fs-5 text-gray-800 text-hover-primary fw-bolder"
                                                        >
                                                            Global Stars
                                                        </a>
                                                        <div className="fs-7 text-gray-400 fw-semibold mt-1">
                                                            12 Hours, 4 Commits
                                                        </div>
                                                    </div>
                                                </div>

                                                <a
                                                    href="#"
                                                    className="btn btn-icon btn-light btn-sm"
                                                >
                                                    <i className="ki-duotone ki-arrow-right fs-4 text-gray-400">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>{" "}
                                                </a>
                                            </div>
                                            <div className="d-flex flex-stack mb-6">
                                                <div className="d-flex align-items-center me-2">
                                                    <div className="symbol symbol-45px me-5">
                                                        <span className="symbol-label bg-light-danger">
                                                            <i className="ki-duotone ki-element-11 fs-2 text-danger">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                                <span className="path4"></span>
                                                            </i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <a
                                                            href="#"
                                                            className="fs-5 text-gray-800 text-hover-primary fw-bolder"
                                                        >
                                                            Focus Keeper
                                                        </a>
                                                        <div className="fs-7 text-gray-400 fw-semibold mt-1">
                                                            6 Hours, 3 Commits
                                                        </div>
                                                    </div>
                                                </div>

                                                <a
                                                    href="#"
                                                    className="btn btn-icon btn-light btn-sm"
                                                >
                                                    <i className="ki-duotone ki-arrow-right fs-4 text-gray-400">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>{" "}
                                                </a>
                                            </div>
                                            <div className="d-flex flex-stack mb-">
                                                <div className="d-flex align-items-center me-2">
                                                    <div className="symbol symbol-45px me-5">
                                                        <span className="symbol-label bg-light-info">
                                                            <i className="ki-duotone ki-abstract-18 fs-2 text-info">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <a
                                                            href="#"
                                                            className="fs-5 text-gray-800 text-hover-primary fw-bolder"
                                                        >
                                                            High Tower
                                                        </a>
                                                        <div className="fs-7 text-gray-400 fw-semibold mt-1">
                                                            34 Hours, 15 Commits
                                                        </div>
                                                    </div>
                                                </div>

                                                <a
                                                    href="#"
                                                    className="btn btn-icon btn-light btn-sm"
                                                >
                                                    <i className="ki-duotone ki-arrow-right fs-4 text-gray-400">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row g-5 g-xl-8">
                            <div className="col-xl-4">
                                <div className="card  card-xl-stretch mb-xl-8">
                                    <div className="card-header align-items-center border-0 mt-5">
                                        <h3 className="card-title align-items-start flex-column">
                                            <span className="fw-bolder text-dark fs-2">
                                                My Competitors
                                            </span>
                                            <span className="text-gray-400 mt-2 fw-semibold fs-6">
                                                More than 400+ new members
                                            </span>
                                        </h3>
                                        <div className="card-toolbar">
                                            <button
                                                type="button"
                                                className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3"
                                                data-kt-menu-trigger="click"
                                                data-kt-menu-placement="bottom-end"
                                            >
                                                <i className="ki-duotone ki-category fs-2 text-primary">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                    <span className="path3"></span>
                                                    <span className="path4"></span>
                                                </i>{" "}
                                            </button>

                                            <div
                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                                                data-kt-menu="true"
                                            >
                                                <div className="menu-item px-3">
                                                    <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                                                        Quick Actions
                                                    </div>
                                                </div>

                                                <div className="separator mb-3 opacity-75"></div>

                                                <div className="menu-item px-3">
                                                    <a
                                                        href="#"
                                                        className="menu-link px-3"
                                                    >
                                                        New Ticket
                                                    </a>
                                                </div>

                                                <div className="menu-item px-3">
                                                    <a
                                                        href="#"
                                                        className="menu-link px-3"
                                                    >
                                                        New Customer
                                                    </a>
                                                </div>

                                                <div
                                                    className="menu-item px-3"
                                                    data-kt-menu-trigger="hover"
                                                    data-kt-menu-placement="right-start"
                                                >
                                                    <a
                                                        href="#"
                                                        className="menu-link px-3"
                                                    >
                                                        <span className="menu-title">
                                                            New Group
                                                        </span>
                                                        <span className="menu-arrow"></span>
                                                    </a>

                                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                        <div className="menu-item px-3">
                                                            <a
                                                                href="#"
                                                                className="menu-link px-3"
                                                            >
                                                                Admin Group
                                                            </a>
                                                        </div>

                                                        <div className="menu-item px-3">
                                                            <a
                                                                href="#"
                                                                className="menu-link px-3"
                                                            >
                                                                Staff Group
                                                            </a>
                                                        </div>

                                                        <div className="menu-item px-3">
                                                            <a
                                                                href="#"
                                                                className="menu-link px-3"
                                                            >
                                                                Member Group
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="menu-item px-3">
                                                    <a
                                                        href="#"
                                                        className="menu-link px-3"
                                                    >
                                                        New Contact
                                                    </a>
                                                </div>

                                                <div className="separator mt-3 opacity-75"></div>

                                                <div className="menu-item px-3">
                                                    <div className="menu-content px-3 py-3">
                                                        <a
                                                            className="btn btn-primary  btn-sm px-4"
                                                            href="#"
                                                        >
                                                            Generate Reports
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body pt-5">
                                        <div className="d-flex mb-6">
                                            <div className="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
                                                <img
                                                    src="assets/media/stock/600x400/img-17.jpg"
                                                    className="mw-100"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
                                                <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                                                    <a
                                                        href="#"
                                                        className="fs-5 text-gray-800 text-hover-primary fw-bolder"
                                                    >
                                                        Cup & Green
                                                    </a>
                                                    <span className="text-gray-400 fw-semibold fs-7 my-1">
                                                        Study highway types
                                                    </span>
                                                    <span className="text-gray-400 fw-semibold fs-7">
                                                        By:{" "}
                                                        <a
                                                            href="#"
                                                            className="text-primary fw-semibold"
                                                        >
                                                            CoreAd
                                                        </a>
                                                    </span>
                                                </div>
                                                <div className="text-end py-lg-0 py-2">
                                                    <span className="text-gray-800 fw-bolder fs-3">
                                                        24,900
                                                    </span>
                                                    <span className="text-gray-400 fs-7 fw-semibold d-block">
                                                        Sales
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex mb-6">
                                            <div className="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
                                                <img
                                                    src="assets/media/stock/600x400/img-10.jpg"
                                                    className="mw-100"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
                                                <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                                                    <a
                                                        href="#"
                                                        className="fs-5 text-gray-800 text-hover-primary fw-bolder"
                                                    >
                                                        Yellow Hearts
                                                    </a>
                                                    <span className="text-gray-400 fw-semibold fs-7 my-1">
                                                        Study highway types
                                                    </span>
                                                    <span className="text-gray-400 fw-semibold fs-7">
                                                        By:{" "}
                                                        <a
                                                            href="#"
                                                            className="text-primary fw-semibold"
                                                        >
                                                            KeenThemes
                                                        </a>
                                                    </span>
                                                </div>
                                                <div className="text-end py-lg-0 py-2">
                                                    <span className="text-gray-800 fw-bolder fs-3">
                                                        70,380
                                                    </span>
                                                    <span className="text-gray-400 fs-7 fw-semibold d-block">
                                                        Sales
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex mb-6">
                                            <div className="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
                                                <img
                                                    src="assets/media/stock/600x400/img-1.jpg"
                                                    className="mw-100"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
                                                <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                                                    <a
                                                        href="#"
                                                        className="fs-5 text-gray-800 text-hover-primary fw-bolder"
                                                    >
                                                        Nike & Blue
                                                    </a>
                                                    <span className="text-gray-400 fw-semibold fs-7 my-1">
                                                        Study highway types
                                                    </span>
                                                    <span className="text-gray-400 fw-semibold fs-7">
                                                        By:{" "}
                                                        <a
                                                            href="#"
                                                            className="text-primary fw-semibold"
                                                        >
                                                            Invision Inc.
                                                        </a>
                                                    </span>
                                                </div>
                                                <div className="text-end py-lg-0 py-2">
                                                    <span className="text-gray-800 fw-bolder fs-3">
                                                        7,200
                                                    </span>
                                                    <span className="text-gray-400 fs-7 fw-semibold d-block">
                                                        Sales
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex mb-">
                                            <div className="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
                                                <img
                                                    src="assets/media/stock/600x400/img-9.jpg"
                                                    className="mw-100"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
                                                <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                                                    <a
                                                        href="#"
                                                        className="fs-5 text-gray-800 text-hover-primary fw-bolder"
                                                    >
                                                        Red Boots
                                                    </a>
                                                    <span className="text-gray-400 fw-semibold fs-7 my-1">
                                                        Study highway types
                                                    </span>
                                                    <span className="text-gray-400 fw-semibold fs-7">
                                                        By:{" "}
                                                        <a
                                                            href="#"
                                                            className="text-primary fw-semibold"
                                                        >
                                                            Figma Studio
                                                        </a>
                                                    </span>
                                                </div>
                                                <div className="text-end py-lg-0 py-2">
                                                    <span className="text-gray-800 fw-bolder fs-3">
                                                        36,450
                                                    </span>
                                                    <span className="text-gray-400 fs-7 fw-semibold d-block">
                                                        Sales
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="card  card-xl-stretch mb-xl-8">
                                    <div className="card-header align-items-center border-0 mt-5">
                                        <h3 className="card-title align-items-start flex-column">
                                            <span className="fw-bolder text-dark fs-2">
                                                My Agents
                                            </span>
                                            <span className="text-gray-400 mt-2 fw-semibold fs-6">
                                                More than 400+ new members
                                            </span>
                                        </h3>
                                        <div className="card-toolbar">
                                            <button
                                                type="button"
                                                className="btn btn-active-light-primary btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3"
                                                data-kt-menu-trigger="click"
                                                data-kt-menu-placement="bottom-end"
                                            >
                                                <i className="ki-duotone ki-category fs-2 text-primary">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                    <span className="path3"></span>
                                                    <span className="path4"></span>
                                                </i>{" "}
                                            </button>

                                            <div
                                                className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                                data-kt-menu="true"
                                                id="kt_menu_6525301322f83"
                                            >
                                                <div className="px-7 py-5">
                                                    <div className="fs-5 text-dark fw-bold">
                                                        Filter Options
                                                    </div>
                                                </div>

                                                <div className="separator border-gray-200"></div>

                                                <div className="px-7 py-5">
                                                    <div className="mb-10">
                                                        <label className="form-label fw-semibold">
                                                            Status:
                                                        </label>

                                                        <div>
                                                            <select
                                                                className="form-select form-select-solid"
                                                                multiple
                                                                data-kt-select2="true"
                                                                data-close-on-select="false"
                                                                data-placeholder="Select option"
                                                                data-dropdown-parent="#kt_menu_6525301322f83"
                                                                data-allow-clear="true"
                                                            >
                                                                <option></option>
                                                                <option value="1">
                                                                    Approved
                                                                </option>
                                                                <option value="2">
                                                                    Pending
                                                                </option>
                                                                <option value="2">
                                                                    In Process
                                                                </option>
                                                                <option value="2">
                                                                    Rejected
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="mb-10">
                                                        <label className="form-label fw-semibold">
                                                            Member Type:
                                                        </label>

                                                        <div className="d-flex">
                                                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    value="1"
                                                                />
                                                                <span className="form-check-label">
                                                                    Author
                                                                </span>
                                                            </label>

                                                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    value="2"
                                                                    checked="checked"
                                                                />
                                                                <span className="form-check-label">
                                                                    Customer
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="mb-10">
                                                        <label className="form-label fw-semibold">
                                                            Notifications:
                                                        </label>

                                                        <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                name="notifications"
                                                                checked
                                                            />
                                                            <label className="form-check-label">
                                                                Enabled
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-end">
                                                        <button
                                                            type="reset"
                                                            className="btn btn-sm btn-light btn-active-light-primary me-2"
                                                            data-kt-menu-dismiss="true"
                                                        >
                                                            Reset
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-sm btn-primary"
                                                            data-kt-menu-dismiss="true"
                                                        >
                                                            Apply
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body pt-5">
                                        <div className="d-flex flex-stack mb-7">
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-35px me-4">
                                                    <img
                                                        src="assets/media/avatars/300-2.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ps-1">
                                                    <a
                                                        href="#"
                                                        className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                                                    >
                                                        Anne Clarc
                                                    </a>
                                                    <div className="fs-7 text-gray-400 fw-semibold mt-1">
                                                        HTML, CSS, Laravel
                                                    </div>
                                                </div>
                                            </div>
                                            <a
                                                href="pages/user-profile/overview.html"
                                                className="btn btn-light btn-color-muted fw-bolder btn-sm px-5"
                                            >
                                                Details
                                            </a>
                                        </div>
                                        <div className="d-flex flex-stack mb-7">
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-35px me-4">
                                                    <img
                                                        src="assets/media/avatars/300-1.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ps-1">
                                                    <a
                                                        href="#"
                                                        className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                                                    >
                                                        Brad Simmons
                                                    </a>
                                                    <div className="fs-7 text-gray-400 fw-semibold mt-1">
                                                        HTML, JS, ReactJS
                                                    </div>
                                                </div>
                                            </div>
                                            <a
                                                href="pages/user-profile/overview.html"
                                                className="btn btn-light btn-color-muted fw-bolder btn-sm px-5"
                                            >
                                                Details
                                            </a>
                                        </div>
                                        <div className="d-flex flex-stack mb-7">
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-35px me-4">
                                                    <img
                                                        src="assets/media/avatars/300-5.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ps-1">
                                                    <a
                                                        href="#"
                                                        className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                                                    >
                                                        Randy Trent
                                                    </a>
                                                    <div className="fs-7 text-gray-400 fw-semibold mt-1">
                                                        C#, ASP.NET, MS SQL
                                                    </div>
                                                </div>
                                            </div>
                                            <a
                                                href="pages/user-profile/overview.html"
                                                className="btn btn-light btn-color-muted fw-bolder btn-sm px-5"
                                            >
                                                Details
                                            </a>
                                        </div>
                                        <div className="d-flex flex-stack mb-7">
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-35px me-4">
                                                    <img
                                                        src="assets/media/avatars/300-20.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ps-1">
                                                    <a
                                                        href="#"
                                                        className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                                                    >
                                                        Ricky Hunt
                                                    </a>
                                                    <div className="fs-7 text-gray-400 fw-semibold mt-1">
                                                        PHP, Laravel, VueJS
                                                    </div>
                                                </div>
                                            </div>
                                            <a
                                                href="pages/user-profile/overview.html"
                                                className="btn btn-light btn-color-muted fw-bolder btn-sm px-5"
                                            >
                                                Details
                                            </a>
                                        </div>
                                        <div className="d-flex flex-stack mb-">
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-35px me-4">
                                                    <img
                                                        src="assets/media/avatars/300-23.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ps-1">
                                                    <a
                                                        href="#"
                                                        className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                                                    >
                                                        Jessie Clarcson
                                                    </a>
                                                    <div className="fs-7 text-gray-400 fw-semibold mt-1">
                                                        ReactJS
                                                    </div>
                                                </div>
                                            </div>
                                            <a
                                                href="pages/user-profile/overview.html"
                                                className="btn btn-light btn-color-muted fw-bolder btn-sm px-5"
                                            >
                                                Details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="card  card-xl-stretch mb-5 mb-xl-8">
                                    <div className="card-header align-items-center border-0 mt-5">
                                        <h3 className="card-title align-items-start flex-column">
                                            <span className="fw-bolder text-dark fs-2">
                                                Timeline
                                            </span>
                                            <span className="text-gray-400 mt-2 fw-semibold fs-6">
                                                890,344 Sales
                                            </span>
                                        </h3>
                                        <div className="card-toolbar">
                                            <button
                                                type="button"
                                                className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3"
                                                data-kt-menu-trigger="click"
                                                data-kt-menu-placement="bottom-end"
                                            >
                                                <i className="ki-duotone ki-category fs-2 text-primary">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                    <span className="path3"></span>
                                                    <span className="path4"></span>
                                                </i>{" "}
                                            </button>

                                            <div
                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                                                data-kt-menu="true"
                                            >
                                                <div className="menu-item px-3">
                                                    <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                                                        Quick Actions
                                                    </div>
                                                </div>

                                                <div className="separator mb-3 opacity-75"></div>

                                                <div className="menu-item px-3">
                                                    <a
                                                        href="#"
                                                        className="menu-link px-3"
                                                    >
                                                        New Ticket
                                                    </a>
                                                </div>

                                                <div className="menu-item px-3">
                                                    <a
                                                        href="#"
                                                        className="menu-link px-3"
                                                    >
                                                        New Customer
                                                    </a>
                                                </div>

                                                <div
                                                    className="menu-item px-3"
                                                    data-kt-menu-trigger="hover"
                                                    data-kt-menu-placement="right-start"
                                                >
                                                    <a
                                                        href="#"
                                                        className="menu-link px-3"
                                                    >
                                                        <span className="menu-title">
                                                            New Group
                                                        </span>
                                                        <span className="menu-arrow"></span>
                                                    </a>

                                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                        <div className="menu-item px-3">
                                                            <a
                                                                href="#"
                                                                className="menu-link px-3"
                                                            >
                                                                Admin Group
                                                            </a>
                                                        </div>

                                                        <div className="menu-item px-3">
                                                            <a
                                                                href="#"
                                                                className="menu-link px-3"
                                                            >
                                                                Staff Group
                                                            </a>
                                                        </div>

                                                        <div className="menu-item px-3">
                                                            <a
                                                                href="#"
                                                                className="menu-link px-3"
                                                            >
                                                                Member Group
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="menu-item px-3">
                                                    <a
                                                        href="#"
                                                        className="menu-link px-3"
                                                    >
                                                        New Contact
                                                    </a>
                                                </div>

                                                <div className="separator mt-3 opacity-75"></div>

                                                <div className="menu-item px-3">
                                                    <div className="menu-content px-3 py-3">
                                                        <a
                                                            className="btn btn-primary  btn-sm px-4"
                                                            href="#"
                                                        >
                                                            Generate Reports
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body pt-4">
                                        <div className="position-relative">
                                            <div className="w-35px d-flex justify-content-center">
                                                <div className="border-start border border-1 border-dashed border-gray-300 top-0 bottom-0 mb-5 mt-5 position-absolute"></div>
                                            </div>

                                            <div className="d-flex flex-stack pb-10">
                                                <div className="d-flex">
                                                    <div className="symbol symbol-35px me-5 mt-2">
                                                        <span className="symbol-label">
                                                            <i className="ki-duotone ki-abstract-26 fs-2 text-gray-600">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>{" "}
                                                        </span>
                                                    </div>
                                                    <div className="pe-3">
                                                        <a
                                                            href="#"
                                                            className="fs-5 text-gray-800 text-hover-primary fw-bolder"
                                                        >
                                                            Developer Library
                                                            Added
                                                        </a>
                                                        <div className="text-gray-400 fw-semibold mt-1">
                                                            New{" "}
                                                            <a
                                                                href="#"
                                                                className="link-primary p-1"
                                                            >
                                                                Author Account
                                                            </a>{" "}
                                                            with Affiliate
                                                        </div>
                                                    </div>
                                                </div>

                                                <span className="fw-bolder fs-7 text-gray-400 ">
                                                    2HR
                                                </span>
                                            </div>
                                            <div className="d-flex flex-stack pb-10">
                                                <div className="d-flex">
                                                    <div className="symbol symbol-35px me-5 mt-2">
                                                        <span className="symbol-label">
                                                            <i className="ki-duotone ki-credit-cart fs-2 text-gray-600">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>{" "}
                                                        </span>
                                                    </div>
                                                    <div className="pe-3">
                                                        <a
                                                            href="#"
                                                            className="fs-5 text-gray-800 text-hover-primary fw-bolder"
                                                        >
                                                            Payments Methods
                                                            Added
                                                        </a>
                                                        <div className="text-gray-400 fw-semibold mt-1">
                                                            Added{" "}
                                                            <span className="text-gray-700 pe-1">
                                                                Payoneer
                                                            </span>{" "}
                                                            &{" "}
                                                            <span className="text-gray-700">
                                                                Transferwise
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <span className="fw-bolder fs-7 text-gray-400 ">
                                                    6HR
                                                </span>
                                            </div>
                                            <div className="d-flex flex-stack pb-10">
                                                <div className="d-flex">
                                                    <div className="symbol symbol-35px me-5 mt-2">
                                                        <span className="symbol-label">
                                                            <i className="ki-duotone ki-basket fs-2 text-gray-600">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                                <span className="path4"></span>
                                                            </i>{" "}
                                                        </span>
                                                    </div>
                                                    <div className="pe-3">
                                                        <a
                                                            href="#"
                                                            className="fs-5 text-gray-800 text-hover-primary fw-bolder"
                                                        >
                                                            New Order Placed
                                                        </a>
                                                        <div className="text-gray-400 fw-semibold mt-1">
                                                            <a
                                                                href="#"
                                                                className="link-primary pe-1"
                                                            >
                                                                #XDT-034
                                                            </a>{" "}
                                                            order received
                                                        </div>
                                                    </div>
                                                </div>

                                                <span className="fw-bolder fs-7 text-gray-400 ">
                                                    4DY
                                                </span>
                                            </div>
                                            <div className="d-flex flex-stack pb-10">
                                                <div className="d-flex">
                                                    <div className="symbol symbol-35px me-5 mt-2">
                                                        <span className="symbol-label">
                                                            <i className="ki-duotone ki-address-book fs-2 text-gray-600">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>{" "}
                                                        </span>
                                                    </div>
                                                    <div className="pr-3">
                                                        <a
                                                            href="#"
                                                            className="fs-5 text-gray-800 text-hover-primary fw-bolder"
                                                        >
                                                            New User Library
                                                            Added
                                                        </a>
                                                        <div className="fs-7 text-gray-400 fw-semibold mt-2">
                                                            New{" "}
                                                            <a
                                                                href="#"
                                                                className="link-primary pe-1"
                                                            >
                                                                {" "}
                                                                Author Account
                                                            </a>{" "}
                                                            created
                                                        </div>
                                                    </div>
                                                </div>

                                                <span className="fw-bolder fs-7 text-gray-400 ">
                                                    27DY
                                                </span>
                                            </div>
                                            <div className="d-flex flex-stack">
                                                <div className="d-flex">
                                                    <div className="symbol symbol-35px me-5 mt-2">
                                                        <span className="symbol-label">
                                                            <i className="ki-duotone ki-document fs-2 text-gray-600">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>{" "}
                                                        </span>
                                                    </div>
                                                    <div className="pe-3">
                                                        <a
                                                            href="#"
                                                            className="fs-5 text-gray-800 text-hover-primary fw-bolder"
                                                        >
                                                            New Story Created
                                                        </a>
                                                        <div className="text-gray-400  fw-semibold mt-1">
                                                            <a
                                                                href="#"
                                                                className="link-primary pe-1"
                                                            >
                                                                #XDT-034
                                                            </a>{" "}
                                                            order received
                                                        </div>
                                                    </div>
                                                </div>

                                                <span className="fw-bolder fs-7 text-gray-400 ">
                                                    2MO
                                                </span>
                                            </div>
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
};

export default Dashboard;
