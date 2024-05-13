import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useLayoutEffect} from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import HomeView from './HomeView';
import MakeGroupView from './MakeGroupView';
import ParticipateGroupView from './ParticipateGroupView';

const Stack = createNativeStackNavigator();

const HomeNavigation = ({navigation, route}) => {
  // RootStackPageList에서 페이지를 관리합니다
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'HomeView') {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      initialRouteName="HomeView"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeView" component={HomeView} />
      <Stack.Screen name="MakeGroup" component={MakeGroupView} />
      <Stack.Screen name="ParticipateGroup" component={ParticipateGroupView} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
