import ReportRow from "../../molecules/ReportRow";
import useSWR from 'swr';

export const OutcomeReport = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${import.meta.env.VITE_SPREADSHEET_ID}/values/Pengeluaran!A2:H54?key=${import.meta.env.VITE_API_KEY}`
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div className="p-4">Error...</div>;
  if (isLoading) return <div className="p-4">Loading...</div>;

  const rows = data.values;

  return (
    <div className="pt-8 pb-4">
      {rows.map((item, i) => {
        // eslint-disable-next-line no-unused-vars
        const [tanggal, nama, jenis, harga, jumlah, total, mandiri, bca] = item;
        return (
          <div className="px-4 pb-4" key={i}>
            <ReportRow label={`${nama}`} value={total} isHighlight={true} />
            {mandiri && <ReportRow label="Rek. Mandiri" value={mandiri} isHighlight={false} />}
            {bca && <ReportRow label="Rek. BCA" value={bca} isHighlight={false} />}
          </div>
        )
      })}
    </div>
  )
}
