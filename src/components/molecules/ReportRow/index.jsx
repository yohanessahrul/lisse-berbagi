import TypoGraphy from "../../atoms/Typography";

const ReportRow = ({ label, value, isHighlight }) => {
  return (
    <div className="flex justify-between">
      <TypoGraphy size="14px" weight={isHighlight ? "font-bold" : "regular"} color={isHighlight ? "text-[#004F52]" : "text-[#909090]"}>{label}</TypoGraphy>
      <TypoGraphy size="14px" weight={isHighlight ? "font-bold" : "regular"} color={isHighlight ? "text-[#004F52]" : "text-[#909090]"}>{value}</TypoGraphy>
    </div>
  )
}

export default ReportRow;