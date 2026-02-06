import Header from "../molecules/Header";
import Event from "../molecules/Event";
import useSWR from 'swr';

const Events = () => {
  window.scrollTo(0, 0);
  
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${import.meta.env.VITE_SPREADSHEET_ID}/values/Pengeluaran!A2:J54?key=${import.meta.env.VITE_API_KEY}`
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div className="p-4">Error...</div>;
  if (isLoading) return <div className="p-4">Loading...</div>;

  const rows = data.values;
  
  return (
    <div className='bg-white flex justify-center'>
      <div className="lg:w-[500px] w-full h-full">
        <div className="w-full relative bg-gray-100">
          <Header title="Riwayat Berbagi"/>
          <div className="w-full left-0 top-[66px] z-0">
            <div className="p-4">
              {rows.map((item, i) => {
                // eslint-disable-next-line no-unused-vars
                const [tanggal, nama, jenis, harga, jumlah, total, mandiri, bca] = item;
                if (jenis !== " --") {
                  return (
                    <Event key={i} data={item}/>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events;