import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BottomFooter from './components/Footer/BottomFooter';
import NewProducts from './components/NewProducts/NewProducts';
import Services from './components/Services/Services';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <NewProducts></NewProducts>
      <FeaturedProducts></FeaturedProducts>
      <Services></Services>
      <Footer></Footer>
      <BottomFooter></BottomFooter>
    </div>
  );
}

export default App;
