import {Link, Switch, Route} from 'react-router-dom';
import Product from './Product';

const Products = () => {
  return (
    <div>
      <h2>Products</h2>

      <Link to="/products/1">Product #1</Link><br/>
      <Link to="/products/2">Product #2</Link><br/>
      <Link to="/products/3">Product #3</Link><br/>
      <Link to="/products/4">Product #4</Link><br/>
      <Link to="/products/5">Product #5</Link><br/>

      <Switch>
        <Route path="/products/:productId" component={Product} />
        <Route path="/products">
          <h2>Choose a product from the list above</h2>
        </Route>
      </Switch>

    </div>
  );
};

export default Products;
