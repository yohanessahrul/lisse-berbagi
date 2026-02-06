import { useParams } from "react-router-dom";
import Header from "../molecules/Header";
import useSWR from 'swr';

const DetailEvent = () => {
  window.scrollTo(0, 0);

  const { id } = useParams();

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${import.meta.env.VITE_SPREADSHEET_ID}/values/Pengeluaran!A2:J54?key=${import.meta.env.VITE_API_KEY}`
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div className="p-4">Error...</div>;
  if (isLoading) return <div className="p-4">Loading...</div>;

  const row = data.values.filter((item) => {
    // eslint-disable-next-line no-unused-vars
    const [tanggal, nama, jenis, harga, jumlah, total, mandiri, bca, eventID] = item;
    if (eventID === id) {
      return item
    }
  })

    // eslint-disable-next-line no-unused-vars
  const [tanggal, nama, jenis, harga, jumlah, total, mandiri, bca, eventID, detailInformasi] = row[0];

  const displayPrice = mandiri && bca;

  return (
    <div className='bg-white flex justify-center'>
      <div className="lg:w-[500px] w-full h-full">
        <div className="w-full relative bg-gray-100">
          <Header title={nama} />
          <div className="w-full min-h-screen left-0 top-[66px] z-0 bg-gray-100">
            <div className="w-full h-[250px] bg-gray-700">
              <img className="w-full h-full object-cover" src="/images/lisse-berbagi-thumbnail.png" alt="lisse-berbagi" />
            </div>
            <div className="p-4">
              <div className="w-full bg-white rounded-xl shadow-lg p-4">
                <div className="mb-4">
                  <h2 className="font-bold">Detail Informasi</h2>
                  <p className="text-gray-500">{detailInformasi ? detailInformasi : "-"}</p>
                </div>
                <div className="mb-4">
                  <h2 className="font-bold">Tanggal</h2>
                  <p className="text-gray-500">{tanggal ? tanggal : "Tanggal belum tercatat!"}</p>
                </div>
                <div className="mb-4">
                  <h2 className="font-bold">Jenis</h2>
                  <p className="text-gray-500">{jenis}</p>
                </div>
                <div className="mb-4">
                  <h2 className="font-bold">Total biaya</h2>
                  <p className="text-gray-500">{total}</p>
                </div>
                <div className="mb-4">
                  <h2 className="font-bold">Sumber Dana</h2>
                  {mandiri && <p className="text-gray-500">Mandiri {displayPrice && "-"+ mandiri}</p>}
                  {bca && <p className="text-gray-500">BCA {displayPrice && "-" + bca}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailEvent;