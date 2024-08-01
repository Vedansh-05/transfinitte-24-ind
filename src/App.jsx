import ButtonGradient from './assets/svg/ButtonGradient';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Judges from './components/Judges';
import Sponsors from './components/Sponsors';
import Timeline from './components/Timeline';
import Domains from './components/Domains';
import Footer from './components/Footer';

const App = () => {

  return (
    <>


    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <AboutUs />
      <Domains />

      <Judges />

      <Sponsors
      className=" flex flex-col relative z-10 mt-20 
      lg:block" />
      <Timeline />
      
      <Footer />
      


    </div>
    <ButtonGradient />
  
  
    </>
  );
};

export default App
