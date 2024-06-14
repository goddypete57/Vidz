import {
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
import {useContext, useState} from 'react';
import mainRouts from '../../navigations/routs/mainRouts';
import ResultItem from './resultItem';
const {width, height} = Dimensions.get('window');
export default Home = ({navigation}) => {
  const {colorScheme} = useContext(AuthContext);
  const [result, setResult] = useState(true);

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
      {result ? (
        <View style={{paddingHorizontal: 18, justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: Platform.OS == 'ios' ? 60 : 10,
            }}>
            <Text
              style={{
                color: colors[colorScheme].textDark,
                fontSize: 20,
                fontFamily: Font2.semiBold,
              }}>
              Search Result
            </Text>
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 25,
                backgroundColor: colors[colorScheme].searchBackGround,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: colors[colorScheme].clearHistoryBorder,
              }}>
              <Image
                style={{height: 24, width: 24}}
                source={require('../../../assets/images/loop.png')}
                tintColor={colors[colorScheme].searchIconColor}
                resizeMode="contain"
              />
            </View>
          </View>
          <FlatList
            data={[1, 2, 3]}
            renderItem={() => <ResultItem />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ) : (
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
      )}

      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
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
