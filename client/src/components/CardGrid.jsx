import React from "react";
import numeral from "numeral";
import data from "../../../server/data.json";

const CardGrid = ({ sortField }) => {
  const allProperties = data;
  let sortedData = allProperties;

  if (sortField !== null) {
    sortField === "ascending"
      ? (sortedData = sortedData.sort((a, b) => {
          return b.price - a.price;
        }))
      : (sortedData = sortedData.sort((a, b) => {
          return a.price - b.price;
        }));
  }

  return (
    <>
      {sortedData.map((item, index) => (
        <div className="property" key={index}>
          <img className="property__image" src={item.img} alt={item.title} />
          <h2 className="property__title">{item.title}</h2>
          <span className="property__address">
            {item.address.street}, {item.address.number}, {item.address.zip},{" "}
            {item.address.city}
          </span>
          <ul className="property__info">
            <li className="property__price">
              {numeral(item.price).format("0,0")},-
            </li>
            <li className="property__type">{item.type}</li>
            <li className="property__rooms">{item.rooms} Rum</li>
            <li className="property__size">
              {item.size} m<span className="super">2</span>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default CardGrid;
