import { Image, View } from "react-native"

export default Profile = ()=>{
return(

    <View>
          <Image
        style={styles.background}
        source={
          colorScheme == 'dark'
            ? require('../../../assets/images/profile_background.png')
            : require('../../../assets/images/lightMode.png')
        }
        resizeMode="cover"
      />
    </View>
)
}