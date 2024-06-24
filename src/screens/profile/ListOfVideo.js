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
const {width, height} = Dimensions.get('window');
import mainRouts from '../../navigations/routs/mainRouts';
import SearchResultitem from '../search/searchResultitem';
import {Fonts} from '../../../assets/constant';

export default ListOfScreen = ({navigation}) => {
  const {colorScheme} = useContext(AuthContext);
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
              source={require('../../../assets/images/arrow_back.png')}
              tintColor={colors[colorScheme].searchIconColor}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text
            style={{
              color: colors[colorScheme].profileColor,
              fontSize: 23,
              fontFamily: Fonts.semiBold,
              marginStart: 15,
            }}>
            Saved Videos
          </Text>
        </View>
        <View
          style={{
            backgroundColor: colors[colorScheme].background,
            paddingHorizontal: 10,
            height: '100%',
            marginTop: 10,
            paddingTop: 15,
          }}>
          <Text
            style={{
              color: colors[colorScheme].textcolor,
              fontSize: 13,
              fontFamily: Fonts.semiBold,
              marginStart: 15,
            }}>
            <Text  style={{
              color: colors[colorScheme].pullup,
              fontSize: 13,
              fontFamily: Fonts.semiBold,
              marginStart: 15,
            }}>3</Text> Saved Videos
          </Text>
          <FlatList
            key="results"
            data={[1, 2, 3, 4, 5]}
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
        </View>
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
