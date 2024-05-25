import About from "./components/About";
import MainBg from "./components/MainBg";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className=" h-screen">
        <MainBg></MainBg>
        <Navbar></Navbar>
        <About></About>
      </div>
    </>
  );
}

export default App;
