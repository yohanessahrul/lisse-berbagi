import TypoGraphy from "../../../atoms/Typography";

const Topup = () => {
  return (
    <>
      <div className="flex flex-col align-center">
        <TypoGraphy size="text-xl" weight="font-bold" color="text-[#33363F]" otherClass="text-center">Pilihan Transfer</TypoGraphy>
        <div className="my-6">
          Anda dapat meng-<i>copy</i> nomor rekening yang anda pilih, kemudian konfirmasi dengan menekan tombol "Konfirmasi"
        </div>
        <div className="w-full bg-gray-800 rounded-xl mb-4 p-6 relative">
          <TypoGraphy size="text-lg" weight="font-semibold" color="text-white">Bank Mandiri</TypoGraphy>
          <TypoGraphy size="text-2xl" weight="font-semibold" color="text-yellow-300">1234567890</TypoGraphy>
          <TypoGraphy size="text-md" weight="normal" color="text-white">Eka</TypoGraphy>
          <div className="absolute right-[18px] bottom-[18px]">
            <button className="bg-[#2BA12F] text-white px-3 py-1 rounded-md">Konfirmasi</button>
          </div>
        </div>
        <div className="w-full bg-gray-800 rounded-xl mb-4 p-6 relative">
          <TypoGraphy size="text-lg" weight="font-semibold" color="text-white">Bank BCA</TypoGraphy>
          <TypoGraphy size="text-2xl" weight="font-semibold" color="text-yellow-300">1234567890</TypoGraphy>
          <TypoGraphy size="text-md" weight="normal" color="text-white">Risnauli Ambarita</TypoGraphy>
          <div className="absolute right-[18px] bottom-[18px]">
            <button className="bg-[#2BA12F] text-white px-3 py-1 rounded-md">Konfirmasi</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topup;
