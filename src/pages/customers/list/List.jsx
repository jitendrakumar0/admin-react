import React from "react";
import LeftSidebar from "../../../components/leftSidebar/LeftSidebar";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

const List = () => {
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
                                Customer List
                            </h1>

                            <ul className="breadcrumb fw-semibold fs-base my-1">
                                <li className="breadcrumb-item text-muted">
                                    <a
                                        href="../../index.html"
                                        className="text-muted text-hover-primary"
                                    >
                                        Home{" "}
                                    </a>
                                </li>
                                <li className="breadcrumb-item text-muted">
                                    Customers
                                </li>
                                <li className="breadcrumb-item text-dark">
                                    Customer Listing
                                </li>
                            </ul>
                        </div>

                        <div className="d-flex align-items-center flex-nowrap text-nowrap py-1">
                            <a
                                className="btn bg-body btn-color-gray-700 btn-active-primary me-4"
                                data-bs-toggle="modal"
                                data-bs-target="#kt_modal_invite_friends"
                            >
                                Invite Friends
                            </a>
                            <a
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
                        <div className="card">
                            <div className="card-header border-0 pt-6">
                                <div className="card-title">
                                    <div className="d-flex align-items-center position-relative my-1">
                                        <i className="ki-duotone ki-magnifier fs-3 position-absolute ms-5">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>{" "}
                                        <input
                                            type="text"
                                            data-kt-customer-table-filter="search"
                                            className="form-control form-control-solid w-250px ps-12"
                                            placeholder="Search Customers"
                                        />
                                    </div>
                                </div>

                                <div className="card-toolbar">
                                    <div
                                        className="d-flex justify-content-end"
                                        data-kt-customer-table-toolbar="base"
                                    >
                                        <button
                                            type="button"
                                            className="btn btn-light-primary me-3"
                                            data-kt-menu-trigger="click"
                                            data-kt-menu-placement="bottom-end"
                                        >
                                            <i className="ki-duotone ki-filter fs-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>{" "}
                                            Filter
                                        </button>

                                        <div
                                            className="menu menu-sub menu-sub-dropdown w-300px w-md-325px"
                                            data-kt-menu="true"
                                            id="kt-toolbar-filter"
                                        >
                                            <div className="px-7 py-5">
                                                <div className="fs-4 text-dark fw-bold">
                                                    Filter Options
                                                </div>
                                            </div>

                                            <div className="separator border-gray-200"></div>

                                            <div className="px-7 py-5">
                                                <div className="mb-10">
                                                    <label className="form-label fs-5 fw-semibold mb-3">
                                                        Month:
                                                    </label>

                                                    <select
                                                        className="form-select form-select-solid fw-bold"
                                                        data-kt-select2="true"
                                                        data-placeholder="Select option"
                                                        data-allow-clear="true"
                                                        data-kt-customer-table-filter="month"
                                                        data-dropdown-parent="#kt-toolbar-filter"
                                                    >
                                                        <option></option>
                                                        <option value="aug">
                                                            August
                                                        </option>
                                                        <option value="sep">
                                                            September
                                                        </option>
                                                        <option value="oct">
                                                            October
                                                        </option>
                                                        <option value="nov">
                                                            November
                                                        </option>
                                                        <option value="dec">
                                                            December
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="mb-10">
                                                    <label className="form-label fs-5 fw-semibold mb-3">
                                                        Payment Type:
                                                    </label>

                                                    <div
                                                        className="d-flex flex-column flex-wrap fw-semibold"
                                                        data-kt-customer-table-filter="payment_type"
                                                    >
                                                        <label className="form-check form-check-sm form-check-custom form-check-solid mb-3 me-5">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="payment_type"
                                                                value="all"
                                                                checked="checked"
                                                            />
                                                            <span className="form-check-label text-gray-600">
                                                                All
                                                            </span>
                                                        </label>

                                                        <label className="form-check form-check-sm form-check-custom form-check-solid mb-3 me-5">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="payment_type"
                                                                value="visa"
                                                            />
                                                            <span className="form-check-label text-gray-600">
                                                                Visa
                                                            </span>
                                                        </label>

                                                        <label className="form-check form-check-sm form-check-custom form-check-solid mb-3">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="payment_type"
                                                                value="mastercard"
                                                            />
                                                            <span className="form-check-label text-gray-600">
                                                                Mastercard
                                                            </span>
                                                        </label>

                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="payment_type"
                                                                value="american_express"
                                                            />
                                                            <span className="form-check-label text-gray-600">
                                                                American Express
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-end">
                                                    <button
                                                        type="reset"
                                                        className="btn btn-light btn-active-light-primary me-2"
                                                        data-kt-menu-dismiss="true"
                                                        data-kt-customer-table-filter="reset"
                                                    >
                                                        Reset
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary"
                                                        data-kt-menu-dismiss="true"
                                                        data-kt-customer-table-filter="filter"
                                                    >
                                                        Apply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            className="btn btn-light-primary me-3"
                                            data-bs-toggle="modal"
                                            data-bs-target="#kt_customers_export_modal"
                                        >
                                            <i className="ki-duotone ki-exit-up fs-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>{" "}
                                            Export
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#kt_modal_add_customer"
                                        >
                                            Add Customer
                                        </button>
                                    </div>

                                    <div
                                        className="d-flex justify-content-end align-items-center d-none"
                                        data-kt-customer-table-toolbar="selected"
                                    >
                                        <div className="fw-bold me-5">
                                            <span
                                                className="me-2"
                                                data-kt-customer-table-select="selected_count"
                                            ></span>{" "}
                                            Selected
                                        </div>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            data-kt-customer-table-select="delete_selected"
                                        >
                                            Delete Selected
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body pt-0">
                                <table
                                    className="table align-middle table-row-dashed fs-6 gy-5"
                                    id="kt_customers_table"
                                >
                                    <thead>
                                        <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                                            <th className="w-10px pe-2">
                                                <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        data-kt-check="true"
                                                        data-kt-check-target="#kt_customers_table .form-check-input"
                                                        value="1"
                                                    />
                                                </div>
                                            </th>
                                            <th className="min-w-125px">
                                                Customer Name
                                            </th>
                                            <th className="min-w-125px">
                                                Email
                                            </th>
                                            <th className="min-w-125px">
                                                Company
                                            </th>
                                            <th className="min-w-125px">
                                                Payment Method
                                            </th>
                                            <th className="min-w-125px">
                                                Created Date
                                            </th>
                                            <th className="text-end min-w-70px">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="fw-semibold text-gray-600">
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Emma Smith
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    smith@kpmg.com
                                                </a>
                                            </td>
                                            <td>-</td>
                                            <td data-filter="mastercard">
                                                <img
                                                    src="../../assets/media/svg/card-logos/mastercard.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 7765
                                            </td>
                                            <td>14 Dec 2020, 8:43 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Melody Macy
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    melody@altbox.com
                                                </a>
                                            </td>
                                            <td>Google</td>
                                            <td data-filter="visa">
                                                <img
                                                    src="../../assets/media/svg/card-logos/visa.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 7906
                                            </td>
                                            <td>01 Dec 2020, 10:12 am</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Max Smith
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    max@kt.com
                                                </a>
                                            </td>
                                            <td>Bistro Union</td>
                                            <td data-filter="mastercard">
                                                <img
                                                    src="../../assets/media/svg/card-logos/mastercard.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 1463
                                            </td>
                                            <td>12 Nov 2020, 2:01 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Sean Bean
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    sean@dellito.com
                                                </a>
                                            </td>
                                            <td>Astro Limited</td>
                                            <td data-filter="american_express">
                                                <img
                                                    src="../../assets/media/svg/card-logos/american-express.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 4436
                                            </td>
                                            <td>21 Oct 2020, 5:54 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Brian Cox
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    brian@exchange.com
                                                </a>
                                            </td>
                                            <td>-</td>
                                            <td data-filter="visa">
                                                <img
                                                    src="../../assets/media/svg/card-logos/visa.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 7729
                                            </td>
                                            <td>19 Oct 2020, 7:32 am</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Mikaela Collins
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    mik@pex.com
                                                </a>
                                            </td>
                                            <td>Keenthemes</td>
                                            <td data-filter="american_express">
                                                <img
                                                    src="../../assets/media/svg/card-logos/american-express.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 9292
                                            </td>
                                            <td>23 Sep 2020, 12:37 am</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Francis Mitcham
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    f.mit@kpmg.com
                                                </a>
                                            </td>
                                            <td>Paypal</td>
                                            <td data-filter="mastercard">
                                                <img
                                                    src="../../assets/media/svg/card-logos/mastercard.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 2053
                                            </td>
                                            <td>11 Sep 2020, 3:15 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Olivia Wild
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    olivia@corpmail.com
                                                </a>
                                            </td>
                                            <td>-</td>
                                            <td data-filter="american_express">
                                                <img
                                                    src="../../assets/media/svg/card-logos/american-express.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 1974
                                            </td>
                                            <td>03 Sep 2020, 1:08 am</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Neil Owen
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    owen.neil@gmail.com
                                                </a>
                                            </td>
                                            <td>Paramount</td>
                                            <td data-filter="visa">
                                                <img
                                                    src="../../assets/media/svg/card-logos/visa.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 1842
                                            </td>
                                            <td>01 Sep 2020, 4:58 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Dan Wilson
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    dam@consilting.com
                                                </a>
                                            </td>
                                            <td>Trinity Studio</td>
                                            <td data-filter="visa">
                                                <img
                                                    src="../../assets/media/svg/card-logos/visa.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 7141
                                            </td>
                                            <td>18 Aug 2020, 3:34 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Emma Bold
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    emma@intenso.com
                                                </a>
                                            </td>
                                            <td>B&T Legal Services</td>
                                            <td data-filter="mastercard">
                                                <img
                                                    src="../../assets/media/svg/card-logos/mastercard.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 2315
                                            </td>
                                            <td>14 Aug 2020, 1:21 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Ana Crown
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    ana.cf@limtel.com
                                                </a>
                                            </td>
                                            <td>Paysafe Security</td>
                                            <td data-filter="american_express">
                                                <img
                                                    src="../../assets/media/svg/card-logos/american-express.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 6676
                                            </td>
                                            <td>11 Aug 2020, 5:13 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Emma Smith
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    smith@kpmg.com
                                                </a>
                                            </td>
                                            <td>-</td>
                                            <td data-filter="mastercard">
                                                <img
                                                    src="../../assets/media/svg/card-logos/mastercard.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 7765
                                            </td>
                                            <td>14 Dec 2020, 8:43 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Melody Macy
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    melody@altbox.com
                                                </a>
                                            </td>
                                            <td>Google</td>
                                            <td data-filter="visa">
                                                <img
                                                    src="../../assets/media/svg/card-logos/visa.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 7906
                                            </td>
                                            <td>01 Dec 2020, 10:12 am</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Max Smith
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    max@kt.com
                                                </a>
                                            </td>
                                            <td>Bistro Union</td>
                                            <td data-filter="mastercard">
                                                <img
                                                    src="../../assets/media/svg/card-logos/mastercard.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 1463
                                            </td>
                                            <td>12 Nov 2020, 2:01 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Sean Bean
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    sean@dellito.com
                                                </a>
                                            </td>
                                            <td>Astro Limited</td>
                                            <td data-filter="american_express">
                                                <img
                                                    src="../../assets/media/svg/card-logos/american-express.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 4436
                                            </td>
                                            <td>21 Oct 2020, 5:54 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Brian Cox
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    brian@exchange.com
                                                </a>
                                            </td>
                                            <td>-</td>
                                            <td data-filter="visa">
                                                <img
                                                    src="../../assets/media/svg/card-logos/visa.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 7729
                                            </td>
                                            <td>19 Oct 2020, 7:32 am</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Mikaela Collins
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    mik@pex.com
                                                </a>
                                            </td>
                                            <td>Keenthemes</td>
                                            <td data-filter="american_express">
                                                <img
                                                    src="../../assets/media/svg/card-logos/american-express.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 9292
                                            </td>
                                            <td>23 Sep 2020, 12:37 am</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Francis Mitcham
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    f.mit@kpmg.com
                                                </a>
                                            </td>
                                            <td>Paypal</td>
                                            <td data-filter="mastercard">
                                                <img
                                                    src="../../assets/media/svg/card-logos/mastercard.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 2053
                                            </td>
                                            <td>11 Sep 2020, 3:15 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Olivia Wild
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    olivia@corpmail.com
                                                </a>
                                            </td>
                                            <td>-</td>
                                            <td data-filter="american_express">
                                                <img
                                                    src="../../assets/media/svg/card-logos/american-express.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 1974
                                            </td>
                                            <td>03 Sep 2020, 1:08 am</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Neil Owen
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    owen.neil@gmail.com
                                                </a>
                                            </td>
                                            <td>Paramount</td>
                                            <td data-filter="visa">
                                                <img
                                                    src="../../assets/media/svg/card-logos/visa.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 1842
                                            </td>
                                            <td>01 Sep 2020, 4:58 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Dan Wilson
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    dam@consilting.com
                                                </a>
                                            </td>
                                            <td>Trinity Studio</td>
                                            <td data-filter="visa">
                                                <img
                                                    src="../../assets/media/svg/card-logos/visa.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 7141
                                            </td>
                                            <td>18 Aug 2020, 3:34 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Emma Bold
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    emma@intenso.com
                                                </a>
                                            </td>
                                            <td>B&T Legal Services</td>
                                            <td data-filter="mastercard">
                                                <img
                                                    src="../../assets/media/svg/card-logos/mastercard.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 2315
                                            </td>
                                            <td>14 Aug 2020, 1:21 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Ana Crown
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    ana.cf@limtel.com
                                                </a>
                                            </td>
                                            <td>Paysafe Security</td>
                                            <td data-filter="american_express">
                                                <img
                                                    src="../../assets/media/svg/card-logos/american-express.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 6676
                                            </td>
                                            <td>11 Aug 2020, 5:13 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Emma Smith
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    smith@kpmg.com
                                                </a>
                                            </td>
                                            <td>-</td>
                                            <td data-filter="mastercard">
                                                <img
                                                    src="../../assets/media/svg/card-logos/mastercard.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 7765
                                            </td>
                                            <td>14 Dec 2020, 8:43 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Melody Macy
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    melody@altbox.com
                                                </a>
                                            </td>
                                            <td>Google</td>
                                            <td data-filter="visa">
                                                <img
                                                    src="../../assets/media/svg/card-logos/visa.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 7906
                                            </td>
                                            <td>01 Dec 2020, 10:12 am</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Max Smith
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    max@kt.com
                                                </a>
                                            </td>
                                            <td>Bistro Union</td>
                                            <td data-filter="mastercard">
                                                <img
                                                    src="../../assets/media/svg/card-logos/mastercard.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 1463
                                            </td>
                                            <td>12 Nov 2020, 2:01 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Sean Bean
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    sean@dellito.com
                                                </a>
                                            </td>
                                            <td>Astro Limited</td>
                                            <td data-filter="american_express">
                                                <img
                                                    src="../../assets/media/svg/card-logos/american-express.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 4436
                                            </td>
                                            <td>21 Oct 2020, 5:54 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Brian Cox
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    brian@exchange.com
                                                </a>
                                            </td>
                                            <td>-</td>
                                            <td data-filter="visa">
                                                <img
                                                    src="../../assets/media/svg/card-logos/visa.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 7729
                                            </td>
                                            <td>19 Oct 2020, 7:32 am</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Mikaela Collins
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    mik@pex.com
                                                </a>
                                            </td>
                                            <td>Keenthemes</td>
                                            <td data-filter="american_express">
                                                <img
                                                    src="../../assets/media/svg/card-logos/american-express.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 9292
                                            </td>
                                            <td>23 Sep 2020, 12:37 am</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Francis Mitcham
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    f.mit@kpmg.com
                                                </a>
                                            </td>
                                            <td>Paypal</td>
                                            <td data-filter="mastercard">
                                                <img
                                                    src="../../assets/media/svg/card-logos/mastercard.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 2053
                                            </td>
                                            <td>11 Sep 2020, 3:15 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Olivia Wild
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    olivia@corpmail.com
                                                </a>
                                            </td>
                                            <td>-</td>
                                            <td data-filter="american_express">
                                                <img
                                                    src="../../assets/media/svg/card-logos/american-express.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 1974
                                            </td>
                                            <td>03 Sep 2020, 1:08 am</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Neil Owen
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    owen.neil@gmail.com
                                                </a>
                                            </td>
                                            <td>Paramount</td>
                                            <td data-filter="visa">
                                                <img
                                                    src="../../assets/media/svg/card-logos/visa.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 1842
                                            </td>
                                            <td>01 Sep 2020, 4:58 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Dan Wilson
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    dam@consilting.com
                                                </a>
                                            </td>
                                            <td>Trinity Studio</td>
                                            <td data-filter="visa">
                                                <img
                                                    src="../../assets/media/svg/card-logos/visa.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 7141
                                            </td>
                                            <td>18 Aug 2020, 3:34 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Emma Bold
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    emma@intenso.com
                                                </a>
                                            </td>
                                            <td>B&T Legal Services</td>
                                            <td data-filter="mastercard">
                                                <img
                                                    src="../../assets/media/svg/card-logos/mastercard.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 2315
                                            </td>
                                            <td>14 Aug 2020, 1:21 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Ana Crown
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    ana.cf@limtel.com
                                                </a>
                                            </td>
                                            <td>Paysafe Security</td>
                                            <td data-filter="american_express">
                                                <img
                                                    src="../../assets/media/svg/card-logos/american-express.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 6676
                                            </td>
                                            <td>11 Aug 2020, 5:13 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Emma Smith
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    smith@kpmg.com
                                                </a>
                                            </td>
                                            <td>-</td>
                                            <td data-filter="mastercard">
                                                <img
                                                    src="../../assets/media/svg/card-logos/mastercard.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 7765
                                            </td>
                                            <td>14 Dec 2020, 8:43 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Melody Macy
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    melody@altbox.com
                                                </a>
                                            </td>
                                            <td>Google</td>
                                            <td data-filter="visa">
                                                <img
                                                    src="../../assets/media/svg/card-logos/visa.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 7906
                                            </td>
                                            <td>01 Dec 2020, 10:12 am</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Max Smith
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    max@kt.com
                                                </a>
                                            </td>
                                            <td>Bistro Union</td>
                                            <td data-filter="mastercard">
                                                <img
                                                    src="../../assets/media/svg/card-logos/mastercard.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 1463
                                            </td>
                                            <td>12 Nov 2020, 2:01 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <a
                                                    href="view.html"
                                                    className="text-gray-800 text-hover-primary mb-1"
                                                >
                                                    Sean Bean
                                                </a>
                                            </td>
                                            <td>
                                                <a className="text-gray-600 text-hover-primary mb-1">
                                                    sean@dellito.com
                                                </a>
                                            </td>
                                            <td>Astro Limited</td>
                                            <td data-filter="american_express">
                                                <img
                                                    src="../../assets/media/svg/card-logos/american-express.svg"
                                                    className="w-35px me-3"
                                                    alt=""
                                                />
                                                **** 4436
                                            </td>
                                            <td>21 Oct 2020, 5:54 pm</td>
                                            <td className="text-end">
                                                <a
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                                </a>

                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="view.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>

                                                    <div className="menu-item px-3">
                                                        <a
                                                            className="menu-link px-3"
                                                            data-kt-customer-table-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div
                            className="modal fade"
                            id="kt_modal_add_customer"
                            tabindex="-1"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered mw-650px">
                                <div className="modal-content">
                                    <form
                                        className="form"
                                        action="#"
                                        id="kt_modal_add_customer_form"
                                        data-kt-redirect="list.html"
                                    >
                                        <div
                                            className="modal-header"
                                            id="kt_modal_add_customer_header"
                                        >
                                            <h2 className="fw-bold">
                                                Add a Customer
                                            </h2>

                                            <div
                                                id="kt_modal_add_customer_close"
                                                className="btn btn-icon btn-sm btn-active-icon-primary"
                                            >
                                                <i className="ki-duotone ki-cross fs-1">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                            </div>
                                        </div>

                                        <div className="modal-body py-10 px-lg-17">
                                            <div
                                                className="scroll-y me-n7 pe-7"
                                                id="kt_modal_add_customer_scroll"
                                                data-kt-scroll="true"
                                                data-kt-scroll-activate="{default: false, lg: true}"
                                                data-kt-scroll-max-height="auto"
                                                data-kt-scroll-dependencies="#kt_modal_add_customer_header"
                                                data-kt-scroll-wrappers="#kt_modal_add_customer_scroll"
                                                data-kt-scroll-offset="300px"
                                            >
                                                <div className="fv-row mb-7">
                                                    <label className="required fs-6 fw-semibold mb-2">
                                                        Name
                                                    </label>

                                                    <input
                                                        type="text"
                                                        className="form-control form-control-solid"
                                                        placeholder=""
                                                        name="name"
                                                        value="Sean Bean"
                                                    />
                                                </div>

                                                <div className="fv-row mb-7">
                                                    <label className="fs-6 fw-semibold mb-2">
                                                        <span className="required">
                                                            Email
                                                        </span>
                                                        <span
                                                            className="ms-1"
                                                            data-bs-toggle="tooltip"
                                                            title="Email address must be active"
                                                        >
                                                            <i className="ki-duotone ki-information fs-7">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>{" "}
                                                        </span>
                                                    </label>

                                                    <input
                                                        type="email"
                                                        className="form-control form-control-solid"
                                                        placeholder=""
                                                        name="email"
                                                        value="sean@dellito.com"
                                                    />
                                                </div>

                                                <div className="fv-row mb-15">
                                                    <label className="fs-6 fw-semibold mb-2">
                                                        Description
                                                    </label>

                                                    <input
                                                        type="text"
                                                        className="form-control form-control-solid"
                                                        placeholder=""
                                                        name="description"
                                                    />
                                                </div>

                                                <div
                                                    className="fw-bold fs-3 rotate collapsible mb-7"
                                                    data-bs-toggle="collapse"
                                                    href="#kt_modal_add_customer_billing_info"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="kt_customer_view_details"
                                                >
                                                    Shipping Information
                                                    <span className="ms-2 rotate-180">
                                                        <i className="ki-duotone ki-down fs-3"></i>{" "}
                                                    </span>
                                                </div>

                                                <div
                                                    id="kt_modal_add_customer_billing_info"
                                                    className="collapse show"
                                                >
                                                    <div className="d-flex flex-column mb-7 fv-row">
                                                        <label className="required fs-6 fw-semibold mb-2">
                                                            Address Line 1
                                                        </label>

                                                        <input
                                                            className="form-control form-control-solid"
                                                            placeholder=""
                                                            name="address1"
                                                            value="101, Collins Street"
                                                        />
                                                    </div>

                                                    <div className="d-flex flex-column mb-7 fv-row">
                                                        <label className="fs-6 fw-semibold mb-2">
                                                            Address Line 2
                                                        </label>

                                                        <input
                                                            className="form-control form-control-solid"
                                                            placeholder=""
                                                            name="address2"
                                                            value=""
                                                        />
                                                    </div>

                                                    <div className="d-flex flex-column mb-7 fv-row">
                                                        <label className="required fs-6 fw-semibold mb-2">
                                                            Town
                                                        </label>

                                                        <input
                                                            className="form-control form-control-solid"
                                                            placeholder=""
                                                            name="city"
                                                            value="Melbourne"
                                                        />
                                                    </div>

                                                    <div className="row g-9 mb-7">
                                                        <div className="col-md-6 fv-row">
                                                            <label className="required fs-6 fw-semibold mb-2">
                                                                State / Province
                                                            </label>

                                                            <input
                                                                className="form-control form-control-solid"
                                                                placeholder=""
                                                                name="state"
                                                                value="Victoria"
                                                            />
                                                        </div>

                                                        <div className="col-md-6 fv-row">
                                                            <label className="required fs-6 fw-semibold mb-2">
                                                                Post Code
                                                            </label>

                                                            <input
                                                                className="form-control form-control-solid"
                                                                placeholder=""
                                                                name="postcode"
                                                                value="3000"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-column mb-7 fv-row">
                                                        <label className="fs-6 fw-semibold mb-2">
                                                            <span className="required">
                                                                Country
                                                            </span>
                                                            <span
                                                                className="ms-1"
                                                                data-bs-toggle="tooltip"
                                                                title="Country of origination"
                                                            >
                                                                <i className="ki-duotone ki-information fs-7">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                </i>{" "}
                                                            </span>
                                                        </label>

                                                        <select
                                                            name="country"
                                                            aria-label="Select a Country"
                                                            data-control="select2"
                                                            data-placeholder="Select a Country..."
                                                            data-dropdown-parent="#kt_modal_add_customer"
                                                            className="form-select form-select-solid fw-bold"
                                                        >
                                                            <option value="">
                                                                Select a
                                                                Country...
                                                            </option>
                                                            <option value="AF">
                                                                Afghanistan
                                                            </option>
                                                            <option value="AX">
                                                                Aland Islands
                                                            </option>
                                                            <option value="AL">
                                                                Albania
                                                            </option>
                                                            <option value="DZ">
                                                                Algeria
                                                            </option>
                                                            <option value="AS">
                                                                American Samoa
                                                            </option>
                                                            <option value="AD">
                                                                Andorra
                                                            </option>
                                                            <option value="AO">
                                                                Angola
                                                            </option>
                                                            <option value="AI">
                                                                Anguilla
                                                            </option>
                                                            <option value="AG">
                                                                Antigua and
                                                                Barbuda
                                                            </option>
                                                            <option value="AR">
                                                                Argentina
                                                            </option>
                                                            <option value="AM">
                                                                Armenia
                                                            </option>
                                                            <option value="AW">
                                                                Aruba
                                                            </option>
                                                            <option value="AU">
                                                                Australia
                                                            </option>
                                                            <option value="AT">
                                                                Austria
                                                            </option>
                                                            <option value="AZ">
                                                                Azerbaijan
                                                            </option>
                                                            <option value="BS">
                                                                Bahamas
                                                            </option>
                                                            <option value="BH">
                                                                Bahrain
                                                            </option>
                                                            <option value="BD">
                                                                Bangladesh
                                                            </option>
                                                            <option value="BB">
                                                                Barbados
                                                            </option>
                                                            <option value="BY">
                                                                Belarus
                                                            </option>
                                                            <option value="BE">
                                                                Belgium
                                                            </option>
                                                            <option value="BZ">
                                                                Belize
                                                            </option>
                                                            <option value="BJ">
                                                                Benin
                                                            </option>
                                                            <option value="BM">
                                                                Bermuda
                                                            </option>
                                                            <option value="BT">
                                                                Bhutan
                                                            </option>
                                                            <option value="BO">
                                                                Bolivia,
                                                                Plurinational
                                                                State of
                                                            </option>
                                                            <option value="BQ">
                                                                Bonaire, Sint
                                                                Eustatius and
                                                                Saba
                                                            </option>
                                                            <option value="BA">
                                                                Bosnia and
                                                                Herzegovina
                                                            </option>
                                                            <option value="BW">
                                                                Botswana
                                                            </option>
                                                            <option value="BR">
                                                                Brazil
                                                            </option>
                                                            <option value="IO">
                                                                British Indian
                                                                Ocean Territory
                                                            </option>
                                                            <option value="BN">
                                                                Brunei
                                                                Darussalam
                                                            </option>
                                                            <option value="BG">
                                                                Bulgaria
                                                            </option>
                                                            <option value="BF">
                                                                Burkina Faso
                                                            </option>
                                                            <option value="BI">
                                                                Burundi
                                                            </option>
                                                            <option value="KH">
                                                                Cambodia
                                                            </option>
                                                            <option value="CM">
                                                                Cameroon
                                                            </option>
                                                            <option value="CA">
                                                                Canada
                                                            </option>
                                                            <option value="CV">
                                                                Cape Verde
                                                            </option>
                                                            <option value="KY">
                                                                Cayman Islands
                                                            </option>
                                                            <option value="CF">
                                                                Central African
                                                                Republic
                                                            </option>
                                                            <option value="TD">
                                                                Chad
                                                            </option>
                                                            <option value="CL">
                                                                Chile
                                                            </option>
                                                            <option value="CN">
                                                                China
                                                            </option>
                                                            <option value="CX">
                                                                Christmas Island
                                                            </option>
                                                            <option value="CC">
                                                                Cocos (Keeling)
                                                                Islands
                                                            </option>
                                                            <option value="CO">
                                                                Colombia
                                                            </option>
                                                            <option value="KM">
                                                                Comoros
                                                            </option>
                                                            <option value="CK">
                                                                Cook Islands
                                                            </option>
                                                            <option value="CR">
                                                                Costa Rica
                                                            </option>
                                                            <option value="CI">
                                                                Côte d'Ivoire
                                                            </option>
                                                            <option value="HR">
                                                                Croatia
                                                            </option>
                                                            <option value="CU">
                                                                Cuba
                                                            </option>
                                                            <option value="CW">
                                                                Curaçao
                                                            </option>
                                                            <option value="CZ">
                                                                Czech Republic
                                                            </option>
                                                            <option value="DK">
                                                                Denmark
                                                            </option>
                                                            <option value="DJ">
                                                                Djibouti
                                                            </option>
                                                            <option value="DM">
                                                                Dominica
                                                            </option>
                                                            <option value="DO">
                                                                Dominican
                                                                Republic
                                                            </option>
                                                            <option value="EC">
                                                                Ecuador
                                                            </option>
                                                            <option value="EG">
                                                                Egypt
                                                            </option>
                                                            <option value="SV">
                                                                El Salvador
                                                            </option>
                                                            <option value="GQ">
                                                                Equatorial
                                                                Guinea
                                                            </option>
                                                            <option value="ER">
                                                                Eritrea
                                                            </option>
                                                            <option value="EE">
                                                                Estonia
                                                            </option>
                                                            <option value="ET">
                                                                Ethiopia
                                                            </option>
                                                            <option value="FK">
                                                                Falkland Islands
                                                                (Malvinas)
                                                            </option>
                                                            <option value="FJ">
                                                                Fiji
                                                            </option>
                                                            <option value="FI">
                                                                Finland
                                                            </option>
                                                            <option value="FR">
                                                                France
                                                            </option>
                                                            <option value="PF">
                                                                French Polynesia
                                                            </option>
                                                            <option value="GA">
                                                                Gabon
                                                            </option>
                                                            <option value="GM">
                                                                Gambia
                                                            </option>
                                                            <option value="GE">
                                                                Georgia
                                                            </option>
                                                            <option value="DE">
                                                                Germany
                                                            </option>
                                                            <option value="GH">
                                                                Ghana
                                                            </option>
                                                            <option value="GI">
                                                                Gibraltar
                                                            </option>
                                                            <option value="GR">
                                                                Greece
                                                            </option>
                                                            <option value="GL">
                                                                Greenland
                                                            </option>
                                                            <option value="GD">
                                                                Grenada
                                                            </option>
                                                            <option value="GU">
                                                                Guam
                                                            </option>
                                                            <option value="GT">
                                                                Guatemala
                                                            </option>
                                                            <option value="GG">
                                                                Guernsey
                                                            </option>
                                                            <option value="GN">
                                                                Guinea
                                                            </option>
                                                            <option value="GW">
                                                                Guinea-Bissau
                                                            </option>
                                                            <option value="HT">
                                                                Haiti
                                                            </option>
                                                            <option value="VA">
                                                                Holy See
                                                                (Vatican City
                                                                State)
                                                            </option>
                                                            <option value="HN">
                                                                Honduras
                                                            </option>
                                                            <option value="HK">
                                                                Hong Kong
                                                            </option>
                                                            <option value="HU">
                                                                Hungary
                                                            </option>
                                                            <option value="IS">
                                                                Iceland
                                                            </option>
                                                            <option value="IN">
                                                                India
                                                            </option>
                                                            <option value="ID">
                                                                Indonesia
                                                            </option>
                                                            <option value="IR">
                                                                Iran, Islamic
                                                                Republic of
                                                            </option>
                                                            <option value="IQ">
                                                                Iraq
                                                            </option>
                                                            <option value="IE">
                                                                Ireland
                                                            </option>
                                                            <option value="IM">
                                                                Isle of Man
                                                            </option>
                                                            <option value="IL">
                                                                Israel
                                                            </option>
                                                            <option value="IT">
                                                                Italy
                                                            </option>
                                                            <option value="JM">
                                                                Jamaica
                                                            </option>
                                                            <option value="JP">
                                                                Japan
                                                            </option>
                                                            <option value="JE">
                                                                Jersey
                                                            </option>
                                                            <option value="JO">
                                                                Jordan
                                                            </option>
                                                            <option value="KZ">
                                                                Kazakhstan
                                                            </option>
                                                            <option value="KE">
                                                                Kenya
                                                            </option>
                                                            <option value="KI">
                                                                Kiribati
                                                            </option>
                                                            <option value="KP">
                                                                Korea,
                                                                Democratic
                                                                People's
                                                                Republic of
                                                            </option>
                                                            <option value="KW">
                                                                Kuwait
                                                            </option>
                                                            <option value="KG">
                                                                Kyrgyzstan
                                                            </option>
                                                            <option value="LA">
                                                                Lao People's
                                                                Democratic
                                                                Republic
                                                            </option>
                                                            <option value="LV">
                                                                Latvia
                                                            </option>
                                                            <option value="LB">
                                                                Lebanon
                                                            </option>
                                                            <option value="LS">
                                                                Lesotho
                                                            </option>
                                                            <option value="LR">
                                                                Liberia
                                                            </option>
                                                            <option value="LY">
                                                                Libya
                                                            </option>
                                                            <option value="LI">
                                                                Liechtenstein
                                                            </option>
                                                            <option value="LT">
                                                                Lithuania
                                                            </option>
                                                            <option value="LU">
                                                                Luxembourg
                                                            </option>
                                                            <option value="MO">
                                                                Macao
                                                            </option>
                                                            <option value="MG">
                                                                Madagascar
                                                            </option>
                                                            <option value="MW">
                                                                Malawi
                                                            </option>
                                                            <option value="MY">
                                                                Malaysia
                                                            </option>
                                                            <option value="MV">
                                                                Maldives
                                                            </option>
                                                            <option value="ML">
                                                                Mali
                                                            </option>
                                                            <option value="MT">
                                                                Malta
                                                            </option>
                                                            <option value="MH">
                                                                Marshall Islands
                                                            </option>
                                                            <option value="MQ">
                                                                Martinique
                                                            </option>
                                                            <option value="MR">
                                                                Mauritania
                                                            </option>
                                                            <option value="MU">
                                                                Mauritius
                                                            </option>
                                                            <option value="MX">
                                                                Mexico
                                                            </option>
                                                            <option value="FM">
                                                                Micronesia,
                                                                Federated States
                                                                of
                                                            </option>
                                                            <option value="MD">
                                                                Moldova,
                                                                Republic of
                                                            </option>
                                                            <option value="MC">
                                                                Monaco
                                                            </option>
                                                            <option value="MN">
                                                                Mongolia
                                                            </option>
                                                            <option value="ME">
                                                                Montenegro
                                                            </option>
                                                            <option value="MS">
                                                                Montserrat
                                                            </option>
                                                            <option value="MA">
                                                                Morocco
                                                            </option>
                                                            <option value="MZ">
                                                                Mozambique
                                                            </option>
                                                            <option value="MM">
                                                                Myanmar
                                                            </option>
                                                            <option value="NA">
                                                                Namibia
                                                            </option>
                                                            <option value="NR">
                                                                Nauru
                                                            </option>
                                                            <option value="NP">
                                                                Nepal
                                                            </option>
                                                            <option value="NL">
                                                                Netherlands
                                                            </option>
                                                            <option value="NZ">
                                                                New Zealand
                                                            </option>
                                                            <option value="NI">
                                                                Nicaragua
                                                            </option>
                                                            <option value="NE">
                                                                Niger
                                                            </option>
                                                            <option value="NG">
                                                                Nigeria
                                                            </option>
                                                            <option value="NU">
                                                                Niue
                                                            </option>
                                                            <option value="NF">
                                                                Norfolk Island
                                                            </option>
                                                            <option value="MP">
                                                                Northern Mariana
                                                                Islands
                                                            </option>
                                                            <option value="NO">
                                                                Norway
                                                            </option>
                                                            <option value="OM">
                                                                Oman
                                                            </option>
                                                            <option value="PK">
                                                                Pakistan
                                                            </option>
                                                            <option value="PW">
                                                                Palau
                                                            </option>
                                                            <option value="PS">
                                                                Palestinian
                                                                Territory,
                                                                Occupied
                                                            </option>
                                                            <option value="PA">
                                                                Panama
                                                            </option>
                                                            <option value="PG">
                                                                Papua New Guinea
                                                            </option>
                                                            <option value="PY">
                                                                Paraguay
                                                            </option>
                                                            <option value="PE">
                                                                Peru
                                                            </option>
                                                            <option value="PH">
                                                                Philippines
                                                            </option>
                                                            <option value="PL">
                                                                Poland
                                                            </option>
                                                            <option value="PT">
                                                                Portugal
                                                            </option>
                                                            <option value="PR">
                                                                Puerto Rico
                                                            </option>
                                                            <option value="QA">
                                                                Qatar
                                                            </option>
                                                            <option value="RO">
                                                                Romania
                                                            </option>
                                                            <option value="RU">
                                                                Russian
                                                                Federation
                                                            </option>
                                                            <option value="RW">
                                                                Rwanda
                                                            </option>
                                                            <option value="BL">
                                                                Saint Barthélemy
                                                            </option>
                                                            <option value="KN">
                                                                Saint Kitts and
                                                                Nevis
                                                            </option>
                                                            <option value="LC">
                                                                Saint Lucia
                                                            </option>
                                                            <option value="MF">
                                                                Saint Martin
                                                                (French part)
                                                            </option>
                                                            <option value="VC">
                                                                Saint Vincent
                                                                and the
                                                                Grenadines
                                                            </option>
                                                            <option value="WS">
                                                                Samoa
                                                            </option>
                                                            <option value="SM">
                                                                San Marino
                                                            </option>
                                                            <option value="ST">
                                                                Sao Tome and
                                                                Principe
                                                            </option>
                                                            <option value="SA">
                                                                Saudi Arabia
                                                            </option>
                                                            <option value="SN">
                                                                Senegal
                                                            </option>
                                                            <option value="RS">
                                                                Serbia
                                                            </option>
                                                            <option value="SC">
                                                                Seychelles
                                                            </option>
                                                            <option value="SL">
                                                                Sierra Leone
                                                            </option>
                                                            <option value="SG">
                                                                Singapore
                                                            </option>
                                                            <option value="SX">
                                                                Sint Maarten
                                                                (Dutch part)
                                                            </option>
                                                            <option value="SK">
                                                                Slovakia
                                                            </option>
                                                            <option value="SI">
                                                                Slovenia
                                                            </option>
                                                            <option value="SB">
                                                                Solomon Islands
                                                            </option>
                                                            <option value="SO">
                                                                Somalia
                                                            </option>
                                                            <option value="ZA">
                                                                South Africa
                                                            </option>
                                                            <option value="KR">
                                                                South Korea
                                                            </option>
                                                            <option value="SS">
                                                                South Sudan
                                                            </option>
                                                            <option value="ES">
                                                                Spain
                                                            </option>
                                                            <option value="LK">
                                                                Sri Lanka
                                                            </option>
                                                            <option value="SD">
                                                                Sudan
                                                            </option>
                                                            <option value="SR">
                                                                Suriname
                                                            </option>
                                                            <option value="SZ">
                                                                Swaziland
                                                            </option>
                                                            <option value="SE">
                                                                Sweden
                                                            </option>
                                                            <option value="CH">
                                                                Switzerland
                                                            </option>
                                                            <option value="SY">
                                                                Syrian Arab
                                                                Republic
                                                            </option>
                                                            <option value="TW">
                                                                Taiwan, Province
                                                                of China
                                                            </option>
                                                            <option value="TJ">
                                                                Tajikistan
                                                            </option>
                                                            <option value="TZ">
                                                                Tanzania, United
                                                                Republic of
                                                            </option>
                                                            <option value="TH">
                                                                Thailand
                                                            </option>
                                                            <option value="TG">
                                                                Togo
                                                            </option>
                                                            <option value="TK">
                                                                Tokelau
                                                            </option>
                                                            <option value="TO">
                                                                Tonga
                                                            </option>
                                                            <option value="TT">
                                                                Trinidad and
                                                                Tobago
                                                            </option>
                                                            <option value="TN">
                                                                Tunisia
                                                            </option>
                                                            <option value="TR">
                                                                Turkey
                                                            </option>
                                                            <option value="TM">
                                                                Turkmenistan
                                                            </option>
                                                            <option value="TC">
                                                                Turks and Caicos
                                                                Islands
                                                            </option>
                                                            <option value="TV">
                                                                Tuvalu
                                                            </option>
                                                            <option value="UG">
                                                                Uganda
                                                            </option>
                                                            <option value="UA">
                                                                Ukraine
                                                            </option>
                                                            <option value="AE">
                                                                United Arab
                                                                Emirates
                                                            </option>
                                                            <option value="GB">
                                                                United Kingdom
                                                            </option>
                                                            <option
                                                                value="US"
                                                                selected
                                                            >
                                                                United States
                                                            </option>
                                                            <option value="UY">
                                                                Uruguay
                                                            </option>
                                                            <option value="UZ">
                                                                Uzbekistan
                                                            </option>
                                                            <option value="VU">
                                                                Vanuatu
                                                            </option>
                                                            <option value="VE">
                                                                Venezuela,
                                                                Bolivarian
                                                                Republic of
                                                            </option>
                                                            <option value="VN">
                                                                Vietnam
                                                            </option>
                                                            <option value="VI">
                                                                Virgin Islands
                                                            </option>
                                                            <option value="YE">
                                                                Yemen
                                                            </option>
                                                            <option value="ZM">
                                                                Zambia
                                                            </option>
                                                            <option value="ZW">
                                                                Zimbabwe
                                                            </option>
                                                        </select>
                                                    </div>

                                                    <div className="fv-row mb-7">
                                                        <div className="d-flex flex-stack">
                                                            <div className="me-5">
                                                                <label className="fs-6 fw-semibold">
                                                                    Use as a
                                                                    billing
                                                                    adderess?
                                                                </label>

                                                                <div className="fs-7 fw-semibold text-muted">
                                                                    If you need
                                                                    more info,
                                                                    please check
                                                                    budget
                                                                    planning
                                                                </div>
                                                            </div>

                                                            <label className="form-check form-switch form-check-custom form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    name="billing"
                                                                    type="checkbox"
                                                                    value="1"
                                                                    id="kt_modal_add_customer_billing"
                                                                    checked="checked"
                                                                />

                                                                <span
                                                                    className="form-check-label fw-semibold text-muted"
                                                                    for="kt_modal_add_customer_billing"
                                                                >
                                                                    Yes
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="modal-footer flex-center">
                                            <button
                                                type="reset"
                                                id="kt_modal_add_customer_cancel"
                                                className="btn btn-light me-3"
                                            >
                                                Discard
                                            </button>

                                            <button
                                                type="submit"
                                                id="kt_modal_add_customer_submit"
                                                className="btn btn-primary"
                                            >
                                                <span className="indicator-label">
                                                    Submit
                                                </span>
                                                <span className="indicator-progress">
                                                    Please wait...{" "}
                                                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div
                            className="modal fade"
                            id="kt_customers_export_modal"
                            tabindex="-1"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered mw-650px">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h2 className="fw-bold">
                                            Export Customers
                                        </h2>

                                        <div
                                            id="kt_customers_export_close"
                                            className="btn btn-icon btn-sm btn-active-icon-primary"
                                        >
                                            <i className="ki-duotone ki-cross fs-1">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                        </div>
                                    </div>

                                    <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                                        <form
                                            id="kt_customers_export_form"
                                            className="form"
                                            action="#"
                                        >
                                            <div className="fv-row mb-10">
                                                <label className="fs-5 fw-semibold form-label mb-5">
                                                    Select Export Format:
                                                </label>

                                                <select
                                                    name="country"
                                                    data-control="select2"
                                                    data-placeholder="Select a format"
                                                    data-hide-search="true"
                                                    className="form-select form-select-solid"
                                                >
                                                    <option value="excell">
                                                        Excel
                                                    </option>
                                                    <option value="pdf">
                                                        PDF
                                                    </option>
                                                    <option value="cvs">
                                                        CVS
                                                    </option>
                                                    <option value="zip">
                                                        ZIP
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="fv-row mb-10">
                                                <label className="fs-5 fw-semibold form-label mb-5">
                                                    Select Date Range:
                                                </label>

                                                <input
                                                    className="form-control form-control-solid"
                                                    placeholder="Pick a date"
                                                    name="date"
                                                />
                                            </div>

                                            <div className="row fv-row mb-15">
                                                <label className="fs-5 fw-semibold form-label mb-5">
                                                    Payment Type:
                                                </label>

                                                <div className="d-flex flex-column">
                                                    <label className="form-check form-check-custom form-check-sm form-check-solid mb-3">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value="1"
                                                            checked="checked"
                                                            name="payment_type"
                                                        />
                                                        <span className="form-check-label text-gray-600 fw-semibold">
                                                            All
                                                        </span>
                                                    </label>

                                                    <label className="form-check form-check-custom form-check-sm form-check-solid mb-3">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value="2"
                                                            checked="checked"
                                                            name="payment_type"
                                                        />
                                                        <span className="form-check-label text-gray-600 fw-semibold">
                                                            Visa
                                                        </span>
                                                    </label>

                                                    <label className="form-check form-check-custom form-check-sm form-check-solid mb-3">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value="3"
                                                            name="payment_type"
                                                        />
                                                        <span className="form-check-label text-gray-600 fw-semibold">
                                                            Mastercard
                                                        </span>
                                                    </label>

                                                    <label className="form-check form-check-custom form-check-sm form-check-solid">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value="4"
                                                            name="payment_type"
                                                        />
                                                        <span className="form-check-label text-gray-600 fw-semibold">
                                                            American Express
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <button
                                                    type="reset"
                                                    id="kt_customers_export_cancel"
                                                    className="btn btn-light me-3"
                                                >
                                                    Discard
                                                </button>
                                                <button
                                                    type="submit"
                                                    id="kt_customers_export_submit"
                                                    className="btn btn-primary"
                                                >
                                                    <span className="indicator-label">
                                                        Submit
                                                    </span>
                                                    <span className="indicator-progress">
                                                        Please wait...{" "}
                                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                    </span>
                                                </button>
                                            </div>
                                        </form>
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

export default List;
