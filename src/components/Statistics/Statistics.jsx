import { StatisticSection, StatList, Item } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticSection>
      {title && <h2 className="title">{title}</h2>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </Item>
        ))}
      </StatList>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
