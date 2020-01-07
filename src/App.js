import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout/MainLayout';
import Home from './components/Page/Home/HomePage';
import Contact from './components/Page/Contact/ContactPage';
import Regulamin from './components/Page/Regulamin/Regulamin';
import FAQ from './components/Page/FAQ/Faq';
import ProductCard from './components/features/ProductCard/ProductCard';
import NotFound from './components/pages/NotFound/NotFoundPage';


class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:id" exact component={ProductCard} />
          <Route path="/FAQ" exact component={FAQ} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/regulamin" exact component={Regulamin} />
          <Route path="/contact" exact component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }

};

export default App;