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
});
const HomeView = () => {
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
        <Image
          width={Dimensions.get('window').width}
          height={80}
          source={require('../../assets/home-topview.png')}
        />
        <View
          style={{
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            borderTopWidth: 0.1,
            borderColor: '#212121',
            backgroundColor: '#/',
            height: 80,
            width: '100%',
          }}></View>
      </View>

      <View style={{marginTop: 30, paddingHorizontal: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>함께모으기 모임</Text>
        <View style={{flexDirection: 'row'}}>
          <Text>나의 모임</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeView;
