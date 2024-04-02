import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../../SignUp';
import DabooMain from '../../DabooMain';
import SignUp1View from '../signUp/SignUp1View';
import SignUp2View from '../signUp/SignUp2View';
import HomeView from '../home/HomeView';

/**
 * StackNavigator를 이용하여서 앱에 대한 페이지 이동을 관리합니다.
 */
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  // RootStackPageList에서 페이지를 관리합니다
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DabooMain"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="DabooMain" component={DabooMain} />
        <Stack.Screen name="SignUp1View" component={SignUp1View} />
        <Stack.Screen name="SignUp2View" component={SignUp2View} />
        <Stack.Screen name="HomeView" component={HomeView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
