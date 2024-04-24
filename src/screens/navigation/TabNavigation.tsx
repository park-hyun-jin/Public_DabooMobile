import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeView from '../home/HomeView';
import HoneyTipView from '../honeytip/HoneyTipView';
import RankingView from '../ranking/RankingView';
import MypageView from '../mypage/MypageView';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'HoneyTip') {
            iconName = focused
              ? 'tips-and-updates'
              : 'tips-and-updates-outline';
          } else if (route.name === 'Ranking') {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          } else if (route.name === 'Mypage') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeView}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="HoneyTip"
        component={HoneyTipView}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Ranking"
        component={RankingView}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Mypage"
        component={MypageView}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
