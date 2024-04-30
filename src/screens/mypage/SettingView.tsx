import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {axiosGet} from '../../common/axios';
import useStore from '../../zustand/store';

const SettingView = ({navigation}) => {
  const [nickname, setNickname] = useState<string>('김다부');
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState('여성');
  const accessToken = useStore(state => state.accessToken);
  const [checkedProfile, setCheckedProfile] = useState<string>('profile1');

  const goBackMain = useCallback(() => {
    navigation.goBack();
  }, []);

  const onClickProfile = useCallback((profileValue: string) => {
    setCheckedProfile(profileValue);
  }, []);

  const checkNickname = async (): Promise<void> => {
    const params = {
      nickname: nickname,
    };

    try {
      const response = await axiosGet(
        'v1/members/profile/nickname/check',
        params,
        accessToken,
      );
      if (response.status == 200) {
        console.log(response.data);
        // TO-DO
        // { duplicate : false } -> 사용 가능
      }
    } catch (e) {}
  };

  const onClicWithdrawal = useCallback(() => {
    Alert.alert(
      '정말 이대로 탈퇴하시겠어요?',
      '\n탈퇴버튼 선택 시 계정이 삭제되며,\n데이터는 복구되지 않아요',
      [
        {
          text: '취소',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: '확인', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.arrowBack}
          onPress={() => {
            goBackMain();
          }}>
          <Image
            width={24}
            height={24}
            source={require('../../assets/arrow-back.png')}
          />
        </TouchableOpacity>
        <Text style={{fontWeight: 'bold', fontSize: 16, color: '#212121'}}>
          개인정보설정
        </Text>
        <View
          style={{
            paddingTop: 0,
            right: 18,
            position: 'absolute',
            zIndex: 3,
          }}>
          <Image
            width={24}
            height={24}
            source={require('../../assets/mypage-noti.png')}
          />
        </View>
      </View>
      <View style={styles.profileContainer}>
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
            프로필 커버
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 8,
              borderColor: checkedProfile == 'profile1' ? '#7744FF' : '#DDDDDD',
              width: 103,
              height: 120,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
              shadowColor: 'white',
              opacity: checkedProfile == 'profile1' ? 1 : 0.5,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.8, // 그림자 투명도
              shadowRadius: 4, // 그림자 반경
              elevation: 20, // 안드로이드에서 그림자 표현을 위한 속성
            }}>
            <TouchableOpacity
              onPress={() => {
                onClickProfile('profile1');
              }}>
              <Image source={require('../../assets/profile1.png')} />
            </TouchableOpacity>
            {checkedProfile == 'profile1' && (
              <Image
                style={{
                  position: 'absolute',
                  bottom: 3,
                  right: 3,
                }}
                source={require('../../assets/setting-represent.png')}
              />
            )}
          </View>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 8,
              borderColor: checkedProfile == 'profile2' ? '#7744FF' : '#DDDDDD',
              width: 103,
              height: 120,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
              shadowColor: 'white',
              opacity: checkedProfile == 'profile2' ? 1 : 0.5,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.8, // 그림자 투명도
              shadowRadius: 4, // 그림자 반경
              elevation: 20, // 안드로이드에서 그림자 표현을 위한 속성
            }}>
            <TouchableOpacity
              onPress={() => {
                onClickProfile('profile2');
              }}>
              <Image source={require('../../assets/profile2.png')} />
            </TouchableOpacity>
            {checkedProfile == 'profile2' && (
              <Image
                style={{
                  position: 'absolute',
                  bottom: 3,
                  right: 3,
                }}
                source={require('../../assets/setting-represent.png')}
              />
            )}
          </View>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 8,
              borderColor: checkedProfile == 'profile3' ? '#7744FF' : '#DDDDDD',
              width: 103,
              height: 120,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: 'white',
              opacity: checkedProfile == 'profile3' ? 1 : 0.5,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.8, // 그림자 투명도
              shadowRadius: 4, // 그림자 반경
              elevation: 20, // 안드로이드에서 그림자 표현을 위한 속성
            }}>
            <TouchableOpacity
              onPress={() => {
                onClickProfile('profile3');
              }}>
              <Image source={require('../../assets/profile3.png')} />
            </TouchableOpacity>
            {checkedProfile == 'profile3' && (
              <Image
                style={{
                  position: 'absolute',
                  bottom: 3,
                  right: 3,
                }}
                source={require('../../assets/setting-represent.png')}
              />
            )}
          </View>
        </View>
      </View>
      <View
        style={{height: 8, backgroundColor: '#F5F5F5', width: '100%'}}></View>
      <View style={styles.content}>
        <View style={styles.infoContainer2}>
          <Text style={styles.infoText2}>닉네임*</Text>
          <View style={{flexDirection: 'row', height: 42, marginTop: 8}}>
            <TextInput
              value={nickname}
              style={{
                width: 240,
                borderWidth: 1,
                borderRadius: 8,
                marginRight: 9,
                paddingHorizontal: 10,
              }}></TextInput>
            <TouchableOpacity
              style={{
                width: 85,
                backgroundColor: '#7261FF',
                alignItems: 'center',
                justifyContent: 'center',
                height: 42,
                borderRadius: 8,
              }}
              onPress={() => checkNickname()}>
              <Text style={{fontSize: 14, color: 'white'}}>중복확인</Text>
            </TouchableOpacity>
          </View>
          <Text style={{marginLeft: 8, color: '#8233FF'}}>
            사용가능한 닉네임이에요
          </Text>
        </View>
        <View style={styles.infoContainer2}>
          <Text style={styles.infoText2}>나이*</Text>
          <View style={{flexDirection: 'row', height: 42, marginTop: 8}}>
            <TextInput
              value={`만 ${age}세`}
              editable={false}
              style={{
                width: 333,
                borderWidth: 1,
                borderRadius: 8,
                marginRight: 9,
                backgroundColor: '#EEEEEE',
                color: '#9E9E9E',
                fontWeight: 'bold',
                paddingHorizontal: 10,
                // fontSize: 16,
              }}></TextInput>
          </View>
        </View>
        <View style={[styles.infoContainer2, {marginTop: 15}]}>
          <Text style={styles.infoText2}>성별*</Text>
          <View style={{flexDirection: 'row', height: 42, marginTop: 8}}>
            <TextInput
              value={gender}
              editable={false}
              style={{
                width: 333,
                borderWidth: 1,
                borderRadius: 8,
                marginRight: 9,
                backgroundColor: '#EEEEEE',
                color: '#9E9E9E',
                fontWeight: 'bold',
                paddingHorizontal: 10,
                // fontSize: 16,
              }}></TextInput>
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <TouchableOpacity onPress={() => onClicWithdrawal()}>
            <Text style={{color: '#929292', textDecorationLine: 'underline'}}>
              탈퇴하기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  profileContainer: {
    paddingHorizontal: 18,
    paddingVertical: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  header: {
    width: '100%',
    height: 48,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupStatus: {
    height: 180,
    width: '100%',
    // justifyContent: 'center',
    padding: 20,
    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 8,
  },
  mypageInfo: {
    padding: 20,
    width: '100%',

    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 8,
  },
  footer: {
    width: '100%',
    height: 218,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowBack: {
    position: 'absolute',
    left: 18,
    zIndex: 2,
  },
  content: {
    // paddingHorizontal: 18,
    paddingVertical: 30,
    alignItems: 'center',
  },

  infoContainer2: {
    // width: '100%',
    marginBottom: 8,
  },

  infoText2: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#212121',
  },
});

export default SettingView;
