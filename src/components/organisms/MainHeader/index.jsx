import TypoGraphy from "../../atoms/Typography";

const MainHeader = ({date, balance, handleTopupClick, handleAboutClick}) => {
  return (
    <div className="bg-[#FF2D55] px-[16px] pt-[25px] pb-[24px] rounded-b-[24px] ">
      <div className="flex justify-between items-center">
        <div>
          <TypoGraphy
            size="text-2xl"
            color="text-white"
            weight="font-bold"
          >
            Lisse Berbagi
          </TypoGraphy>
          <TypoGraphy
            size="text-sm"
            color="text-white"
          >
            Update Terakhir : {date}
          </TypoGraphy>
        </div>
        <div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full">
            <img className="cursor-pointer" onClick={() => handleAboutClick()} src="/images/info.svg" alt="information" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full bg-[#C80026] mt-4 rounded-[12px] p-[16px]">
        <div>
          <TypoGraphy
            size="text-md"
            color="text-white"
            weight="font-semibold"
          >
            Saldo tersedia
          </TypoGraphy>
          <TypoGraphy
            size="text-3xl"
            color="text-white"
            weight="font-bold"
          >
            Rp {balance}
          </TypoGraphy>
        </div>
        <div className="w-[48px] h-[48px] flex items-center justify-center rounded-[10px] bg-yellow-400">
          {/* <img className="cursor-pointer" onClick={() => handleTopupClick()} src="/images/import.svg" alt="import" /> */}
          <img className="cursor-pointer" src="/images/import.svg" alt="import" />
        </div>
      </div>
    </div>
  )
}

export default MainHeader;