import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App() {
  const newFunc = () => {
    const a = 'Abu';

    return (
      <View>
        <Text>Hello World {a}</Text>
      </View>
    );
  };

  return (
    <View style={styles.main__container}>
      <Text>App</Text>
      {newFunc()}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  main__container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
