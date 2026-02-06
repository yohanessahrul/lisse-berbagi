import ReportRow from "../../molecules/ReportRow";
import useSWR from 'swr';

const IncomeReport = () => {

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${import.meta.env.VITE_SPREADSHEET_ID}/values/${import.meta.env.VITE_PEMASUKAN_RANGE}?key=${import.meta.env.VITE_API_KEY}`
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div className="p-4">Error...</div>;
  if (isLoading) return <div className="p-4">Loading...</div>;

  return (
    <div className="pt-8 pb-4">
      {data.values.map((item, i) => {
        const [month, year, mandiri, bca, subtotal] = item;
        return (
          <div className="px-4 pb-4" key={i}>
            <ReportRow label={`${month} ${year}`} value={subtotal} isHighlight={true} />
            {mandiri && <ReportRow label="Rek. Mandiri" value={mandiri} isHighlight={false} /> }
            {bca && <ReportRow label="Rek. BCA" value={bca} isHighlight={false} /> }
          </div>
        )
      })}
    </div>
  )
}

export default IncomeReport