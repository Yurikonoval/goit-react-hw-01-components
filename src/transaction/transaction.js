import PropTypes from 'prop-types';
import s from './transaction.module.css';

function TransactionHistory({ items }) {
  return (
    <table class={s.transaction}>
      <thead className={s.tableHead}>
        <tr className={s.headRow}>
          <th className={s.item}>Type</th>
          <th className={s.item}>Amount</th>
          <th className={s.item}>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tableBody}>
        {items.map(item => (
          <tr className={s.row} key={item.id}>
            <td className={s.item}>{item.type}</td>
            <td className={s.item}>{item.amount}</td>
            <td className={s.item}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionHistory;
