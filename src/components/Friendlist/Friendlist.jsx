import s from './Friendlist.module.css';
import FriendItem from './FriendItem';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => FriendItem(friend))}
    </ul>
  );
}

export default FriendList;
