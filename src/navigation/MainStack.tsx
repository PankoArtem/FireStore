import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import SignInScreen from '../features/auth/screens/SignInScreen';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Stack = createNativeStackNavigator();

const MainStack: React.FC = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Sign In'} component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
