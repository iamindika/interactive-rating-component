import PropTypes from 'prop-types';

const RatingOption = ({ selected, option }) => (
  <li className={`rating-option ${selected === option && 'selected'}`}>
    {option}
  </li>
);

RatingOption.propTypes = {
  selected: PropTypes.number.isRequired,
  option: PropTypes.number.isRequired
}

export default RatingOption;