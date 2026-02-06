import TypoGraphy from "../../../atoms/Typography";

const About = () => {
  return (
    <>
      <div className="flex flex-col align-center">
        <TypoGraphy size="text-xl" weight="font-bold" color="text-[#33363F]" otherClass="text-center">Tentang Lisse Berbagi</TypoGraphy>
        <div className="my-6">
          <p>
            Lisse berbagi adalah wadah amal bagi penghuni Cluster Lisse (Perumahan Metland Cibitung) yang diselenggarai oleh Ibu-ibu PKK.
            <br /> <br/> 
            Kegiatan amal ini diadakan sebulan 2 kali, yang biasanya dilakukan pada hari jumat. <br /><br/> 
            Secara kolektif kegiatan ini menampung dana dari para donatur melalui 2 rekening resmi, Mba Eka (Mandiri) dan Mba Risna (BCA).<br /><br/> 
            <br /><br/> Dengan hadirnya aplikasi ini diharapkan semakin banyak donatur yang berpartisipasi dan pengelolaan yang transparan.
          </p>
          <div className="bg-yellow-200 p-2 rounded-xl mt-6">
          Data yang ditampilkan saat ini tidak real-time. Perubahan data dapat terjadi apabila administrator melakukan update lebih lanjut pada Google Sheet.
          </div>
        </div>
        
      </div>
    </>
  )
}

export default About;