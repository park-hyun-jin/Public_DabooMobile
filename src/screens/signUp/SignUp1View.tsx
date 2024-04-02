import React, {useCallback, useEffect, useState} from 'react';
import {
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
  close: {
    position: 'absolute',
    right: 18,
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
    marginTop: 15,
    paddingHorizontal: 25,
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
});

const SignUp1View = ({navigation}) => {
  const goBackMain = useCallback(() => {
    navigation.goBack();
  }, []);

  const onClickAgree = useCallback(() => {
    navigation.navigate({
      name: 'SignUp',
      params: {firstChecked: true, secondChecked: undefined},
      merge: true,
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View
          style={{
            width: '100%',
          }}>
          <Text style={styles.headerText}>개인정보처리방침</Text>
        </View>
        <TouchableOpacity
          style={styles.close}
          onPress={() => {
            goBackMain();
          }}>
          <Image
            width={24}
            height={24}
            source={require('../../assets/close.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.detailContainer1}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#212121'}}>
            Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt convallis
            ut quis lacus viverra sed elit. Ut volutpat a sodales fusce volutpat
            volutpat. Arcu dui varius lectus vestibulum aliquam est etiam
            pretium volutpat. Habitant dui sed auctor amet lectus. Feugiat
            pulvinar mauris arcu habitant senectus justo. Gravida malesuada
            accumsan lacus risus. Sit faucibus cursus donec nulla. Et nibh
            dictum risus lorem semper gravida malesuada quam. Pretium ac massa
            orci pellentesque. Feugiat placerat nulla a lorem urna risus. Eget
            aliquet phasellus cursus rhoncus aliquet proin a. In dignissim
            consectetur purus iaculis praesent vel quis lacus sed. Dictum amet
            enim iaculis gravida egestas hac. Adipiscing ridiculus euismod
            tincidunt sit aliquet urna. Quam cursus ante lacus quis feugiat
            rutrum quam faucibus mattis. Mauris consequat aliquet donec egestas
            pretium amet ligula. Nunc ipsum pellentesque mauris in arcu
            ultrices. Pellentesque faucibus gravida nam eget et netus eget
            adipiscing. Rutrum nisi nibh morbi dolor suspendisse morbi.
          </Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={{
            width: '100%',
          }}
          onPress={() => {
            onClickAgree();
          }}>
          <Text style={styles.footerText}>동의</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp1View;
