function Hero({ onApplyNow, onViewLoans }) {
  return (
    <section
      className="d-flex align-items-center"
      style={{
        minHeight: "90vh",
        background: "linear-gradient(135deg,#f8fafc,#dbeafe)",
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6">

            <h1
              style={{
                fontSize: "55px",
                fontWeight: "700",
                color: "#111827",
                lineHeight: "1.2",
              }}
            >
              Welcome to <br />

              <span style={{ color: "#2563eb" }}>
                Loan Processing Platform
              </span>
            </h1>

            <p
              style={{
                color: "#6b7280",
                fontSize: "20px",
                marginTop: "20px",
              }}
            >
              Fast • Secure • Trusted Banking Services
            </p>

            <p
              style={{
                color: "#4b5563",
                marginTop: "15px",
              }}
            >
              Apply for Home, Car, Personal and Education Loans
              with a secure and user-friendly digital platform.
            </p>

            <div className="mt-4">

              {/* Apply Now */}
              <button
                className="btn btn-dark btn-lg me-3"
                onClick={onApplyNow}
              >
                Apply Now
              </button>

              {/* View Loans */}
              <button
                className="btn btn-outline-dark btn-lg"
                onClick={onViewLoans}
              >
                View Loans
              </button>

            </div>

          </div>

          <div className="col-lg-6 text-center">

            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700"
              alt="Loan"
              className="img-fluid rounded-4 shadow-lg"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;