import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function MyPage() {
  return (
    <View style={styles.container}>
      <Text>MyPage Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyPage;
