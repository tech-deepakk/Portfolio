import About from "./components/About";
import Contact from "./components/Contact";
import MainBg from "./components/MainBg";
import Navbar from "./components/Navbar";
import OverView from "./components/OverView";
import Project from "./components/Project";

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
        <Project></Project>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
