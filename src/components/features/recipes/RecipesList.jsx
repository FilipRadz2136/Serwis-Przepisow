import { mockRecipes } from "../../../services/mockRecipes";
import RecipeCard from "../../ui/RecipeCard";

const RecipeList = () => {
  return (
    <div>
      {mockRecipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
