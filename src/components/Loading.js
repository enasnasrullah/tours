import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
