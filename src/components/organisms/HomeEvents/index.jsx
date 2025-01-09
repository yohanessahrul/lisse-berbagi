import TypoGraphy from "../../atoms/Typography";
import Event from "../../molecules/Event";
import { Link } from "react-router-dom";
import useSWR from 'swr';

const HomeEvents = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${import.meta.env.VITE_SPREADSHEET_ID}/values/Pengeluaran!A28:I30?key=${import.meta.env.VITE_API_KEY}`
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div className="p-4">Error...</div>;
  if (isLoading) return <div className="p-4">Loading...</div>;

  const rows = data.values;

  return (
    <div className="px-4 mt-6">
      <div className="flex justify-between items-center mb-[10px]">
        <TypoGraphy size="text-xl" weight="font-bold" color="text-[#33363F]">Daftar berbagi</TypoGraphy>
        <div className="flex items-center">
          <TypoGraphy size="text-md" weight="font-semibold" color="text-[#C80026]">
            <Link to="/events">Lihat Semua</Link>
          </TypoGraphy>
          <img className="mt-[3px]" src="/images/expand_right.svg" alt="expand" />
        </div>
      </div>
      <div className="w-full mb-4">
        {rows.map((item, i) => {
          return (
            <Event key={i} data={item} />)
        })}
      </div>
    </div>
  )
}

export default HomeEvents;