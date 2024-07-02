import {
  Animated,
  Dimensions,
  Easing,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../../assets/colors/colors';
import {Fonts, Font2} from '../../../assets/constant/Font';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../../../context/AuthContext';
import {useContext, useEffect, useRef, useState} from 'react';
import mainRouts from '../../navigations/routs/mainRouts';
import profileRouts from '../../navigations/routs/profileRouts';
const {width, height} = Dimensions.get('window');
export default Home = ({navigation}) => {
  const {colorScheme, toggleStack} = useContext(AuthContext);

  const position = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const [text, setText] = useState('Tap to Record a Video');

  useEffect(() => {
    const changeText = () => {
      setText(prevText =>
        prevText === 'Tap to Record a Video'
          ? 'Hold to pin Vidzam to your screen'
          : 'Tap to Record a Video',
      );
    };

    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(position, {
          toValue: 100, // Move downward
          duration: 1000,
          easing: Easing.bounce,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(position, {
          toValue: 0, // Move back to original position
          duration: 0, // Instant reset
          useNativeDriver: true,
        }),
      ]),
    );

    animation.start();

    const interval = setInterval(changeText, 2000); // Change text every 2 seconds

    return () => {
      animation.stop();
      clearInterval(interval);
    };
  }, [opacity, position]);

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
          height: '100%',
          width: '100%',
          paddingTop: Platform.OS == 'ios' ? 50 : 15,
          paddingHorizontal: 16,
          alignItems: 'center',
        }}>
        <View
          style={{
            alignItems: 'flex-end',
            paddingTop: 20,
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() => {
              toggleStack('PROFILE');
            }}
            style={{}}>
            <ImageBackground
              style={{height: 80, width: 120, alignItems: 'center'}}
              source={
                colorScheme == 'dark'
                  ? require('../../../assets/images/fram.png')
                  : require('../../../assets/images/frame.png')
              }
              resizeMode="contain">
              <Image
                style={{height: 30, width: 30, marginTop: 10}}
                source={require('../../../assets/images/person.png')}
                tintColor={colors[colorScheme].searchIconColor}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: colors[colorScheme].profileText,
                  marginTop: 7,
                  fontFamily: Font2.semiBold,
                  fontSize: 14,
                }}>
                My Profile
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <Animated.Text
          style={{
            color: colors[colorScheme].textDark,
            textAlign: 'center',
            fontFamily: Font2.regular,
            fontSize: 18,
            marginTop: 80,
            // transform: [{ translateY: position }],
            opacity: opacity,
          }}>
          {text}
        </Animated.Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate(mainRouts.findVideo);
          }}
          style={{
            borderWidth: 4,
            borderColor: colors[colorScheme].ripple1,
            width: 304,
            height: 304,
            borderRadius: 304 / 2,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 21,
          }}>
          <View
            style={{
              borderWidth: 31,
              borderColor: colors[colorScheme].ripple1,
              width: 260,
              height: 260,
              borderRadius: 304 / 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                borderWidth: 7,
                borderColor: colors[colorScheme].ripple2,
                width: 173,
                height: 173,
                borderRadius: 304 / 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{height: 124, width: 124}}
                source={require('../../../assets/images/centerlogo.png')}
                tintColor={colors[colorScheme].ripple2}
                resizeMode="contain"
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate(mainRouts.Search);
          }}
          style={{
            width: 81,
            height: 50,
            borderWidth: 2,
            borderRadius: 25,
            marginTop: 51,
            borderColor: colors[colorScheme].searchBorder,
            backgroundColor: colors[colorScheme].searchBackGround,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../../../assets/images/search.png')}
            tintColor={colors[colorScheme].searchIconColor}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View
          style={{
            alignItems: 'center',
            bottom: Platform.OS == 'ios' ? 40 : 10,
            position: 'absolute',
          }}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../../../assets/images/pullup.png')}
            tintColor={colors[colorScheme].pullup}
            resizeMode="contain"
          />

          <Text
            style={{
              color: colors[colorScheme].textDark,
              textAlign: 'center',
              fontFamily: Font2.semiBold,
              fontSize: 14,
              marginTop: 7,
            }}>
            Pull Up to See Videos You May Like
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    zIndex: -20,
    position: 'absolute',
  },
});
