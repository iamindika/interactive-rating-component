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

  return (
    <>
      <Rating 
        selected={rating}
        onClick={handleClick}
      /> 
    </>
  )
}

export default App
