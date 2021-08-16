import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { Login, Products, ProductDetails, Cart } from './pages';
import { ParentWrapper } from './components/shared/StyledComponents';
import Header from './components/header';

const App: React.FC = () => {
  const headerPaths = ["/", "/login"]
  const currentPath = window && window.location && window.location.pathname;
  return (
    <ParentWrapper>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
        </Switch>
        {!headerPaths.includes(currentPath) && <Header/>}
        <Switch>
          <Route path="/products/:id" exact component={ProductDetails} />
          <Route path="/products" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </BrowserRouter>
    </ParentWrapper>
  );
};

export default App;
