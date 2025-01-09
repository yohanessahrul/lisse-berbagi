import Typography from "../../atoms/Typography";
import { useNavigate } from "react-router-dom";

const Header = ({ title }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white w-full h-16 p-[20px] flex sticky top-0 left-0 z-10 shadow-sm">
        <img src="/images/arrow-left.svg" alt="back" onClick={() => navigate(-1)} className="cursor-pointer mr-4" />
        <Typography size="text-xl" weight="font-semibold" color="text-black" >{title}</Typography>
      </div>
    </>
  )
}

export default Header;