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
import {Font2} from '../../../assets/constant/Font';
const {width, height} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import SearchHistoryItem from './searchHistoryItem';

export default Search = ({navigation}) => {
  const {colorScheme} = useContext(AuthContext);
  const [isFocused, setIsFocused] = useState(false);

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
              navigation.goBack();
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
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={{
                  fontSize: 15,
                  fontFamily: 'Sora-Regular',
                  color: colors.textcolor,
                  width: '77%',
                  paddingStart: 10,
                }}
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
            Search History
          </Text>

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
      
        </View>

        <FlatList 
        data={[1,2,3]}
        renderItem={({item})=>(
            <SearchHistoryItem/>
        )}
        />
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
});
