import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../../assets/colors/colors';
import Fonts from '../../../assets/constant/Font';

const {width, height} = Dimensions.get('window');
export default Home = () => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        paddingTop: Platform.OS == 'ios' ? 60 : 15,
        paddingHorizontal: 16,
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
              color: colors.white,
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
          color: colors.primary,
          textAlign: 'center',
          fontFamily: Fonts.medium,
          fontSize: 17,
          marginTop:82
        }}>
        Tap to Record a Video
      </Text>
    </View>
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
