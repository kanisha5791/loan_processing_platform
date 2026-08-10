import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import DashboardCards from "./components/DashboardCards";
import LoanForm from "./components/LoanForm";
import LoanTable from "./components/LoanTable";
import Login from "./components/Login";
import CustomerLogin from "./components/CustomerLogin";

function App() {
  const [userType, setUserType] = useState(null);

  const [selectedLoan, setSelectedLoan] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const [customerLoan, setCustomerLoan] = useState(null);

  // Admin Login
  const handleAdminLogin = () => {
    setUserType("admin");
  };

  // Customer Login
  const handleCustomerLogin = (loan) => {
    setCustomerLoan(loan);
    setUserType("customer");
  };

  // Logout
  const handleLogout = () => {
    setUserType(null);
    setSelectedLoan(null);
    setCustomerLoan(null);
  };

  // Home
  const handleHome = () => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Apply Loan
  const handleApplyLoan = () => {
    setSelectedLoan(null);

    document.getElementById("loan-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // View Loans
  const handleViewLoans = () => {
    document.getElementById("loan-table")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Contact
  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Login Selection
  if (!userType) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg,#f8fafc,#dbeafe)",
          paddingTop: "60px",
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <div style={{ fontSize: "60px" }}>🏦</div>

            <h1 className="fw-bold">
              Digital Lending & Loan Processing
            </h1>

            <p className="text-muted fs-5">
              Choose your login type
            </p>
          </div>

          <div className="row justify-content-center">
            {/* Admin */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg border-0 p-4 text-center h-100">
                <div style={{ fontSize: "55px" }}>👨‍💼</div>

                <h3 className="fw-bold mt-3">
                  Admin
                </h3>

                <p className="text-muted">
                  Manage and process loan applications
                </p>

                <button
                  className="btn btn-dark btn-lg"
                  onClick={() => setUserType("adminLogin")}
                >
                  Admin Login
                </button>
              </div>
            </div>

            {/* Customer */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg border-0 p-4 text-center h-100">
                <div style={{ fontSize: "55px" }}>👤</div>

                <h3 className="fw-bold mt-3">
                  Customer
                </h3>

                <p className="text-muted">
                  Track your loan application status
                </p>

                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => setUserType("customerLogin")}
                >
                  Customer Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Admin Login Page
  if (userType === "adminLogin") {
    return (
      <Login
        onLogin={handleAdminLogin}
      />
    );
  }

  // Customer Login Page
  if (userType === "customerLogin") {
    return (
      <CustomerLogin
        onLogin={handleCustomerLogin}
      />
    );
  }

  // Customer Dashboard
  if (userType === "customer") {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg,#f8fafc,#dbeafe)",
        }}
      >
        <div
          style={{
            backgroundColor: "#111827",
            color: "white",
            padding: "15px 0",
          }}
        >
          <div className="container d-flex justify-content-between align-items-center">
            <h4 className="mb-0">
              🏦 Digital Lending Platform
            </h4>

            <button
              className="btn btn-danger btn-sm"
              onClick={handleLogout}
            >
              🚪 Logout
            </button>
          </div>
        </div>

        <div className="container py-5">
          <div className="text-center mb-5">
            <div style={{ fontSize: "60px" }}>
              👤
            </div>

            <h1 className="fw-bold">
              My Loan Status
            </h1>

            <p className="text-muted">
              Track your loan application
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="card shadow-lg border-0 p-4">
                <h3 className="fw-bold mb-4">
                  Loan Details
                </h3>

                <div className="row mb-3">
                  <div className="col-6">
                    <strong>Loan ID</strong>
                  </div>

                  <div className="col-6">
                    {customerLoan?.id}
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-6">
                    <strong>Customer Name</strong>
                  </div>

                  <div className="col-6">
                    {customerLoan?.customerName}
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-6">
                    <strong>Phone</strong>
                  </div>

                  <div className="col-6">
                    {customerLoan?.phone}
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-6">
                    <strong>Loan Type</strong>
                  </div>

                  <div className="col-6">
                    {customerLoan?.loanType}
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-6">
                    <strong>Loan Amount</strong>
                  </div>

                  <div className="col-6">
                    ₹ {customerLoan?.loanAmount}
                  </div>
                </div>

                <hr />

                <div className="text-center mt-3">
                  <h5 className="fw-bold">
                    Current Status
                  </h5>

                  <span
                    className={`badge fs-5 px-4 py-2 ${
                      customerLoan?.status === "Approved"
                        ? "bg-success"
                        : customerLoan?.status === "Rejected"
                        ? "bg-danger"
                        : "bg-warning text-dark"
                    }`}
                  >
                    {customerLoan?.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================
  // ADMIN MAIN APPLICATION
  // =========================

  return (
    <>
      <Navbar
        onHome={handleHome}
        onApplyLoan={handleApplyLoan}
        onViewLoans={handleViewLoans}
        onContact={handleContact}
      />

      {/* Admin bar */}
      <div
        style={{
          backgroundColor: "#f8fafc",
          borderBottom: "1px solid #e5e7eb",
          padding: "10px 0",
        }}
      >
        <div className="container d-flex justify-content-end align-items-center">
          <span
            className="me-3 fw-semibold"
            style={{ color: "#374151" }}
          >
            👨‍💼 Admin
          </span>

          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Home */}
      <div id="home">
        <Hero
          onApplyNow={handleApplyLoan}
          onViewLoans={handleViewLoans}
        />
      </div>

      {/* Dashboard */}
      <DashboardCards refresh={refresh} />

      {/* Loan Form */}
      <div id="loan-form">
        <LoanForm
          selectedLoan={selectedLoan}
          setSelectedLoan={setSelectedLoan}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      </div>

      {/* Loan Table */}
      <div id="loan-table">
        <LoanTable
          setSelectedLoan={setSelectedLoan}
          refresh={refresh}
        />
      </div>

      {/* Contact */}
      <section
        id="contact"
        className="py-5"
        style={{
          backgroundColor: "#111827",
          color: "white",
        }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-3">
            Contact Us
          </h2>

          <p className="mb-2">
            Have questions about your loan?
          </p>

          <p className="mb-1">
            📧 Email: support@loanplatform.com
          </p>

          <p className="mb-1">
            📞 Phone: +91 98765 43210
          </p>

          <p className="mb-0">
            🏦 Digital Lending & Loan Processing Platform
          </p>
        </div>
      </section>
    </>
  );
}

export default App;