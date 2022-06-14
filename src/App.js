import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BottomFooter from './components/Footer/BottomFooter';
import NewProducts from './components/NewProducts/NewProducts';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <NewProducts></NewProducts>
      <Footer></Footer>
      <BottomFooter></BottomFooter>
    </div>
  );
}

export default App;
