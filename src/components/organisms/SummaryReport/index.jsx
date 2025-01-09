import ReportRow from "../../molecules/ReportRow";
import useSWR from 'swr';

function SummaryReport() {

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${import.meta.env.VITE_SPREADSHEET_ID}/values/Summary!A2:D4?key=${import.meta.env.VITE_API_KEY}`
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div className="p-4">Error...</div>;
  if (isLoading) return <div className="p-4">Loading...</div>;

  return (
    <div className="pt-8 pb-4">
      {data.values.map((item, i) => {
        const [label, bca, mandiri, total] = item;
        return (
          <div className="px-4 pb-4" key={i}>
            <ReportRow label={label} value={total} isHighlight={true} />
            <ReportRow label="Rek. Mandiri" value={mandiri} isHighlight={false} />
            <ReportRow label="Rek. BCA" value={bca} isHighlight={false} />
          </div>
        )
      })}
    </div>
  )
}

export default SummaryReport;