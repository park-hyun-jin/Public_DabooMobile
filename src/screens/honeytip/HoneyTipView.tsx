import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {axiosGet} from '../../common/axios';
import useStore from '../../zustand/store';

const HoneyTipView = () => {
  const {accessToken} = useStore(state => state);

  const getHoneyTip = async (): Promise<void> => {
    // TO-DO
    const params = {
      // paging
      // page: page // int
      // sort: ['id,desc' , ...]
      // size: 5
    };
    const type = ''; // (required = false) , YOUTUBE or BLOG or APP

    try {
      const response = await axiosGet(
        'v1/members/profile/' + type,
        params,
        accessToken,
      );
      if (response.status == 200) {
        console.log(response.data);
      }
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>꿀팁</Text>
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

export default HoneyTipView;
