import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.jsx'

import StarRating from "./components/StarRating";

function Test() {
  const [movieRating , setMovieRating] = useState(0);
  return (
    <>
      <StarRating color="blue" onSetRating={setMovieRating}/>
      <p>This movie was rated {movieRating} stars</p>
    </>
  );
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StarRating maxRating={10} color="red" size="40" />
    <Test />
  </StrictMode>
);
