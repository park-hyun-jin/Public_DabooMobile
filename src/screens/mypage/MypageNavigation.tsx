import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MypageView from './MypageView';
import SettingView from './SettingView';

const Stack = createNativeStackNavigator();

const MypageNavigation = () => {
  // RootStackPageList에서 페이지를 관리합니다
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
