import { useState } from "react";
import Rating from "./components/Rating";
import Result from "./components/Result";
import Footer from "./components/Footer";
import RATING_OPTIONS from "./utilities/constants";

function App() {
  const [ rating, setRating ] = useState(null);
  const [ isSubmit, setIsSubmit ] = useState(false);

  const handleClick = (option) => {
    if(option !== rating) {
      setRating(option);
    }
  }

  const handleSubmit = () => {
    if(rating) {
      setIsSubmit(true)
    }
  };

  return (
    <>
      {!isSubmit 
        ? <Rating 
            selected={rating}
            onClick={handleClick}
            onSubmit={handleSubmit}
          /> 
        : <Result
            rating={rating}
            totalRatings={RATING_OPTIONS.length}
          />}
      
      <Footer />
    </>
  )
}

export default App
