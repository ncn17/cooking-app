function App() {
  const meals = [0, 2, 1, 4, 5];

  return (
    <div className="App">
      <h1>Cooking App Tp</h1>
      <input
        type="text"
        name="food search"
        placeholder="Tapez le nom d'un aliment (en anglais)"
      />
      <div className="menus">
        {meals.map((val) => (
          <div className="menu-card">
            <h3>Corba</h3>
            <p>Origin : Turkish</p>
            <img
              src="https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg"
              alt="meal image"
            />
            <p className="content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto repudiandae quo recusandae? Fuga dolore voluptatem
              incidunt perspiciatis aliquam expedita reprehenderit alias nemo
              sed. Velit veritatis laborum quae ullam mollitia nam?
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
