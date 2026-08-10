function Navbar({ onHome, onApplyLoan, onViewLoans, onContact }) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow sticky-top"
      style={{ backgroundColor: "#111827" }}
    >
      <div className="container">

        <button
          className="navbar-brand fw-bold fs-4 border-0 bg-transparent text-white"
          onClick={onHome}
        >
          🏦 Loan Processing Platform
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <button
                className="nav-link text-white bg-transparent border-0"
                onClick={onHome}
              >
                Home
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link text-white bg-transparent border-0"
                onClick={onApplyLoan}
              >
                Apply Loan
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link text-white bg-transparent border-0"
                onClick={onViewLoans}
              >
                View Loans
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link text-white bg-transparent border-0"
                onClick={onContact}
              >
                Contact
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;