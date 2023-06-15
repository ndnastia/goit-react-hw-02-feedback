import PropTypes from 'prop-types';


export const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button name={option} type="button" onClick={leaveFeedback}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};



