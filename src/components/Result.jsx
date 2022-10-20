import resultImage from "../assets/images/illustration-thank-you.svg";
import PropTypes from 'prop-types';

const Result = ({ rating, totalRatings }) => (
  <main className="main-result container">
    <img
      className="image"
      src={resultImage}
      alt="feedback processed via abstract cashier's terminal"
    />
    
    <p className="info">
      You selected {rating} out of {totalRatings}
    </p>

    <h1 className="title">Thank you!</h1>

    <p className="description">
      We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
    </p>
  </main>
);

Result.propTypes = {
  rating: PropTypes.number.isRequired,
  totalRatings: PropTypes.number.isRequired
}

export default Result;