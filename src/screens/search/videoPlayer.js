import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../../assets/colors/colors';
import {useContext, useRef, useState} from 'react';
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
            : require('../../../assets/images/backgroundimg.png')
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
            style={{height: 261, width: '100%', marginTop: '40%'}}
            source={require('../../../assets/images/image.png')}
            resizeMode="cover"
          />
        </View>
      </View>

      <View style={{paddingHorizontal: 4, bottom:Platform.OS == 'ios'? 80:30}}>
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

        <CustomProgressBar progress={50} />
        <View style={{marginTop:10,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>

          <TouchableOpacity onPress={()=>{}}>
            <Image
              style={{width: 30, height: 30,}}
              source={require('../../../assets/images/Play.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{marginStart:27}} onPress={()=>{}}>
            <Image
              style={{width: 30, height: 30,}}
              source={require('../../../assets/images/cast.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{marginStart:25}} onPress={()=>{}}>
            <Image
              style={{width: 40, height: 40}}
              source={require('../../../assets/images/landscape.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{marginStart:25}} onPress={()=>{}}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../../../assets/images/share.png')}
              tintColor={'#fff'}
            />
          </TouchableOpacity>
        </View>


{/* like */}

          <View style={{flexDirection:'row',alignItems:'center'}}>
          <TouchableOpacity style={{marginStart:27}} onPress={()=>{}}>
            <Image
              style={{width: 30, height: 30,}}
              source={require('../../../assets/images/ThumbsUp.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{marginStart:27}} onPress={()=>{}}>
            <Image
              style={{width: 20, height: 30}}
              source={require('../../../assets/images/thumbDown.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{marginStart:27}} onPress={()=>{}}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../../../assets/images/downloadIcon.png')}
             
            />
          </TouchableOpacity>
          </View>
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
