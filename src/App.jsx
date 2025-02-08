import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from './Components/Benefits';
import Button from './Components/Button';
import Collaboration from './Components/Collaboration';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Princing from './Components/Princing';
import Roadmap from './Components/Roadmap';
import Services from './Components/Services';

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"></div>
      <Header />
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Princing />
      <Roadmap />
      <Footer />
    </>
  );
};

export default App;
