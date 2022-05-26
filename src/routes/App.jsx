import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Login from '@pages/Login';
import PasswordRecovery from '@pages/PasswordRecovery';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import NotFound from '@pages/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '@styles/global.css';
import Jewelery from '../pages/Jewelery';
import Men from '../pages/Men';
import Woman from '../pages/Woman';
import Man from '../pages/Man';
import useGetProducts from '../hooks/useGetProducts';

const App = () => {
  const initialState = useInitialState();
  const API2 = 'https://fakestoreapi.com/products/';

  const products = useGetProducts(API2);
  return (
    <AppContext.Provider value={{ initialState, products }}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/clothes' component={Jewelery} />
            {/* <Route exact path='/men' component={Men} /> */}
            <Route exact path='/woman' component={Woman} />
            <Route exact path='/man' component={Man} />
            <Route
              exact
              path='/password-recovery'
              component={PasswordRecovery}
            />
            <Route exact path='/send-email' component={SendEmail} />
            <Route exact path='/new-password' component={NewPassword} />
            <Route exact path='/account' component={MyAccount} />
            <Route exact path='/signup' component={CreateAccount} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/orders' component={Orders} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
