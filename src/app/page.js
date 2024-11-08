import About from "./components/About";
import Appiontment from "./components/Appiontment";
import Choose from "./components/Choose";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Medical from "./components/Medical";
import Services from "./components/Services";
import Stories from "./components/Stories";
import Team from "./components/Team";


export default function Home() {
  return (
   <>
   <HomePage/>
   <Services/>
   <About/>
   <Medical/>
   <Appiontment/>
   <Choose/>
   <Team/>
   <Stories/>
   <Footer/>
   </>
  );
}
