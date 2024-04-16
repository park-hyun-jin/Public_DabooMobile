import {useState} from 'react';
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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
});

// 탭 화면 컴포넌트들
const FirstRoute = () => (
  <View style={[styles.scene, {}]}>
    <Text>First Route</Text>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, {}]}>
    <Text>Second Route</Text>
  </View>
);

const initialLayout = {width: Dimensions.get('window').width - 20};
const HomeView = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: '나의 모임'},
    {key: 'second', title: '모임 둘러보기'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: '#8E81FF'}}
      style={{
        backgroundColor: undefined,
        width: 210,
        shadowOffset: {height: 0, width: 0},
        shadowColor: 'transparent',
        justifyContent: 'flex-start',
      }}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            color: focused ? '#7261FF' : '#212121',
            fontSize: 14,
            fontWeight: focused ? 'bold' : undefined,
            textAlign: 'left',
          }}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <View style={styles.mainContainer}>
      <View style={{backgroundColor: '#F5FCEF', width: '100%', height: 300}}>
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
            height: 80,
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

      <View style={{marginTop: 30, paddingHorizontal: 10, flex: 1}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#212121',
            marginBottom: 15,
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
        <TouchableOpacity
          style={{
            alignItems: 'center',
            height: 48,
            backgroundColor: '#7261FF',
            justifyContent: 'center',
            borderRadius: 8,
          }}
          onPress={() => {}}>
          <Text style={{color: 'white', fontSize: 16}}>새로운 모임 만들기</Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
};

export default HomeView;
