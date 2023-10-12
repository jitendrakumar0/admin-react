import React from "react";
import Footer from "../../../components/footer/Footer";
import LeftSidebar from "../../../components/leftSidebar/LeftSidebar";
import Header from "../../../components/header/Header";

const View = () => {
  return (
    <>
      <div
        className="content fs-6 d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        <div className="toolbar" id="kt_toolbar">
          <div className=" container-fluid  d-flex flex-stack flex-wrap flex-sm-nowrap">
            <div className="d-flex flex-column align-items-start justify-content-center flex-wrap me-2">
              <h1 className="text-dark fw-bold my-1 fs-2">Customer Details</h1>

              <ul className="breadcrumb fw-semibold fs-base my-1">
                <li className="breadcrumb-item text-muted">
                  <a
                    href="../../index.html"
                    className="text-muted text-hover-primary"
                  >
                    Home{" "}
                  </a>
                </li>
                <li className="breadcrumb-item text-muted">Customers</li>
                <li className="breadcrumb-item text-dark">Customer Details</li>
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

        <div className="post fs-6 d-flex flex-column-fluid" id="kt_post">
          <div className=" container-xxl ">
            <div className="d-flex flex-column flex-xl-row">
              <div className="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
                <div className="card mb-5 mb-xl-8">
                  <div className="card-body pt-15">
                    <div className="d-flex flex-center flex-column mb-5">
                      <div className="symbol symbol-100px symbol-circle mb-7">
                        <img
                          src="../../assets/media/avatars/300-1.jpg"
                          alt="image"
                        />
                      </div>

                      <a
                        href="#"
                        className="fs-3 text-gray-800 text-hover-primary fw-bold mb-1"
                      >
                        Max Smith{" "}
                      </a>

                      <div className="fs-5 fw-semibold text-muted mb-6">
                        Software Enginer
                      </div>

                      <div className="d-flex flex-wrap flex-center">
                        <div className="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
                          <div className="fs-4 fw-bold text-gray-700">
                            <span className="w-75px">6,900</span>
                            <i className="ki-duotone ki-arrow-up fs-3 text-success">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                          </div>
                          <div className="fw-semibold text-muted">Earnings</div>
                        </div>

                        <div className="border border-gray-300 border-dashed rounded py-3 px-3 mx-4 mb-3">
                          <div className="fs-4 fw-bold text-gray-700">
                            <span className="w-50px">130</span>
                            <i className="ki-duotone ki-arrow-down fs-3 text-danger">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                          </div>
                          <div className="fw-semibold text-muted">Tasks</div>
                        </div>

                        <div className="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
                          <div className="fs-4 fw-bold text-gray-700">
                            <span className="w-50px">500</span>
                            <i className="ki-duotone ki-arrow-up fs-3 text-success">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                          </div>
                          <div className="fw-semibold text-muted">Hours</div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-stack fs-4 py-3">
                      <div
                        className="fw-bold rotate collapsible"
                        data-bs-toggle="collapse"
                        href="#kt_customer_view_details"
                        role="button"
                        aria-expanded="false"
                        aria-controls="kt_customer_view_details"
                      >
                        Details
                        <span className="ms-2 rotate-180">
                          <i className="ki-duotone ki-down fs-3"></i>{" "}
                        </span>
                      </div>
                      <span
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        title="Edit customer details"
                      >
                        <a
                          href="#"
                          className="btn btn-sm btn-light-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#kt_modal_update_customer"
                        >
                          Edit
                        </a>
                      </span>
                    </div>

                    <div className="separator separator-dashed my-3"></div>

                    <div
                      id="kt_customer_view_details"
                      className="collapse show"
                    >
                      <div className="py-5 fs-6">
                        <div className="badge badge-light-info d-inline">
                          Premium user
                        </div>

                        <div className="fw-bold mt-5">Account ID</div>
                        <div className="text-gray-600">ID-45453423</div>

                        <div className="fw-bold mt-5">Billing Email</div>
                        <div className="text-gray-600">
                          <a
                            href="#"
                            className="text-gray-600 text-hover-primary"
                          >
                            info@keenthemes.com
                          </a>
                        </div>

                        <div className="fw-bold mt-5">Billing Address</div>
                        <div className="text-gray-600">
                          101 Collin Street, <br />
                          Melbourne 3000 VIC
                          <br />
                          Australia
                        </div>

                        <div className="fw-bold mt-5">Language</div>
                        <div className="text-gray-600">English</div>

                        <div className="fw-bold mt-5">Upcoming Invoice</div>
                        <div className="text-gray-600">54238-8693</div>

                        <div className="fw-bold mt-5">Tax ID</div>
                        <div className="text-gray-600">TX-8674</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-5 mb-xl-8">
                  <div className="card-header border-0">
                    <div className="card-title">
                      <h3 className="fw-bold m-0">Connected Accounts</h3>
                    </div>
                  </div>

                  <div className="card-body pt-2">
                    <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
                      <div className="d-flex flex-stack flex-grow-1 ">
                        <div className=" fw-semibold">
                          <div className="fs-6 text-gray-700 ">
                            By connecting an account, you hereby agree to our{" "}
                            <a href="#" className="me-1">
                              privacy policy
                            </a>{" "}
                            and <a href="#">terms of use</a>.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="py-2">
                      <div className="d-flex flex-stack">
                        <div className="d-flex">
                          <img
                            src="../../assets/media/svg/brand-logos/google-icon.svg"
                            className="w-30px me-6"
                            alt=""
                          />
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="fs-5 text-dark text-hover-primary fw-bold"
                            >
                              Google
                            </a>
                            <div className="fs-6 fw-semibold text-muted">
                              Plan properly your workflow
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end">
                          <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              name="google"
                              type="checkbox"
                              value="1"
                              id="kt_modal_connected_accounts_google"
                              checked="checked"
                            />

                            <span
                              className="form-check-label fw-semibold text-muted"
                              for="kt_modal_connected_accounts_google"
                            ></span>
                          </label>
                        </div>
                      </div>

                      <div className="separator separator-dashed my-5"></div>

                      <div className="d-flex flex-stack">
                        <div className="d-flex">
                          <img
                            src="../../assets/media/svg/brand-logos/github.svg"
                            className="w-30px me-6"
                            alt=""
                          />
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="fs-5 text-dark text-hover-primary fw-bold"
                            >
                              Github
                            </a>
                            <div className="fs-6 fw-semibold text-muted">
                              Keep eye on on your Repositories
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end">
                          <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              name="github"
                              type="checkbox"
                              value="1"
                              id="kt_modal_connected_accounts_github"
                              checked="checked"
                            />

                            <span
                              className="form-check-label fw-semibold text-muted"
                              for="kt_modal_connected_accounts_github"
                            ></span>
                          </label>
                        </div>
                      </div>

                      <div className="separator separator-dashed my-5"></div>

                      <div className="d-flex flex-stack">
                        <div className="d-flex">
                          <img
                            src="../../assets/media/svg/brand-logos/slack-icon.svg"
                            className="w-30px me-6"
                            alt=""
                          />
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="fs-5 text-dark text-hover-primary fw-bold"
                            >
                              Slack
                            </a>
                            <div className="fs-6 fw-semibold text-muted">
                              Integrate Projects Discussions
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end">
                          <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              name="slack"
                              type="checkbox"
                              value="1"
                              id="kt_modal_connected_accounts_slack"
                            />

                            <span
                              className="form-check-label fw-semibold text-muted"
                              for="kt_modal_connected_accounts_slack"
                            ></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-footer border-0 d-flex justify-content-center pt-0">
                    <button className="btn btn-sm  btn-light-primary">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-lg-row-fluid ms-lg-15">
                <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-8">
                  <li className="nav-item">
                    <a
                      className="nav-link text-active-primary pb-4 active"
                      data-bs-toggle="tab"
                      href="#kt_customer_view_overview_tab"
                    >
                      Overview
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link text-active-primary pb-4"
                      data-bs-toggle="tab"
                      href="#kt_customer_view_overview_events_and_logs_tab"
                    >
                      Events & Logs
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link text-active-primary pb-4"
                      data-kt-countup-tabs="true"
                      data-bs-toggle="tab"
                      href="#kt_customer_view_overview_statements"
                    >
                      Statements
                    </a>
                  </li>

                  <li className="nav-item ms-auto">
                    <a
                      href="#"
                      className="btn btn-primary ps-7"
                      data-kt-menu-trigger="click"
                      data-kt-menu-attach="parent"
                      data-kt-menu-placement="bottom-end"
                    >
                      Actions
                      <i className="ki-duotone ki-down fs-2 me-0"></i>{" "}
                    </a>

                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold py-4 w-250px fs-6"
                      data-kt-menu="true"
                    >
                      <div className="menu-item px-5">
                        <div className="menu-content text-muted pb-2 px-5 fs-7 text-uppercase">
                          Payments
                        </div>
                      </div>

                      <div className="menu-item px-5">
                        <a href="#" className="menu-link px-5">
                          Create invoice
                        </a>
                      </div>

                      <div className="menu-item px-5">
                        <a href="#" className="menu-link flex-stack px-5">
                          Create payments
                          <span
                            className="ms-2"
                            data-bs-toggle="tooltip"
                            title="Specify a target name for future usage and reference"
                          >
                            <i className="ki-duotone ki-information fs-7">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                            </i>{" "}
                          </span>
                        </a>
                      </div>

                      <div
                        className="menu-item px-5"
                        data-kt-menu-trigger="hover"
                        data-kt-menu-placement="left-start"
                      >
                        <a href="#" className="menu-link px-5">
                          <span className="menu-title">Subscription</span>
                          <span className="menu-arrow"></span>
                        </a>

                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-5">
                              Apps
                            </a>
                          </div>

                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-5">
                              Billing
                            </a>
                          </div>

                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-5">
                              Statements
                            </a>
                          </div>

                          <div className="separator my-2"></div>

                          <div className="menu-item px-3">
                            <div className="menu-content px-3">
                              <label className="form-check form-switch form-check-custom form-check-solid">
                                <input
                                  className="form-check-input w-30px h-20px"
                                  type="checkbox"
                                  value=""
                                  name="notifications"
                                  checked
                                  id="kt_user_menu_notifications"
                                />
                                <span
                                  className="form-check-label text-muted fs-6"
                                  for="kt_user_menu_notifications"
                                >
                                  Notifications
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="separator my-3"></div>

                      <div className="menu-item px-5">
                        <div className="menu-content text-muted pb-2 px-5 fs-7 text-uppercase">
                          Account
                        </div>
                      </div>

                      <div className="menu-item px-5">
                        <a href="#" className="menu-link px-5">
                          Reports
                        </a>
                      </div>

                      <div className="menu-item px-5 my-1">
                        <a href="#" className="menu-link px-5">
                          Account Settings
                        </a>
                      </div>

                      <div className="menu-item px-5">
                        <a href="#" className="menu-link text-danger px-5">
                          Delete customer
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="kt_customer_view_overview_tab"
                    role="tabpanel"
                  >
                    <div className="card pt-4 mb-6 mb-xl-9">
                      <div className="card-header border-0">
                        <div className="card-title">
                          <h2>Payment Records</h2>
                        </div>

                        <div className="card-toolbar">
                          <button
                            type="button"
                            className="btn btn-sm btn-flex btn-light-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#kt_modal_add_payment"
                          >
                            <i className="ki-duotone ki-plus-square fs-3">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                            </i>
                            Add payment
                          </button>
                        </div>
                      </div>

                      <div className="card-body pt-0 pb-5">
                        <table
                          className="table align-middle table-row-dashed gy-5"
                          id="kt_table_customers_payment"
                        >
                          <thead className="border-bottom border-gray-200 fs-7 fw-bold">
                            <tr className="text-start text-muted text-uppercase gs-0">
                              <th className="min-w-100px">Invoice No.</th>
                              <th>Status</th>
                              <th>Amount</th>
                              <th className="min-w-100px">Date</th>
                              <th className="text-end min-w-100px pe-4">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="fs-6 fw-semibold text-gray-600">
                            <tr>
                              <td>
                                <a
                                  href="#"
                                  className="text-gray-600 text-hover-primary mb-1"
                                >
                                  9661-7923
                                </a>
                              </td>
                              <td>
                                <span className="badge badge-light-success">
                                  Successful
                                </span>
                              </td>
                              <td>$1,200.00</td>
                              <td>14 Dec 2020, 8:43 pm</td>
                              <td className="pe-0 text-end">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-light image.png btn-active-light-primary"
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
                                      href="#"
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
                                <a
                                  href="#"
                                  className="text-gray-600 text-hover-primary mb-1"
                                >
                                  9168-6332
                                </a>
                              </td>
                              <td>
                                <span className="badge badge-light-success">
                                  Successful
                                </span>
                              </td>
                              <td>$79.00</td>
                              <td>01 Dec 2020, 10:12 am</td>
                              <td className="pe-0 text-end">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-light image.png btn-active-light-primary"
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
                                      href="#"
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
                                <a
                                  href="#"
                                  className="text-gray-600 text-hover-primary mb-1"
                                >
                                  9624-7547
                                </a>
                              </td>
                              <td>
                                <span className="badge badge-light-success">
                                  Successful
                                </span>
                              </td>
                              <td>$5,500.00</td>
                              <td>12 Nov 2020, 2:01 pm</td>
                              <td className="pe-0 text-end">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-light image.png btn-active-light-primary"
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
                                      href="#"
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
                                <a
                                  href="#"
                                  className="text-gray-600 text-hover-primary mb-1"
                                >
                                  9486-6909
                                </a>
                              </td>
                              <td>
                                <span className="badge badge-light-warning">
                                  Pending
                                </span>
                              </td>
                              <td>$880.00</td>
                              <td>21 Oct 2020, 5:54 pm</td>
                              <td className="pe-0 text-end">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-light image.png btn-active-light-primary"
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
                                      href="#"
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
                                <a
                                  href="#"
                                  className="text-gray-600 text-hover-primary mb-1"
                                >
                                  8952-8875
                                </a>
                              </td>
                              <td>
                                <span className="badge badge-light-success">
                                  Successful
                                </span>
                              </td>
                              <td>$7,650.00</td>
                              <td>19 Oct 2020, 7:32 am</td>
                              <td className="pe-0 text-end">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-light image.png btn-active-light-primary"
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
                                      href="#"
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
                                <a
                                  href="#"
                                  className="text-gray-600 text-hover-primary mb-1"
                                >
                                  1027-3687
                                </a>
                              </td>
                              <td>
                                <span className="badge badge-light-success">
                                  Successful
                                </span>
                              </td>
                              <td>$375.00</td>
                              <td>23 Sep 2020, 12:38 am</td>
                              <td className="pe-0 text-end">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-light image.png btn-active-light-primary"
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
                                      href="#"
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
                                <a
                                  href="#"
                                  className="text-gray-600 text-hover-primary mb-1"
                                >
                                  2905-9074
                                </a>
                              </td>
                              <td>
                                <span className="badge badge-light-success">
                                  Successful
                                </span>
                              </td>
                              <td>$129.00</td>
                              <td>11 Sep 2020, 3:18 pm</td>
                              <td className="pe-0 text-end">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-light image.png btn-active-light-primary"
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
                                      href="#"
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
                                <a
                                  href="#"
                                  className="text-gray-600 text-hover-primary mb-1"
                                >
                                  6288-2572
                                </a>
                              </td>
                              <td>
                                <span className="badge badge-light-danger">
                                  Rejected
                                </span>
                              </td>
                              <td>$450.00</td>
                              <td>03 Sep 2020, 1:08 am</td>
                              <td className="pe-0 text-end">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-light image.png btn-active-light-primary"
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
                                      href="#"
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
                                <a
                                  href="#"
                                  className="text-gray-600 text-hover-primary mb-1"
                                >
                                  1303-7017
                                </a>
                              </td>
                              <td>
                                <span className="badge badge-light-warning">
                                  Pending
                                </span>
                              </td>
                              <td>$8,700.00</td>
                              <td>01 Sep 2020, 4:58 pm</td>
                              <td className="pe-0 text-end">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-light image.png btn-active-light-primary"
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
                                      href="#"
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

                    <div className="card pt-4 mb-6 mb-xl-9">
                      <div className="card-header border-0">
                        <div className="card-title">
                          <h2 className="fw-bold mb-0">Payment Methods</h2>
                        </div>

                        <div className="card-toolbar">
                          <a
                            href="#"
                            className="btn btn-sm btn-flex btn-light-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#kt_modal_new_card"
                          >
                            <i className="ki-duotone ki-plus-square fs-3">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                            </i>{" "}
                            Add new method
                          </a>
                        </div>
                      </div>

                      <div
                        id="kt_customer_view_payment_method"
                        className="card-body pt-0"
                      >
                        <div
                          className="py-0"
                          data-kt-customer-payment-method="row"
                        >
                          <div className="py-3 d-flex flex-stack flex-wrap">
                            <div
                              className="d-flex align-items-center collapsible  rotate"
                              data-bs-toggle="collapse"
                              href="#kt_customer_view_payment_method_1"
                              role="button"
                              aria-expanded="false"
                              aria-controls="kt_customer_view_payment_method_1"
                            >
                              <div className="me-3 rotate-90">
                                <i className="ki-duotone ki-right fs-3"></i>
                              </div>

                              <img
                                src="../../assets/media/svg/card-logos/mastercard.svg"
                                className="w-40px me-3"
                                alt=""
                              />

                              <div className="me-3">
                                <div className="d-flex align-items-center">
                                  <div className="text-gray-800 fw-bold">
                                    Mastercard
                                  </div>
                                  <div className="badge badge-light-primary ms-5">
                                    Primary
                                  </div>
                                </div>
                                <div className="text-muted">
                                  Expires Dec 2024
                                </div>
                              </div>
                            </div>

                            <div className="d-flex my-3 ms-9">
                              <a
                                href="#"
                                className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                                data-bs-toggle="modal"
                                data-bs-target="#kt_modal_new_card"
                              >
                                <span
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  title="Edit"
                                >
                                  <i className="ki-duotone ki-pencil fs-3">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>{" "}
                                </span>
                              </a>

                              <a
                                href="#"
                                className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                                data-bs-toggle="tooltip"
                                title="Delete"
                                data-kt-customer-payment-method="delete"
                              >
                                <i className="ki-duotone ki-trash fs-3">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                </i>{" "}
                              </a>

                              <a
                                href="#"
                                className="btn btn-icon btn-active-light-primary w-30px h-30px"
                                data-bs-toggle="tooltip"
                                title="More Options"
                                data-kt-menu-trigger="click"
                                data-kt-menu-placement="bottom-end"
                              >
                                <i className="ki-duotone ki-setting-3 fs-3">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                </i>{" "}
                              </a>

                              <div
                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-150px py-3"
                                data-kt-menu="true"
                              >
                                <div className="menu-item px-3">
                                  <a
                                    href="#"
                                    className="menu-link px-3"
                                    data-kt-payment-mehtod-action="set_as_primary"
                                  >
                                    Set as Primary
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            id="kt_customer_view_payment_method_1"
                            className="collapse show fs-6 ps-10"
                            data-bs-parent="#kt_customer_view_payment_method"
                          >
                            <div className="d-flex flex-wrap py-5">
                              <div className="flex-equal me-5">
                                <table className="table table-flush fw-semibold gy-1">
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Name
                                    </td>
                                    <td className="text-gray-800">
                                      Emma Smith
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Number
                                    </td>
                                    <td className="text-gray-800">**** 1902</td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Expires
                                    </td>
                                    <td className="text-gray-800">12/2024</td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Type
                                    </td>
                                    <td className="text-gray-800">
                                      Mastercard credit card
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Issuer
                                    </td>
                                    <td className="text-gray-800">VICBANK</td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      ID
                                    </td>
                                    <td className="text-gray-800">
                                      id_4325df90sdf8
                                    </td>
                                  </tr>
                                </table>
                              </div>

                              <div className="flex-equal ">
                                <table className="table table-flush fw-semibold gy-1">
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Billing address
                                    </td>
                                    <td className="text-gray-800">AU</td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Phone
                                    </td>
                                    <td className="text-gray-800">
                                      No phone provided
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Email
                                    </td>
                                    <td className="text-gray-800">
                                      <a
                                        href="#"
                                        className="text-gray-900 text-hover-primary"
                                      >
                                        smith@kpmg.com
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Origin
                                    </td>
                                    <td className="text-gray-800">
                                      Australia
                                      <div className="symbol symbol-20px symbol-circle ms-2">
                                        <img src="../../assets/media/flags/australia.svg" />
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      CVC check
                                    </td>
                                    <td className="text-gray-800">
                                      Passed{" "}
                                      <i className="ki-duotone ki-check-circle fs-2 text-success">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                      </i>
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="separator separator-dashed"></div>

                        <div
                          className="py-0"
                          data-kt-customer-payment-method="row"
                        >
                          <div className="py-3 d-flex flex-stack flex-wrap">
                            <div
                              className="d-flex align-items-center collapsible collapsed rotate"
                              data-bs-toggle="collapse"
                              href="#kt_customer_view_payment_method_2"
                              role="button"
                              aria-expanded="false"
                              aria-controls="kt_customer_view_payment_method_2"
                            >
                              <div className="me-3 rotate-90">
                                <i className="ki-duotone ki-right fs-3"></i>
                              </div>

                              <img
                                src="../../assets/media/svg/card-logos/visa.svg"
                                className="w-40px me-3"
                                alt=""
                              />

                              <div className="me-3">
                                <div className="d-flex align-items-center">
                                  <div className="text-gray-800 fw-bold">
                                    Visa
                                  </div>
                                </div>
                                <div className="text-muted">
                                  Expires Feb 2022
                                </div>
                              </div>
                            </div>

                            <div className="d-flex my-3 ms-9">
                              <a
                                href="#"
                                className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                                data-bs-toggle="modal"
                                data-bs-target="#kt_modal_new_card"
                              >
                                <span
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  title="Edit"
                                >
                                  <i className="ki-duotone ki-pencil fs-3">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>{" "}
                                </span>
                              </a>

                              <a
                                href="#"
                                className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                                data-bs-toggle="tooltip"
                                title="Delete"
                                data-kt-customer-payment-method="delete"
                              >
                                <i className="ki-duotone ki-trash fs-3">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                </i>{" "}
                              </a>

                              <a
                                href="#"
                                className="btn btn-icon btn-active-light-primary w-30px h-30px"
                                data-bs-toggle="tooltip"
                                title="More Options"
                                data-kt-menu-trigger="click"
                                data-kt-menu-placement="bottom-end"
                              >
                                <i className="ki-duotone ki-setting-3 fs-3">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                </i>{" "}
                              </a>

                              <div
                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-150px py-3"
                                data-kt-menu="true"
                              >
                                <div className="menu-item px-3">
                                  <a
                                    href="#"
                                    className="menu-link px-3"
                                    data-kt-payment-mehtod-action="set_as_primary"
                                  >
                                    Set as Primary
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            id="kt_customer_view_payment_method_2"
                            className="collapse  fs-6 ps-10"
                            data-bs-parent="#kt_customer_view_payment_method"
                          >
                            <div className="d-flex flex-wrap py-5">
                              <div className="flex-equal me-5">
                                <table className="table table-flush fw-semibold gy-1">
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Name
                                    </td>
                                    <td className="text-gray-800">
                                      Melody Macy
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Number
                                    </td>
                                    <td className="text-gray-800">**** 6928</td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Expires
                                    </td>
                                    <td className="text-gray-800">02/2022</td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Type
                                    </td>
                                    <td className="text-gray-800">
                                      Visa credit card
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Issuer
                                    </td>
                                    <td className="text-gray-800">ENBANK</td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      ID
                                    </td>
                                    <td className="text-gray-800">
                                      id_w2r84jdy723
                                    </td>
                                  </tr>
                                </table>
                              </div>

                              <div className="flex-equal ">
                                <table className="table table-flush fw-semibold gy-1">
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Billing address
                                    </td>
                                    <td className="text-gray-800">UK</td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Phone
                                    </td>
                                    <td className="text-gray-800">
                                      No phone provided
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Email
                                    </td>
                                    <td className="text-gray-800">
                                      <a
                                        href="#"
                                        className="text-gray-900 text-hover-primary"
                                      >
                                        melody@altbox.com
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Origin
                                    </td>
                                    <td className="text-gray-800">
                                      United Kingdom
                                      <div className="symbol symbol-20px symbol-circle ms-2">
                                        <img src="../../assets/media/flags/united-kingdom.svg" />
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      CVC check
                                    </td>
                                    <td className="text-gray-800">
                                      Passed{" "}
                                      <i className="ki-duotone ki-check fs-2 text-success"></i>
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="separator separator-dashed"></div>

                        <div
                          className="py-0"
                          data-kt-customer-payment-method="row"
                        >
                          <div className="py-3 d-flex flex-stack flex-wrap">
                            <div
                              className="d-flex align-items-center collapsible collapsed rotate"
                              data-bs-toggle="collapse"
                              href="#kt_customer_view_payment_method_3"
                              role="button"
                              aria-expanded="false"
                              aria-controls="kt_customer_view_payment_method_3"
                            >
                              <div className="me-3 rotate-90">
                                <i className="ki-duotone ki-right fs-3"></i>
                              </div>

                              <img
                                src="../../assets/media/svg/card-logos/american-express.svg"
                                className="w-40px me-3"
                                alt=""
                              />

                              <div className="me-3">
                                <div className="d-flex align-items-center">
                                  <div className="text-gray-800 fw-bold">
                                    American Express
                                  </div>
                                  <div className="badge badge-light-danger ms-5">
                                    Expired
                                  </div>
                                </div>
                                <div className="text-muted">
                                  Expires Aug 2021
                                </div>
                              </div>
                            </div>

                            <div className="d-flex my-3 ms-9">
                              <a
                                href="#"
                                className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                                data-bs-toggle="modal"
                                data-bs-target="#kt_modal_new_card"
                              >
                                <span
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  title="Edit"
                                >
                                  <i className="ki-duotone ki-pencil fs-3">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>{" "}
                                </span>
                              </a>

                              <a
                                href="#"
                                className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                                data-bs-toggle="tooltip"
                                title="Delete"
                                data-kt-customer-payment-method="delete"
                              >
                                <i className="ki-duotone ki-trash fs-3">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                </i>{" "}
                              </a>

                              <a
                                href="#"
                                className="btn btn-icon btn-active-light-primary w-30px h-30px"
                                data-bs-toggle="tooltip"
                                title="More Options"
                                data-kt-menu-trigger="click"
                                data-kt-menu-placement="bottom-end"
                              >
                                <i className="ki-duotone ki-setting-3 fs-3">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                </i>{" "}
                              </a>

                              <div
                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-150px py-3"
                                data-kt-menu="true"
                              >
                                <div className="menu-item px-3">
                                  <a
                                    href="#"
                                    className="menu-link px-3"
                                    data-kt-payment-mehtod-action="set_as_primary"
                                  >
                                    Set as Primary
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            id="kt_customer_view_payment_method_3"
                            className="collapse  fs-6 ps-10"
                            data-bs-parent="#kt_customer_view_payment_method"
                          >
                            <div className="d-flex flex-wrap py-5">
                              <div className="flex-equal me-5">
                                <table className="table table-flush fw-semibold gy-1">
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Name
                                    </td>
                                    <td className="text-gray-800">Max Smith</td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Number
                                    </td>
                                    <td className="text-gray-800">**** 3379</td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Expires
                                    </td>
                                    <td className="text-gray-800">08/2021</td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Type
                                    </td>
                                    <td className="text-gray-800">
                                      American express credit card
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Issuer
                                    </td>
                                    <td className="text-gray-800">USABANK</td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      ID
                                    </td>
                                    <td className="text-gray-800">
                                      id_89457jcje63
                                    </td>
                                  </tr>
                                </table>
                              </div>

                              <div className="flex-equal ">
                                <table className="table table-flush fw-semibold gy-1">
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Billing address
                                    </td>
                                    <td className="text-gray-800">US</td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Phone
                                    </td>
                                    <td className="text-gray-800">
                                      No phone provided
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Email
                                    </td>
                                    <td className="text-gray-800">
                                      <a
                                        href="#"
                                        className="text-gray-900 text-hover-primary"
                                      >
                                        max@kt.com
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      Origin
                                    </td>
                                    <td className="text-gray-800">
                                      United States of America
                                      <div className="symbol symbol-20px symbol-circle ms-2">
                                        <img src="../../assets/media/flags/united-states.svg" />
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-muted min-w-125px w-125px">
                                      CVC check
                                    </td>
                                    <td className="text-gray-800">
                                      Failed{" "}
                                      <i className="ki-duotone ki-cross fs-2 text-danger">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                      </i>
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card pt-4 mb-6 mb-xl-9">
                      <div className="card-header border-0">
                        <div className="card-title">
                          <h2 className="fw-bold">Credit Balance</h2>
                        </div>

                        <div className="card-toolbar">
                          <a
                            href="#"
                            className="btn btn-sm btn-flex btn-light-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#kt_modal_adjust_balance"
                          >
                            <i className="ki-duotone ki-pencil fs-3">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>{" "}
                            Adjust Balance
                          </a>
                        </div>
                      </div>

                      <div className="card-body pt-0">
                        <div className="fw-bold fs-2">
                          $32,487.57{" "}
                          <span className="text-muted fs-4 fw-semibold">
                            USD
                          </span>
                          <div className="fs-7 fw-normal text-muted">
                            Balance will increase the amount due on the
                            customer's next invoice.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card pt-2 mb-6 mb-xl-9">
                      <div className="card-header border-0">
                        <div className="card-title">
                          <h2>Invoices</h2>
                        </div>

                        <div className="card-toolbar m-0">
                          <ul
                            className="nav nav-stretch fs-5 fw-semibold nav-line-tabs nav-line-tabs-2x border-transparent"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <a
                                id="kt_referrals_year_tab"
                                className="nav-link text-active-primary active"
                                data-bs-toggle="tab"
                                role="tab"
                                href="#kt_customer_details_invoices_1"
                              >
                                This Year
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                id="kt_referrals_2019_tab"
                                className="nav-link text-active-primary ms-3"
                                data-bs-toggle="tab"
                                role="tab"
                                href="#kt_customer_details_invoices_2"
                              >
                                2020
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                id="kt_referrals_2018_tab"
                                className="nav-link text-active-primary ms-3"
                                data-bs-toggle="tab"
                                role="tab"
                                href="#kt_customer_details_invoices_3"
                              >
                                2019
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                id="kt_referrals_2017_tab"
                                className="nav-link text-active-primary ms-3"
                                data-bs-toggle="tab"
                                role="tab"
                                href="#kt_customer_details_invoices_4"
                              >
                                2018
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="card-body pt-0">
                        <div
                          id="kt_referred_users_tab_content"
                          className="tab-content"
                        >
                          <div
                            id="kt_customer_details_invoices_1"
                            className="py-0 tab-pane fade show active"
                            role="tabpanel"
                          >
                            <table
                              id="kt_customer_details_invoices_table_1"
                              className="table align-middle table-row-dashed fs-6 fw-bold gy-5"
                            >
                              <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bold">
                                <tr className="text-start text-muted gs-0">
                                  <th className="min-w-100px">Order ID</th>
                                  <th className="min-w-100px">Amount</th>
                                  <th className="min-w-100px">Status</th>
                                  <th className="min-w-125px">Date</th>
                                  <th className="min-w-100px text-end pe-7">
                                    Invoice
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="fs-6 fw-semibold text-gray-600">
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      102445788
                                    </a>
                                  </td>
                                  <td className="text-success">$38.00</td>
                                  <td>
                                    <span className="badge badge-light-success">
                                      Approved
                                    </span>
                                  </td>
                                  <td>Nov 01, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      423445721
                                    </a>
                                  </td>
                                  <td className="text-danger">$-2.60</td>
                                  <td>
                                    <span className="badge badge-light-info">
                                      In progress
                                    </span>
                                  </td>
                                  <td>Oct 24, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td className="text-success">$76.00</td>
                                  <td>
                                    <span className="badge badge-light-info">
                                      In progress
                                    </span>
                                  </td>
                                  <td>Oct 08, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td className="text-success">$5.00</td>
                                  <td>
                                    <span className="badge badge-light-warning">
                                      Pending
                                    </span>
                                  </td>
                                  <td>Sep 15, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      523445943
                                    </a>
                                  </td>
                                  <td className="text-danger">$-1.30</td>
                                  <td>
                                    <span className="badge badge-light-info">
                                      In progress
                                    </span>
                                  </td>
                                  <td>May 30, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      231445943
                                    </a>
                                  </td>
                                  <td className="text-success">$204.00</td>
                                  <td>
                                    <span className="badge badge-light-warning">
                                      Pending
                                    </span>
                                  </td>
                                  <td>Apr 22, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      426445943
                                    </a>
                                  </td>
                                  <td className="text-success">$31.00</td>
                                  <td>
                                    <span className="badge badge-light-danger">
                                      Rejected
                                    </span>
                                  </td>
                                  <td>Feb 09, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      984445943
                                    </a>
                                  </td>
                                  <td className="text-success">$52.00</td>
                                  <td>
                                    <span className="badge badge-light-warning">
                                      Pending
                                    </span>
                                  </td>
                                  <td>Nov 01, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      324442313
                                    </a>
                                  </td>
                                  <td className="text-danger">$-0.80</td>
                                  <td>
                                    <span className="badge badge-light-danger">
                                      Rejected
                                    </span>
                                  </td>
                                  <td>Jan 04, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div
                            id="kt_customer_details_invoices_2"
                            className="py-0 tab-pane fade "
                            role="tabpanel"
                          >
                            <table
                              id="kt_customer_details_invoices_table_2"
                              className="table align-middle table-row-dashed fs-6 fw-bold gy-5"
                            >
                              <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bold">
                                <tr className="text-start text-muted gs-0">
                                  <th className="min-w-100px">Order ID</th>
                                  <th className="min-w-100px">Amount</th>
                                  <th className="min-w-100px">Status</th>
                                  <th className="min-w-125px">Date</th>
                                  <th className="min-w-100px text-end pe-7">
                                    Invoice
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="fs-6 fw-semibold text-gray-600">
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      523445943
                                    </a>
                                  </td>
                                  <td className="text-danger">$-1.30</td>
                                  <td>
                                    <span className="badge badge-light-info">
                                      In progress
                                    </span>
                                  </td>
                                  <td>May 30, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      231445943
                                    </a>
                                  </td>
                                  <td className="text-success">$204.00</td>
                                  <td>
                                    <span className="badge badge-light-info">
                                      In progress
                                    </span>
                                  </td>
                                  <td>Apr 22, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      426445943
                                    </a>
                                  </td>
                                  <td className="text-success">$31.00</td>
                                  <td>
                                    <span className="badge badge-light-danger">
                                      Rejected
                                    </span>
                                  </td>
                                  <td>Feb 09, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      984445943
                                    </a>
                                  </td>
                                  <td className="text-success">$52.00</td>
                                  <td>
                                    <span className="badge badge-light-warning">
                                      Pending
                                    </span>
                                  </td>
                                  <td>Nov 01, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      324442313
                                    </a>
                                  </td>
                                  <td className="text-danger">$-0.80</td>
                                  <td>
                                    <span className="badge badge-light-success">
                                      Approved
                                    </span>
                                  </td>
                                  <td>Jan 04, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      102445788
                                    </a>
                                  </td>
                                  <td className="text-success">$38.00</td>
                                  <td>
                                    <span className="badge badge-light-success">
                                      Approved
                                    </span>
                                  </td>
                                  <td>Nov 01, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      423445721
                                    </a>
                                  </td>
                                  <td className="text-danger">$-2.60</td>
                                  <td>
                                    <span className="badge badge-light-success">
                                      Approved
                                    </span>
                                  </td>
                                  <td>Oct 24, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td className="text-success">$76.00</td>
                                  <td>
                                    <span className="badge badge-light-warning">
                                      Pending
                                    </span>
                                  </td>
                                  <td>Oct 08, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td className="text-success">$5.00</td>
                                  <td>
                                    <span className="badge badge-light-warning">
                                      Pending
                                    </span>
                                  </td>
                                  <td>Sep 15, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div
                            id="kt_customer_details_invoices_3"
                            className="py-0 tab-pane fade "
                            role="tabpanel"
                          >
                            <table
                              id="kt_customer_details_invoices_table_3"
                              className="table align-middle table-row-dashed fs-6 fw-bold gy-5"
                            >
                              <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bold">
                                <tr className="text-start text-muted gs-0">
                                  <th className="min-w-100px">Order ID</th>
                                  <th className="min-w-100px">Amount</th>
                                  <th className="min-w-100px">Status</th>
                                  <th className="min-w-125px">Date</th>
                                  <th className="min-w-100px text-end pe-7">
                                    Invoice
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="fs-6 fw-semibold text-gray-600">
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      426445943
                                    </a>
                                  </td>
                                  <td className="text-success">$31.00</td>
                                  <td>
                                    <span className="badge badge-light-info">
                                      In progress
                                    </span>
                                  </td>
                                  <td>Feb 09, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      984445943
                                    </a>
                                  </td>
                                  <td className="text-success">$52.00</td>
                                  <td>
                                    <span className="badge badge-light-danger">
                                      Rejected
                                    </span>
                                  </td>
                                  <td>Nov 01, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      324442313
                                    </a>
                                  </td>
                                  <td className="text-danger">$-0.80</td>
                                  <td>
                                    <span className="badge badge-light-danger">
                                      Rejected
                                    </span>
                                  </td>
                                  <td>Jan 04, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td className="text-success">$5.00</td>
                                  <td>
                                    <span className="badge badge-light-info">
                                      In progress
                                    </span>
                                  </td>
                                  <td>Sep 15, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      102445788
                                    </a>
                                  </td>
                                  <td className="text-success">$38.00</td>
                                  <td>
                                    <span className="badge badge-light-info">
                                      In progress
                                    </span>
                                  </td>
                                  <td>Nov 01, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      423445721
                                    </a>
                                  </td>
                                  <td className="text-danger">$-2.60</td>
                                  <td>
                                    <span className="badge badge-light-danger">
                                      Rejected
                                    </span>
                                  </td>
                                  <td>Oct 24, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td className="text-success">$76.00</td>
                                  <td>
                                    <span className="badge badge-light-info">
                                      In progress
                                    </span>
                                  </td>
                                  <td>Oct 08, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      523445943
                                    </a>
                                  </td>
                                  <td className="text-danger">$-1.30</td>
                                  <td>
                                    <span className="badge badge-light-info">
                                      In progress
                                    </span>
                                  </td>
                                  <td>May 30, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      231445943
                                    </a>
                                  </td>
                                  <td className="text-success">$204.00</td>
                                  <td>
                                    <span className="badge badge-light-success">
                                      Approved
                                    </span>
                                  </td>
                                  <td>Apr 22, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div
                            id="kt_customer_details_invoices_4"
                            className="py-0 tab-pane fade "
                            role="tabpanel"
                          >
                            <table
                              id="kt_customer_details_invoices_table_4"
                              className="table align-middle table-row-dashed fs-6 fw-bold gy-5"
                            >
                              <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bold">
                                <tr className="text-start text-muted gs-0">
                                  <th className="min-w-100px">Order ID</th>
                                  <th className="min-w-100px">Amount</th>
                                  <th className="min-w-100px">Status</th>
                                  <th className="min-w-125px">Date</th>
                                  <th className="min-w-100px text-end pe-7">
                                    Invoice
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="fs-6 fw-semibold text-gray-600">
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      102445788
                                    </a>
                                  </td>
                                  <td className="text-success">$38.00</td>
                                  <td>
                                    <span className="badge badge-light-danger">
                                      Rejected
                                    </span>
                                  </td>
                                  <td>Nov 01, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      423445721
                                    </a>
                                  </td>
                                  <td className="text-danger">$-2.60</td>
                                  <td>
                                    <span className="badge badge-light-success">
                                      Approved
                                    </span>
                                  </td>
                                  <td>Oct 24, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      102445788
                                    </a>
                                  </td>
                                  <td className="text-success">$38.00</td>
                                  <td>
                                    <span className="badge badge-light-danger">
                                      Rejected
                                    </span>
                                  </td>
                                  <td>Nov 01, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      423445721
                                    </a>
                                  </td>
                                  <td className="text-danger">$-2.60</td>
                                  <td>
                                    <span className="badge badge-light-success">
                                      Approved
                                    </span>
                                  </td>
                                  <td>Oct 24, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      426445943
                                    </a>
                                  </td>
                                  <td className="text-success">$31.00</td>
                                  <td>
                                    <span className="badge badge-light-danger">
                                      Rejected
                                    </span>
                                  </td>
                                  <td>Feb 09, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      984445943
                                    </a>
                                  </td>
                                  <td className="text-success">$52.00</td>
                                  <td>
                                    <span className="badge badge-light-success">
                                      Approved
                                    </span>
                                  </td>
                                  <td>Nov 01, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      324442313
                                    </a>
                                  </td>
                                  <td className="text-danger">$-0.80</td>
                                  <td>
                                    <span className="badge badge-light-danger">
                                      Rejected
                                    </span>
                                  </td>
                                  <td>Jan 04, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td className="text-success">$76.00</td>
                                  <td>
                                    <span className="badge badge-light-success">
                                      Approved
                                    </span>
                                  </td>
                                  <td>Oct 08, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td className="text-success">$76.00</td>
                                  <td>
                                    <span className="badge badge-light-danger">
                                      Rejected
                                    </span>
                                  </td>
                                  <td>Oct 08, 2020</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="kt_customer_view_overview_events_and_logs_tab"
                    role="tabpanel"
                  >
                    <div className="card pt-4 mb-6 mb-xl-9">
                      <div className="card-header border-0">
                        <div className="card-title">
                          <h2>Logs</h2>
                        </div>

                        <div className="card-toolbar">
                          <button
                            type="button"
                            className="btn btn-sm btn-light-primary"
                          >
                            <i className="ki-duotone ki-cloud-download fs-3">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Download Report
                          </button>
                        </div>
                      </div>

                      <div className="card-body py-0">
                        <div className="table-responsive">
                          <table
                            className="table align-middle table-row-dashed fw-semibold text-gray-600 fs-6 gy-5"
                            id="kt_table_customers_logs"
                          >
                            <tbody>
                              <tr>
                                <td className="min-w-70px">
                                  <div className="badge badge-light-success">
                                    200 OK
                                  </div>
                                </td>
                                <td>POST /v1/invoices/in_9161_4600/payment</td>
                                <td className="pe-0 text-end min-w-200px">
                                  25 Jul 2023, 2:40 pm
                                </td>
                              </tr>
                              <tr>
                                <td className="min-w-70px">
                                  <div className="badge badge-light-warning">
                                    404 WRN
                                  </div>
                                </td>
                                <td>
                                  POST /v1/customer/c_6525303982440/not_found
                                </td>
                                <td className="pe-0 text-end min-w-200px">
                                  24 Jun 2023, 5:20 pm
                                </td>
                              </tr>
                              <tr>
                                <td className="min-w-70px">
                                  <div className="badge badge-light-success">
                                    200 OK
                                  </div>
                                </td>
                                <td>POST /v1/invoices/in_5131_8604/payment</td>
                                <td className="pe-0 text-end min-w-200px">
                                  20 Dec 2023, 10:10 pm
                                </td>
                              </tr>
                              <tr>
                                <td className="min-w-70px">
                                  <div className="badge badge-light-success">
                                    200 OK
                                  </div>
                                </td>
                                <td>POST /v1/invoices/in_2629_4005/payment</td>
                                <td className="pe-0 text-end min-w-200px">
                                  22 Sep 2023, 9:23 pm
                                </td>
                              </tr>
                              <tr>
                                <td className="min-w-70px">
                                  <div className="badge badge-light-danger">
                                    500 ERR
                                  </div>
                                </td>
                                <td>POST /v1/invoice/in_5223_4026/invalid</td>
                                <td className="pe-0 text-end min-w-200px">
                                  10 Mar 2023, 8:43 pm
                                </td>
                              </tr>
                              <tr>
                                <td className="min-w-70px">
                                  <div className="badge badge-light-success">
                                    200 OK
                                  </div>
                                </td>
                                <td>POST /v1/invoices/in_9161_4600/payment</td>
                                <td className="pe-0 text-end min-w-200px">
                                  24 Jun 2023, 8:43 pm
                                </td>
                              </tr>
                              <tr>
                                <td className="min-w-70px">
                                  <div className="badge badge-light-danger">
                                    500 ERR
                                  </div>
                                </td>
                                <td>POST /v1/invoice/in_5223_4026/invalid</td>
                                <td className="pe-0 text-end min-w-200px">
                                  15 Apr 2023, 2:40 pm
                                </td>
                              </tr>
                              <tr>
                                <td className="min-w-70px">
                                  <div className="badge badge-light-success">
                                    200 OK
                                  </div>
                                </td>
                                <td>POST /v1/invoices/in_5131_8604/payment</td>
                                <td className="pe-0 text-end min-w-200px">
                                  19 Aug 2023, 2:40 pm
                                </td>
                              </tr>
                              <tr>
                                <td className="min-w-70px">
                                  <div className="badge badge-light-success">
                                    200 OK
                                  </div>
                                </td>
                                <td>POST /v1/invoices/in_9419_6410/payment</td>
                                <td className="pe-0 text-end min-w-200px">
                                  25 Jul 2023, 8:43 pm
                                </td>
                              </tr>
                              <tr>
                                <td className="min-w-70px">
                                  <div className="badge badge-light-danger">
                                    500 ERR
                                  </div>
                                </td>
                                <td>POST /v1/invoice/in_6505_7647/invalid</td>
                                <td className="pe-0 text-end min-w-200px">
                                  21 Feb 2023, 2:40 pm
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div className="card pt-4 mb-6 mb-xl-9">
                      <div className="card-header border-0">
                        <div className="card-title">
                          <h2>Events</h2>
                        </div>

                        <div className="card-toolbar">
                          <button
                            type="button"
                            className="btn btn-sm btn-light-primary"
                          >
                            <i className="ki-duotone ki-cloud-download fs-3">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Download Report
                          </button>
                        </div>
                      </div>

                      <div className="card-body py-0">
                        <table
                          className="table align-middle table-row-dashed fs-6 text-gray-600 fw-semibold gy-5"
                          id="kt_table_customers_events"
                        >
                          <tbody>
                            <tr>
                              <td className="min-w-400px">
                                <a
                                  href="#"
                                  className="text-gray-600 text-hover-primary me-1"
                                >
                                  Melody Macy
                                </a>{" "}
                                has made payment to{" "}
                                <a
                                  href="#"
                                  className="fw-bold text-gray-900 text-hover-primary"
                                >
                                  #XRS-45670
                                </a>
                              </td>
                              <td className="pe-0 text-gray-600 text-end min-w-200px">
                                20 Dec 2023, 5:20 pm
                              </td>
                            </tr>
                            <tr>
                              <td className="min-w-400px">
                                Invoice{" "}
                                <a
                                  href="#"
                                  className="fw-bold text-gray-900 text-hover-primary me-1"
                                >
                                  #KIO-45656
                                </a>{" "}
                                status has changed from{" "}
                                <span className="badge badge-light-succees me-1">
                                  In Transit
                                </span>{" "}
                                to{" "}
                                <span className="badge badge-light-success">
                                  Approved
                                </span>
                              </td>
                              <td className="pe-0 text-gray-600 text-end min-w-200px">
                                20 Dec 2023, 9:23 pm
                              </td>
                            </tr>
                            <tr>
                              <td className="min-w-400px">
                                <a
                                  href="#"
                                  className="text-gray-600 text-hover-primary me-1"
                                >
                                  Sean Bean
                                </a>{" "}
                                has made payment to{" "}
                                <a
                                  href="#"
                                  className="fw-bold text-gray-900 text-hover-primary"
                                >
                                  #XRS-45670
                                </a>
                              </td>
                              <td className="pe-0 text-gray-600 text-end min-w-200px">
                                15 Apr 2023, 10:30 am
                              </td>
                            </tr>
                            <tr>
                              <td className="min-w-400px">
                                <a
                                  href="#"
                                  className="text-gray-600 text-hover-primary me-1"
                                >
                                  Brian Cox
                                </a>{" "}
                                has made payment to{" "}
                                <a
                                  href="#"
                                  className="fw-bold text-gray-900 text-hover-primary"
                                >
                                  #OLP-45690
                                </a>
                              </td>
                              <td className="pe-0 text-gray-600 text-end min-w-200px">
                                10 Nov 2023, 10:30 am
                              </td>
                            </tr>
                            <tr>
                              <td className="min-w-400px">
                                <a
                                  href="#"
                                  className="text-gray-600 text-hover-primary me-1"
                                >
                                  Max Smith
                                </a>{" "}
                                has made payment to{" "}
                                <a
                                  href="#"
                                  className="fw-bold text-gray-900 text-hover-primary"
                                >
                                  #SDK-45670
                                </a>
                              </td>
                              <td className="pe-0 text-gray-600 text-end min-w-200px">
                                20 Jun 2023, 6:43 am
                              </td>
                            </tr>
                            <tr>
                              <td className="min-w-400px">
                                Invoice{" "}
                                <a
                                  href="#"
                                  className="fw-bold text-gray-900 text-hover-primary me-1"
                                >
                                  #SEP-45656
                                </a>{" "}
                                status has changed from{" "}
                                <span className="badge badge-light-warning me-1">
                                  Pending
                                </span>{" "}
                                to{" "}
                                <span className="badge badge-light-info">
                                  In Progress
                                </span>
                              </td>
                              <td className="pe-0 text-gray-600 text-end min-w-200px">
                                25 Jul 2023, 9:23 pm
                              </td>
                            </tr>
                            <tr>
                              <td className="min-w-400px">
                                Invoice{" "}
                                <a
                                  href="#"
                                  className="fw-bold text-gray-900 text-hover-primary me-1"
                                >
                                  #SEP-45656
                                </a>{" "}
                                status has changed from{" "}
                                <span className="badge badge-light-warning me-1">
                                  Pending
                                </span>{" "}
                                to{" "}
                                <span className="badge badge-light-info">
                                  In Progress
                                </span>
                              </td>
                              <td className="pe-0 text-gray-600 text-end min-w-200px">
                                21 Feb 2023, 9:23 pm
                              </td>
                            </tr>
                            <tr>
                              <td className="min-w-400px">
                                <a
                                  href="#"
                                  className="text-gray-600 text-hover-primary me-1"
                                >
                                  Sean Bean
                                </a>{" "}
                                has made payment to{" "}
                                <a
                                  href="#"
                                  className="fw-bold text-gray-900 text-hover-primary"
                                >
                                  #XRS-45670
                                </a>
                              </td>
                              <td className="pe-0 text-gray-600 text-end min-w-200px">
                                10 Mar 2023, 11:05 am
                              </td>
                            </tr>
                            <tr>
                              <td className="min-w-400px">
                                Invoice{" "}
                                <a
                                  href="#"
                                  className="fw-bold text-gray-900 text-hover-primary me-1"
                                >
                                  #SEP-45656
                                </a>{" "}
                                status has changed from{" "}
                                <span className="badge badge-light-warning me-1">
                                  Pending
                                </span>{" "}
                                to{" "}
                                <span className="badge badge-light-info">
                                  In Progress
                                </span>
                              </td>
                              <td className="pe-0 text-gray-600 text-end min-w-200px">
                                21 Feb 2023, 5:20 pm
                              </td>
                            </tr>
                            <tr>
                              <td className="min-w-400px">
                                Invoice{" "}
                                <a
                                  href="#"
                                  className="fw-bold text-gray-900 text-hover-primary me-1"
                                >
                                  #KIO-45656
                                </a>{" "}
                                status has changed from{" "}
                                <span className="badge badge-light-succees me-1">
                                  In Transit
                                </span>{" "}
                                to{" "}
                                <span className="badge badge-light-success">
                                  Approved
                                </span>
                              </td>
                              <td className="pe-0 text-gray-600 text-end min-w-200px">
                                10 Mar 2023, 8:43 pm
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="kt_customer_view_overview_statements"
                    role="tabpanel"
                  >
                    <div className="card mb-6 mb-xl-9">
                      <div className="card-header border-0">
                        <div className="card-title">
                          <h2>Earnings</h2>
                        </div>
                      </div>

                      <div className="card-body py-0">
                        <div className="fs-5 fw-semibold text-gray-500 mb-4">
                          Last 30 day earnings calculated. Apart from arranging
                          the order of topics.
                        </div>

                        <div className="d-flex flex-wrap flex-stack mb-5">
                          <div className="d-flex flex-wrap">
                            <div className="border border-dashed border-gray-300 w-150px rounded my-3 p-4 me-6">
                              <span className="fs-1 fw-bold text-gray-800 lh-1">
                                <span
                                  data-kt-countup="true"
                                  data-kt-countup-value="6,840"
                                  data-kt-countup-prefix="$"
                                >
                                  0
                                </span>
                                <i className="ki-duotone ki-arrow-up fs-1 text-success">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>{" "}
                              </span>
                              <span className="fs-6 fw-semibold text-muted d-block lh-1 pt-2">
                                Net Earnings
                              </span>
                            </div>

                            <div className="border border-dashed border-gray-300 w-125px rounded my-3 p-4 me-6">
                              <span className="fs-1 fw-bold text-gray-800 lh-1">
                                <span
                                  className=""
                                  data-kt-countup="true"
                                  data-kt-countup-value="16"
                                >
                                  0
                                </span>
                                %
                                <i className="ki-duotone ki-arrow-down fs-1 text-danger">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>{" "}
                              </span>
                              <span className="fs-6 fw-semibold text-muted d-block lh-1 pt-2">
                                Change
                              </span>
                            </div>

                            <div className="border border-dashed border-gray-300 w-150px rounded my-3 p-4 me-6">
                              <span className="fs-1 fw-bold text-gray-800 lh-1">
                                <span
                                  data-kt-countup="true"
                                  data-kt-countup-value="1,240"
                                  data-kt-countup-prefix="$"
                                >
                                  0
                                </span>
                                <span className="text-primary">--</span>
                              </span>
                              <span className="fs-6 fw-semibold text-muted d-block lh-1 pt-2">
                                Fees
                              </span>
                            </div>
                          </div>

                          <a
                            href="#"
                            className="btn btn-sm btn-light-primary flex-shrink-0"
                          >
                            Withdraw Earnings
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="card mb-6 mb-xl-9">
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Statement</h2>
                        </div>

                        <div className="card-toolbar">
                          <ul
                            className="nav nav-stretch fs-5 fw-semibold nav-line-tabs nav-line-tabs-2x border-transparent"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link text-active-primary active"
                                data-bs-toggle="tab"
                                role="tab"
                                href="#kt_customer_view_statement_1"
                              >
                                This Year
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link text-active-primary ms-3"
                                data-bs-toggle="tab"
                                role="tab"
                                href="#kt_customer_view_statement_2"
                              >
                                2020
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link text-active-primary ms-3"
                                data-bs-toggle="tab"
                                role="tab"
                                href="#kt_customer_view_statement_3"
                              >
                                2019
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link text-active-primary ms-3"
                                data-bs-toggle="tab"
                                role="tab"
                                href="#kt_customer_view_statement_4"
                              >
                                2018
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="card-body pb-5">
                        <div
                          id="kt_customer_view_statement_tab_content"
                          className="tab-content"
                        >
                          <div
                            id="kt_customer_view_statement_1"
                            className="py-0 tab-pane fade show active"
                            role="tabpanel"
                          >
                            <table
                              id="kt_customer_view_statement_table_1"
                              className="table align-middle table-row-dashed fs-6 text-gray-600 fw-semibold gy-4"
                            >
                              <thead className="border-bottom border-gray-200">
                                <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                                  <th className="w-125px">Date</th>
                                  <th className="w-100px">Order ID</th>
                                  <th className="w-300px">Details</th>
                                  <th className="w-100px">Amount</th>
                                  <th className="w-100px text-end pe-7">
                                    Invoice
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Nov 01, 2021</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      102445788
                                    </a>
                                  </td>
                                  <td>Darknight transparency 36 Icons Pack</td>
                                  <td className="text-success">$38.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Oct 24, 2021</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      423445721
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-2.60</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Oct 08, 2021</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td>Cartoon Mobile Emoji Phone Pack</td>
                                  <td className="text-success">$76.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Sep 15, 2021</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td>Iphone 12 Pro Mockup Mega Bundle</td>
                                  <td className="text-success">$5.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>May 30, 2021</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      523445943
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-1.30</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Apr 22, 2021</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      231445943
                                    </a>
                                  </td>
                                  <td>
                                    Parcel Shipping / Delivery Service App
                                  </td>
                                  <td className="text-success">$204.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Feb 09, 2021</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      426445943
                                    </a>
                                  </td>
                                  <td>Visual Design Illustration</td>
                                  <td className="text-success">$31.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Nov 01, 2021</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      984445943
                                    </a>
                                  </td>
                                  <td>Abstract Vusial Pack</td>
                                  <td className="text-success">$52.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Jan 04, 2021</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      324442313
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-0.80</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Nov 01, 2021</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      102445788
                                    </a>
                                  </td>
                                  <td>Darknight transparency 36 Icons Pack</td>
                                  <td className="text-success">$38.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Oct 24, 2021</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      423445721
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-2.60</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Oct 08, 2021</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td>Cartoon Mobile Emoji Phone Pack</td>
                                  <td className="text-success">$76.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Sep 15, 2021</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td>Iphone 12 Pro Mockup Mega Bundle</td>
                                  <td className="text-success">$5.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>May 30, 2021</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      523445943
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-1.30</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Apr 22, 2021</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      231445943
                                    </a>
                                  </td>
                                  <td>
                                    Parcel Shipping / Delivery Service App
                                  </td>
                                  <td className="text-success">$204.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Feb 09, 2021</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      426445943
                                    </a>
                                  </td>
                                  <td>Visual Design Illustration</td>
                                  <td className="text-success">$31.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Nov 01, 2021</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      984445943
                                    </a>
                                  </td>
                                  <td>Abstract Vusial Pack</td>
                                  <td className="text-success">$52.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Jan 04, 2021</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      324442313
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-0.80</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div
                            id="kt_customer_view_statement_2"
                            className="py-0 tab-pane fade "
                            role="tabpanel"
                          >
                            <table
                              id="kt_customer_view_statement_table_2"
                              className="table align-middle table-row-dashed fs-6 text-gray-600 fw-semibold gy-4"
                            >
                              <thead className="border-bottom border-gray-200">
                                <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                                  <th className="w-125px">Date</th>
                                  <th className="w-100px">Order ID</th>
                                  <th className="w-300px">Details</th>
                                  <th className="w-100px">Amount</th>
                                  <th className="w-100px text-end pe-7">
                                    Invoice
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>May 30, 2020</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      523445943
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-1.30</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Apr 22, 2020</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      231445943
                                    </a>
                                  </td>
                                  <td>
                                    Parcel Shipping / Delivery Service App
                                  </td>
                                  <td className="text-success">$204.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Feb 09, 2020</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      426445943
                                    </a>
                                  </td>
                                  <td>Visual Design Illustration</td>
                                  <td className="text-success">$31.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Nov 01, 2020</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      984445943
                                    </a>
                                  </td>
                                  <td>Abstract Vusial Pack</td>
                                  <td className="text-success">$52.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Jan 04, 2020</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      324442313
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-0.80</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Nov 01, 2020</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      102445788
                                    </a>
                                  </td>
                                  <td>Darknight transparency 36 Icons Pack</td>
                                  <td className="text-success">$38.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Oct 24, 2020</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      423445721
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-2.60</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Oct 08, 2020</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td>Cartoon Mobile Emoji Phone Pack</td>
                                  <td className="text-success">$76.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Sep 15, 2020</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td>Iphone 12 Pro Mockup Mega Bundle</td>
                                  <td className="text-success">$5.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>May 30, 2020</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      523445943
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-1.30</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Apr 22, 2020</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      231445943
                                    </a>
                                  </td>
                                  <td>
                                    Parcel Shipping / Delivery Service App
                                  </td>
                                  <td className="text-success">$204.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Feb 09, 2020</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      426445943
                                    </a>
                                  </td>
                                  <td>Visual Design Illustration</td>
                                  <td className="text-success">$31.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Nov 01, 2020</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      984445943
                                    </a>
                                  </td>
                                  <td>Abstract Vusial Pack</td>
                                  <td className="text-success">$52.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Jan 04, 2020</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      324442313
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-0.80</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Nov 01, 2020</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      102445788
                                    </a>
                                  </td>
                                  <td>Darknight transparency 36 Icons Pack</td>
                                  <td className="text-success">$38.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Oct 24, 2020</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      423445721
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-2.60</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Oct 08, 2020</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td>Cartoon Mobile Emoji Phone Pack</td>
                                  <td className="text-success">$76.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Sep 15, 2020</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td>Iphone 12 Pro Mockup Mega Bundle</td>
                                  <td className="text-success">$5.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div
                            id="kt_customer_view_statement_3"
                            className="py-0 tab-pane fade "
                            role="tabpanel"
                          >
                            <table
                              id="kt_customer_view_statement_table_3"
                              className="table align-middle table-row-dashed fs-6 text-gray-600 fw-semibold gy-4"
                            >
                              <thead className="border-bottom border-gray-200">
                                <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                                  <th className="w-125px">Date</th>
                                  <th className="w-100px">Order ID</th>
                                  <th className="w-300px">Details</th>
                                  <th className="w-100px">Amount</th>
                                  <th className="w-100px text-end pe-7">
                                    Invoice
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Feb 09, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      426445943
                                    </a>
                                  </td>
                                  <td>Visual Design Illustration</td>
                                  <td className="text-success">$31.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Nov 01, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      984445943
                                    </a>
                                  </td>
                                  <td>Abstract Vusial Pack</td>
                                  <td className="text-success">$52.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Jan 04, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      324442313
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-0.80</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Sep 15, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td>Iphone 12 Pro Mockup Mega Bundle</td>
                                  <td className="text-success">$5.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Nov 01, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      102445788
                                    </a>
                                  </td>
                                  <td>Darknight transparency 36 Icons Pack</td>
                                  <td className="text-success">$38.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Oct 24, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      423445721
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-2.60</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Oct 08, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td>Cartoon Mobile Emoji Phone Pack</td>
                                  <td className="text-success">$76.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>May 30, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      523445943
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-1.30</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Apr 22, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      231445943
                                    </a>
                                  </td>
                                  <td>
                                    Parcel Shipping / Delivery Service App
                                  </td>
                                  <td className="text-success">$204.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Feb 09, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      426445943
                                    </a>
                                  </td>
                                  <td>Visual Design Illustration</td>
                                  <td className="text-success">$31.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Nov 01, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      984445943
                                    </a>
                                  </td>
                                  <td>Abstract Vusial Pack</td>
                                  <td className="text-success">$52.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Jan 04, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      324442313
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-0.80</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Sep 15, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td>Iphone 12 Pro Mockup Mega Bundle</td>
                                  <td className="text-success">$5.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Nov 01, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      102445788
                                    </a>
                                  </td>
                                  <td>Darknight transparency 36 Icons Pack</td>
                                  <td className="text-success">$38.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Oct 24, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      423445721
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-2.60</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Oct 08, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td>Cartoon Mobile Emoji Phone Pack</td>
                                  <td className="text-success">$76.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>May 30, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      523445943
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-1.30</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Apr 22, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      231445943
                                    </a>
                                  </td>
                                  <td>
                                    Parcel Shipping / Delivery Service App
                                  </td>
                                  <td className="text-success">$204.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div
                            id="kt_customer_view_statement_4"
                            className="py-0 tab-pane fade "
                            role="tabpanel"
                          >
                            <table
                              id="kt_customer_view_statement_table_4"
                              className="table align-middle table-row-dashed fs-6 text-gray-600 fw-semibold gy-4"
                            >
                              <thead className="border-bottom border-gray-200">
                                <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                                  <th className="w-125px">Date</th>
                                  <th className="w-100px">Order ID</th>
                                  <th className="w-300px">Details</th>
                                  <th className="w-100px">Amount</th>
                                  <th className="w-100px text-end pe-7">
                                    Invoice
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Nov 01, 2018</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      102445788
                                    </a>
                                  </td>
                                  <td>Darknight transparency 36 Icons Pack</td>
                                  <td className="text-success">$38.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Oct 24, 2018</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      423445721
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-2.60</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Nov 01, 2018</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      102445788
                                    </a>
                                  </td>
                                  <td>Darknight transparency 36 Icons Pack</td>
                                  <td className="text-success">$38.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Oct 24, 2018</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      423445721
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-2.60</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Feb 09, 2018</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      426445943
                                    </a>
                                  </td>
                                  <td>Visual Design Illustration</td>
                                  <td className="text-success">$31.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Nov 01, 2018</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      984445943
                                    </a>
                                  </td>
                                  <td>Abstract Vusial Pack</td>
                                  <td className="text-success">$52.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Jan 04, 2018</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      324442313
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-0.80</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Oct 08, 2018</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td>Cartoon Mobile Emoji Phone Pack</td>
                                  <td className="text-success">$76.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Oct 08, 2018</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td>Cartoon Mobile Emoji Phone Pack</td>
                                  <td className="text-success">$76.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Feb 09, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      426445943
                                    </a>
                                  </td>
                                  <td>Visual Design Illustration</td>
                                  <td className="text-success">$31.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Nov 01, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      984445943
                                    </a>
                                  </td>
                                  <td>Abstract Vusial Pack</td>
                                  <td className="text-success">$52.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Jan 04, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      324442313
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-0.80</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Sep 15, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td>Iphone 12 Pro Mockup Mega Bundle</td>
                                  <td className="text-success">$5.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Nov 01, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      102445788
                                    </a>
                                  </td>
                                  <td>Darknight transparency 36 Icons Pack</td>
                                  <td className="text-success">$38.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Oct 24, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      423445721
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-2.60</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Oct 08, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      312445984
                                    </a>
                                  </td>
                                  <td>Cartoon Mobile Emoji Phone Pack</td>
                                  <td className="text-success">$76.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>May 30, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      523445943
                                    </a>
                                  </td>
                                  <td>Seller Fee</td>
                                  <td className="text-danger">$-1.30</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Apr 22, 2019</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="text-gray-600 text-hover-primary"
                                    >
                                      231445943
                                    </a>
                                  </td>
                                  <td>
                                    Parcel Shipping / Delivery Service App
                                  </td>
                                  <td className="text-success">$204.00</td>
                                  <td className="text-end">
                                    <button className="btn btn-sm btn-light btn-active-light-primary">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="kt_modal_add_payment"
              tabindex="-1"
              aria-hidden="true"
            >
              <div className="modal-dialog mw-650px">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2 className="fw-bold">Add a Payment Record</h2>

                    <div
                      id="kt_modal_add_payment_close"
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
                      id="kt_modal_add_payment_form"
                      className="form"
                      action="#"
                    >
                      <div className="fv-row mb-7">
                        <label className="fs-6 fw-semibold form-label mb-2">
                          <span className="required">Invoice Number</span>
                          <span
                            className="ms-2"
                            data-bs-toggle="tooltip"
                            title="The invoice number must be unique."
                          >
                            <i className="ki-duotone ki-information fs-7">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                            </i>{" "}
                          </span>
                        </label>

                        <input
                          type="text"
                          className="form-control form-control-solid"
                          name="invoice"
                          value=""
                        />
                      </div>

                      <div className="fv-row mb-7">
                        <label className="required fs-6 fw-semibold form-label mb-2">
                          Status
                        </label>

                        <select
                          className="form-select form-select-solid fw-bold"
                          name="status"
                          data-control="select2"
                          data-placeholder="Select an option"
                          data-hide-search="true"
                        >
                          <option></option>
                          <option value="0">Approved</option>
                          <option value="1">Pending</option>
                          <option value="2">Rejected</option>
                          <option value="3">In progress</option>
                          <option value="4">Completed</option>
                        </select>
                      </div>

                      <div className="fv-row mb-7">
                        <label className="required fs-6 fw-semibold form-label mb-2">
                          Invoice Amount
                        </label>

                        <input
                          type="text"
                          className="form-control form-control-solid"
                          name="amount"
                          value=""
                        />
                      </div>

                      <div className="fv-row mb-15">
                        <label className="fs-6 fw-semibold form-label mb-2">
                          <span className="required">
                            Additional Information
                          </span>
                          <span
                            className="ms-2"
                            data-bs-toggle="tooltip"
                            title="Information such as description of invoice or product purchased."
                          >
                            <i className="ki-duotone ki-information fs-7">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                            </i>{" "}
                          </span>
                        </label>

                        <textarea
                          className="form-control form-control-solid rounded-3"
                          name="additional_info"
                        ></textarea>
                      </div>

                      <div className="text-center">
                        <button
                          type="reset"
                          id="kt_modal_add_payment_cancel"
                          className="btn btn-light me-3"
                        >
                          Discard
                        </button>
                        <button
                          type="submit"
                          id="kt_modal_add_payment_submit"
                          className="btn btn-primary"
                        >
                          <span className="indicator-label">Submit</span>
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

            <div
              className="modal fade"
              id="kt_modal_adjust_balance"
              tabindex="-1"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered mw-650px">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2 className="fw-bold">Adjust Balance</h2>

                    <div
                      id="kt_modal_adjust_balance_close"
                      className="btn btn-icon btn-sm btn-active-icon-primary"
                    >
                      <i className="ki-duotone ki-cross fs-1">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                    </div>
                  </div>

                  <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                    <div className="d-flex text-center mb-9">
                      <div className="w-50 border border-dashed border-gray-300 rounded mx-2 p-4">
                        <div className="fs-6 fw-semibold mb-2 text-muted">
                          Current Balance
                        </div>
                        <div
                          className="fs-2 fw-bold"
                          kt-modal-adjust-balance="current_balance"
                        >
                          US$ 32,487.57
                        </div>
                      </div>
                      <div className="w-50 border border-dashed border-gray-300 rounded mx-2 p-4">
                        <div className="fs-6 fw-semibold mb-2 text-muted">
                          New Balance
                          <span
                            className="ms-2"
                            data-bs-toggle="tooltip"
                            title="Enter an amount to preview the new balance."
                          >
                            <i className="ki-duotone ki-information fs-7">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                            </i>{" "}
                          </span>
                        </div>
                        <div
                          className="fs-2 fw-bold"
                          kt-modal-adjust-balance="new_balance"
                        >
                          --
                        </div>
                      </div>
                    </div>

                    <form
                      id="kt_modal_adjust_balance_form"
                      className="form"
                      action="#"
                    >
                      <div className="fv-row mb-7">
                        <label className="required fs-6 fw-semibold form-label mb-2">
                          Adjustment type
                        </label>

                        <select
                          className="form-select form-select-solid fw-bold"
                          name="adjustment"
                          aria-label="Select an option"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_adjust_balance"
                          data-placeholder="Select an option"
                          data-hide-search="true"
                        >
                          <option></option>
                          <option value="1">Credit</option>
                          <option value="2">Debit</option>
                        </select>
                      </div>

                      <div className="fv-row mb-7">
                        <label className="required fs-6 fw-semibold form-label mb-2">
                          Amount
                        </label>

                        <input
                          id="kt_modal_inputmask"
                          type="text"
                          className="form-control form-control-solid"
                          name="amount"
                          value=""
                        />
                      </div>

                      <div className="fv-row mb-7">
                        <label className="fs-6 fw-semibold form-label mb-2">
                          Add adjustment note
                        </label>

                        <textarea className="form-control form-control-solid rounded-3 mb-5"></textarea>
                      </div>

                      <div className="fs-7 text-muted mb-15">
                        Please be aware that all manual balance changes will be
                        audited by the financial team every fortnight. Please
                        maintain your invoices and receipts until then. Thank
                        you.
                      </div>

                      <div className="text-center">
                        <button
                          type="reset"
                          id="kt_modal_adjust_balance_cancel"
                          className="btn btn-light me-3"
                        >
                          Discard
                        </button>
                        <button
                          type="submit"
                          id="kt_modal_adjust_balance_submit"
                          className="btn btn-primary"
                        >
                          <span className="indicator-label">Submit</span>
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

            <div
              className="modal fade"
              id="kt_modal_update_customer"
              tabindex="-1"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered mw-650px">
                <div className="modal-content">
                  <form
                    className="form"
                    action="#"
                    id="kt_modal_update_customer_form"
                  >
                    <div
                      className="modal-header"
                      id="kt_modal_update_customer_header"
                    >
                      <h2 className="fw-bold">Update Customer</h2>

                      <div
                        id="kt_modal_update_customer_close"
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
                        className="d-flex flex-column scroll-y me-n7 pe-7"
                        id="kt_modal_update_customer_scroll"
                        data-kt-scroll="true"
                        data-kt-scroll-activate="{default: false, lg: true}"
                        data-kt-scroll-max-height="auto"
                        data-kt-scroll-dependencies="#kt_modal_update_customer_header"
                        data-kt-scroll-wrappers="#kt_modal_update_customer_scroll"
                        data-kt-scroll-offset="300px"
                      >
                        <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
                          <div className="d-flex flex-stack flex-grow-1 ">
                            <div className=" fw-semibold">
                              <div className="fs-6 text-gray-700 ">
                                Updating customer details will receive a privacy
                                audit. For more info, please read our{" "}
                                <a href="#">Privacy Policy</a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="fw-bold fs-3 rotate collapsible mb-7"
                          data-bs-toggle="collapse"
                          href="#kt_modal_update_customer_user_info"
                          role="button"
                          aria-expanded="false"
                          aria-controls="kt_modal_update_customer_user_info"
                        >
                          User Information
                          <span className="ms-2 rotate-180">
                            <i className="ki-duotone ki-down fs-3"></i>{" "}
                          </span>
                        </div>

                        <div
                          id="kt_modal_update_customer_user_info"
                          className="collapse show"
                        >
                          <div className="mb-7">
                            <label className="fs-6 fw-semibold mb-2">
                              <span>Update Avatar</span>
                              <span
                                className="ms-1"
                                data-bs-toggle="tooltip"
                                title="Allowed file types: png, jpg, jpeg."
                              >
                                <i className="ki-duotone ki-information fs-7">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                </i>{" "}
                              </span>
                            </label>

                            <div className="mt-1">
                              <div
                                className="image-input image-input-outline"
                                data-kt-image-input="true"
                                style={{
                                  backgroundImage:
                                    "url('../../assets/media/svg/avatars/blank.svg')",
                                }}
                              >
                                <div
                                  className="image-input-wrapper w-125px h-125px"
                                  style={{
                                    backgroundImage:
                                      "url(../../assets/media/avatars/300-1.jpg)",
                                  }}
                                ></div>

                                <label
                                  className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                  data-kt-image-input-action="change"
                                  data-bs-toggle="tooltip"
                                  title="Change avatar"
                                >
                                  <i className="ki-duotone ki-pencil fs-7">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>

                                  <input
                                    type="file"
                                    name="avatar"
                                    accept=".png, .jpg, .jpeg"
                                  />
                                  <input type="hidden" name="avatar_remove" />
                                </label>

                                <span
                                  className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                  data-kt-image-input-action="cancel"
                                  data-bs-toggle="tooltip"
                                  title="Cancel avatar"
                                >
                                  <i className="ki-duotone ki-cross fs-2">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>{" "}
                                </span>

                                <span
                                  className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                  data-kt-image-input-action="remove"
                                  data-bs-toggle="tooltip"
                                  title="Remove avatar"
                                >
                                  <i className="ki-duotone ki-cross fs-2">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>{" "}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="fv-row mb-7">
                            <label className="fs-6 fw-semibold mb-2">
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
                              <span>Email</span>
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
                        </div>

                        <div
                          className="fw-bold fs-3 rotate collapsible collapsed mb-7"
                          data-bs-toggle="collapse"
                          href="#kt_modal_update_customer_billing_info"
                          role="button"
                          aria-expanded="false"
                          aria-controls="kt_modal_update_customer_billing_info"
                        >
                          Shipping Information
                          <span className="ms-2 rotate-180">
                            <i className="ki-duotone ki-down fs-3"></i>{" "}
                          </span>
                        </div>

                        <div
                          id="kt_modal_update_customer_billing_info"
                          className="collapse"
                        >
                          <div className="d-flex flex-column mb-7 fv-row">
                            <label className="fs-6 fw-semibold mb-2">
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
                            />
                          </div>

                          <div className="d-flex flex-column mb-7 fv-row">
                            <label className="fs-6 fw-semibold mb-2">
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
                              <label className="fs-6 fw-semibold mb-2">
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
                              <label className="fs-6 fw-semibold mb-2">
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
                              <span>Country</span>
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
                              data-dropdown-parent="#kt_modal_update_customer"
                              className="form-select form-select-solid fw-bold"
                            >
                              <option value="">Select a Country...</option>
                              <option value="AF">Afghanistan</option>
                              <option value="AX">Aland Islands</option>
                              <option value="AL">Albania</option>
                              <option value="DZ">Algeria</option>
                              <option value="AS">American Samoa</option>
                              <option value="AD">Andorra</option>
                              <option value="AO">Angola</option>
                              <option value="AI">Anguilla</option>
                              <option value="AG">Antigua and Barbuda</option>
                              <option value="AR">Argentina</option>
                              <option value="AM">Armenia</option>
                              <option value="AW">Aruba</option>
                              <option value="AU">Australia</option>
                              <option value="AT">Austria</option>
                              <option value="AZ">Azerbaijan</option>
                              <option value="BS">Bahamas</option>
                              <option value="BH">Bahrain</option>
                              <option value="BD">Bangladesh</option>
                              <option value="BB">Barbados</option>
                              <option value="BY">Belarus</option>
                              <option value="BE">Belgium</option>
                              <option value="BZ">Belize</option>
                              <option value="BJ">Benin</option>
                              <option value="BM">Bermuda</option>
                              <option value="BT">Bhutan</option>
                              <option value="BO">
                                Bolivia, Plurinational State of
                              </option>
                              <option value="BQ">
                                Bonaire, Sint Eustatius and Saba
                              </option>
                              <option value="BA">Bosnia and Herzegovina</option>
                              <option value="BW">Botswana</option>
                              <option value="BR">Brazil</option>
                              <option value="IO">
                                British Indian Ocean Territory
                              </option>
                              <option value="BN">Brunei Darussalam</option>
                              <option value="BG">Bulgaria</option>
                              <option value="BF">Burkina Faso</option>
                              <option value="BI">Burundi</option>
                              <option value="KH">Cambodia</option>
                              <option value="CM">Cameroon</option>
                              <option value="CA">Canada</option>
                              <option value="CV">Cape Verde</option>
                              <option value="KY">Cayman Islands</option>
                              <option value="CF">
                                Central African Republic
                              </option>
                              <option value="TD">Chad</option>
                              <option value="CL">Chile</option>
                              <option value="CN">China</option>
                              <option value="CX">Christmas Island</option>
                              <option value="CC">
                                Cocos (Keeling) Islands
                              </option>
                              <option value="CO">Colombia</option>
                              <option value="KM">Comoros</option>
                              <option value="CK">Cook Islands</option>
                              <option value="CR">Costa Rica</option>
                              <option value="CI">Côte d'Ivoire</option>
                              <option value="HR">Croatia</option>
                              <option value="CU">Cuba</option>
                              <option value="CW">Curaçao</option>
                              <option value="CZ">Czech Republic</option>
                              <option value="DK">Denmark</option>
                              <option value="DJ">Djibouti</option>
                              <option value="DM">Dominica</option>
                              <option value="DO">Dominican Republic</option>
                              <option value="EC">Ecuador</option>
                              <option value="EG">Egypt</option>
                              <option value="SV">El Salvador</option>
                              <option value="GQ">Equatorial Guinea</option>
                              <option value="ER">Eritrea</option>
                              <option value="EE">Estonia</option>
                              <option value="ET">Ethiopia</option>
                              <option value="FK">
                                Falkland Islands (Malvinas)
                              </option>
                              <option value="FJ">Fiji</option>
                              <option value="FI">Finland</option>
                              <option value="FR">France</option>
                              <option value="PF">French Polynesia</option>
                              <option value="GA">Gabon</option>
                              <option value="GM">Gambia</option>
                              <option value="GE">Georgia</option>
                              <option value="DE">Germany</option>
                              <option value="GH">Ghana</option>
                              <option value="GI">Gibraltar</option>
                              <option value="GR">Greece</option>
                              <option value="GL">Greenland</option>
                              <option value="GD">Grenada</option>
                              <option value="GU">Guam</option>
                              <option value="GT">Guatemala</option>
                              <option value="GG">Guernsey</option>
                              <option value="GN">Guinea</option>
                              <option value="GW">Guinea-Bissau</option>
                              <option value="HT">Haiti</option>
                              <option value="VA">
                                Holy See (Vatican City State)
                              </option>
                              <option value="HN">Honduras</option>
                              <option value="HK">Hong Kong</option>
                              <option value="HU">Hungary</option>
                              <option value="IS">Iceland</option>
                              <option value="IN">India</option>
                              <option value="ID">Indonesia</option>
                              <option value="IR">
                                Iran, Islamic Republic of
                              </option>
                              <option value="IQ">Iraq</option>
                              <option value="IE">Ireland</option>
                              <option value="IM">Isle of Man</option>
                              <option value="IL">Israel</option>
                              <option value="IT">Italy</option>
                              <option value="JM">Jamaica</option>
                              <option value="JP">Japan</option>
                              <option value="JE">Jersey</option>
                              <option value="JO">Jordan</option>
                              <option value="KZ">Kazakhstan</option>
                              <option value="KE">Kenya</option>
                              <option value="KI">Kiribati</option>
                              <option value="KP">
                                Korea, Democratic People's Republic of
                              </option>
                              <option value="KW">Kuwait</option>
                              <option value="KG">Kyrgyzstan</option>
                              <option value="LA">
                                Lao People's Democratic Republic
                              </option>
                              <option value="LV">Latvia</option>
                              <option value="LB">Lebanon</option>
                              <option value="LS">Lesotho</option>
                              <option value="LR">Liberia</option>
                              <option value="LY">Libya</option>
                              <option value="LI">Liechtenstein</option>
                              <option value="LT">Lithuania</option>
                              <option value="LU">Luxembourg</option>
                              <option value="MO">Macao</option>
                              <option value="MG">Madagascar</option>
                              <option value="MW">Malawi</option>
                              <option value="MY">Malaysia</option>
                              <option value="MV">Maldives</option>
                              <option value="ML">Mali</option>
                              <option value="MT">Malta</option>
                              <option value="MH">Marshall Islands</option>
                              <option value="MQ">Martinique</option>
                              <option value="MR">Mauritania</option>
                              <option value="MU">Mauritius</option>
                              <option value="MX">Mexico</option>
                              <option value="FM">
                                Micronesia, Federated States of
                              </option>
                              <option value="MD">Moldova, Republic of</option>
                              <option value="MC">Monaco</option>
                              <option value="MN">Mongolia</option>
                              <option value="ME">Montenegro</option>
                              <option value="MS">Montserrat</option>
                              <option value="MA">Morocco</option>
                              <option value="MZ">Mozambique</option>
                              <option value="MM">Myanmar</option>
                              <option value="NA">Namibia</option>
                              <option value="NR">Nauru</option>
                              <option value="NP">Nepal</option>
                              <option value="NL">Netherlands</option>
                              <option value="NZ">New Zealand</option>
                              <option value="NI">Nicaragua</option>
                              <option value="NE">Niger</option>
                              <option value="NG">Nigeria</option>
                              <option value="NU">Niue</option>
                              <option value="NF">Norfolk Island</option>
                              <option value="MP">
                                Northern Mariana Islands
                              </option>
                              <option value="NO">Norway</option>
                              <option value="OM">Oman</option>
                              <option value="PK">Pakistan</option>
                              <option value="PW">Palau</option>
                              <option value="PS">
                                Palestinian Territory, Occupied
                              </option>
                              <option value="PA">Panama</option>
                              <option value="PG">Papua New Guinea</option>
                              <option value="PY">Paraguay</option>
                              <option value="PE">Peru</option>
                              <option value="PH">Philippines</option>
                              <option value="PL">Poland</option>
                              <option value="PT">Portugal</option>
                              <option value="PR">Puerto Rico</option>
                              <option value="QA">Qatar</option>
                              <option value="RO">Romania</option>
                              <option value="RU">Russian Federation</option>
                              <option value="RW">Rwanda</option>
                              <option value="BL">Saint Barthélemy</option>
                              <option value="KN">Saint Kitts and Nevis</option>
                              <option value="LC">Saint Lucia</option>
                              <option value="MF">
                                Saint Martin (French part)
                              </option>
                              <option value="VC">
                                Saint Vincent and the Grenadines
                              </option>
                              <option value="WS">Samoa</option>
                              <option value="SM">San Marino</option>
                              <option value="ST">Sao Tome and Principe</option>
                              <option value="SA">Saudi Arabia</option>
                              <option value="SN">Senegal</option>
                              <option value="RS">Serbia</option>
                              <option value="SC">Seychelles</option>
                              <option value="SL">Sierra Leone</option>
                              <option value="SG">Singapore</option>
                              <option value="SX">
                                Sint Maarten (Dutch part)
                              </option>
                              <option value="SK">Slovakia</option>
                              <option value="SI">Slovenia</option>
                              <option value="SB">Solomon Islands</option>
                              <option value="SO">Somalia</option>
                              <option value="ZA">South Africa</option>
                              <option value="KR">South Korea</option>
                              <option value="SS">South Sudan</option>
                              <option value="ES">Spain</option>
                              <option value="LK">Sri Lanka</option>
                              <option value="SD">Sudan</option>
                              <option value="SR">Suriname</option>
                              <option value="SZ">Swaziland</option>
                              <option value="SE">Sweden</option>
                              <option value="CH">Switzerland</option>
                              <option value="SY">Syrian Arab Republic</option>
                              <option value="TW">
                                Taiwan, Province of China
                              </option>
                              <option value="TJ">Tajikistan</option>
                              <option value="TZ">
                                Tanzania, United Republic of
                              </option>
                              <option value="TH">Thailand</option>
                              <option value="TG">Togo</option>
                              <option value="TK">Tokelau</option>
                              <option value="TO">Tonga</option>
                              <option value="TT">Trinidad and Tobago</option>
                              <option value="TN">Tunisia</option>
                              <option value="TR">Turkey</option>
                              <option value="TM">Turkmenistan</option>
                              <option value="TC">
                                Turks and Caicos Islands
                              </option>
                              <option value="TV">Tuvalu</option>
                              <option value="UG">Uganda</option>
                              <option value="UA">Ukraine</option>
                              <option value="AE">United Arab Emirates</option>
                              <option value="GB">United Kingdom</option>
                              <option value="US">United States</option>
                              <option value="UY">Uruguay</option>
                              <option value="UZ">Uzbekistan</option>
                              <option value="VU">Vanuatu</option>
                              <option value="VE">
                                Venezuela, Bolivarian Republic of
                              </option>
                              <option value="VN">Vietnam</option>
                              <option value="VI">Virgin Islands</option>
                              <option value="YE">Yemen</option>
                              <option value="ZM">Zambia</option>
                              <option value="ZW">Zimbabwe</option>
                            </select>
                          </div>

                          <div className="fv-row mb-7">
                            <div className="d-flex flex-stack">
                              <div className="me-5">
                                <label className="fs-6 fw-semibold">
                                  Use as a billing adderess?
                                </label>

                                <div className="fs-7 fw-semibold text-muted">
                                  If you need more info, please check budget
                                  planning
                                </div>
                              </div>

                              <label className="form-check form-switch form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  name="billing"
                                  type="checkbox"
                                  value="1"
                                  id="kt_modal_update_customer_billing"
                                  checked="checked"
                                />

                                <span
                                  className="form-check-label fw-semibold text-muted"
                                  for="kt_modal_update_customer_billing"
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
                        id="kt_modal_update_customer_cancel"
                        className="btn btn-light me-3"
                      >
                        Discard
                      </button>

                      <button
                        type="submit"
                        id="kt_modal_update_customer_submit"
                        className="btn btn-primary"
                      >
                        <span className="indicator-label">Submit</span>
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
              id="kt_modal_new_card"
              tabindex="-1"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered mw-650px">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2>Add New Card</h2>

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

                  <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                    <form
                      id="kt_modal_new_card_form"
                      className="form"
                      action="#"
                    >
                      <div className="d-flex flex-column mb-7 fv-row">
                        <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                          <span className="required">Name On Card</span>
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
                              src="../../assets/media/svg/card-logos/visa.svg"
                              alt=""
                              className="h-25px"
                            />
                            <img
                              src="../../assets/media/svg/card-logos/mastercard.svg"
                              alt=""
                              className="h-25px"
                            />
                            <img
                              src="../../assets/media/svg/card-logos/american-express.svg"
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
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
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
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                                <option value="2032">2032</option>
                                <option value="2033">2033</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4 fv-row">
                          <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                            <span className="required">CVV</span>
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
                              minlength="3"
                              maxlength="4"
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
                            Save Card for further billing?
                          </label>
                          <div className="fs-7 fw-semibold text-muted">
                            If you need more info, please check budget planning
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

                      <div className="text-center pt-15">
                        <button
                          type="reset"
                          id="kt_modal_new_card_cancel"
                          className="btn btn-light me-3"
                        >
                          Discard
                        </button>
                        <button
                          type="submit"
                          id="kt_modal_new_card_submit"
                          className="btn btn-primary"
                        >
                          <span className="indicator-label">Submit</span>
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

export default View;
