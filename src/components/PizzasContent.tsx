import React, { FC } from "react";
import Pizza from "../types/Pizza";
import { PizzaCard } from "./PizzaCard";
interface PizzasContentProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

export const PizzasContent: FC<PizzasContentProps> = ({
  pizzasList,
  updatePizza,
  deletePizza,
}) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return (
          <PizzaCard
            key={pizza.id}
            pizza={pizza}
            updatePizza={updatePizza}
            deletePizza={deletePizza}
          />
        );
      })}
    </div>
  );
};
