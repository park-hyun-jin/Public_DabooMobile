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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
    paddingTop: 18,
    // alignItems: 'center',
  },
  footerContainer: {
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7261FF',
    bottom: 0,
    position: 'absolute',
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
  },
  detailContainer2: {
    height: 15,
    width: '100%',
    backgroundColor: '#F5F5F5',
    marginTop: 18,
  },
  detailContainer3: {
    // flex: 1,
    // width: '100%',
    // height: '100%',
    marginTop: 15,
  },
  infoContainer1: {
    width: '100%',
    paddingHorizontal: 18,
    marginBottom: 40,
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
    marginBottom: 20,
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
    marginBottom: 20,
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
    marginBottom: 20,
  },

  infoContainer5: {
    width: '100%',
    paddingHorizontal: 18,
    marginBottom: 20,
  },

  infoContainer6: {
    width: '100%',
    paddingHorizontal: 18,
    marginBottom: 20,
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
            <Text style={styles.infoText2}>닉네임*</Text>
            <View style={{flexDirection: 'row', height: 42, marginTop: 8}}>
              <TextInput
                value={nickname}
                style={{
                  width: 240,
                  borderWidth: 1,
                  borderRadius: 8,
                  marginRight: 9,
                }}></TextInput>
              <TouchableOpacity
                style={{
                  width: 85,
                  backgroundColor: '#7261FF',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 42,
                  borderRadius: 8,
                }}>
                <Text style={{fontSize: 14, color: 'white'}}>중복확인</Text>
              </TouchableOpacity>
            </View>
            <Text style={{marginLeft: 8, color: '#8233FF'}}>
              사용가능한 닉네임이에요
            </Text>
          </View>
          <View style={styles.infoContainer3}>
            <Text style={styles.infoText3}>나이*</Text>
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
            <Text style={styles.infoText4}>성별*</Text>
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
                  borderColor: '#9E9E9E',
                  marginRight: 8,
                  width: 81,
                  height: 42,
                }}>
                <RadioButton value="female" />
                <Text>여성</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 8,
                  marginTop: 8,
                  borderColor: '#9E9E9E',
                  marginRight: 8,
                  width: 81,
                  height: 42,
                }}>
                <RadioButton value="male" />
                <Text>남성</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 8,
                  marginTop: 8,
                  borderColor: '#9E9E9E',
                  width: 105,
                  height: 42,
                }}>
                <RadioButton value="unselect" />
                <Text>선택안함</Text>
              </View>
            </RadioButton.Group>
          </View>
        </View>
        <View style={styles.detailContainer2}>
          <View
            style={{
              height: 10,
              width: '100%',
              backgroundColor: '#E0E0E0',
              borderBottomWidth: 1,
              borderColor: '#F5F5F5',
            }}></View>
        </View>
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
