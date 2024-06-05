import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
const initialLayout = {width: Dimensions.get('window').width - 20};
const ParticipateGroupView = ({navigation}) => {
  const [groupTitle, setGroupTitle] = useState('토스로 3000원 벌자');
  const [memberCount, setMemberCount] = useState(3);
  const [detailInfo, setDetailInfo] = useState(
    '토스로 3000원 벌어서 커피 값 벌어봅시다! 30일 동안 꼬박꼬박 확인해봐요~!',
  );
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: '인증방법 안내'},
    {key: 'second', title: '자주 묻는 질문'},
  ]);

  const goBackMain = useCallback(() => {
    navigation.goBack();
  }, []);

  const onParticipageGroup = useCallback(() => {
    Alert.alert('참가완료');
    navigation.navigate('HomeView');
  }, []);

  // 탭 화면 컴포넌트들
  const FirstRoute = React.memo(() => {
    return (
      <ScrollView contentContainerStyle={styles.scene}>
        <View>
          <Text style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
            아래와 같이 순서대로 인증해주세요
          </Text>
        </View>
        <View style={{marginTop: 18}}>
          <Image source={require('../../assets/participate-explain.png')} />
        </View>
      </ScrollView>
    );
  });

  const SecondRoute = React.memo(() => {
    return (
      <ScrollView contentContainerStyle={styles.scene}>
        <View>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '700'}}>
            자주 묻는 질문을 모았어요
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            paddingHorizontal: 12,
            paddingVertical: 22,
            backgroundColor: '#F5F5F5',
            margin: 18,
            borderRadius: 16,
          }}>
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <Image
              style={{marginRight: 8}}
              source={require('../../assets/participate-q.png')}></Image>
            <Text
              style={{
                textAlignVertical: 'center',
                fontWeight: 'bold',
                color: '#333333',
              }}>
              모임에서 나오고 싶어요
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', marginVertical: 5, marginBottom: 15}}>
            <Image
              style={{marginRight: 8}}
              source={require('../../assets/participate-a.png')}></Image>
            <Text
              style={{
                textAlignVertical: 'center',
                fontSize: 12,
                color: 'black',
              }}>
              인원이 다 모이기 전에는 언제든지 나올 수 있어요. {'\n'}
              하지만 인원이 다 차서 모임이 시작된 후에는 설정된 목표 {'\n'}
              기간 50%가 지난 후 부터 모임에서 나올 수 있어요.
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <Image
              style={{marginRight: 8}}
              source={require('../../assets/participate-q.png')}></Image>
            <Text
              style={{
                textAlignVertical: 'center',
                fontWeight: 'bold',
                color: '#333333',
              }}>
              모임에서 자주 나가면 적용되는 패널티가 있나요?
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <Image
              style={{marginRight: 8}}
              source={require('../../assets/participate-a.png')}></Image>
            <Text
              style={{
                textAlignVertical: 'center',
                fontSize: 12,
                color: 'black',
              }}>
              함께모으기 모임에서 연속 3회이상 나온다면{'\n'}
              앞으로 함께모으기 모임에 참여가 불가능하니 신중하게{'\n'}
              결정해주세요.
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  });
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: '#8E81FF'}}
      style={{
        backgroundColor: 'white',
        width: 'auto',
        shadowOffset: {height: 0, width: 0},
        shadowColor: 'transparent',
        justifyContent: 'center',
      }}
      tabStyle={{height: 40}}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            color: focused ? '#7261FF' : '#9E9E9E',
            fontSize: 14,
            fontWeight: 'bold',
          }}>
          {route.title}
        </Text>
      )}
    />
  );
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
          <View style={{marginVertical: 5}}>
            <Text style={{color: '#212121', fontSize: 24, fontWeight: 'bold'}}>
              {groupTitle}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
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
        <View style={{paddingHorizontal: 10, flex: 1}}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
          />
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

  scene: {
    flexGrow: 1,
    borderTopWidth: 0.5,
    paddingVertical: 15,
    alignItems: 'center',
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
