import Profile from './profile/profile';
import user from './dataBase/user.json';
import s from './App.module.css';
import Statistics from './statistics/statistics';
import statisticalData from './dataBase/statistical-data.json';
import FriendList from './friendlist/friendlist';
import friends from './dataBase/friends.json';
import transactions from './dataBase/transaction.json';
import TransactionHistory from './transaction/transaction.js';

export default function App() {
  return (
    <div className={s.container}>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
