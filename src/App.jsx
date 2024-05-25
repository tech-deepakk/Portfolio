import About from "./components/About";
import MainBg from "./components/MainBg";
import Navbar from "./components/Navbar";
import OverView from "./components/OverView";

function App() {
  return (
    <>
      <div className="h-screen">
        <MainBg></MainBg>
        <Navbar></Navbar>
        <About></About>
      </div>
      <div className=" h-auto bg-white">
        <OverView></OverView>
      </div>
    </>
  );
}

export default App;
