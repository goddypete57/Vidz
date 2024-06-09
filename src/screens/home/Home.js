import {
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
import {useContext} from 'react';
const {width, height} = Dimensions.get('window');
export default Home = () => {
  const {colorScheme} = useContext(AuthContext);
  return (
    // <LinearGradient
    //   colors={['rgba(0, 255, 0, 0.1)', 'rgba(0, 0, 0, 0.5)','rgba(0, 0, 0, 1)']}
    //   style={styles.container}
    //   start={{x: 0.2, y: 0}}
    //   end={{x: 1, y: 0}}>
      <View
        style={{
          height: '100%',
          width: '100%',
          paddingTop: Platform.OS == 'ios' ? 60 : 15,
          paddingHorizontal: 16,
          alignItems: 'center',
        }}>
        <View
          style={{
            alignItems: 'flex-end',

            width: '100%',
          }}>
          {/* <View style={{alignItems: 'center', position: 'absolute'}}> */}
          <ImageBackground
            style={{height: 80, width: 120, alignItems: 'center'}}
            source={require('../../../assets/images/fram.png')}
            resizeMode="contain">
            <Image
              style={{height: 30, width: 30, marginTop: 10}}
              source={require('../../../assets/images/person.png')}
              resizeMode="contain"
            />
            <Text
              style={{
                color: colors[colorScheme].white,
                marginTop: 7,
                fontFamily: Fonts.medium,
                fontSize: 17,
              }}>
              My Profile
            </Text>
          </ImageBackground>

          {/* </View> */}
        </View>
        <Text
          style={{
            color: colors[colorScheme].textDark,
            textAlign: 'center',
            fontFamily: Font2.regular,
            fontSize: 18,
            marginTop: 82,
          }}>
          Tap to Record a Video
        </Text>

        <View
          style={{
            borderWidth: 4,
            borderColor: 'rgba(0, 255, 0, 0.1)',
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
              borderColor: 'rgba(0, 255, 0, 0.1)',
              width: 260,
              height: 260,
              borderRadius: 304 / 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{height: 173, width: 173}}
              source={require('../../../assets/images/ellipse_logo.png')}
              resizeMode="contain"
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 81,
            height: 50,
            borderWidth: 1,
            borderRadius: 25,
            marginTop: 51,
            borderColor: 'rgba(233, 233, 233, 0.23)',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../../../assets/images/search.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={{alignItems: 'center', bottom: 40, position: 'absolute'}}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../../../assets/images/pullup.png')}
            resizeMode="contain"
          />

          <Text
            style={{
              color: colors.white,
              textAlign: 'center',
              fontFamily: Font2.semiBold,
              fontSize: 14,
              marginTop: 7,
            }}>
            Pull Up to See Videos You May Like
          </Text>
        </View>
      </View>
    // {/* </LinearGradient> */}
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
