import './App.css';
import { useContext, useEffect} from 'react';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Projetos from './components/Projetos/Projetos';
import Contato from './components/Contato/Contato';
import { Element , Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Navbar from './components/Navbar/Navbar'; 
import Footer from './components/Footer/Footer'; 
import NavbarMobile from './components/Navbar/NavbarMobile'; 
import Whatsapp from './components/Itens/Whatsapp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { ThemeContext } from './theme/Theme';
import Sobre from './components/Sobre/Sobre';

function App() {
  useEffect(() => {
    
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const { theme } = useContext(ThemeContext);
  return (
      <div id="App" className={theme === 'dark' ? 'bg-dark text-white-50' : 'bg-light text-dark-50'}>
          <Navbar/>
          <NavbarMobile/>

          <Element name="header">
            <Header />
          </Element>
          <Element name="sobre">
            <Sobre />
          </Element>
          <Element name="servicos">
            <Services />
          </Element>
          <Element name="projetos">
            <Projetos />
          </Element>

          <Element name="contato">
            <Contato />
          </Element>
          <Whatsapp/>
          <Footer/>

      </div>
  );
}

export default App;
