import { useEffect, useState } from "react";

function LoanTable({ setSelectedLoan, refresh }) {
  const [loans, setLoans] = useState([]);
  const [search, setSearch] = useState("");

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

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this loan?")) return;

    try {
      const response = await fetch(`http://localhost:8080/loan/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Loan Deleted Successfully!");
        setLoans((prev) => prev.filter((loan) => loan.id !== id));
      } else {
        alert("Delete Failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error!");
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0 p-4" style={{ borderRadius: "20px" }}>
        <h2 className="text-center mb-4 fw-bold">
          Recent Loan Applications
        </h2>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Customer Name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

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
                  <td>{loan.status}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => setSelectedLoan(loan)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(loan.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-danger fw-bold">
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