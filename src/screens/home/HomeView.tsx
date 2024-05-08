import {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {axiosGet} from '../../common/axios';
import useStore from '../../zustand/store';
import {RadioButton} from 'react-native-paper';
import React from 'react';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  sectionContainer1: {
    paddingHorizontal: 10,
    flex: 3,
    // justifyContent: 'center', //중간정렬
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
  scene: {
    flex: 1,
    borderTopWidth: 0.5,
  },
  footer: {
    paddingHorizontal: 18,
    paddingBottom: 30,
  },
});

const initialLayout = {width: Dimensions.get('window').width - 20};
const HomeView = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: '나의 모임'},
    {key: 'second', title: '모임 둘러보기'},
  ]);
  const {accessToken} = useStore(state => state);
  const [checked, setChecked] = useState('recruiting');

  // 탭 화면 컴포넌트들
  const FirstRoute = React.memo(() => {
    return (
      <View style={[styles.scene, {}]}>
        <View style={{paddingVertical: 18}}>
          <RadioButton.Group
            onValueChange={newValue => setChecked(newValue)}
            value={checked}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 70,
                height: 32,
              }}>
              <RadioButton value="recruiting" />
              <Text style={{fontSize: 12, color: '#757575'}}>모집중</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 70,
                height: 32,
              }}>
              <RadioButton value="recruited" />
              <Text style={{fontSize: 12, color: '#757575'}}>마감 된 모집</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{marginLeft: 10}}>
            <Image source={require('../../assets/group-temp1.png')} />
          </View>
          <View style={{marginRight: 10}}>
            <Image source={require('../../assets/group-temp2.png')} />
          </View>
        </View>
      </View>
    );
  });

  const SecondRoute = React.memo(() => {
    return (
      <View style={[styles.scene, {}]}>
        <View style={{paddingVertical: 18}}>
          <RadioButton.Group
            onValueChange={newValue => setChecked(newValue)}
            value={checked}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 70,
                height: 32,
              }}>
              <RadioButton value="recruiting" />
              <Text style={{fontSize: 12, color: '#757575'}}>모집중</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 70,
                height: 32,
              }}>
              <RadioButton value="recruited" />
              <Text style={{fontSize: 12, color: '#757575'}}>마감 된 모집</Text>
            </View>
          </RadioButton.Group>
        </View>
      </View>
    );
  });
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const onClickMakeGroup = useCallback(() => {
    navigation.navigate('MakeGroup');
  }, []);

  // 상단 집 모양, 포인트 정보 가져오기
  const getMyWallet = async (): Promise<void> => {
    // TO-DO
    const params = null;

    try {
      const response = await axiosGet('v1/wallet', params, accessToken);
      if (response.status == 200) {
        // data : {
        //   id,
        //   member : { id, nickname },
        //   myHome : {
        //     id , name, level
        //   },
        //   myHomeName,
        //   point,
        //   saveAmount,
        //   updatedAt
        // }
        console.log(response.data);
      }
    } catch (e) {}
  };

  // 모임 가져오기
  const getGathering = async (): Promise<void> => {
    // TO-DO
    const params = null;

    // my/{isActive}/{made}    //  isActive: true or false // made: [] or me
    // {status}/{platform}    //  status: PENDING or ONGOING or COMPLETED // (required = false) platform: TOSS, CASH_WORK, MONIMO, BALSO
    const endPoint = '';

    try {
      const response = await axiosGet(
        'v1/gathering/' + endPoint,
        params,
        accessToken,
      );
      if (response.status == 200) {
        // data : {
        //   id,
        //   member : { id, nickname },
        //   myHome : {
        //     id , name, level
        //   },
        //   myHomeName,
        //   point,
        //   saveAmount,
        //   updatedAt
        // }
        console.log(response.data);
      }
    } catch (e) {}
  };

  // 플랫폼 정보 가져오기
  const getPlatform = async (): Promise<void> => {
    // TO-DO
    const params = null;

    try {
      const response = await axiosGet(
        'v1/gathering/platform',
        params,
        accessToken,
      );
      if (response.status == 200) {
        // data : {
        //   'TOSS', 'CASH_WALK', 'MONIMO', 'BALSO'
        // }
        console.log(response.data);
      }
    } catch (e) {}
  };

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: '#8E81FF'}}
      style={{
        backgroundColor: 'white',
        width: 'auto',
        shadowOffset: {height: 0, width: 0},
        shadowColor: 'transparent',
      }}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            color: focused ? '#7261FF' : '#212121',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <View style={styles.mainContainer}>
      <View style={{backgroundColor: '#F5FCEF', width: '100%', height: 240}}>
        <View
          style={{
            paddingTop: 20,
            left: 20,
            position: 'absolute',
            zIndex: 3,
          }}>
          <Image source={require('../../assets/daboo.png')} />
        </View>
        <View style={styles.sectionContainer1}>
          <Image
            width={269}
            height={269}
            source={require('../../assets/home.png')}
          />
        </View>
        <View
          style={{
            paddingTop: 20,
            right: 20,
            position: 'absolute',
            zIndex: 3,
          }}>
          <Image source={require('../../assets/notification.png')} />
        </View>
      </View>
      <View style={{alignItems: 'center', backgroundColor: '#F5FCF0'}}>
        <View
          style={{
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            backgroundColor: '#C5C5C5',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            height: 70,
            width: '100%',
            paddingHorizontal: 15,
          }}>
          <View style={{marginRight: 8}}>
            <Image source={require('../../assets/point.png')} />
          </View>
          <View>
            <Text style={{fontSize: 20, color: '#212121', fontWeight: 'bold'}}>
              2,024
            </Text>
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 14, fontWeight: '600', color: '#212121'}}>
              김다부님 반가워요, {'\n'}현재 모은 포인트로 자재 구입이 가능해요!
            </Text>
          </View>
        </View>
      </View>

      <View style={{marginTop: 15, paddingHorizontal: 10, flex: 1}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#212121',
            marginBottom: 5,
          }}>
          함께모으기 모임
        </Text>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            height: 48,
            backgroundColor: '#7261FF',
            justifyContent: 'center',
            borderRadius: 8,
            marginBottom: 5,
          }}
          onPress={() => onClickMakeGroup()}>
          <Text style={{color: 'white', fontSize: 16}}>새로운 모임 만들기</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            justifyContent: 'center',
          }}>
          <View style={{marginRight: 8}}>
            <Image source={require('../../assets/home-explain.png')} />
          </View>
          <Text>함께모으기 모임은?</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeView;
