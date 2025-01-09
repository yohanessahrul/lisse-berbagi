const Input = (props) => {
  const { type = "text", placeholder } = props;
  return (
    <input
      className={`
        block w-full rounded-md
      border-gray-300 shadow-sm
      focus:border-indigo-500
      focus:ring-indigo-500 sm:text-sm
      px-2
      py-2
      `}
      type={type}
      placeholder={placeholder} />
  )
}

export default Input;