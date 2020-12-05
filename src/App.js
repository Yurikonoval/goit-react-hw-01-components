import Profile from './components/Profile/Profile';
import user from './dataBase/user.json';
import s from './App.module.css';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './dataBase/statistical-data.json';
import FriendList from './components/Friendlist/Friendlist';
import friends from './dataBase/friends.json';
import transactions from './dataBase/transaction.json';
import Transaction from './components/Transaction/Transaction';

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
      <Transaction items={transactions} />
    </div>
  );
}
