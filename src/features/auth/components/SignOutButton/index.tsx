import React from 'react';
import {Pressable, Text} from 'native-base';
import {useAppDispatch} from '../../../../store/hooks';
import {signOutThunk} from '../../thunks';

const SignOutButton = () => {
  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(signOutThunk());
  };

  return (
    <Pressable onPress={handlePress}>
      <Text>Sign Out</Text>
    </Pressable>
  );
};

export default SignOutButton;
