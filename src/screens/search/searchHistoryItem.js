import {Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../assets/colors/colors';
import {useContext} from 'react';
import {AuthContext} from '../../../context/AuthContext';
import {Font2} from '../../../assets/constant/Font';

export default SearchhistoryItem = ({onPress}) => {
  const {colorScheme} = useContext(AuthContext);

  return (
    <TouchableOpacity
    onPress={()=>{onPress()}}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderWidth: 1,
        borderColor: colors[colorScheme].border,
        height: 62,
        borderRadius:8,
        marginTop: 10,
      }}>
      <ImageBackground
        style={{height: 63, width: 72,alignItems:'center',justifyContent:'center'}}
        source={require('../../../assets/images/pizs.png')}
        resizeMode="cover">
        <Image
          style={{height: 30, width: 30}}
          source={require('../../../assets/images/Play.png')}
          tintColor={'rgba(165, 171, 179, 1)'}
          resizeMode="contain"
        />
      </ImageBackground>

      <View style={{marginStart: 7}}>
        <Text
          numberOfLines={2}
          style={{
            color: colors[colorScheme].textcolor,
            fontSize: 14,

            fontFamily: Font2.regular,
          }}>
          Spider-Man : Into the Multiverse movie
        </Text>

        <Text
          numberOfLines={1}
          style={{
            color: colors[colorScheme].searchIconColor,
            fontSize: 9,

            fontFamily: Font2.regular,
          }}>
          Yesterday, 06:50PM
        </Text>
      </View>
    </TouchableOpacity>
  );
};
