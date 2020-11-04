import React, { Dispatch, SetStateAction, MouseEvent } from "react";
import "./Categories.scss";

import { category } from "../../data/dataInterfaces";

interface categoriesProps {
  all: string;
  data: category[];
  setCategory: Dispatch<SetStateAction<string | undefined>>;
}

function Categories(props: categoriesProps) {
  const cards: category[] = props.data.sort((a: category, b: category) =>
    a.name > b.name ? 1 : -1
  );

  function handleClick(event: MouseEvent) {
    event.preventDefault();
    const dataName: string | null = event.currentTarget.getAttribute(
      "data-name"
    );
    if (dataName) {
      props.setCategory(dataName);
    }
  }

  return (
    <div className="categories">
      <form>
        <ul>
          <li>
            <button data-name={props.all} onClick={handleClick}>
              {props.all}
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
      </form>
    </div>
  );
}

export default Categories;
