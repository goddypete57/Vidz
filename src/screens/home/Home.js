import {
  BackHandler,
  Dimensions,
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
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  withRepeat,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import VideomayLike from './VideomayLike';

export default Home = ({navigation}) => {
  const {colorScheme, toggleStack} = useContext(AuthContext);

  const [text, setText] = useState('Tap to Record a Video');
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);
  const isFirstText = useSharedValue(true);
  const [headerVisible, setHeaderVisible] = useState(true);
  const isAtTop = useSharedValue(false);

  useEffect(() => {
    const startAnimation = () => {
      translateY.value = withRepeat(
        withSequence(
          withTiming(-30, {duration: 2500, easing: Easing.inOut(Easing.ease)}),
          withTiming(0, {duration: 2500, easing: Easing.inOut(Easing.ease)}),
        ),
        -1, // Infinite repeat
        false,
      );
    };

    const changeText = () => {
      setText(
        isFirstText.value
          ? 'Hold to pin Vidzam to your screen'
          : 'Tap to Record a Video',
      );
      isFirstText.value = !isFirstText.value;
    };

    // Start the animation
    startAnimation();

    // Change text every 5 seconds
    const interval = setInterval(changeText, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (isAtTop.value) {
          dragDownView();
          return true; // Prevent default behavior (closing the app)
        }
        return false; // Allow default behavior (closing the app)
      },
    );

    return () => backHandler.remove();
  }, []);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
      opacity: opacity.value,
    };
  });

  const dragY = useSharedValue(0);

  const animatedDragStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: dragY.value}],
    };
  });

  const panGesture = Gesture.Pan()
    .onStart(() => {
      runOnJS(setHeaderVisible)(false);
    })
    .onUpdate(event => {
      if (!isAtTop.value && event.translationY < 0) {
        dragY.value = event.translationY;
      }
    })
    .onEnd(() => {
      if (dragY.value < -height / 4) {
        dragY.value = withSpring(-height + 100, {damping: 15});
        isAtTop.value = true;
      } else {
        dragY.value = withSpring(0, {damping: 15});
        runOnJS(setHeaderVisible)(true);
        isAtTop.value = false;
      }
    });

  const dragDownView = () => {
    dragY.value = withSpring(0, {damping: 15});
    isAtTop.value = false;
    runOnJS(setHeaderVisible)(true);
  };


 


  return (
    <GestureHandlerRootView style={{flex: 1}}>
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
          style={[
            {
              color: colors[colorScheme].textDark,
              textAlign: 'center',
              fontFamily: Font2.regular,
              fontSize: 18,
              marginTop: 80,
            },
            animatedStyle,
          ]}>
          {text}
        </Animated.Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate(mainRouts.camera);
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
      </View>

      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.draggableContainer, animatedDragStyle]}>
          <View
            style={[
              styles.draggableHeader,
              {display: headerVisible ? 'flex' : 'none'},
            ]}>
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

          <View style={styles.draggableContent}>
            <Image
              style={styles.background}
              source={
                colorScheme == 'dark'
                  ? require('../../../assets/images/background.png')
                  : require('../../../assets/images/lightMode.png')
              }
              resizeMode="cover"
            />
            <VideomayLike
              onFloatingpress={() => {
                dragDownView();
              }}
            />
          </View>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    zIndex: -20,
    position: 'absolute',
  },
  draggableContainer: {
    position: 'absolute',
    bottom: -height + 100, // Start off-screen
    width: '100%',
    height: height, // Full height

    zIndex: 10,
  },
  draggableHeader: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'transparent', // Make header transparent
  },
  draggableContent: {
    flex: 1,
    marginTop: 30,
    // backgroundColor: 'white', // Make the rest of the draggable view white
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
