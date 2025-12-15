import PropTypes from "prop-types";

const RecipeCard = ({ recipe }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{recipe.title}</h3>
      <p>Kategoria: {recipe.category}</p>
      <p>Trudność: {recipe.difficulty}</p>
      <p>Czas: {recipe.time} min</p>
      <p>Ocena: {recipe.rating}</p>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    rating: PropTypes.number
  }).isRequired
};

export default RecipeCard;
