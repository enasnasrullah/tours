import axios from "axios";
import { useState, useEffect } from "react";
import ToursList from "./ToursList";
import Loading from "./Loading";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };
  const getData = async () => {
    await axios
      .get("https://course-api.com/react-tours-project")
      .then((response) => {
        setLoading(false);
        setTours(response.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
        <h2>No tours left</h2>
        <button className="btn btn-secondary" onClick={() => getData()}>
          refresh
        </button>
      </div>
    );
  }
  return (
    <>
      <ToursList tours={tours} removeTour={removeTour} />
    </>
  );
}

export default App;
