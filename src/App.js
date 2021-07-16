import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { request } from 'graphql-request';

import Product from './Product';

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { products } = await request(
        'https://api-us-east-1.graphcms.com/v2/ckr59to4o0c8c01za2b639dmg/master',
        `
      { 
        products {
          id
          name
          slug
          price
        }
      }
    `
      );

      setProducts(products);
    };

    fetchProducts();
  }, []);
  console.log(products);

  return (
    <div className="App">
      <Router>
        {!products ? (
          'Loading'
        ) : (
          <React.Fragment>
            <ul>
              {products.map(({ id, name, slug }) => (
                <li key={id}>
                  <Link to={`/products/${slug}`}>{name}</Link>
                </li>
              ))}
            </ul>
            <Switch>
              <Route path="/products/:slug">
                <Product products={products} />
              </Route>
            </Switch>
          </React.Fragment>
        )}
      </Router>
    </div>
  );
}

export default App;
