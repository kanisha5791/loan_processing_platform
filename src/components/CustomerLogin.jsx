import { useState } from "react";

function CustomerLogin({ onLogin }) {
  const [loanId, setLoanId] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loanId || !phone) {
      setError("Please enter Loan ID and Phone Number");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `http://localhost:8080/loan/customer/${loanId}?phone=${phone}`
      );

      if (!response.ok) {
        setError("Loan ID or Phone Number is incorrect");
        setLoading(false);
        return;
      }

      const loan = await response.json();

      onLogin(loan);
    } catch (error) {
      console.error(error);
      setError("Unable to connect to the server");
    }

    setLoading(false);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#f8fafc,#dbeafe)",
      }}
    >
      <div
        className="card shadow-lg border-0 p-5"
        style={{
          width: "420px",
          borderRadius: "20px",
        }}
      >
        <div className="text-center mb-4">
          <div style={{ fontSize: "55px" }}>👤</div>

          <h2 className="fw-bold">
            Customer Login
          </h2>

          <p className="text-muted">
            Track your loan application
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Loan ID
            </label>

            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter your Loan ID"
              value={loanId}
              onChange={(e) => setLoanId(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Phone Number
            </label>

            <input
              type="tel"
              className="form-control form-control-lg"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary btn-lg w-100 mt-2"
            disabled={loading}
          >
            {loading ? "Checking..." : "View My Loan"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomerLogin;