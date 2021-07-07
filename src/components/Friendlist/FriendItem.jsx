import PropTypes from 'prop-types';
import s from './Friendlist.module.css';

function FriendItem (friend){
    return (
        <li key={friend.id} className={s.item}>
          <span
            className={s.status}
            style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
          ></span>
          <img
            className={s.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
    )
}
FriendItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  };

export default FriendItem;