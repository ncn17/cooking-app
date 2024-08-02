import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => setMeals(res.data.meals));
  }, [search]);

  return (
    <div className="App">
      <h1>Cooking App Tp</h1>
      <input
        type="text"
        name="food search"
        placeholder="Tapez le nom d'un aliment (en anglais)"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="menus">
        {meals !== null && meals.length > 0 ? (
          meals.map((meal, index) => (
            <div key={index} className="menu-card">
              <h3>{meal.strMeal}</h3>
              <p>Origin : {meal.strArea}</p>
              <img src={meal.strMealThumb} alt={`meal ${index}`} />
              <p className="content truncate-p">{meal.strInstructions}</p>
            </div>
          ))
        ) : (
          <h2>Aucun menu trouver pour cette recette !</h2>
        )}
      </div>
    </div>
  );
}

export default App;
