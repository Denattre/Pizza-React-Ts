import React, { FC, useState } from "react";
import "../styles/styles.css";
import Pizza from "../types/Pizza";

interface PizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
}

export const PizzaForm: FC<PizzaFormProps> = ({ addPizza }) => {
  const initState = {
    title: "",
    price: "",
    img: "",
  };
  const [newPizza, setNewPizza] = useState<{
    title: string;
    price: string;
    img: string;
  }>(initState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewPizza({
      ...newPizza,
      [name]: value,
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, price, img } = newPizza;
    if (title && price && img) {
      addPizza({ title, price, img, id: Date.now() });
      setNewPizza(initState);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Название"
        type="text"
        onChange={handleChange}
        value={newPizza.title}
      />
      <input
        name="price"
        placeholder="Стоимость"
        type="text"
        onChange={handleChange}
        value={newPizza.price}
      />
      <input
        name="img"
        placeholder="Изображение"
        type="text"
        onChange={handleChange}
        value={newPizza.img}
      />
      <button type="submit">+ Добавить в меню</button>
    </form>
  );
};
