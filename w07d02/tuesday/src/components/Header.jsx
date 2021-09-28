const Header = (props) => {
  console.log(props);
  // const title = `Pat's Water Bottle Empire`;

  return (
    <div>
      <h1>{props.message}</h1>
    </div>
  );
};

export default Header;
