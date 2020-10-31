import React, { Dispatch, SetStateAction, MouseEvent } from "react";
import "./Categories.scss";

import { category } from "../../data/dataInterfaces";

interface categoriesProps {
  data: category[];
  setCategory: Dispatch<SetStateAction<string | undefined>>;
}

function Categories(props: categoriesProps) {
  const cards: category[] = props.data.sort((a: category, b: category) =>
    a.name > b.name ? 1 : -1
  );

  function handleClick(event: MouseEvent) {
    const dataName: string | null = event.currentTarget.getAttribute(
      "data-name"
    );
    if (dataName) {
      props.setCategory(dataName);
    }
  }

  return (
    <div className="categories">
      <ul>
        <li>
          <button data-name="All" onClick={handleClick}>
            All
          </button>
        </li>
        {cards.map((card) => {
          return (
            <li key={card.name + "li"}>
              <button
                data-name={card.name}
                onClick={handleClick}
                key={card.name + "btn"}
              >
                {card.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
