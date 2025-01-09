const Button = (props) => {
  const { children = "...", variant="bg-black" } = props;
  return (
    <button className={`${variant} text-white px-4 py-2 rounded-md`}>{children}</button>
  )
}

export default Button;