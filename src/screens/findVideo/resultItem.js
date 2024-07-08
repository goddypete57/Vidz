import { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native"
import { AuthContext } from "../../../context/AuthContext";
import colors from "../../../assets/colors/colors";
import { Font2, Fonts } from "../../../assets/constant/Font";

export default ResultItem =({onpress})=>{
    const {colorScheme} = useContext(AuthContext);

    return (
        <TouchableOpacity
        onPress={()=>{onpress()}}
        style={{
          width: '100%',
          marginTop: 12,
          backgroundColor: colors[colorScheme].background,
          paddingBottom: 47,
          borderRadius: 8,
          borderWidth: colorScheme == 'dark' ? 1 : null,
          borderColor: colorScheme == 'dark' ? 'rgba(44, 58, 75, 1)' : null,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{
              height: 167,
              width: '100%',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
            source={require('../../../assets/images/image.png')}
          />

          <Image
            style={{
              height: 30,
              width: 30,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              position:'absolute'
            }}
            source={require('../../../assets/images/Play.png')}
          />
        </View>
        <View style={{marginHorizontal: 15}}>
          <Text
            numberOfLines={2}
            style={{
              color: colors[colorScheme].textcolor,
              fontSize: 8,
              marginTop: 15,

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

          <Text
            style={{
              color: colors[colorScheme].textcolor,
              fontSize: 12,
              fontFamily: Fonts.extraBold,
              marginTop: 5,
            }}>
            HillSong Worship - What A Beautiful Name
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <TouchableOpacity style={{}} onPress={() => {}}>
              <Image
                style={{width: 30, height: 30}}
                tintColor={colors[colorScheme].iconColor}
                source={require('../../../assets/images/ThumbsUp.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{marginStart: 27}} onPress={() => {}}>
              <Image
                style={{width: 20, height: 30}}
                tintColor={colors[colorScheme].iconColor}
                source={require('../../../assets/images/thumbDown.png')}
              />
            </TouchableOpacity>
        
          </View>
        </View>
      </TouchableOpacity>
    )
}