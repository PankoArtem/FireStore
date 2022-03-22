import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import SignInScreen from '../features/auth/screens/SignInScreen';
import SignUpScreen from '../features/auth/screens/SignUpScreen';
import Dashboard from '../features/dashboard/screens/Dashboard';
import auth from '@react-native-firebase/auth';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {getUserThunk} from '../features/auth/thunks';
import {Spinner, VStack} from 'native-base';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Stack = createNativeStackNavigator();

const MainStack: React.FC = () => {
  const dispatch = useAppDispatch();

  const {isLoading} = useAppSelector(state => state.authReducer);

  const [uid, setUid] = useState<string | undefined>();

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(authUser =>
      setUid(authUser?.uid),
    );
    return subscribe;
  }, []);

  useEffect(() => {
    if (uid) {
      dispatch(getUserThunk(uid));
    }
  }, [uid]);

  if (isLoading) {
    return (
      <VStack flex={1} justifyContent={'center'} alignItems={'center'}>
        <Spinner size={'lg'} />
      </VStack>
    );
  }

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!uid && (
          <>
            <Stack.Screen name={'Sign In'} component={SignInScreen} />
            <Stack.Screen name={'Sign Up'} component={SignUpScreen} />
          </>
        )}
        {uid && (
          <Stack.Screen
            name={'Dashboard'}
            navigationKey={uid ? 'user' : 'guest'}
            component={Dashboard}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
