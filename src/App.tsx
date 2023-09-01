import React, { FC, useState } from "react";
import "./App.css";
import { PizzaForm } from "./components/PizzaForm";
import Pizza from "./types/Pizza";
import { PizzasContent } from "./components/PizzasContent";

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };
  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(
      pizzasList.map((pizza) => {
        return pizza.id === newPizza.id ? newPizza : pizza;
      })
    );
  };
  const deletePizza = (id: number) => {
    const newPizzasList = pizzasList.filter((pizza) => {
      return pizza.id !== id;
    });
    setPizzasList(newPizzasList);
  };
  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Наша пиццерия</span>
        <PizzaForm addPizza={addPizza} />
        <PizzasContent
          pizzasList={pizzasList}
          updatePizza={updatePizza}
          deletePizza={deletePizza}
        />
      </div>
    </div>
  );
};

export default App;
