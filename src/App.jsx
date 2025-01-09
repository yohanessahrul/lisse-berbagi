import MainHeader from "./components/organisms/MainHeader";
import Summary from "./components/organisms/Summary";
import HomeEvents from "./components/organisms/HomeEvents";

function App() {
  return (
    <div className='bg-white flex justify-center'>
      <div className="lg:w-[500px] w-full bg-gray-100 h-full">
        <MainHeader />
        <Summary />
        <HomeEvents />
      </div>
    </div>
  )
}

export default App;
