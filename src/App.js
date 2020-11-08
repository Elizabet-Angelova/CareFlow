import { useState } from 'react';
import AboutUs from './AboutUs';
import FormContext from './Context/FormContext';
import MenuContext from './Context/MenuContext';
import Expect from './Expect';
import Footer from './Footer';
import ForWho from './ForWho';
import HomePage from './HomePage';
import Loader from './Loader';
import Services from './Services';
import StickyBar from './StickyBar';

function App() {

  const [formVisible, setFormVisible] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 3500)

  return (
    <FormContext.Provider value={{ formVisible, setFormVisible }}>
    <MenuContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
    <>
    {loading && <Loader />}
    <img src='/wave.png' id='wave'/>
    <img src='/wave.png' id='wave2'/>
    <StickyBar />
    <HomePage />
    <ForWho />
    <Expect />
    <Services />
    <AboutUs />
    <Footer />
    </>
    </MenuContext.Provider>
    </FormContext.Provider>
  );
}

export default App;
