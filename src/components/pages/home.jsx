import MainHeader from "../organisms/MainHeader";
import SummaryHome from "../organisms/SummaryHome";
import HomeEvents from "../organisms/HomeEvents";
import useSWR from 'swr';
import { useEffect, useState } from "react";
import Modal from "../molecules/Modal";
import Topup from "../molecules/Modal/Topup";
import About from "../molecules/Modal/About";

const Home = () => {
  window.scrollTo(0, 0);
  const [isOpenTopupModal, setIsOpenTopupModal] = useState(false);
  const [isOpenAboutModal, setIsOpenAboutModal] = useState(false)

  useEffect(() => {
    if (isOpenTopupModal || isOpenAboutModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = ''; // Reset scroll on unmount
    };

  }, [isOpenTopupModal, isOpenAboutModal])

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${import.meta.env.VITE_SPREADSHEET_ID}/values/Summary!A2:D7?key=${import.meta.env.VITE_API_KEY}`
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div className="p-4">Error...</div>;
  if (isLoading) return <div className="p-4">Loading...</div>;

  const rows = data.values;

  return (
    <div className='bg-white flex justify-center'>
      <div className="lg:w-[500px] w-full bg-gray-100 z-0 relative">
        <Modal isOpenTopupModal={isOpenTopupModal} setIsOpenTopupModal={setIsOpenTopupModal}>
          <Topup />
        </Modal>
        <Modal isOpenTopupModal={isOpenAboutModal} setIsOpenTopupModal={setIsOpenAboutModal}>
          <About />
        </Modal>
        
        <MainHeader date={rows[5][1]} balance={rows[2][3]} handleAboutClick={() => setIsOpenAboutModal(!isOpenAboutModal)} handleTopupClick={() => setIsOpenTopupModal(!isOpenTopupModal)} />
        <SummaryHome contributors={rows[3][1]} totalEvents={rows[4][1]} totalExpenses={rows[1][3]} />
        <HomeEvents totalEvents={rows[4][1]}/>

      </div>
      
    </div>
  )
}

export default Home;