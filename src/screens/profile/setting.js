import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../../assets/colors/colors';
import {useContext, useEffect, useRef, useState} from 'react';
import {AuthContext} from '../../../context/AuthContext';
const {width, height} = Dimensions.get('window');
import mainRouts from '../../navigations/routs/mainRouts';
import SearchResultitem from '../search/searchResultitem';
import {Fonts} from '../../../assets/constant';
import CustomSwitch from '../../components/switch';

export default Settings = ({navigation}) => {
    const {  colorScheme, toggleTheme,  } = useContext(AuthContext);
    const [search, setSearch] = useState('');
  const [switchState, setSwitchState] = useState(false);
  const [switchState2, setSwitchState2] = useState(colorScheme === 'dark');
  const [switchState3, setSwitchState3] = useState(false);
  const [switchState4, setSwitchState4] = useState(false);
  const [switchState5, setSwitchState5] = useState(false);
  const [switchState6, setSwitchState6] = useState(false);
  const [switchState7, setSwitchState7] = useState(false);
  const [switchState8, setSwitchState8] = useState(false);

//   useEffect(() => {
//     setSwitchState2(colorScheme === 'dark');
//   }, [colorScheme]);
  return (
    <>
      <Image
        style={styles.background}
        source={
          colorScheme == 'dark'
            ? require('../../../assets/images/background.png')
            : require('../../../assets/images/lightMode.png')
        }
        resizeMode="cover"
      />
      <View
        style={{
          flex: 1,

          paddingTop: Platform.OS == 'ios' ? 60 : 30,
        }}>
        <View
          style={{
            width: '100%',
            paddingHorizontal: 10,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              if (search.length > 0) {
                setSearch('');
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
          <Text
            style={{
              color: colors[colorScheme].profileColor,
              fontSize: 23,
              fontFamily: Fonts.semiBold,
              marginStart: 15,
            }}>
            Settings
          </Text>
        </View>
        <ScrollView
        contentContainerStyle={{paddingBottom:80}}
          style={{
            height: '100%',
            marginTop: 10,
            paddingTop: 30,
            backgroundColor: colors[colorScheme].background,
            
          }}>
          <View
            style={{
              height: '100%',
            }}>
            <Text
              style={{
                color: colors[colorScheme].profileColor,
                fontSize: 13,
                fontFamily: Fonts.semiBold,
                paddingHorizontal: 10,
              }}>
              VIDZAM IN OTHER APPS
            </Text>

            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: 'rgba(255, 132, 31, 0.28)',
                marginTop: 12.5,
              }}
            />
            {/* vizamnotification bar */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
                marginTop: 18,
                paddingHorizontal: 15,
              }}>
              <View>
                <Text
                  style={{
                    color: colors[colorScheme].profileColor,
                    fontSize: 13,
                    fontFamily: Fonts.semiBold,
                  }}>
                  Vidzam from notification bar
                </Text>
                <Text
                  style={{
                    color: colors[colorScheme].nutural,
                    fontSize: 9,
                    fontFamily: Fonts.semiBold,
                  }}>
                  Show notification to Vidzam in other apps
                </Text>
              </View>
              <CustomSwitch
                initialValue={switchState}
                onToggle={value => setSwitchState(value)}
              />
            </View>
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: 'rgba(255, 132, 31, 0.28)',
                marginTop: 30,
              }}
            />
            {/* general setting */}
            <Text
              style={{
                color: colors[colorScheme].profileColor,
                fontSize: 13,
                fontFamily: Fonts.semiBold,
                paddingTop: 31,
                paddingStart: 10,
              }}>
              GENERAL SETTINGS
            </Text>

            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: 'rgba(255, 132, 31, 0.28)',
                marginTop: 13,
              }}
            />
            {/* switch light and dark  */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                paddingHorizontal: 15,
                justifyContent: 'space-between',
                marginTop: 18,
              }}>
              <View style={{width: '80%'}}>
                <Text
                  style={{
                    color: colors[colorScheme].profileColor,
                    fontSize: 13,
                    fontFamily: Fonts.semiBold,
                  }}>
                  Switch to Light Mode
                </Text>
                <Text
                  style={{
                    color: colors[colorScheme].nutural,
                    fontSize: 9,
                    fontFamily: Fonts.semiBold,
                  }}>
                  Change the theme of your Vidzam app to dark theme
                </Text>
              </View>

              <CustomSwitch
                initialValue={switchState2}
                onToggle={value => {
                    setSwitchState2(value)
                    toggleTheme()
                }}
              />
            </View>

            {/* Vibrate  */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                paddingHorizontal: 15,
                justifyContent: 'space-between',
                marginTop: 30,
              }}>
              <View style={{width: '80%'}}>
                <Text
                  style={{
                    color: colors[colorScheme].profileColor,
                    fontSize: 13,
                    fontFamily: Fonts.semiBold,
                  }}>
                  Vibrate
                </Text>
                <Text
                  style={{
                    color: colors[colorScheme].nutural,
                    fontSize: 9,
                    fontFamily: Fonts.semiBold,
                  }}>
                  Set Vidzam to vibrate once vidzaming is completed{' '}
                </Text>
              </View>

              <CustomSwitch
                initialValue={switchState3}
                onToggle={value => setSwitchState3(value)}
              />
            </View>

            {/* Seeking  */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                paddingHorizontal: 15,
                justifyContent: 'space-between',
                marginTop: 30,
              }}>
              <View style={{width: '80%'}}>
                <Text
                  style={{
                    color: colors[colorScheme].profileColor,
                    fontSize: 13,
                    fontFamily: Fonts.semiBold,
                  }}>
                  Seeking
                </Text>
                <Text
                  style={{
                    color: colors[colorScheme].nutural,
                    fontSize: 9,
                    fontFamily: Fonts.semiBold,
                  }}>
                  Seek through a video when sliding to the left or right
                </Text>
              </View>

              <CustomSwitch
                initialValue={switchState4}
                onToggle={value => setSwitchState4(value)}
              />
            </View>

            {/* Video Navigation  */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                paddingHorizontal: 15,
                justifyContent: 'space-between',
                marginTop: 30,
              }}>
              <View style={{width: '80%'}}>
                <Text
                  style={{
                    color: colors[colorScheme].profileColor,
                    fontSize: 13,
                    fontFamily: Fonts.semiBold,
                  }}>
                  Video Navigation
                </Text>
                <Text
                  numberOfLines={2}
                  style={{
                    color: colors[colorScheme].nutural,
                    fontSize: 9,
                    fontFamily: Fonts.semiBold,
                    overflow: 'hidden',
                  }}>
                  Navigate through videos by tapping the left or right side of
                  the screen
                </Text>
              </View>

              <CustomSwitch
                initialValue={switchState5}
                onToggle={value => setSwitchState5(value)}
              />
            </View>

            {/* Pause/Play  */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                paddingHorizontal: 15,
                justifyContent: 'space-between',
                marginTop: 30,
              }}>
              <View style={{width: '80%'}}>
                <Text
                  style={{
                    color: colors[colorScheme].profileColor,
                    fontSize: 13,
                    fontFamily: Fonts.semiBold,
                  }}>
                  Pause/Play
                </Text>
                <Text
                  numberOfLines={2}
                  style={{
                    color: colors[colorScheme].nutural,
                    fontSize: 9,
                    fontFamily: Fonts.semiBold,
                    overflow: 'hidden',
                  }}>
                  Pause/Play video when the center of the screen is tapped
                </Text>
              </View>

              <CustomSwitch
                initialValue={switchState6}
                onToggle={value => setSwitchState6(value)}
              />
            </View>

            {/* Brightness Adjustment  */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                paddingHorizontal: 15,
                justifyContent: 'space-between',
                marginTop: 30,
              }}>
              <View style={{width: '80%'}}>
                <Text
                  style={{
                    color: colors[colorScheme].profileColor,
                    fontSize: 13,
                    fontFamily: Fonts.semiBold,
                  }}>
                  Brightness Adjustment
                </Text>
                <Text
                  numberOfLines={2}
                  style={{
                    color: colors[colorScheme].nutural,
                    fontSize: 9,
                    fontFamily: Fonts.semiBold,
                    overflow: 'hidden',
                  }}>
                  Adjust brightness when sliding upwards or downwards at the
                  left side of the screen
                </Text>
              </View>

              <CustomSwitch
                initialValue={switchState7}
                onToggle={value => setSwitchState7(value)}
              />
            </View>

            {/* Volume Adjustment  */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                paddingHorizontal: 15,
                justifyContent: 'space-between',
                marginTop: 30,
              }}>
              <View style={{width: '80%'}}>
                <Text
                  style={{
                    color: colors[colorScheme].profileColor,
                    fontSize: 13,
                    fontFamily: Fonts.semiBold,
                  }}>
                  Volume Adjustment
                </Text>
                <Text
                  numberOfLines={2}
                  style={{
                    color: colors[colorScheme].nutural,
                    fontSize: 9,
                    fontFamily: Fonts.semiBold,
                    overflow: 'hidden',
                  }}>
                  Adjust volume when sliding upwards or downwards at the right
                  side of the screen{' '}
                </Text>
              </View>

              <CustomSwitch
                initialValue={switchState8}
                onToggle={value => setSwitchState8(value)}
              />

        
            </View>
 {/* support */}
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: 'rgba(255, 132, 31, 0.28)',
                marginTop: 30,
              }}
            />
           
            <TouchableOpacity onPress={()=>{

            }}>

            <Text
              style={{
                color: colors[colorScheme].profileColor,
                fontSize: 13,
                fontFamily: Fonts.semiBold,
                paddingTop: 31,
                paddingStart: 10,
              }}>
             SUPPORT
            </Text>
            </TouchableOpacity>

            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: 'rgba(255, 132, 31, 0.28)',
                marginTop: 13,
              }}
            />


            {/* about */}
          
           
            <TouchableOpacity onPress={()=>{

            }}>

            <Text
              style={{
                color: colors[colorScheme].profileColor,
                fontSize: 13,
                fontFamily: Fonts.semiBold,
                paddingTop: 10,
                paddingStart: 10,
              }}>
             About
            </Text>
            </TouchableOpacity>

        
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    // zIndex: -20,
    position: 'absolute',
  },
});
