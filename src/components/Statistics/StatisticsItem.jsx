import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function StatisticsItem(stat){
    return (<li
        key={stat.id}
        className={s.item}
        style={{
          backgroundColor: `#${Math.floor(
            Math.random() * 16777215,
          ).toString(16)}`,
        }}
      >
        <span className={s.label}>{stat.label}</span>
        <span className={s.percentage}>{stat.percentage}%</span>
      </li>)
}

StatisticsItem.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    parcentage: PropTypes.number,
  };

export default StatisticsItem;