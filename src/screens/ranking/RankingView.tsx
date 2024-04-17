import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RankingView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>랭킹</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default RankingView;
