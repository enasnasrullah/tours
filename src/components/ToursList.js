import React from "react";
import Tour from "./Tour";

const ToursList = ({ tours, removeTour }) => {
  const renderdTours = tours.map((tour) => {
    return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
  });

  return (
    <div className="container tour-list">
      <h1 className="text-center">Our Tours</h1>
      {renderdTours}
    </div>
  );
};

export default ToursList;
