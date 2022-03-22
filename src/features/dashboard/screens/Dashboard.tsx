import React from 'react';
import {Button} from 'native-base';
import {useAppDispatch} from '../../../store/hooks';
import {signOutThunk} from '../../auth/thunks';

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Button
      onPress={() => {
        dispatch(signOutThunk());
      }}>
      Sign Out
    </Button>
  );
};

export default Dashboard;
