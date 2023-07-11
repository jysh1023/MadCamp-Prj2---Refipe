import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const UrgentTag = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>임박</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 55,
    height: 25,
    backgroundColor: '#ED8282',
    opacity: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    right: 15,
  },
  textStyle: {
    fontSize: 11,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default UrgentTag;
