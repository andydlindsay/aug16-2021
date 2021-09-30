import {useState, useEffect} from 'react';
import axios from 'axios';

const url = 'http://my-json-server.typicode.com/andydlindsay/chef-andy/recipes';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios.get(url)
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        setRecipes(response.data);
      });
  }, []);

  // const recipeArray = recipes.map((recipe) => {
  //   return <p>{recipe.id}: {recipe.title}</p>
  // })

  return (
    <div>
      <h2>All the Recipes Andy knows</h2>
      { loading && <p>Loading the information...</p> }

      { !loading && recipes.map((recipe) => {
        return <p>{recipe.id}: {recipe.title}</p>
      }) }
    </div>
  );
};

export default Recipes;
