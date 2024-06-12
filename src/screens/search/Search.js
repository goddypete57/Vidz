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
import {useContext, useRef, useState} from 'react';
import {AuthContext} from '../../../context/AuthContext';
import {Font2} from '../../../assets/constant/Font';
const {width, height} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import SearchHistoryItem from './searchHistoryItem';
import SearchResultitem from './searchResultitem';
import mainRouts from '../../navigations/routs/mainRouts';
import Bottomsheet from 'react-native-raw-bottom-sheet';

export default Search = ({navigation}) => {
  const {colorScheme} = useContext(AuthContext);
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState('');
  const bottomSheetRef = useRef();
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
          paddingHorizontal: 10,
          paddingTop: Platform.OS == 'ios' ? 60 : 30,
        }}>
        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',
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
                borderColor: colors[colorScheme].searchBorder,
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                borderRadius: 30,
                borderWidth: 1,
                paddingHorizontal: 0,
                paddingStart: 16,
                height: 42,
                justifyContent: 'center',
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../../assets/images/search.png')}
                tintColor={'rgba(165, 171, 179, 1)'}
                resizeMode="contain"
              />

              <TextInput
                // onFocus={() => setIsFocused(true)}
                // onBlur={() => setIsFocused(false)}
                value={search}
                onChangeText={text => {
                  setSearch(text);
                }}
                keyboardType="default"
                style={{
                  fontSize: 15,
                  fontFamily: Font2.regular,
                  color: colors[colorScheme].textcolor,
                  width: '77%',
                  paddingStart: 10,
                }}
                placeholderTextColor={'rgba(165, 171, 179, 1)'}
                placeholder="Search"
              />
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 59,
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: colors[colorScheme].textDark,
              fontSize: 20,
              fontFamily: Font2.semiBold,
            }}>
            {search.length > 0 ? 'Search Result' : 'Search history'}
          </Text>

          {search.length > 0 ? (
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
          ) : (
            <TouchableOpacity
              onPress={() => {
                bottomSheetRef.current.open();
              }}>
              <LinearGradient
                start={{x: 0.7, y: 0.3}}
                end={{x: 1, y: 0}}
                //   locations={[0,0.5,0.6]}
                colors={['rgba(255, 255, 255, 0.04)', 'rgba(115, 115, 115, 0)']}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderColor: colors[colorScheme].clearHistoryBorder,
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  borderRadius: 7,
                  paddingHorizontal: 6,
                  paddingVertical: 5,
                  borderWidth: 1,
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={require('../../../assets/images/deleteIcon.png')}
                  tintColor={colors[colorScheme].textDark}
                  resizeMode="contain"
                />

                <Text
                  style={{
                    color: colors[colorScheme].textcolor,
                    fontSize: 14,
                    marginStart: 7,
                    fontFamily: Font2.semiBold,
                  }}>
                  Clear History
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
        </View>
        <View style={{width: '100%'}}>
          {search.length < 1 ? (
            <FlatList
              data={[1, 2, 3]}
              key="history"
              keyExtractor={item => item.toString()}
              renderItem={({item}) => (
                <SearchHistoryItem
                  onPress={() => {
                    navigation.navigate(mainRouts.VideoDtail);
                  }}
                />
              )}
            />
          ) : (
            <FlatList
              key="results"
              data={[1, 2]}
              numColumns={2}
              keyExtractor={item => item.toString()}
              renderItem={({item}) => (
                <SearchResultitem
                  onpress={() => {
                    navigation.navigate(mainRouts.VideoDtail);
                  }}
                />
              )}
            />
          )}
        </View>
      </View>

      <Bottomsheet
        height={height * 0.25}
        width={'100%'}
        animationType="fade"
        ref={bottomSheetRef}
        closeOnDragDown={true}
        closeOnPressMask={true}
        closeOnPressBack={true}
        draggable={true}
        customStyles={{
          draggableIcon: {
            backgroundColor: colors[colorScheme].searchIconColor,
            // width: 50,
            // height: 1,
          },
          wrapper: {},
          container: {
            // backgroundColor: 'rgba(158, 176, 162, 0.5)',
            backgroundColor: colors[colorScheme].bottomSheetColor,
            borderTopStartRadius: 20,
            borderTopRightRadius: 20,
            //  padding: 20,
            // paddingBottom: 50,
          },
        }}>
        <View style={{height: '100%', width: '100%'}}>
          <Image
            style={{
              height: 150,
              width: 150,
              position: 'absolute',
              bottom: 0,
              left: -30,
            }}
            source={
              colorScheme == 'dark'
                ? require('../../../assets/images/fadedLogo.png')
                : require('../../../assets/images/fadedLogo3.png')
            }
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={() => {
              bottomSheetRef.current.close();
            }}
            style={{position: 'absolute', right: 10, top: -10}}>
            <Image
              style={{height: 30, width: 30}}
              source={require('../../../assets/images/cancel.png')}
              resizeMode="cover"
              tintColor={colors[colorScheme].searchIconColor}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 20,
              fontFamily: Font2.bold,
              color: colors[colorScheme].textcolor,
              marginTop: 20,
              textAlign: 'center',
            }}>
            Clear Search History?
          </Text>

          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}
            onPress={() => {}}>
            <LinearGradient
              start={{x: 0.7, y: 0.3}}
              end={{x: 1, y: 0}}
              //   locations={[0,0.5,0.6]}
              colors={['rgba(255, 255, 255, 0.04)', 'rgba(115, 115, 115, 0)']}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40%',
                borderColor: colors[colorScheme].clearHistoryBorder,
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                borderRadius: 7,
                paddingHorizontal: 6,
                paddingVertical: 5,
                borderWidth: 1,
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../../assets/images/deleteIcon.png')}
                tintColor={colors[colorScheme].textDark}
                resizeMode="contain"
              />

              <Text
                style={{
                  color: colors[colorScheme].textcolor,
                  fontSize: 14,
                  marginStart: 7,
                  fontFamily: Font2.semiBold,
                }}>
                Clear History
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Bottomsheet>
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
});
