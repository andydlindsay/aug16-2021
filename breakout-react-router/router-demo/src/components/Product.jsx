import { useParams, useHistory, useLocation } from 'react-router-dom';
import {useEffect} from 'react';

const Product = () => {
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/about');
    }, 3000);
  }, [history]);

  return (
    <div>
      <h2>Product #{params.productId}</h2>
    </div>
  );
};

export default Product;
