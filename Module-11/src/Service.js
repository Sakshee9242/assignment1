import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function Service() {
  const [details, setDetails] = useState();
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
      .then((res) => res.json())
      .then((data) => {
        setDetails(data.meals);
      });
  }, []);

  const cssStyle = {
    background: "#ffd7ad",
    color: "#4a1831",
  };

  return (
    <div style={cssStyle}>
      <div className="container">
        <h1 className="text-center py-3 m-0">Our menu</h1>
        <div className="row justify-content-center">
          {details &&
            details.map((meal) => (
              <div
                className="col-lg-4 col-md-4 col-sm-6 col-8 text-center"
                key={meal.idMeal}
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="img-fluid rounded-5 shadow"
                />

                <p style={cssStyle} className="mt-3">
                  {meal.strMeal}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
