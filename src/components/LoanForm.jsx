import { useState, useEffect } from "react";

function LoanForm({
  selectedLoan,
  setSelectedLoan,
  refresh,
  setRefresh,
}) {
  const [loan, setLoan] = useState({
    customerName: "",
    email: "",
    phone: "",
    loanAmount: "",
    loanType: "",
    loanTerm: "",
    status: "Pending",
  });

  useEffect(() => {
    if (selectedLoan) {
      setLoan(selectedLoan);
    } else {
      setLoan({
        customerName: "",
        email: "",
        phone: "",
        loanAmount: "",
        loanType: "",
        loanTerm: "",
        status: "Pending",
      });
    }
  }, [selectedLoan]);

  const handleSubmit = async () => {
    const url = selectedLoan
      ? `http://localhost:8080/loan/${selectedLoan.id}`
      : "http://localhost:8080/loan";

    const method = selectedLoan ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerName: loan.customerName,
          email: loan.email,
          phone: loan.phone,
          loanAmount: Number(loan.loanAmount),
          loanType: loan.loanType,
          loanTerm: Number(loan.loanTerm),
          status: loan.status,
        }),
      });

      if (response.ok) {
        alert(
          selectedLoan
            ? "Loan Updated Successfully!"
            : "Loan Submitted Successfully!"
        );

        setLoan({
          customerName: "",
          email: "",
          phone: "",
          loanAmount: "",
          loanType: "",
          loanTerm: "",
          status: "Pending",
        });

        setSelectedLoan(null);
        setRefresh(!refresh);
      } else {
        alert("Operation Failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error!");
    }
  };
  return (
    <div className="container my-5">
      <div
        className="card shadow-lg border-0 p-5"
        style={{ borderRadius: "20px" }}
      >
        <h2 className="text-center mb-4 fw-bold">
          {selectedLoan ? "Update Loan" : "Loan Application Form"}
        </h2>

        <div className="row">

          <div className="col-md-6 mb-3">
            <label className="form-label">Customer Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter customer name"
              value={loan.customerName}
              onChange={(e) =>
                setLoan({ ...loan, customerName: e.target.value })
              }
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={loan.email}
              onChange={(e) =>
                setLoan({ ...loan, email: e.target.value })
              }
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter phone number"
              value={loan.phone}
              onChange={(e) =>
                setLoan({ ...loan, phone: e.target.value })
              }
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Loan Amount</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter loan amount"
              value={loan.loanAmount}
              onChange={(e) =>
                setLoan({ ...loan, loanAmount: e.target.value })
              }
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Loan Type</label>
            <select
              className="form-select"
              value={loan.loanType}
              onChange={(e) =>
                setLoan({ ...loan, loanType: e.target.value })
              }
            >
              <option value="">Select Loan Type</option>
              <option value="Home Loan">Home Loan</option>
              <option value="Car Loan">Car Loan</option>
              <option value="Personal Loan">Personal Loan</option>
              <option value="Education Loan">Education Loan</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Loan Term (Years)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter loan term"
              value={loan.loanTerm}
              onChange={(e) =>
                setLoan({ ...loan, loanTerm: e.target.value })
              }
            />
          </div>

          <div className="text-center mt-3">
            <button
              type="button"
              className="btn btn-dark btn-lg"
              onClick={handleSubmit}
            >
              {selectedLoan ? "Update Loan" : "Submit Application"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LoanForm;