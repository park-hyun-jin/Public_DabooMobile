import {Picker} from '@react-native-picker/picker';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import CheckBox from 'react-native-check-box';
import {axiosGet, axiosPost} from './common/axios';
import useStore from './zustand/store';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    height: 52,
    justifyContent: 'flex-start', //중간정렬
    alignItems: 'center',
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    // alignItems: 'center',
  },
  footerContainer: {
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7261FF',
    width: '100%',
  },
  arrowBack: {
    position: 'absolute',
    marginLeft: 18,
    zIndex: 2,
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#212121',
  },
  footerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    fontFamily: 'SemiBold',
  },
  detailContainer1: {
    // flex: 2,
    // width: '100%',
    // height: '100%',
    width: '100%',
    flex: 3,
  },
  detailContainer2: {
    height: 8,
    width: '100%',
    backgroundColor: '#F5F5F5',
    marginTop: 15,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  detailContainer3: {
    // flex: 1,
    // width: '100%',
    // height: '100%',
    width: '100%',
    flex: 2,
  },
  infoContainer1: {
    width: '100%',
    paddingHorizontal: 18,
    height: '25%',
    justifyContent: 'center',
  },
  infoText1: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#212121',
  },

  infoContainer2: {
    width: '100%',
    paddingHorizontal: 18,
    height: '25%',
  },

  infoText2: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#212121',
  },

  infoContainer3: {
    width: '100%',
    paddingHorizontal: 18,
    height: '25%',
  },

  infoText3: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#212121',
  },

  infoContainer4: {
    width: '100%',
    paddingHorizontal: 18,
    height: '25%',
  },

  infoContainer5: {
    width: '100%',
    paddingHorizontal: 18,
    height: '30%',
    justifyContent: 'center',
  },

  infoContainer6: {
    width: '100%',
    paddingHorizontal: 18,
    height: '70%',
  },

  infoText4: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#212121',
  },
});

