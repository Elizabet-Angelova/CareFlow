import { useState } from 'react';
import AboutUs from './AboutUs';
import FormContext from './Context/FormContext';
import Expect from './Expect';
import Footer from './Footer';
import ForWho from './ForWho';
import HomePage from './HomePage';
import Loader from './Loader';
import Services from './Services';
import StickyBar from './StickyBar';

function App() {

  const [formVisible, setFormVisible] = useState(false)
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 5000)

  return (
    <FormContext.Provider value={{ formVisible, setFormVisible }}>
    <>
    {loading && <Loader />}
    <StickyBar />
    <HomePage />
    <ForWho />
    <Expect />
    <Services />
    <AboutUs />
    <Footer />
    </>
    </FormContext.Provider>
  );
}

export default App;
