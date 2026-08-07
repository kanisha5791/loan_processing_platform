import { useEffect, useState } from "react";

function DashboardCards() {
  const [stats, setStats] = useState({
    total: 0,
    approved: 0,
    pending: 0,
    rejected: 0,
  });

  useEffect(() => {
    fetch("http://localhost:8080/loan")
      .then((res) => res.json())
      .then((data) => {
        setStats({
          total: data.length,
          approved: data.filter(
            (loan) => loan.status === "Approved"
          ).length,
          pending: data.filter(
            (loan) => loan.status === "Pending"
          ).length,
          rejected: data.filter(
            (loan) => loan.status === "Rejected"
          ).length,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const cards = [
    {
      title: "Total Loans",
      value: stats.total,
      icon: "📋",
      color: "#2563eb",
    },
    {
      title: "Approved",
      value: stats.approved,
      icon: "✅",
      color: "#16a34a",
    },
    {
      title: "Pending",
      value: stats.pending,
      icon: "⏳",
      color: "#f59e0b",
    },
    {
      title: "Rejected",
      value: stats.rejected,
      icon: "❌",
      color: "#dc2626",
    },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div
              className="card shadow-lg border-0 text-center p-4"
              style={{
                borderRadius: "20px",
              }}
            >
              <div style={{ fontSize: "50px" }}>{card.icon}</div>

              <h2
                className="fw-bold mt-3"
                style={{ color: card.color }}
              >
                {card.value}
              </h2>

              <p className="text-muted fs-5">
                {card.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardCards;