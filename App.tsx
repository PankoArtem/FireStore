import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import MainStack from './src/navigation/MainStack';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NativeBaseProvider>
        <MainStack />
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
