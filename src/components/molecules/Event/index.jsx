import TypoGraphy from "../../atoms/Typography";
import { Link } from "react-router-dom";

const Event = ({data}) => {
  // eslint-disable-next-line no-unused-vars
  const [tanggal, nama, jenis, harga, jumlah, total, mandiri, bca, eventID] = data;
  return (
    <>
    <Link to={`/events/${eventID}`}>
      <div className="w-full bg-white shadow-sm mb-4 flex justify-between rounded-lg overflow-hidden">
        <div className="p-4 flex">
          <div className="w-[37px] h-[37px] mr-4 flex items-center justify-center">
            <img src="/images/checklist.svg" alt="lisse-berbagi" />
          </div>
          <div className="">
            <TypoGraphy size="text-lg" weight="font-bold" color="text-[#004F52]">{nama}</TypoGraphy>
            <TypoGraphy size="text-sm" weight="font-regular" color="text-[#004F52]">{tanggal ? tanggal : "Tanggal tidak tercatat !"}</TypoGraphy>
          </div>
        </div>
        <div className="w-[60px] flex justify-center items-center flex-col">
          <img width={40} height={40} src={`/images/${jenis === "Nasi Box" ? "food.svg" : "bag.svg"}`} alt="expand" />
        </div>
      </div>
    </Link>
    </>
  )
}

export default Event;