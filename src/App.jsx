import About from "./components/About";
import MainBg from "./components/MainBg";
import Navbar from "./components/Navbar";
import OverView from "./components/OverView";

function App() {
  return (
    <>
      <div className="h-screen  dark:bg-gray-800 ">
        <MainBg></MainBg>
        <Navbar></Navbar>
        <About></About>
      </div>
      <div className=" h-auto bg-white dark:bg-gray-800 ">
        <OverView></OverView>
      </div>
    </>
  );
}

export default App;
