import PropTypes from 'prop-types';

const RatingOption = ({ option, selected, onClick }) => (
  <li 
    className={`rating-option ${selected === option && 'selected'}`}
    onClick={() => onClick(option)}
  >
    {option}
  </li>
);

RatingOption.propTypes = {
  option: PropTypes.number.isRequired,
  selected: PropTypes.number,
  onClick: PropTypes.func.isRequired
}

export default RatingOption;