import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../../assets/colors/colors';
import {useContext} from 'react';
import {AuthContext} from '../../../context/AuthContext';
import {Font2, Fonts} from '../../../assets/constant/Font';

export default SearchhistoryItem = ({onpress}) => {
  const {colorScheme} = useContext(AuthContext);

  return (
    <TouchableOpacity
    onPress={()=>{onpress()}}
      style={{
        borderColor: colors[colorScheme].border,
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        width: '48%',
        
        marginHorizontal:5
      }}>
      <ImageBackground
        style={{
          height: 164,
          width:'100%',
          alignItems: 'center',
          justifyContent: 'center',
        
        }}
        source={require('../../../assets/images/image.png')}
        resizeMode="cover">
        <Image
          style={{height: 30, width: 30}}
          source={require('../../../assets/images/Play.png')}
          tintColor={'rgba(165, 171, 179, 1)'}
          resizeMode="cover"
        />
      </ImageBackground>

      <View style={{paddingHorizontal:18,paddingVertical:10}}>
        <Text
          numberOfLines={2}
          style={{
            color: colors[colorScheme].textcolor,
            fontSize: 8,

            fontFamily: Font2.regular,
          }}>
        Source : <Text  style={{
            color: colors[colorScheme].pullup,
            fontSize: 9,

            fontFamily: Font2.regular,
          }}> YouTube</Text>
        </Text>

        <Text
          numberOfLines={3}
          style={{
            color: colors[colorScheme].text,
            fontSize: 12,
            marginTop:2,
            fontFamily: Fonts.extraBold,
          }}>
          HillSong Worship - What A Beautiful Name
        </Text>
        <Text
          numberOfLines={1}

          style={{
            color: colors[colorScheme].pullup,
            fontSize: 9,
            marginTop:3,
            fontFamily: Font2.light,
          }}>
         01 <Text style={{
            color: colors[colorScheme].textcolor,
            fontSize: 9,

            fontFamily: Font2.light,
          }}>
         Hours 
          </Text> 09 <Text style={{
            color: colors[colorScheme].textcolor,
            fontSize: 9,

            fontFamily: Font2.light,
          }}>Minutes</Text>  50<Text style={{
            color: colors[colorScheme].textcolor,
            fontSize: 9,

            fontFamily: Font2.light,
          }}> Seconds</Text> 
        </Text>
      </View>
    </TouchableOpacity>
  );
};
