import { useEffect, useState } from "react";

function LoanTable({ setSelectedLoan, refresh }) {
  const [loans, setLoans] = useState([]);
  const [search, setSearch] = useState("");

  // FETCH LOANS
  useEffect(() => {
    const fetchLoans = async () => {
      try {
        let url = "http://localhost:8080/loan";

        if (search.trim() !== "") {
          url = `http://localhost:8080/loan/customer/${encodeURIComponent(
            search.trim()
          )}`;
        }

        console.log("Fetching:", url);

        const response = await fetch(url);

        if (!response.ok) {
          setLoans([]);
          return;
        }

        const data = await response.json();

        console.log("Response:", data);

        setLoans(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.error(error);
        setLoans([]);
      }
    };

    fetchLoans();
  }, [refresh, search]);

  // DELETE LOAN
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this loan?")) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/loan/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Loan Deleted Successfully!");

        setLoans((prev) =>
          prev.filter((loan) => loan.id !== id)
        );
      } else {
        alert("Delete Failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error!");
    }
  };

  // EDIT LOAN - GET FULL DETAILS
  const handleEdit = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/loan/${id}`
      );

      if (!response.ok) {
        alert("Loan details not found!");
        return;
      }

      const fullLoan = await response.json();

      console.log("Full Loan Details:", fullLoan);

      setSelectedLoan(fullLoan);
    } catch (error) {
      console.error(error);
      alert("Failed to load loan details!");
    }
  };

  // UPDATE STATUS
  const handleStatusChange = async (loan, newStatus) => {
    try {
      const updatedLoan = {
        ...loan,
        status: newStatus,
      };

      const response = await fetch(
        `http://localhost:8080/loan/${loan.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedLoan),
        }
      );

      if (response.ok) {
        const updatedData = await response.json();

        setLoans((prev) =>
          prev.map((item) =>
            item.id === loan.id ? updatedData : item
          )
        );

        alert("Status Updated Successfully!");
      } else {
        const errorText = await response.text();

        console.log("Status:", response.status);
        console.log("Backend Error:", errorText);

        alert(`Status Update Failed! Status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error!");
    }
  };

  return (
    <div className="container my-5">
      <div
        className="card shadow-lg border-0 p-4"
        style={{ borderRadius: "20px" }}
      >
        <h2 className="text-center mb-4 fw-bold">
          Recent Loan Applications
        </h2>

        {/* SEARCH */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Customer Name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* TABLE */}
        <table className="table table-hover text-center">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Loan Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {loans.length > 0 ? (
              loans.map((loan) => (
                <tr key={loan.id}>
                  <td>{loan.id}</td>

                  <td>{loan.customerName}</td>

                  <td>{loan.loanType}</td>

                  <td>₹{loan.loanAmount}</td>

                  {/* STATUS */}
                  <td>
                    <select
                      className={
                        loan.status === "Approved"
                          ? "form-select form-select-sm bg-success text-white"
                          : loan.status === "Rejected"
                          ? "form-select form-select-sm bg-danger text-white"
                          : "form-select form-select-sm bg-warning"
                      }
                      value={loan.status || "Pending"}
                      onChange={(e) =>
                        handleStatusChange(
                          loan,
                          e.target.value
                        )
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
                  </td>

                  {/* ACTIONS */}
                  <td>
                    {/* EDIT */}
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => handleEdit(loan.id)}
                    >
                      Edit
                    </button>

                    {/* DELETE */}
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        handleDelete(loan.id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-danger fw-bold"
                >
                  No Results Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LoanTable;