
import { useState } from "react";
import Header from "../molecules/Header";
import 'swiper/css';
import SummaryReport from "../organisms/SummaryReport";
import IncomeReport from "../organisms/IncomeReport";
import { OutcomeReport } from "../organisms/OutcomeReport";

const Report = () => {
  const [activeReport, setaActiveReport] = useState("summary");

  return (
    <div className='bg-white flex justify-center'>
      <div className="lg:w-[500px] w-full h-full">
        <div className="w-full relative bg-gray-100  min-h-screen">
          <Header title="Laporan Keuangan"/>
          <div className="w-full left-0 top-[66px] z-0">
            <div className="w-full py-4 flex justify-center">
              <button onClick={() => setaActiveReport("summary")} className={`${activeReport !== "summary" ? "bg-white text-black" : "bg-gray-800 text-white"} py-2 px-6 table rounded-s-lg shadow-sm`}>Ringkasan</button>
              <button onClick={() => setaActiveReport("income")} className={`${activeReport !== "income" ? "bg-white text-black" : "bg-gray-800 text-white"} py-2 px-6 table shadow-sm`}>Masuk</button>
              <button onClick={() => setaActiveReport("outcome")} className={`${activeReport !== "outcome" ? "bg-white text-black" : "bg-gray-800 text-white"} py-2 px-6 table rounded-e-lg shadow-sm`}>Keluar</button>
            </div>
            <div className="bg-white mx-4 rounded-xl shadow-lg">
              {activeReport === "summary" && <SummaryReport />}
              {activeReport === "income" && <IncomeReport />}
              {activeReport === "outcome" && <OutcomeReport />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report;

