import PropTypes from 'prop-types';
import s from './Transaction.module.css';

function TransactionItem(item){
    return (<tr className={s.row} key={item.id}>
        <td className={s.item}>{item.type}</td>
        <td className={s.item}>{item.amount}</td>
        <td className={s.item}>{item.currency}</td>
      </tr>)
}

TransactionItem.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  };

export default TransactionItem;