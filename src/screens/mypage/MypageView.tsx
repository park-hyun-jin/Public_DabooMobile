import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const MypageView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold', fontSize: 16, color: '#212121'}}>
          마이페이지
        </Text>
        <View
          style={{
            paddingTop: 0,
            right: 20,
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
      <View style={styles.profile}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginRight: 15}}>
            <Image
              width={48}
              height={48}
              source={require('../../assets/mask-group.png')}
            />
          </View>
          <Text style={{fontSize: 18, color: '#212121'}}>닉네임자리</Text>
          <View style={{marginLeft: 5, marginRight: 20}}>
            <Image
              width={22}
              height={22}
              source={require('../../assets/kakao-icon.png')}
            />
          </View>
        </View>
        <View style={{}}>
          <View style={{}}>
            <Image source={require('../../assets/mypage-setting.png')} />
          </View>
        </View>
      </View>
      <View style={styles.groupStatus}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 16, color: '#333333'}}>모임 현황</Text>
          <View style={{}}>
            <Image source={require('../../assets/mypage-arrow.png')} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F5F5F5',
            height: 80,
          }}>
          <View style={{alignItems: 'center', width: 108}}>
            <Text style={{color: '#8281FF', fontWeight: 'bold'}}>0</Text>
            <Text style={{color: '#757575', fontWeight: 'bold', fontSize: 14}}>
              참가중
            </Text>
          </View>
          <View style={{alignItems: 'center', width: 108}}>
            <Text style={{color: '#8281FF', fontWeight: 'bold'}}>0</Text>

            <Text style={{color: '#757575', fontWeight: 'bold', fontSize: 14}}>
              완료
            </Text>
          </View>
          <View style={{alignItems: 'center', width: 108}}>
            <Text style={{color: '#8281FF', fontWeight: 'bold'}}>0</Text>

            <Text style={{color: '#757575', fontWeight: 'bold', fontSize: 14}}>
              내가 만든 모임
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.mypageInfo}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{color: '#333333', fontWeight: 'bold', fontSize: 16}}>
            달성률
          </Text>
          <View
            style={{
              backgroundColor: '#C6C0F8',
              width: 56,
              alignItems: 'center',
            }}>
            <Text style={{color: '#7261FF', fontWeight: 'bold', fontSize: 14}}>
              56%
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{color: '#333333', fontWeight: 'bold', fontSize: 16}}>
            나의 집
          </Text>
          <View style={{}}>
            <Image source={require('../../assets/mypage-arrow.png')} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{color: '#333333', fontWeight: 'bold', fontSize: 16}}>
            획득한 배지
          </Text>
          <View style={{}}>
            <Image source={require('../../assets/mypage-arrow.png')} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{color: '#333333', fontWeight: 'bold', fontSize: 16}}>
            공지사항
          </Text>
          <View style={{}}>
            <Image source={require('../../assets/mypage-arrow.png')} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{color: '#333333', fontWeight: 'bold', fontSize: 16}}>
            자주묻는질문
          </Text>
          <View style={{}}>
            <Image source={require('../../assets/mypage-arrow.png')} />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={{
            width: 180,
            height: 36,
            backgroundColor: '#F5F5F5',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#9E9E9E', fontSize: 14, fontWeight: 'bold'}}>
            로그아웃
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
  profile: {
    height: 80,
    alignItems: 'center',
    width: '100%',
    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 8,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
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
});

export default MypageView;
