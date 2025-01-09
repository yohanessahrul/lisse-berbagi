const TypoGraphy = (props) => {
  const { children, size = "16px", color = "text-black", weight="regular", lineHeight="", otherClass="" } = props;
  return (
    <p className={`${size} ${color} ${weight} ${lineHeight} ${otherClass}`}>{children}</p>
  )
}

export default TypoGraphy;