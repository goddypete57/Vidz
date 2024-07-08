import {
    Dimensions,
    FlatList,
    Image,
    ImageBackground,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import colors from '../../../assets/colors/colors';
  import {Fonts, Font2} from '../../../assets/constant/Font';
  import LinearGradient from 'react-native-linear-gradient';
  import {AuthContext} from '../../../context/AuthContext';
  import {useContext, useState} from 'react';
  import mainRouts from '../../navigations/routs/mainRouts';
  import ResultItem from '../findVideo/resultItem';
  
  const {width, height} = Dimensions.get('window');
  
  export default Result = ({onFloatingpress,onpress}) => {
    const {colorScheme} = useContext(AuthContext);
    return (
      <>
        <View style={{paddingHorizontal: 18, justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: Platform.OS == 'ios' ? 60 : 10,
            }}>
            <Text
              style={{
                color: colors[colorScheme].textDark,
                fontSize: 20,
                fontFamily: Font2.semiBold,
              }}>
              Videos You May Like
            </Text>
            <TouchableOpacity
            onPress={()=>{}}
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
            </TouchableOpacity>
          </View>
          <FlatList
            data={[1, 2, 3]}
            renderItem={() => <ResultItem onpress={()=>{
                onpress()
            }} />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:80}}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            onFloatingpress()
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
  