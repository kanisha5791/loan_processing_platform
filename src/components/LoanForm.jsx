import { useState, useEffect } from "react";

function LoanForm({
  selectedLoan,
  setSelectedLoan,
  refresh,
  setRefresh,
}) {
  const emptyLoan = {
    customerName: "",
    email: "",
    phone: "",
    loanAmount: "",
    loanType: "",
    loanTerm: "",
    status: "Pending",
  };

  const [loan, setLoan] = useState(emptyLoan);

  useEffect(() => {
    if (selectedLoan) {
      setLoan({
        customerName: selectedLoan.customerName || "",
        email: selectedLoan.email || "",
        phone: selectedLoan.phone || "",
        loanAmount: selectedLoan.loanAmount || "",
        loanType: selectedLoan.loanType || "",
        loanTerm: selectedLoan.loanTerm || "",
        status: selectedLoan.status || "Pending",
      });
    } else {
      setLoan(emptyLoan);
    }
  }, [selectedLoan]);

  const handleSubmit = async () => {
    if (
      !loan.customerName.trim() ||
      !loan.email.trim() ||
      !loan.phone.trim() ||
      !loan.loanAmount ||
      !loan.loanType ||
      !loan.loanTerm ||
      !loan.status
    ) {
      alert("Please fill all fields!");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login again.");
      return;
    }

    const url = selectedLoan
      ? `http://localhost:8080/loan/${selectedLoan.id}`
      : "http://localhost:8080/loan";

    const method = selectedLoan ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method: method,

        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
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

        setLoan(emptyLoan);
        setSelectedLoan(null);

        setRefresh((prev) => !prev);
      } else {
        const errorText = await response.text();

        console.error("Backend Error:", errorText);

        if (response.status === 401) {
          alert("Session expired. Please login again.");
        } else if (response.status === 403) {
          alert("You are not authorized to perform this action.");
        } else {
          alert(`Operation Failed! Status: ${response.status}`);
        }
      }
    } catch (error) {
      console.error("Server Error:", error);

      alert(
        "Unable to connect to the server. Please check whether Spring Boot is running."
      );
    }
  };

  return (
    <div className="container my-5">
      <div
        className="card shadow-lg border-0 p-5"
        style={{ borderRadius: "20px" }}
      >
        <h2 className="text-center mb-4 fw-bold">
          {selectedLoan
            ? "Update Loan"
            : "Loan Application Form"}
        </h2>

        <div className="row">

          <div className="col-md-6 mb-3">
            <label className="form-label">
              Customer Name
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter customer name"
              value={loan.customerName}
              onChange={(e) =>
                setLoan({
                  ...loan,
                  customerName: e.target.value,
                })
              }
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={loan.email}
              onChange={(e) =>
                setLoan({
                  ...loan,
                  email: e.target.value,
                })
              }
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">
              Phone Number
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter phone number"
              value={loan.phone}
              onChange={(e) =>
                setLoan({
                  ...loan,
                  phone: e.target.value,
                })
              }
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">
              Loan Amount
            </label>

            <input
              type="number"
              className="form-control"
              placeholder="Enter loan amount"
              value={loan.loanAmount}
              onChange={(e) =>
                setLoan({
                  ...loan,
                  loanAmount: e.target.value,
                })
              }
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">
              Loan Type
            </label>

            <select
              className="form-select"
              value={loan.loanType}
              onChange={(e) =>
                setLoan({
                  ...loan,
                  loanType: e.target.value,
                })
              }
            >
              <option value="">
                Select Loan Type
              </option>

              <option value="Home Loan">
                Home Loan
              </option>

              <option value="Car Loan">
                Car Loan
              </option>

              <option value="Personal Loan">
                Personal Loan
              </option>

              <option value="Education Loan">
                Education Loan
              </option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">
              Loan Term (Years)
            </label>

            <input
              type="number"
              className="form-control"
              placeholder="Enter loan term"
              value={loan.loanTerm}
              onChange={(e) =>
                setLoan({
                  ...loan,
                  loanTerm: e.target.value,
                })
              }
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">
              Status
            </label>

            <select
              className="form-select"
              value={loan.status}
              onChange={(e) =>
                setLoan({
                  ...loan,
                  status: e.target.value,
                })
              }
            >
              <option value="Pending">
                Pending
              </option>

              <option value="Approved">
                Approved
              </option>

              <option value="Rejected">
                Rejected
              </option>
            </select>
          </div>

          <div className="text-center mt-3">

            <button
              type="button"
              className="btn btn-dark btn-lg me-2"
              onClick={handleSubmit}
            >
              {selectedLoan
                ? "Update Loan"
                : "Submit Application"}
            </button>

            {selectedLoan && (
              <button
                type="button"
                className="btn btn-secondary btn-lg"
                onClick={() => {
                  setSelectedLoan(null);
                  setLoan(emptyLoan);
                }}
              >
                Cancel
              </button>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanForm;