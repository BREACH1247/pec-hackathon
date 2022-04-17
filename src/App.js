import Footer from "./components/footer";
import Landing from "./components/landing";
import Navbar from "./components/Footer and Navbar/navbar"
import Input from "./components/Footer and Navbar/input";
import "../src/App.css"
function App() {
  return (
    <div class="main">
      <Landing />
      <Navbar/>
      <Input/>
      <Footer/>
    </div>
  );
}

export default App;
