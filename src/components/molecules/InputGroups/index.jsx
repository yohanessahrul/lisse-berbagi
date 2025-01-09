import Input from "../../elements/Input";
import Label from "../../elements/Label"

const InputGroups = (props) => {
  const { label, type, placeholder } = props;
  return (
    <div className="flex flex-col">
      <Label text={label} />
      <Input type={type} placeholder={placeholder} />
    </div>
  )
}

export default InputGroups;