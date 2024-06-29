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
import VideoItem from '../search/VideoItem';
import Button from '../../components/Button';
import profileRouts from '../../navigations/routs/profileRouts';

const {width, height} = Dimensions.get('window');

export default Search = ({navigation}) => {
  const {colorScheme,toggleStack} = useContext(AuthContext);
  const [search, setSearch] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <Image
        style={styles.background}
        source={
          colorScheme == 'dark'
            ? require('../../../assets/images/profile_background.png')
            : require('../../../assets/images/lightMode.png')
        }
        resizeMode="cover"
      />

      <View
        style={{
          flex: 1,
          marginTop: Platform.OS == 'ios' ? 70 : 0,
          
        }}>
        <ImageBackground
          style={{height: 175, width: '100%'}}
          resizeMode="contain"
          source={
            colorScheme == 'dark'
              ? require('../../../assets/images/frame2.png')
              : require('../../../assets/images/fram3.png')
          }>
          <View
            style={{
              height: '100%',
              justifyContent: 'space-between',
              paddingVertical: 18,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 16,
              }}>
              <View style={{}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 19,
                      fontFamily: Fonts.bold,
                      color: colors[colorScheme].profileColor,
                      paddingRight: 10,
                    }}>
                    Destiny@gmail.com
                  </Text>
                  <Image
                    style={{height: 24, width: 24}}
                    source={require('../../../assets/images/folder.png')}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: Fonts.semiBold,
                    color: 'rgba(133, 140, 148, 1)',
                    marginTop: 9,
                  }}>
                  User Account
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => { navigation.navigate(profileRouts.Settings);}}
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
                  source={require('../../../assets/images/settingIcon.png')}
                  tintColor={colors[colorScheme].searchIconColor}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 16,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: Fonts.semiBold,
                    color: colors[colorScheme].profileText,
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: Fonts.semiBold,
                      color: colors[colorScheme].primary,
                    }}>
                    3{' '}
                  </Text>
                  Saved Videos
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: Fonts.semiBold,
                    color: colors[colorScheme].profileText,
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: Fonts.semiBold,
                      color: colors[colorScheme].primary,
                    }}>
                    3{' '}
                  </Text>
                  Favourites
                </Text>
              </View>

              {/* <Button
                buttonColor="rgba(255, 133, 32, 1)"
                buttonStyle={{height: 46, width: '42%',borderRadius:8}}
                title="Get Premium"
                onPress={() => {
                 navigation.navigate(profileRouts.Premium)
                }}
                enabled={true}
              /> */}
            </View>
          </View>
        </ImageBackground>

        <View
          style={{
            height: '100%',
            backgroundColor: colors[colorScheme].background,
            marginTop: 10,
          }}>
          <ScrollView style={{flexGrow: 1}}>
            <TouchableOpacity
            onPress={()=>{
              navigation.navigate(profileRouts.listOfVideo)
            }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: colors[colorScheme].textcolor,
                  fontSize: 19,
                  fontFamily: Font2.semiBold,
                  marginEnd: 10,
                }}>
               Watchlist
              </Text>

              <Image
                style={{height: 24, width: 24}}
                source={require('../../../assets/images/arrowDown.png')}
              />
            </TouchableOpacity>
            <FlatList
              data={[1, 2, 3, 4, 5]}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{maxHeight: 280}}
              renderItem={() => <VideoItem onpress={() => {}} />}
            />
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {  
          toggleStack('MAIN') 
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
