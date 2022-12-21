import Globalstyle from "./Globalstyle";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import Boost from "./components/Boost";
import { Statistics } from "./components/Statistics";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
          <Globalstyle/>
          <Navbar/>
          <Header/>
          <Card/>
          <Statistics/>
          <Boost/>
          <Footer/>
    </div>
  );
}

export default App;
