import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
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
import CastItem from './castItem';
import SearchResultitem from './searchResultitem';
import VideoItem from './VideoItem';
import Share from 'react-native-share';
const {width, height} = Dimensions.get('window');

export default Search = ({navigation}) => {
  const {colorScheme} = useContext(AuthContext);
  const [search, setSearch] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
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

      <ScrollView style={{flexGrow: 1}}>
        <View style={{flex: 1, marginTop: Platform.OS == 'ios' ? 80 : 50}}>
          <ImageBackground
            style={{
              height: 161,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            resizeMode="cover"
            source={require('../../../assets/images/image.png')}>
            <Image
              style={{height: 30, width: 30}}
              tintColor={colors[colorScheme].pullup}
              source={require('../../../assets/images/Play.png')}
            />
          </ImageBackground>

          <View style={{paddingHorizontal: 8, width: '100%'}}>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: colors[colorScheme].textcolor,
                  fontSize: 12,
                  fontFamily: Fonts.extraBold,
                }}>
                HillSong Worship - What A Beautiful Name
              </Text>
              <Text
                numberOfLines={2}
                style={{
                  color: colors[colorScheme].textcolor,
                  fontSize: 8,

                  fontFamily: Font2.regular,
                }}>
                Source :{' '}
                <Text
                  style={{
                    color: colors[colorScheme].pullup,
                    fontSize: 9,

                    fontFamily: Font2.regular,
                  }}>
                  {' '}
                  YouTube
                </Text>
              </Text>
            </View>

            <Text
              numberOfLines={1}
              style={{
                color: colors[colorScheme].pullup,
                fontSize: 9,
                marginTop: 8,
                fontFamily: Font2.light,
              }}>
              09{' '}
              <Text
                style={{
                  color: colors[colorScheme].textcolor,
                  fontSize: 9,

                  fontFamily: Font2.light,
                }}>
                Minutes
              </Text>{' '}
              50
              <Text
                style={{
                  color: colors[colorScheme].textcolor,
                  fontSize: 9,

                  fontFamily: Font2.light,
                }}>
                {' '}
                Seconds
              </Text>
            </Text>

            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: colors[colorScheme].searchIconColor,
                marginTop: 12,
              }}
            />
            <Text
              style={{
                color: colors[colorScheme].textcolor,
                fontSize: 11,
                fontFamily: Font2.semiBold,
                marginTop: 10,
              }}>
              Summary
            </Text>

            <Text
              numberOfLines={isExpanded ? undefined : 2}
              style={{
                color: colors[colorScheme].textcolor,
                fontSize: 10,
                fontFamily: Font2.semiBold,
                marginTop: 10,
              }}>
              Lorem ipsum dolor sit amet consectetur. Et aliquet in libero
              pharetra donec iaculis non. Purus faucibus sem congue quam id at
              id est. Congue nunc sed donec purus volutpat et mi. Feugiat
              praesent adipiscing ornare donec ante a.
            </Text>

            <Text
              onPress={() => {
                setIsExpanded(!isExpanded);
              }}
              style={{
                color: colors[colorScheme].pullup,
                fontSize: 10,
                fontFamily: Font2.semiBold,
              }}>
              {isExpanded ? 'Read Less' : 'Read More'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 132, 31, 1)',
                  paddingVertical: 12,
                  width: '80%',
                  justifyContent: 'center',
                  borderRadius: 8,
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  tintColor={colors[colorScheme].black}
                  source={require('../../../assets/images/Play.png')}
                />
                <Text style={{color: 'rgba(4, 4, 5, 1)', paddingStart: 8}}>
                  Watch Now
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={()=>{Share.open(options)
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  err && console.log(err);
                });}}
                style={{
                  borderWidth: 1,
                  borderColor: 'rgba(255, 132, 31, 1)',
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 17,
                  paddingVertical: 15,
                }}>
                <Image
                  style={{height: 24, width: 24}}
                  source={require('../../../assets/images/share.png')}
                />
              </TouchableOpacity>
            </View>

            <Text
              style={{
                color: colors[colorScheme].textcolor,
                fontSize: 19,
                fontFamily: Font2.semiBold,
                marginTop: 10,
              }}>
              Cast
            </Text>

            <FlatList
              data={[1, 2, 3, 4, 5]}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{}}
              renderItem={() => <CastItem />}
            />


            <View style={{flexDirection:'row',alignItems:'center', marginTop: 36,}}>
            <Text
              style={{
                color: colors[colorScheme].textcolor,
                fontSize: 19,
                fontFamily: Font2.semiBold,
                marginEnd:10
               
              }}>
              Related Videos
            </Text>

            <Image
                  style={{height: 24, width: 24}}
                  source={require('../../../assets/images/arrowDown.png')}
                />
            </View>

            <FlatList
              data={[1, 2, 3, 4, 5]}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{}}
              renderItem={() => <VideoItem   onpress={()=>{}}/>}
            />
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',

          paddingHorizontal: 10,
          marginTop: Platform.OS == 'ios' ? 50 : 20,
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

  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  readMore: {
    color: 'blue',

    fontSize: 16,
  },
});
