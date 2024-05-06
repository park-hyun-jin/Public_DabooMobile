import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MypageView from './MypageView';
import SettingView from './SettingView';
import {useLayoutEffect} from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const MypageNavigation = ({navigation, route}) => {
  // RootStackPageList에서 페이지를 관리합니다
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Mypage') {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      initialRouteName="Mypage"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Mypage" component={MypageView} />
      <Stack.Screen name="Setting" component={SettingView} />
    </Stack.Navigator>
  );
};

export default MypageNavigation;
