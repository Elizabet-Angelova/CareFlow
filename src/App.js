import { useState } from 'react';
import FormContext from './Context/FormContext';
import Expect from './Expect';
import ForWho from './ForWho';
import HomePage from './HomePage';
import Loader from './Loader';
import StickyBar from './StickyBar';

function App() {

  const [formVisible, setFormVisible] = useState(false)
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 2000)

  return (
    <FormContext.Provider value={{ formVisible, setFormVisible }}>
    <>
    {loading && <Loader />}
    <StickyBar />
    <HomePage />
    <ForWho />
    <Expect />
    {/* <Services />
    <AboutUs />
    <Footer /> */}
    </>
    </FormContext.Provider>
  );
}

export default App;
