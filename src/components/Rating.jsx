import RatingOption from "./RatingOption";
import starIcon from "../assets/images/icon-star.svg"
import PropTypes from "prop-types";

const RATING_OPTIONS = [1, 2, 3, 4, 5];

const Rating = ({ selected, onClick }) => (
  <main className="main">
    <div className="icon-wrapper">
      <img
        className="icon"
        src={starIcon}
        alt="star icon"
      />
    </div>

    <h1 className="title">
      How did we do?
    </h1>

    <p className="info">
      Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
    </p>

    <ul className="rating">
      {RATING_OPTIONS.map((option) => (
        <RatingOption
          key={option}
          selected={selected}
          option={option}
        />
      ))}
    </ul>

    <button className="btn">Submit</button>
  </main>
);

Rating.propTypes = {
  selected: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Rating;