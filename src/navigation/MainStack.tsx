import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import SignInScreen from '../features/auth/screens/SignInScreen';
import SignUpScreen from '../features/auth/screens/SignUpScreen';
import Dashboard from '../features/dashboard/screens/Dashboard';
import auth from '@react-native-firebase/auth';
import {useAppDispatch} from '../store/hooks';
import {getUserThunk} from '../features/auth/thunks';

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
