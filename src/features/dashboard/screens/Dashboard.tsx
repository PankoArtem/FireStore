import React from 'react';
import {useAppSelector} from '../../../store/hooks';
import UserCard from '../components/UserCard';

const Dashboard: React.FC = () => {
  const {user} = useAppSelector(state => state.authReducer);

  return <UserCard {...user} />;
};

export default Dashboard;
