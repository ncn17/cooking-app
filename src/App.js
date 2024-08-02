import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then((res) => setMeals(res.data.meals));
  }, []);

  return (
    <div className="App">
      <h1>Cooking App Tp</h1>
      <input
        type="text"
        name="food search"
        placeholder="Tapez le nom d'un aliment (en anglais)"
      />
      <div className="menus">
        {meals.map((meal, index) => (
          <div key={index} className="menu-card">
            <h3>{meal.strMeal}</h3>
            <p>Origin : {meal.strArea}</p>
            <img src={meal.strMealThumb} alt={`meal ${index}`} />
            <p className="content truncate-p">{meal.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
