import {useContext, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AuthContext} from '../../../context/AuthContext';
import colors from '../../../assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';
import {Fonts} from '../../../assets/constant';
import Button from '../../components/Button';
import OtpFields from '../../components/OtpFields';
import profileRouts from '../../navigations/routs/profileRouts';

const {width, height} = Dimensions.get('window');

export default Profile = ({navigation}) => {
  const {colorScheme} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  return (
    <View style={{flex: 1}}>
      <Image
        style={styles.background}
        source={
          colorScheme == 'dark'
            ? require('../../../assets/images/profile_background.png')
            : require('../../../assets/images/lightMode.png')
        }
        resizeMode="cover"
      />

      <View
        style={{
          width: '100%',
          paddingHorizontal: 10,
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: Platform.OS == 'ios' ? 60 : 30,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            if (step == 2) {
              setStep(1);
            } else {
              navigation.goBack();
            }
          }}
          style={{
            width: 44,
            height: 44,
            borderRadius: 25,
            backgroundColor: colors[colorScheme].searchBackGround,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 24, width: 24}}
            source={require('../../../assets/images/arrow_back.png')}
            tintColor={colors[colorScheme].searchIconColor}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: 44,
            height: 44,
            borderRadius: 25,
            backgroundColor: colors[colorScheme].searchBackGround,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 24, width: 24}}
            source={require('../../../assets/images/settingIcon.png')}
            tintColor={colors[colorScheme].searchIconColor}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{flexGrow: 1}}
        contentContainerStyle={{paddingBottom: 80}}>
        <View style={{paddingHorizontal: 10, width: '100%'}}>
          <ImageBackground
            style={{
              width: '100%',

              marginTop: 20,
              borderRadius: 7,
              paddingBottom: 30,
            }}
            source={
              colorScheme == 'dark'
                ? require('../../../assets/images/blurBackground.png')
                : require('../../../assets/images/blur2.png')
            }
            resizeMode="cover">
            <View style={{alignItems: 'center'}}>
              <Image
                style={{height: 159, marginTop: 37}}
                source={require('../../../assets/images/signUpImage.png')}
                resizeMode="contain"
              />

              <Text
                style={{
                  fontSize: 28,
                  fontFamily: Fonts.semiBold,
                  color: colors[colorScheme].profileColor,
                  marginTop: 18,
                }}>
                Create A Profile
              </Text>

              <Text
                style={{
                  fontSize: 13,
                  fontFamily: Fonts.semiBold,
                  color: 'rgba(133, 140, 148, 1)',
                  marginTop: 10,
                }}>
                Store your downloaded videos.
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: Fonts.semiBold,
                  color: 'rgba(133, 140, 148, 1)',
                }}>
                Review your favourite videos.
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: Fonts.semiBold,
                  color: 'rgba(133, 140, 148, 1)',
                }}>
                Receive tailored recommendations.
              </Text>

              {step === 1 ? (
                <View
                  style={{
                    width: '100%',
                    paddingTop: 18,
                    paddingHorizontal: 40,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: Fonts.semiBold,
                      color: 'rgba(0, 255, 0, 1)',
                    }}>
                    E-mail Address
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: 'white',
                      borderWidth: 1,
                      borderColor: 'rgba(133, 140, 148, 1)',
                      borderRadius: 8,
                      marginTop: 8,
                      paddingVertical: Platform.OS == 'ios' ? 12 : 0,
                      paddingHorizontal: 12,
                    }}>
                    <Image
                      style={{height: 24, width: 24}}
                      source={require('../../../assets/images/email.png')}
                      resizeMode="contain"
                    />
                    <TextInput
                      value={email}
                      placeholder="example@gmail.com"
                      placeholderTextColor={'rgba(165, 171, 179, 1)'}
                      onChangeText={text => setEmail(text)}
                      style={{paddingStart: 5}}
                    />
                  </View>
                </View>
              ) : (
                <View>
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: Fonts.semiBold,
                      color:colors[colorScheme].text2,
                      textAlign:'center',
                      marginTop:47
                    }}>
                    Check your email address for a verification code
                  </Text>
                  <OtpFields
                    style={styles.otpText}
                    nuberOfFields={6}
                    value={otp}
                    theme={colorScheme}
                    onChangeText={text => {
                      setOtp(text);
                      // if (text.length === 4) {

                      // }
                    }}
                  />
                    <Text
                    style={{
                      fontSize: 13,
                      fontFamily: Fonts.semiBold,
                      color:'rgba(133, 140, 148, 1)',
                      textAlign:'right',
                      
                    }}>Didn’t get code?<Text style={{
                      fontSize: 13,
                      fontFamily: Fonts.semiBold,
                      color:'rgba(0, 255, 0, 1)',
                      textAlign:'right',
                      
                    }}  onPress={()=>{}}>Resend Code</Text> 
                  </Text>
                </View>
              )}
            </View>

            <View style={{alignItems: 'center', marginTop: '50%'}}>
              <Button
                buttonColor="rgba(255, 133, 32, 1)"
                buttonStyle={{height: 46, width: '80%'}}
                title="Continue"
                onPress={() => {
                  if (step == 1) {
                    setStep(2);
                  } else {
                    navigation.navigate(profileRouts.createPin)
                  }
                }}
                enabled={true}
              />
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    // zIndex: -20,
    position: 'absolute',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  otpText: {
    fontSize: 48,
    color: colors.Darkbrown,
    fontFamily: 'PlayfairDisplay-Regular',
    textAlign: 'center',
    marginTop:25
  },
});
