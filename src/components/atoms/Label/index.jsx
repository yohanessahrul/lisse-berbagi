const Label = (props) => {
  const {text} = props;
  return (
    <label className="block text-sm font-medium text-gray-700">{text}</label>
  )
}

export default Label;