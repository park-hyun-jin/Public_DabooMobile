import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HoneyTipView from '../honeytip/HoneyTipView';
import RankingView from '../ranking/RankingView';
import MypageNavigation from '../mypage/MypageNavigation';
import HomeNavigation from '../home/HomeNavigation';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === '홈') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === '꿀팁') {
            iconName = focused
              ? 'tips-and-updates'
              : 'tips-and-updates-outline';
          } else if (route.name === '랭킹') {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          } else if (route.name === '마이') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="홈"
        component={HomeNavigation}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="꿀팁"
        component={HoneyTipView}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="랭킹"
        component={RankingView}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="마이"
        component={MypageNavigation}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
