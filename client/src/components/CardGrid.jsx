import React, { useEffect, useState } from "react";
import numeral from "numeral";

const CardGrid = ({ sortField, filterField }) => {
  // allProperties state holds all the data once loaded
  const [allProperties, setAllProperties] = useState([]);
  // state for loading - based on this we render the content or loading
  const [isLoading, setIsLoading] = useState(false);
  // state for errors - based on this we render the content or error
  const [isError, setIsError] = useState(false);

  // retrieves data from the API. Ideally, this would maybe be moved to its
  // own separate component, so it can be reused, but in this project I just include it here
  async function fetchData() {
    setIsLoading(true);
    try {
      let response = await fetch("http://localhost:3000/api/properties");
      let data = await response.json();
      setAllProperties(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  }

  // function used for filtering properties
  filterProperties = () => {
    if (filterField.min !== null) {
      filteredSortedData = filteredSortedData.filter(
        (value) => value.size >= filterField.min
      );
    }
    if (filterField.max !== null) {
      filteredSortedData = filteredSortedData.filter(
        (value) => value.size <= filterField.max
      );
    }
  };

  // function used for sorting properties
  const sortProperties = () => {
    if (sortField !== null) {
      sortField === "ascending"
        ? (filteredSortedData = filteredSortedData.sort((a, b) => {
            return b.price - a.price;
          }))
        : (filteredSortedData = filteredSortedData.sort((a, b) => {
            return a.price - b.price;
          }));
    }
  };

  // calling the fetch function
  useEffect(() => {
    if (allProperties.length === 0) {
      fetchData();
    }
  }, []);

  // if the data is not loaded, we show that to the users
  if (isLoading) {
    return <div>Loading</div>;
  }

  // if there is an error fetching data, tell the user
  if (isError) {
    return <div>Desværre, der er sket en fejl. Opdater venligst siden.</div>;
  }

  // if the data is loaded, we make a copy of allProperties to work with further
  let filteredSortedData = allProperties;

  filterProperties();

  sortProperties();

  return (
    <>
      {filteredSortedData.map((item, index) => (
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
