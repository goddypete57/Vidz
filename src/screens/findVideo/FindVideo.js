import {
  BackHandler,
  Dimensions,
  FlatList,
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
import {useContext, useEffect, useState} from 'react';
import mainRouts from '../../navigations/routs/mainRouts';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import ResultScreen from './ResultScreen';
import Ring from '../../components/ring';

const {width, height} = Dimensions.get('window');
export default Home = ({navigation}) => {
  const {colorScheme} = useContext(AuthContext);
  const [result, setResult] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

  const isAtTop = useSharedValue(false);
  const scaleValue = useSharedValue(0.7);
  const opacityValue = useSharedValue(1);

  const animatedCircle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scaleValue.value}],
      opacity: opacityValue.value,
    };
  });

  useEffect(() => {
    const backAction = () => {
      if (isAtTop.value) {
        navigation.reset({
          index: 1,
          routes: [{name: mainRouts.home}],
        });
        return true; // Prevent default behavior (exit app)
      }
      return false; // Allow default behavior (exit app)
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    // Animate the view up after 5 seconds
    const timer = setTimeout(() => {
      dragUpView();
    }, 100000);

    return () => clearTimeout(timer);
  }, []);

  const dragY = useSharedValue(0);

  const animatedDragStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: dragY.value}],
    };
  });

  const dragUpView = () => {
    dragY.value = withSpring(-height + 20, {damping: 15});
    isAtTop.value = true;
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
          paddingHorizontal: 16,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            borderWidth: 7,
            borderColor: colors[colorScheme].ripple2,
            width: 124,
            height: 124,
            borderRadius: 304 / 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {[...Array(5).keys()].map((_, index) => (
            <Ring key={index} index={index} />
          ))}
          <Image
            style={{height: 100, width: 100,zIndex:100}}
            source={require('../../../assets/images/centerlogo.png')}
            tintColor={colors[colorScheme].ripple2}
            resizeMode="contain"
          />
        </View>

        <Text
          style={{
            color: colors[colorScheme].searchIconColor,
            textAlign: 'center',
            fontFamily: Font2.semiBold,
            fontSize: 18,
            marginTop: 27,
          }}>
          Searching...
        </Text>
        <Text
          style={{
            color: colors[colorScheme].textcolor,
            textAlign: 'center',
            fontFamily: Fonts.semiBold,
            fontSize: 13,
            marginTop: 5,
          }}>
          Please Wait, This might take a bit of time...
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: mainRouts.home}],
          });
        }}
        style={{
          position: 'absolute',
          bottom: Platform.OS == 'ios' ? 40 : 20,
          right: 22,
        }}>
        <Image
          style={{height: 68, width: 68}}
          source={
            colorScheme == 'dark'
              ? require('../../../assets/images/floatingIcon2.png')
              : require('../../../assets/images/floatingIcon.png')
          }
        />
      </TouchableOpacity>

      <Animated.View style={[styles.draggableContainer, animatedDragStyle]}>
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
          <ResultScreen
            onpress={() => {
              navigation.navigate(mainRouts.VideoDtail);
            }}
            onFloatingpress={() => {
              navigation.reset({
                index: 1,
                routes: [{name: mainRouts.home}],
              });
            }}
          />
        </View>
      </Animated.View>
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
    bottom: -height, // Start off-screen
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
