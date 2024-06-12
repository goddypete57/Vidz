import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../../assets/colors/colors';
import {useContext, useState} from 'react';
import {AuthContext} from '../../../context/AuthContext';
import {Font2, Fonts} from '../../../assets/constant/Font';
import PlayIcon from '../../../assets/icons/ThumbsUp.svg';
import CustomProgressBar from '../../components/customprogressbar';

export default VideoPlayer = ({navigation}) => {
  const {colorScheme} = useContext(AuthContext);
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState('');

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
              source={
                search.length > 0
                  ? require('../../../assets/images/cancel.png')
                  : require('../../../assets/images/arrow_back.png')
              }
              tintColor={colors[colorScheme].searchIconColor}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View
            style={[
              {
                paddingStart: 16,
                justifyContent: 'center',
              },
            ]}>
            <Text
              style={{
                color: colors[colorScheme].text,
                fontSize: 12,
                marginStart: 7,
                fontFamily: Fonts.extraBold,
              }}>
              Hillsong Worship - What a Beautiful Name
            </Text>
            <Text
              style={{
                color: colors[colorScheme].textcolor,
                fontSize: 9,
                marginStart: 7,
                fontFamily: Font2.light,
              }}>
              Source:{' '}
              <Text
                style={{
                  color: colors[colorScheme].pullup,
                  fontSize: 9,
                  marginStart: 7,
                  fontFamily: Font2.light,
                }}>
                YouTube
              </Text>
            </Text>
          </View>
        </View>

        <View style={{height: '100%', width: '100%', marginTop: 10}}>
          <Image
            style={styles.background}
            source={
              colorScheme !== 'dark' &&
              require('../../../assets/images/background.png')
            }
            resizeMode="cover"
          />

          <Image
            style={{height: 261, width: '100%', marginTop: '40%'}}
            source={require('../../../assets/images/image.png')}
            resizeMode="cover"
          />
        </View>
      </View>

      <View style={{paddingHorizontal: 4, bottom: 100}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: 'rgba(255, 255, 255, 1)',
              fontSize: 12,

              fontFamily: Fonts.extraBold,
            }}>
            54:06
          </Text>

          <Text
            style={{
              color: 'rgba(255, 255, 255, 1)',
              fontSize: 12,

              fontFamily: Fonts.extraBold,
            }}>
            03:14:02
          </Text>
        </View>

        <CustomProgressBar progress={100} />
        <View style={{marginTop:10}}>
          <TouchableOpacity onPress={()=>{}}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../../../assets/images/Play.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    // zIndex: -20,
    position: 'absolute',
  },
});
