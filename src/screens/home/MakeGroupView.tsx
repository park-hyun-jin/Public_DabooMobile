import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import {axiosGet} from '../../common/axios';
import useStore from '../../zustand/store';
import {Picker} from '@react-native-picker/picker';
import {RadioButton} from 'react-native-paper';
import Slider from '@react-native-community/slider';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const MakeGroupView = ({navigation}) => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const [nickname, setNickname] = useState<string>('김다부');
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState('여성');
  const accessToken = useStore(state => state.accessToken);
  const [checkedProfile, setCheckedProfile] = useState<string>('profile1');
  const [modalVisible, setModalVisible] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [checked, setChecked] = useState<'2' | '3'>('2');
  const [period, setPeriod] = useState('');
  const [amount, setAmount] = useState(10);

  const goBackMain = useCallback(() => {
    navigation.goBack();
  }, []);

  useEffect(() => {
    setItems(['', '토스', '캐시앱', '기타']);
  }, []);

  const onClickProfile = useCallback((profileValue: string) => {
    setCheckedProfile(profileValue);
  }, []);

  const onMakeGroup = useCallback(() => {
    navigation.navigate('HomeView');
  }, []);

  const checkNickname = async (): Promise<void> => {
    const params = {
      nickname: nickname,
    };

    try {
      const response = await axiosGet(
        'v1/members/profile/nickname/check',
        params,
        accessToken,
      );
      if (response.status == 200) {
        console.log(response.data);
        // TO-DO
        // { duplicate : false } -> 사용 가능
      }
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
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
        <Text style={{fontWeight: 'bold', fontSize: 16, color: '#212121'}}>
          모임 만들기
        </Text>
      </View>
      <View style={styles.middle}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          모임 만들고{'\n'}함께 더 많이 모아요!
        </Text>
      </View>
      <View
        style={{backgroundColor: '#F5F5F5', height: 4, width: '100%'}}></View>
      <KeyboardAwareScrollView
        style={styles.content}
        scrollEnabled={true}
        extraHeight={180}
        resetScrollToCoords={{x: 0, y: 0}}
        enableAutomaticScroll={true}
        enableOnAndroid={true}>
        <View style={styles.infoContainer2}>
          <Text style={styles.infoText2}>
            앱테크 앱<Text style={{color: '#7261FF'}}>*</Text>
          </Text>
          <View style={{marginTop: 8}}>
            <View
              style={{
                height: 42,
                width: 110,
                borderWidth: 1.4,
                borderColor: '#BDBDBD',
                borderRadius: 8,
                justifyContent: 'center',
              }}>
              <Picker
                selectedValue={value}
                onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
                placeholder="앱 선택"
                style={{
                  width: 110,
                }}>
                {items.map((pickerItem: string) => {
                  return (
                    <Picker.Item
                      label={pickerItem}
                      value={pickerItem}
                      key={pickerItem}></Picker.Item>
                  );
                })}
              </Picker>
            </View>
          </View>
        </View>
        <View style={styles.infoContainer2}>
          <Text style={styles.infoText2}>
            모임이름<Text style={{color: '#7261FF'}}>*</Text>
          </Text>
          <View style={{flexDirection: 'row', height: 42, marginTop: 8}}>
            <TextInput
              value={groupName}
              onChangeText={text => setGroupName(text)}
              placeholder="15자 이내로 입력해주세요."
              maxLength={15}
              style={{
                width: 250,
                borderWidth: 1.4,
                borderColor: '#BDBDBD',
                borderRadius: 8,
                marginRight: 9,
                color: '#9E9E9E',
                paddingHorizontal: 10,
                // fontSize: 16,
              }}></TextInput>
          </View>
        </View>
        <View style={[styles.infoContainer2]}>
          <Text style={styles.infoText2}>
            모임인원<Text style={{color: '#7261FF'}}>*</Text>
          </Text>
          <RadioButton.Group
            onValueChange={newValue => setChecked(newValue)}
            value={checked}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1.4,
                borderRadius: 8,
                marginTop: 8,
                borderColor: checked == '2' ? '#7261FF' : '#9E9E9E',
                marginRight: 12,
                width: 77,
                height: 44,
                backgroundColor:
                  checked == '2' ? 'rgba(130, 115,255, 0.2)' : 'white',
              }}>
              <RadioButton value="2" />
              <Text style={{color: checked == '2' ? '#7261FF' : '#9E9E9E'}}>
                2명
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1.4,
                borderRadius: 8,
                marginTop: 8,
                borderColor: checked == '3' ? '#7261FF' : '#9E9E9E',
                marginRight: 8,
                width: 77,
                height: 44,
                backgroundColor:
                  checked == '3' ? 'rgba(130, 115,255, 0.2)' : 'white',
              }}>
              <RadioButton value="3" />
              <Text style={{color: checked == '3' ? '#7261FF' : '#9E9E9E'}}>
                3명
              </Text>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.infoContainer2}>
          <Text style={styles.infoText2}>
            진행기간<Text style={{color: '#7261FF'}}>*</Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              height: 42,
              marginTop: 8,
              alignItems: 'center',
            }}>
            <TextInput
              value={period}
              onChangeText={text => setPeriod(text)}
              placeholder="20"
              style={{
                width: 120,
                borderWidth: 1.4,
                borderColor: '#BDBDBD',
                borderRadius: 8,
                marginRight: 9,
                color: '#BDBDBD',
                paddingHorizontal: 10,
                // fontSize: 16,
              }}></TextInput>
            <Text style={{color: 'black'}}>일</Text>
          </View>
        </View>
        <View style={styles.infoContainer2}>
          <Text style={styles.infoText2}>
            모임설명<Text style={{color: '#7261FF'}}>*</Text>
          </Text>
          <View style={{flexDirection: 'row', height: 42, marginTop: 8}}>
            <TextInput
              value={groupName}
              onChangeText={text => setGroupName(text)}
              placeholder="70자 이내로 입력해주세요."
              maxLength={70}
              style={{
                width: 250,
                borderWidth: 1.4,
                borderColor: '#BDBDBD',
                borderRadius: 8,
                marginRight: 9,
                color: '#9E9E9E',
                paddingHorizontal: 10,
                // fontSize: 16,
              }}></TextInput>
          </View>
        </View>
        <View style={styles.infoContainer2}>
          <Text style={styles.infoText2}>
            목표금액<Text style={{color: '#7261FF'}}>*</Text>
          </Text>
          <View style={{height: 42, marginTop: 8, marginBottom: 8}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
              }}>
              <Text>
                최소 <Text style={{color: '#7261FF'}}>10원</Text>
              </Text>
              <Text>
                최대 <Text style={{color: '#7261FF'}}>10,000원</Text>
              </Text>
            </View>
            <Slider
              value={amount}
              onValueChange={newValue => setAmount(newValue)}
              style={{width: '100%', height: 40}}
              minimumValue={10}
              maximumValue={10000}
              minimumTrackTintColor="#7261FF"
              maximumTrackTintColor="#000000"
              step={4}
            />
          </View>
          <Text>{amount}</Text>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={{
            width: '100%',
          }}
          onPress={() => {
            onMakeGroup();
          }}>
          <Text style={styles.footerText}>만들기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    width: '100%',
    height: 48,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowBack: {
    position: 'absolute',
    left: 18,
    zIndex: 2,
  },
  content: {
    paddingHorizontal: 18,
    paddingVertical: 15,
    flex: 1,
  },

  infoContainer2: {
    // width: '100%',
    flex: 1,
    marginVertical: 12,
  },

  infoText2: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#212121',
  },
  middle: {
    paddingHorizontal: 18,
    height: '11%',
    justifyContent: 'center',
  },

  footerContainer: {
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7261FF',
    bottom: 0,
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

export default MakeGroupView;
