/* eslint-disable prettier/prettier */
import {
  KakaoOAuthToken,
  KakaoProfile,
  KakaoProfileWebType,
  getProfile,
  login,
} from '@react-native-seoul/kakao-login';
import {axiosGet} from './common/axios';
import {useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import useStore from './zustand/store';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#7261FF',
  },
  sectionContainer1: {
    paddingHorizontal: 10,
    flex: 3,
    justifyContent: 'center', //중간정렬
    alignItems: 'center',
  },
  sectionContainer2: {
    paddingHorizontal: 10,
    flex: 1,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const DabooMain = ({navigation}) => {
  const {setAccessToken, setRefreshToken} = useStore(state => state);
  const {accessToken, refreshToken} = useStore(state => state);
  const getData = useCallback(async (accessToken: string) => {
    console.log(accessToken);

    return await axiosGet('oauth/token/KAKAO', '', accessToken);
  }, []);

  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();

    console.log(JSON.stringify(token));

    try {
      const response = await getData(token.accessToken);
      if (response.status == 200) {
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
        navigation.navigate('SignUp', response.data);
      }
    } catch (e) {}
  };

  const startKakao = useCallback(() => {
    navigation.navigate('SignUp');
    return;
    signInWithKakao();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.sectionContainer1}>
        <Image source={require('./assets/logo-white.png')} />
      </View>
      <View style={styles.sectionContainer2}>
        <TouchableOpacity onPress={() => startKakao()}>
          <Image source={require('./assets/kakao-start.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DabooMain;
