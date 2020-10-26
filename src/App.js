import HomePage from './HomePage';
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
    {/* {loading && <Loader />} */}
    <StickyBar />
    <HomePage />
    {/* <ForWho />
    <Expect />
    <Services />
    <AboutUs />
    <Footer /> */}
    </>
    </FormContext.Provider>
  );
}

export default App;
