import Home from '../pages/Home';
import Layout from '../Layout';
import Products from '../pages/Products';
import Product from '../pages/Product';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import Cart from '../pages/Cart';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
