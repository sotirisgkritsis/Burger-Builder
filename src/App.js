import React, { Component } from 'react';

// components
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Orders from './containers/Orders/Orders';

import Checkout from './containers/Checkout/Checkout';
// router
import { Route, Switch, BrowserRouter } from 'react-router-dom';

class App extends Component {
  // state = {
  //   show: true
  // };

  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({show: false});
  //   }, 5000);
  // }
  render() {
    return(
      <div>
        <BrowserRouter>
          <Layout>
              <Switch>
                <Route path="/checkout" component={Checkout}/>
                <Route path="/orders" component={Orders}/>
                <Route path="/" exact component={BurgerBuilder}/>
              </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
