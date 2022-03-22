import React from 'react';
import {HStack, Text} from 'native-base';

interface UserRowProps {
  label: string;
  value?: string;
}

const UserRow: React.FC<UserRowProps> = ({label, value}) => {
  return (
    <HStack justifyContent={'space-between'}>
      <Text>{label} </Text>
      <Text> {value || '--'}</Text>
    </HStack>
  );
};

export default UserRow;
