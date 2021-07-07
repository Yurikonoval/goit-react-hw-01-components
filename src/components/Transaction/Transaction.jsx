import TransactionItem from './TransactionItem';
import s from './Transaction.module.css';

function Transaction({ items }) {
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
        {items.map(item => TransactionItem(item))}
      </tbody>
    </table>
  );
}

export default Transaction;
