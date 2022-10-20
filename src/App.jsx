import { useState } from "react";
import Rating from "./components/Rating"

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
        : <h1>Results: {rating}</h1>}
    </>
  )
}

export default App
