import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ParticipateGroupView = ({navigation}) => {
  const [groupTitle, setGroupTitle] = useState('토스로 3000원 벌자');
  const [memberCount, setMemberCount] = useState(3);
  const [detailInfo, setDetailInfo] = useState(
    '토스로 3000원 벌어서 커피 값 벌어봅시다! 30일 동안 꼬박꼬박 확인해봐요~!',
  );

  const goBackMain = useCallback(() => {
    navigation.goBack();
  }, []);

  const onParticipageGroup = useCallback(() => {
    Alert.alert('참가완료');
    navigation.navigate('HomeView');
  }, []);
  return (
    <View style={styles.mainContainer}>
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
        <View style={{bottom: 40}}>
          <Image source={require('../../assets/mask-group.png')} />
          <Text>닉네임01</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.infoContent1}>
          <View style={{marginVertical: 18}}>
            <Text style={{color: '#212121', fontSize: 24, fontWeight: 'bold'}}>
              {groupTitle}
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <View
              style={{
                backgroundColor: '#F1EFFF',
                paddingHorizontal: 6,
                paddingVertical: 1,
                borderRadius: 8,
                marginRight: 5,
              }}>
              <Text style={{color: '#7744FF', fontSize: 14}}>#토스</Text>
            </View>
            <View
              style={{
                backgroundColor: '#F1EFFF',
                paddingHorizontal: 6,
                paddingVertical: 1,
                borderRadius: 8,
                marginRight: 5,
              }}>
              <Text style={{color: '#7744FF', fontSize: 14}}>#30일</Text>
            </View>
            <View
              style={{
                backgroundColor: '#F1EFFF',
                paddingHorizontal: 6,
                paddingVertical: 1,
                borderRadius: 8,
                marginRight: 5,
              }}>
              <Text style={{color: '#7744FF', fontSize: 14}}>#3000원</Text>
            </View>
          </View>
          <View
            style={{
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#EEEEEE',
              width: '100%',
              height: 50,
              marginVertical: 18,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#212121', fontWeight: 'bold'}}>
              선착순 남은 인원 {memberCount}명
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: '#F1EFFF',
              borderRadius: 8,
              padding: 12,
            }}>
            <Text style={{color: 'black', fontSize: 14}}>{detailInfo}</Text>
          </View>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={{
            width: '100%',
          }}
          onPress={() => {
            onParticipageGroup();
          }}>
          <Text style={styles.footerText}>참가하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: 210,
    backgroundColor: '#BDBDBD',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  arrowBack: {
    position: 'absolute',
    left: 18,
    zIndex: 2,
    top: 12,
  },
  content: {
    width: '100%',
    marginTop: -18,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flex: 1,
    backgroundColor: 'white',
  },
  infoContent1: {
    alignItems: 'center',
    width: '100%',
    padding: 18,
  },

  footerContainer: {
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7261FF',
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },

  footerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    fontFamily: 'SemiBold',
  },
});

export default ParticipateGroupView;
