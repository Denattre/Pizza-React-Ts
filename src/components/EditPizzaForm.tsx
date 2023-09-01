import React, { FC, useState } from "react";
import "../styles/styles.css";
import Pizza from "../types/Pizza";

interface EditPizzaFormProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  handleToggleEdit: () => void;
}

export const EditPizzaForm: FC<EditPizzaFormProps> = ({
  data,
  updatePizza,
  handleToggleEdit,
}) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditPizza({
      ...editPizza,
      [name]: value,
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, price, img } = editPizza;
    if (title && price && img) {
      updatePizza(editPizza);
      handleToggleEdit();
    }
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Название"
        type="text"
        onChange={handleChange}
        value={editPizza.title}
      />
      <input
        name="price"
        placeholder="Стоимость"
        type="text"
        onChange={handleChange}
        value={editPizza.price}
      />
      <input
        name="img"
        placeholder="Изображение"
        type="text"
        onChange={handleChange}
        value={editPizza.img}
      />
      <button type="submit">Подтвердить</button>
    </form>
  );
};
