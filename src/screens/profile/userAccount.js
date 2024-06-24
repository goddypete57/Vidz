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
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ImageBackground
              source={require('../../../assets/images/frame2.png')}>
                
              </ImageBackground>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 36,
              }}>
              <Text
                style={{
                  color: colors[colorScheme].textcolor,
                  fontSize: 19,
                  fontFamily: Font2.semiBold,
                  marginEnd: 10,
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
              renderItem={() => <VideoItem onpress={() => {}} />}
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
