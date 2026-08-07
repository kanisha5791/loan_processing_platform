import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import DashboardCards from "./components/DashboardCards";
import LoanForm from "./components/LoanForm";
import LoanTable from "./components/LoanTable";

function App() {
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [refresh, setRefresh] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <DashboardCards />

      <LoanForm
        selectedLoan={selectedLoan}
        setSelectedLoan={setSelectedLoan}
        refresh={refresh}
        setRefresh={setRefresh}
      />

      <LoanTable
        setSelectedLoan={setSelectedLoan}
        refresh={refresh}
      />
    </>
  );
}

export default App;