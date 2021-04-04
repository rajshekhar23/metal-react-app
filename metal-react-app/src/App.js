import { useEffect } from 'react';
import './App.css';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/AboutUs';
import { Products } from './components/products/products';
import { ContactUs } from './components/contact-us/ContactUs';
function App() {
    
  useEffect(() => {
        
  }, []);
  
  return (    
      <div className="wrapper">
          <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/" exact className="active"> <Home /> </Route>
              <Route path="/about-us"> <AboutUs/> </Route>
              <Route path="/products"> <Products/> </Route>
              <Route path="/about-us"><Products/> </Route>
              <Route path="/contact-us"><ContactUs /> </Route>
          </Switch>
          <Footer />
          </BrowserRouter>
      </div>
  );
}

export default App;
