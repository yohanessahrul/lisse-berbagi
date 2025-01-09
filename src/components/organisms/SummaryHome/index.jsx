import { Link } from "react-router-dom";
import TypoGraphy from "../../atoms/Typography";

const Summary = ({contributors, totalEvents, totalExpenses}) => {
  return (
    <div className="px-4 mt-6">
      <div className="flex justify-between items-center mb-[10px]">
        <TypoGraphy size="text-xl" weight="font-bold" color="text-[#33363F]">Ringkasan</TypoGraphy>
        <div className="flex items-center">
          <TypoGraphy size="text-md" weight="font-semibold" color="text-[#C80026]">
            <Link to="/report">Lihat Laporan</Link>
          </TypoGraphy>
          <img className="mt-[3px]" src="/images/expand_right.svg" alt="expand" />
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="w-[calc((100%/2)-8px)] bg-white py-4 px-10 text-center rounded-lg shadow-sm">
          <TypoGraphy size="text-[45px]" lineHeight="leading-[54px]" weight="font-bold" color="text-[#2BA12F]">{totalEvents}</TypoGraphy>
          <TypoGraphy size="md:text-xl text-md" lineHeight="leading-5" weight="font-semibold" color="text-[#A4A4A4]">Riwayat<br/>berbagi</TypoGraphy>
        </div>
        <div className="w-[calc((100%/2)-8px)] bg-white py-4 px-10 text-center rounded-lg shadow-sm">
          <TypoGraphy size="text-[45px]" lineHeight="leading-[54px]" weight="font-bold" color="text-[#2BA12F]">{contributors}</TypoGraphy>
          <TypoGraphy size="md:text-xl text-md" lineHeight="leading-5" weight="font-semibold" color="text-[#A4A4A4]">Donatur<br/>Aktif</TypoGraphy>
        </div>
        <div className="w-[100%] bg-white py-4 px-10 text-center rounded-lg mt-4 shadow-sm">
          <TypoGraphy size="text-3xl" weight="font-semibold" color="text-[#2BA12F]">Rp {totalExpenses}</TypoGraphy>
          <TypoGraphy size="md:text-xl text-md" lineHeight="leading-5" weight="font-semibold" color="text-[#A4A4A4]">Dana tersalurkan</TypoGraphy>
        </div>
      </div>
    </div>
  )
}

export default Summary;