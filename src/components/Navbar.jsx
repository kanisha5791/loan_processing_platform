function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow"
      style={{ backgroundColor: "#111827" }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#">
          🏦 Loan Processing Platform
        </a>

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
              <a className="nav-link text-white" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Apply Loan
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                View Loans
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contact
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;