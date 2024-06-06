import './App.css';
import Banner from './components/banner';
import Category from './components/category';
import Footer from './components/footer';
import Header from './components/header';
import Partners from './components/partners';
import Products from './components/products';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Category/>
      <Products/>
      <Partners/>
      <Footer/>
    </div>
  );
}

export default App;
