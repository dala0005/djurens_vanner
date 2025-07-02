import Header from "./Header"
import ListCards from "./ListCards"
import Footer from "./Footer"

function App() {

  const websiteName = "Nätverk för Sveriges Djurfristäder"

  return(
    <>
      <Header websiteName={websiteName} />
      <ListCards />
      <Footer websiteName={websiteName} />
    </>  
  );
}

export default App
