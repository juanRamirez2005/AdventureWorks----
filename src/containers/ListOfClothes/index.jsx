import React from "react";
import { Clothes } from "../../components/Clothes/index.jsx";
const ListOfClothes = () => {
  return (
    <ul className="listOfProducts">
      {[1, 2, 3, 4].map((chain) => (
        <li key={chain}>
          <Clothes />
        </li>
      ))}
    </ul>
  );
};

export { ListOfClothes };
