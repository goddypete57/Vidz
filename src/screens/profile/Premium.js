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

const {width, height} = Dimensions.get('screen');

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
            ? require('../../../assets/images/profile_background.png')
            : require('../../../assets/images/lightMode.png')
        }
        resizeMode="cover"
      />

      <View
        style={{
          flex: 1,
          marginTop: Platform.OS == 'ios' ? 70 : 30,
        }}>
        <ImageBackground
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}
          source={
            colorScheme == 'dark'
              ? require('../../../assets/images/Frame5.png')
              : require('../../../assets/images/Frame6.png')
          }>
            <View style={{flexDirection:'row',justifyContent:'flex-end',paddingRight:14,paddingTop:11}}>

          <TouchableOpacity 
          onPress={()=>{
            navigation.goBack()
          }}

          >
            <Image
              style={{height: 24, width: 24}}
              source={require('../../../assets/images/cancel.png')}
            />
          </TouchableOpacity>



            </View>

            <Image
              style={{height: 156, width: 200,position:'absolute',right:-30,top:0}}
              source={require('../../../assets/images/Hands_Star.png')}
            />

            <Text style={{
              color: colors[colorScheme].profileColor,
              fontSize: 30,
              fontFamily: Fonts.bold,
              marginTop:60,
              paddingStart:18
            
            }}>
              Go Premium!
            </Text>

           <View style={{backgroundColor:colors[colorScheme].background,width:"70%",height:height*0.56,elevation:9,marginTop:18,borderRadius:13,marginStart:16,padding:24}}>

           <Text style={{
              color: colors[colorScheme].premiumText,
              fontSize: 23,
              fontFamily: Fonts.semiBold,
           
            
            }}>
             Pro
            </Text>

            <Text style={{
              color: colors[colorScheme].subtext,
              fontSize: 13,
              fontFamily: Fonts.light,
            }}>
             Expand your experience with enhanced features.
            </Text>

            <Text style={{
              color: colors[colorScheme].premiumText,
              fontSize: 23,
              fontFamily: Fonts.semiBold,
              marginTop:12
            }}>
             $10/month
            </Text>
           </View>

            <Image
              style={{height: 156, width: 200,position:'absolute',left:0,bottom:0}}
              source={require('../../../assets/images/imageDown.png')}
            />
        </ImageBackground>
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
