import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/header';
import Home from './MyComponents/home';
import About from './MyComponents/about';
import Services from './MyComponents/services';
import Pillars from './MyComponents/pillars';
import Contact from './MyComponents/contact';
import Carrers from './MyComponents/carrers';
import Footer from './MyComponents/footer';
import Events from './MyComponents/events';
import DigitalMarketing from './MyComponents/ProductsAndServices/DigitalMarketing';
import AffiliatedMarketing from './MyComponents/ProductsAndServices/AffiliatedMarketing';
import BrandManagement from './MyComponents/ProductsAndServices/BrandManagement';
import BusinessMarketResearch from './MyComponents/ProductsAndServices/BusinessMarketResearch';
import ContentCreation from './MyComponents/ProductsAndServices/ContentCreation';
import PromotionalCampaigns from './MyComponents/ProductsAndServices/PromotionalCampaigns';
import WebDevelopment from './MyComponents/ProductsAndServices/WebDevelopment';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route  path="/" exact component={Home}/>
        <Route  path="/home" exact component={Home}/>
        <Route  path="/about" exact component={About}/>
        <Route  path="/services" exact component={Services}/>
        <Route  path="/pillars" exact component={Pillars}/>
        <Route  path="/contact" exact component={Contact}/>
        <Route  path="/carrers" exact component={Carrers}/>
        <Route  path="/events" exact component={Events}/>
        <Route  path="/digitalMarketing" exact component={DigitalMarketing}/>
        <Route  path="/affiliatedMarketing" exact component={AffiliatedMarketing}/>
        <Route  path="/brandManagement" exact component={BrandManagement}/>
        <Route  path="/businessMarketResearch" exact component={BusinessMarketResearch}/>
        <Route  path="/contentCreation" exact component={ContentCreation}/>
        <Route  path="/promotionalCampaigns" exact component={PromotionalCampaigns}/>
        <Route  path="/webDevelopment" exact component={WebDevelopment}/>
      </Switch>
       <Footer/> 
    </BrowserRouter>
  );
}

export default App;