const SignUp = ({navigation, route}) => {
  const [value, setValue] = useState(null);
  const [items, setItems] = useState<string[]>([]);
  const [checked, setChecked] = useState('female');
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [firstChecked, setFirstChecked] = useState<boolean>(false);
  const [secondChecked, setSecondChecked] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>('김다부');

  const accessToken = useStore(state => state.accessToken);

  useEffect(() => {
    if (firstChecked && secondChecked) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [firstChecked, secondChecked]);

  useEffect(() => {
    if (allChecked) {
      setFirstChecked(true);
      setSecondChecked(true);
    }
  }, [allChecked]);

  const goSignUp1 = useCallback(() => {
    navigation.navigate('SignUp1View');
  }, []);

  const goSignUp2 = useCallback(() => {
    navigation.navigate('SignUp2View');
  }, []);

  useEffect(() => {
    console.log(route.params);
    route.params?.firstChecked && setFirstChecked(route.params?.firstChecked);
    route.params?.secondChecked &&
      setSecondChecked(route.params?.secondChecked);
  }, [route.params]);

  useEffect(() => {
    const tmpArr = [];
    for (let i = 1950, length = 2024; i < length; i++) {
      tmpArr.push(i.toString());
    }
    setItems(tmpArr.reverse());
    setNickname(route.params?.nickname);
  }, []);

  const goBackMain = useCallback(() => {
    navigation.goBack();
  }, []);

  const onCickCompleted = useCallback((isAllChecked: boolean) => {
    if (isAllChecked) {
      navigation.navigate('HomeView');
    }
  }, []);

  const insertMember = async (): Promise<void> => {
    // TO-DO
    const params = {
      nickname: nickname,
      // birthYear: birthYear, // Long birthYear
      // sex: sex,  // MALE or FEMALE
    };

    try {
      const response = await axiosPost(
        'v1/members/profile',
        params,
        accessToken,
      );
      if (response.status == 200) {
        console.log(response.data);
      }
    } catch (e) {}
  };

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
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.arrowBack}
          onPress={() => {
            goBackMain();
          }}>
          <Image
            width={24}
            height={24}
            source={require('./assets/arrow-back.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
          }}>
          <Text style={styles.headerText}>회원가입</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.detailContainer1}>
          <View style={styles.infoContainer1}>
            <Text style={styles.infoText1}>
              회원가입을 위해 {'\n'}필요한 정보를 입력해주세요
            </Text>
          </View>
          <View style={styles.infoContainer2}>
            <Text style={styles.infoText2}>
              닉네임<Text style={{color: '#7261FF'}}>*</Text>
            </Text>
            <View style={{flexDirection: 'row', height: 42, marginTop: 8}}>
              <TextInput
                value={nickname}
                style={{
                  width: '70%',
                  borderWidth: 1,
                  borderRadius: 8,
                  marginRight: 9,
                }}></TextInput>
              <TouchableOpacity
                style={{
                  width: '23%',
                  backgroundColor: '#7261FF',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 42,
                  borderRadius: 8,
                }}
                onPress={() => checkNickname()}>
                <Text style={{fontSize: 14, color: 'white'}}>중복확인</Text>
              </TouchableOpacity>
            </View>
            <Text style={{marginLeft: 8, color: '#8233FF'}}>
              사용가능한 닉네임이에요
            </Text>
          </View>
          <View style={styles.infoContainer3}>
            <Text style={styles.infoText3}>
              나이<Text style={{color: '#7261FF'}}>*</Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                height: 42,
                marginTop: 8,
              }}>
              <Picker
                selectedValue={value}
                onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
                placeholder="선택"
                style={{width: 152}}>
                {items.map((pickerItem: string) => {
                  return (
                    <Picker.Item
                      label={pickerItem}
                      value={pickerItem}
                      key={pickerItem}></Picker.Item>
                  );
                })}
              </Picker>
              <View style={{marginLeft: 10, justifyContent: 'center'}}>
                <Text style={{color: '#212121'}}>년생</Text>
              </View>
            </View>
          </View>
          <View style={styles.infoContainer4}>
            <Text style={styles.infoText4}>
              성별<Text style={{color: '#7261FF'}}>*</Text>
            </Text>
            <RadioButton.Group
              onValueChange={newValue => setChecked(newValue)}
              value={checked}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 8,
                  marginTop: 8,
                  borderColor: checked == 'female' ? '#7261FF' : '#9E9E9E',
                  marginRight: 8,
                  width: 81,
                  height: 42,
                  backgroundColor:
                    checked == 'female' ? 'rgba(130, 115,255, 0.2)' : 'white',
                }}>
                <RadioButton value="female" />
                <Text
                  style={{color: checked == 'female' ? '#7261FF' : '#9E9E9E'}}>
                  여성
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 8,
                  marginTop: 8,
                  borderColor: checked == 'male' ? '#7261FF' : '#9E9E9E',
                  marginRight: 8,
                  width: 81,
                  height: 42,
                  backgroundColor:
                    checked == 'male' ? 'rgba(130, 115,255, 0.2)' : 'white',
                }}>
                <RadioButton value="male" />
                <Text
                  style={{color: checked == 'male' ? '#7261FF' : '#9E9E9E'}}>
                  남성
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 8,
                  marginTop: 8,
                  borderColor: checked == 'unselect' ? '#7261FF' : '#9E9E9E',
                  width: 105,
                  height: 42,
                  backgroundColor:
                    checked == 'unselect' ? 'rgba(130, 115,255, 0.2)' : 'white',
                }}>
                <RadioButton value="unselect" />
                <Text
                  style={{
                    color: checked == 'unselect' ? '#7261FF' : '#9E9E9E',
                  }}>
                  선택안함
                </Text>
              </View>
            </RadioButton.Group>
          </View>
        </View>
        <View style={styles.detailContainer2}></View>
        <View style={styles.detailContainer3}>
          <View style={styles.infoContainer5}>
            <Text style={{fontSize: 20, color: '#212121', fontWeight: 'bold'}}>
              서비스이용을 위해{'\n'}아래약관에 동의해주세요
            </Text>
          </View>
          <View style={styles.infoContainer6}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#BDBDBD',
                height: 34,
              }}>
              <CheckBox
                isChecked={allChecked}
                rightTextStyle={{
                  fontSize: 14,
                  color: '#212121',
                  fontWeight: 'bold',
                }}
                checkBoxColor="#7260FF"
                onClick={() => {
                  if (allChecked) {
                    setAllChecked(!allChecked);
                  }
                }}
                rightText="전체 약관에 동의합니다."
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                height: 34,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <CheckBox
                isChecked={firstChecked}
                rightTextStyle={{
                  fontSize: 14,
                  color: '#212121',
                  fontWeight: 'bold',
                  height: 34,
                  textAlignVertical: 'center',
                }}
                style={{
                  height: 34,
                  width: 300,
                  flexDirection: 'column',
                }}
                checkBoxColor="#7260FF"
                onClick={() => {
                  if (firstChecked) {
                    setFirstChecked(false);
                  } else {
                    goSignUp1();
                  }
                }}
                rightText="[필수] 개인정보처리방침"
              />
              <Pressable
                onPress={() => {
                  goSignUp1();
                }}
                style={{
                  width: 50,
                  height: 34,
                  alignItems: 'flex-end',
                }}>
                <Text
                  style={{
                    textAlignVertical: 'center',
                    height: 34,
                    color: '#757575',
                  }}>
                  보기
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                height: 34,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <CheckBox
                isChecked={secondChecked}
                rightTextStyle={{
                  fontSize: 14,
                  color: '#212121',
                  fontWeight: 'bold',
                  height: 34,
                  textAlignVertical: 'center',
                }}
                style={{
                  height: 34,
                  width: 300,
                  flexDirection: 'column',
                }}
                checkBoxColor="#7260FF"
                onClick={() => {
                  if (secondChecked) {
                    setSecondChecked(false);
                  } else {
                    goSignUp2();
                  }
                }}
                rightText="[필수] 이용약관"
              />
              <Pressable
                onPress={() => {}}
                style={{
                  width: 50,
                  height: 34,
                  alignItems: 'flex-end',
                }}>
                <Text
                  style={{
                    textAlignVertical: 'center',
                    height: 34,
                    color: '#757575',
                  }}>
                  보기
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.footerContainer,
          !allChecked && {backgroundColor: '#D9D9D9'},
        ]}>
        <TouchableOpacity
          style={{
            width: '100%',
          }}
          disabled={allChecked ? false : true}
          onPress={() => {
            onCickCompleted(allChecked);
          }}>
          <Text style={styles.footerText}>완료</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
