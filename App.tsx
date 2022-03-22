import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import MainStack from './src/navigation/MainStack';
import {Provider} from 'react-redux';
import store from './src/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NativeBaseProvider>
          <MainStack />
        </NativeBaseProvider>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
