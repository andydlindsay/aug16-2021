import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <h2>Inside the Nav component</h2>
      <Link to="/about">About </Link>
      <Link to="/products">Products </Link>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Nav;
