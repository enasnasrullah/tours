import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="tour">
      <img src={image} alt={name} className="w-100" />
      <div className="tour-info d-flex justify-content-between mt-3 align-items-center">
        <h6>{name}</h6>
        <h5>${price}</h5>
      </div>
      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button className="btn-anchor" onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "  read more"}
        </button>
      </p>

      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={() => {
            removeTour(id);
          }}
          className="btn-notInters"
        >
          Not Intersted
        </button>
      </div>
    </div>
  );
};

export default Tour;
