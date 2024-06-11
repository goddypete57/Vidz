import { Image, Text, View,  } from "react-native"
import colors from "../../../assets/colors/colors"
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
import { Font2 } from "../../../assets/constant/Font";

export default CastItem =()=>{
    const {colorScheme} = useContext(AuthContext);

    return(

        <View style={{flexDirection:"row",marginTop:15}}>

        <View style={{alignItems:"center"}}>

             <Image
              style={{height:40, width: 40,borderRadius:40/2,borderColor:colors[colorScheme].pullup,borderWidth:2,borderRadius:40/2}}
             
              source={require('../../../assets/images/pizs.png')}
            />
            <Text
                  style={{
                    color: colors[colorScheme].textcolor,
                    fontSize: 9,
                    marginTop:10,textAlign:"center",
                    fontFamily: Font2.semiBold,
                  }}>
                  {' '}
                  Brooke Fraser
                </Text>
        </View>

              
     

        <View style={{height:50,width:2,backgroundColor:colors[colorScheme].divider,marginHorizontal:10}}/>
        </View>
    )
}