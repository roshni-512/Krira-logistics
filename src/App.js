
import './App.css';
import Advantages from './components/Advantages';
import Footer from './components/Footer';
import HeroComponent from './components/HeroComponent';
import Navbar from './components/Navbar';
import Products from './components/Products';
import StoryComponent from './components/StoryComponent';
import TextComponent from './components/TextComponent';

function App() {
  return (
    <> 
    <Navbar/>
    <HeroComponent/>
    <TextComponent/>
    <Products/>
    <Advantages/>
    <StoryComponent/>
    <Footer/>
    </>
   
  );
}

export default App;
