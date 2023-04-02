import s from './Statistics.module.css';
import PropTypes from 'prop-types';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <p className={s.statistics}>Good: {good}</p>
      <p className={s.statistics}>Neutral: {neutral}</p>
      <p className={s.statistics}>Bad: {bad}</p>
      <p className={s.statistics}>Total: {total}</p>
      <p className={s.statistics}>Positive feedback: {positivePercentage} %</p>
    </>
  );
}

// export default Statistics;

Statistics.propTypes = {
  positivePercentage: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};
