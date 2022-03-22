import React from 'react';
import {User} from '../../../auth/entities';
import {HStack, VStack} from 'native-base';
import UserRow from './CardRow';

const UserCard: React.FC<User> = ({email, name, age, surname}) => {
  return (
    <HStack
      m={4}
      p={4}
      bg={'primary.300'}
      borderRadius={'5px'}
      justifyContent={'space-between'}>
      <VStack>
        <UserRow label={'Email'} value={email} />
        <UserRow label={'Age'} value={age} />
      </VStack>
      <VStack>
        <UserRow label={'Name'} value={name} />
        <UserRow label={'Surname'} value={surname} />
      </VStack>
    </HStack>
  );
};

export default UserCard;
